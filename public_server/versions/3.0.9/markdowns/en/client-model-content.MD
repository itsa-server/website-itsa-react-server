The `model`-data that was used to render the view on the server (that is: `this.props` inside the views), is automaticly available on the client. This way, you can pass through data and make it usable inside your clientside app.

This is a powerful way, because the data is baked inside the page's html request: you don't need to make an extra request on the client to retrieve data.

Clientside code (`app.js`, or a subapp), have this data available at the prototype. You can make use of this data through the `getProps()`-method. A typical situation would be, if you want to make an array of items available on the client:

### Example serverside model (f.e. index.js)
```js
'use strict';

const model = (options, language) => {
    // this === request
    let data = [];

    for (i=0; i<500; i++) {
        data.push({item: i});
    }
    return {
        items: data
    };
};

module.exports = model;
```

### Example clientside code (subapp.js)
```js
'use strict';

const PageAppClass = require('itsa-apps/app-classes/PageAppClass');

const SubApp = PageAppClass.subClass(() => {
        // inititiate anything here

        let props = this.getProps();
        // props.items = [{item: 0}, {item: 0} ... {item: 499}]
    },
    {
        destroy() {
            // destroy anything here
        }
    }
);

module.exports = SubApp;
```

## Get modeldata in module outside of app
If you need the clientside model-data in your own module outside of app.js, you can retrieve it by `require('itsa-client-router')`. Don't forget to call `.init()` --> there needs some initialisation to be done, which for technical reasons are kept out of the constructor.

```js
'use strict';

const controller = require('itsa-client-controller');
controller.init();
let items = controller.getProps().items;
```