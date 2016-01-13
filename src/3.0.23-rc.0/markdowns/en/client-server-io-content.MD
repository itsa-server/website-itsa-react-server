Using the elements described in the previous sections, you can easily create `io` between client and server. What follows next is `best practices`, as it is advised by us. You are free to use your own implementation though.

Setting up `io` means that you have something running on the client and also have the server processing ajax-requests.

**In the next example**, we will create a simple html-form and send it to the server through io.

# Clientside

### Example /views/myform.jsx
```js
'use strict';

require('../assets/css/purecss/forms.css');
require('../assets/css/purecss/buttons.css');
require('../assets/css/my-form.scss'); // custom scss for this view

var React = require('react'),
    Event = require('itsa-event'),
    SubApp = require('../pageapps/myform');

var MyForm = React.createClass({

    changeName: function(e) {
        this.setState({name: e.target.value});
    },

    changeEmail: function(e) {
        this.setState({email: e.target.value});
    },

    componentDidMount: function() {
        var node = document.getElementById('form-name');
        this.subapp = new SubApp();
        node && node.focus();
    },

    componentWillUnmount: function() {
        this.subapp.destroy();
    },

    sendForm: function() {
        var payload = {
            naam: this.state.name,
            email: this.state.email
        };
        Event.emit('myform:send', {data: payload, resetForm: this.resetForm});
    },

    resetForm: function() {
        this.setState({name: '', email: ''});
    },

    getInitialState: function() {
        var initialSate = {
                name: '',
                email: ''
            };
        return initialSate;
    },

    render: function() {
        return (
            <div className="pure-form pure-form-aligned">

                <legend>Your data:</legend>
                <div className="pure-control-group">
                    <label>Name:</label><input id="form-naam" type="text" value={this.state.naam} onChange={this.changeName} />
                </div>
                <div className="pure-control-group">
                    <label>Email:</label><input type="text" value={this.state.email} onChange={this.changeEmail} />
                </div>
                <div className="pure-controls">
                    <button className="pure-button pure-button-primary" onClick={this.sendForm}>Send</button>
                </div>

            </div>
        );
    }
});

module.exports = MyForm;

```

We are using `itsa-event` as responsible object to communicatie accross the application. The sub-app that this view is using, will be notified when the user pressed the `send-button` and take further action.


### Example /pageapps/myform.js
```js
'use strict';

var PageAppClass = require('itsa-apps/app-classes/PageAppClass');

var SubApp = PageAppClass.subClass(function() {
        // initiate your stuff here
        this.setupEvents();
    },
    {
        setupEvents: function() {
            var instance = this;
            // instance-eventlisteners will automaticly be detached upon destruction
            instance.after('myform:send', instance.handleMyformSend.bind(instance));
        },

        handleMyformSend: function(e) {
            var payload = e.data,
                resetForm = e.resetForm,
                formio;

            formio = this.io.send('/send-myform', payload);

            formio.then(function(response) {
                if (response==='OK') {
                    resetForm();
                }
            });
        }

    }
);

module.exports = SubApp;
```

The sub-application has build-in `event` and `io` on the instance (see [itsa-event](http://itsa.io/docs/itsa-event) and [itsa-io](http://itsa.io/docs/itsa-io)). We use this to initiate the io once the `myform:send`-event has been emitted.


# Serverside

On the serverside, we first need to specify the right routes:

### Example /routes.js
```js
'use strict';

var routes = [
    {
        method: 'PUT',
        path: '/send-myform',
        handler: function (request, reply) {
            reply.action('process-myform');
        }
    },
    {
        method: 'GET',
        path: '/myform',
        handler: function (request, reply) {
            reply.reactview('myform');
        }
    }
];

module.exports = routes;
```

Last, we need to specify the `action-file`:

### Example /actions/process-myform.js
```js
'use strict';

var getConnection = require('../modules/connector.js')('your-database');

var actionFn = function(request/*, options */) {
    var payload = request.payload,
        name = payload.name,
        email = payload.email;
    return getConnection.then(function(connection) {
        return connection.queryPromise('INSERT INTO customers SET name=?, email=?', [name, email]).then(
            function() {
                return 'OK';
            }
        );
    });
};

module.exports = actionFn;
```

This actionfile will insert the new data in a MYSQL-file and return 'OK' if all succeeds.


# Use the main app.js to hook in

You should use the main app (`/app.js`) to hook in any event if you need to prevent-default any action by the application's sub-apps. For instance, if you decide there should be no `send`-events for a particular moment, the you can set it of like this:

### Example /app.js

```js
'use strict';

var MainAppRouterClass = require('itsa-apps/app-classes/MainAppRouterClass');

var MainApp = MainAppRouterClass.subClass(function() {
        // initiate your stuff here
        // just assume you never want the `send` event to happen:
        this.interruptEvents();
    },
    {
        interruptEvents: function() {
            var instance = this;
            // listen to the BEFORE-EVENT to hook in:
            instance.before('*:send', function(e) {
                e.preventDefault();
            });
        }

    }
);

module.exports = MainApp;
```