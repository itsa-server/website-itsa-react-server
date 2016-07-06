App files are javascript files that run on the client. `itsa-react-server` is very clever in the buildingprocess: it removes the app-code from serverside rendering. This means you can `require()` typical browser-modules in the apps, while stille being able to serverside render.

There is one master app-file that runs through the whole SPA-session. And there can be (but don't have to be) sub-app files for every page (view). Both App-files need to export a `Class`, that will be automaticly instantiated. We strongly recommend to use the classes that are deliverd through the `itsa-apps`-module that comes with the installation, but you are not obligated. These Classes make use of [ITSA-classes](https://www.npmjs.com/package/itsa-classes): these have `destructor` that destroys all the way through the inherited class. Also, they automaticly support Events and io.

# Master app.js file
The file `app.js` is meant as the general application-file. It is active on every page (only 1 instance). It is up to the developer what to set up in this file, but the least you need is to setup a [clientside router](/router). If you extend `itsa-apps/app-classes/MainAppRouterClass`, then you don't need to: it is done already by this Class.

We advice to use the next code at the least for your clientside app:
### Preferred /app.js
```js
'use strict';

const MainAppRouterClass = require('itsa-apps/app-classes/MainAppRouterClass');

const MainApp = MainAppRouterClass.subClass(() => {
        // inititiate anything here
    },
    {
        destroy() {
            // destroy anything here
        }
    }
);

module.exports = MainApp;
```
This is also the file that `itsa-cli` will create for every new application. By adding code in the initializer (and defining methods on the MainApp-Class), you can create your running app.

It is highly preferred to sub-class `MainAppRouterClass` because it has the automatic [router](/router) running. If you prefer to use your own router, you can sub-class `require('itsa-apps/app-classes/MainAppRouterClass')` instead.

# App-files per view
You can also create sub app-files: these will be running just on a specific page.

It is good usage to Reflux keep responsible for maintaning the state of the webapplication. Sub-apps may be defined whenever you need some logic to be handled that isn't UI-related, though the UI can trigger them.

The sub-apps should retain in the special folder: **pageapps**, where it is good practice to give the subapps the same name as the view (only with `.js` as extention). Inside the view, you <u>MUST</u> initialize these sub-apps whenever the view's component gets mount and you MUST destroy it whenever the component gets unmounted.

The sub-apps should have a constructor as well as a way to destroy themselves. We advice to make use of [ITSA-classes](https://www.npmjs.com/package/itsa-classes): these have `destructor` that destroys all the way through the inherited class.


### Example of a view using a subapp (/views/index.jsx):
```js
const React = require('react'),
      Event = require('itsa-event'),
      SubApp = require('../pageapps/index.js'); // <-- when serverside rendered, this will automaticly return an empty Class

const Body = React.createClass({
    componentDidMount() {
        this.subapp = new SubApp();
    },
    componentWillUnmount() {
        this.subapp.destroy(); // <-- destroy only available at ITSA-Classes, not ES6-Classes
    },
    btnClick: function(e) {
        Event.emit('startIO', e); // <-- will emit through Event (http://itsa.io/docs/itsa-event)
    },
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <button onClick={this.btnClick}>Click here to start IO</button>
            </div>
        );
    }
});

module.exports = Body;
```

### Content pageapps/index.js
```js
'use strict';

var PageAppClass = require('itsa-apps/app-classes/PageAppClass');
    store = require('../reflux/stores/app-store');

var SubApp = PageAppClass.subClass(() => {
        // initialisation happens here
        // in this case, the basket is emptied and a timer is set
        store.emptyBasket();
        this.timer = setInterval(this.doSomethingByTimer.bind(this), 1000);
        this.setupListener();
    },
    {
        doSomethingByTimer() {
            console.log('timer');
        }
        setupListener() {
            var instance = this;
            instance.after('*:startIO', function() {
                instance.io.read('http://mydomain.com', {pageid=2}); // <-- `io` is part of PageAppClass, see (http://itsa.io/docs/itsa-io)
            });
        }
        destroy() {
            // cleanup happens here
            // Eventlisteners on the instance will automaticly be detached
            clearInterval(this.timer);
        }
    }
);

module.exports = SubApp;
```