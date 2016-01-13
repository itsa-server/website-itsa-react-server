Door gebruik te maken van de elementen uit de vorige pagina's, is het eenvoudig `io` tussen de client en server op te zetten. Wat nu volgt, is een door ons geadviseerd gebruik van io. Uiteraard is eenieder vrij zijn eigen methodiek te gebruiken.

Opzetten van `io` betekent dat er code moet draaien op de client en dat tevens de server ajax-requests moet afhandelen.

**In het volgende voorbeeld**, wordt een eenvoudig formulier gamaakt, dat wordt verstuurd via io.

# Code voor de Client

### voorbeeld /views/myform.jsx
```js
'use strict';

require('../assets/css/purecss/forms.css');
require('../assets/css/purecss/buttons.css');
require('../assets/css/my-form.scss'); // eigen scss voor deze view

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

                <legend>Uw gegevens:</legend>
                <div className="pure-control-group">
                    <label>Name:</label><input id="form-naam" type="text" value={this.state.naam} onChange={this.changeName} />
                </div>
                <div className="pure-control-group">
                    <label>Email:</label><input type="text" value={this.state.email} onChange={this.changeEmail} />
                </div>
                <div className="pure-controls">
                    <button className="pure-button pure-button-primary" onClick={this.sendForm}>Verstuur</button>
                </div>

            </div>
        );
    }
});

module.exports = MyForm;

```

Er wordt gebruik gemaakt van `itsa-event` die verantwoordelijk is voor communicatie tussen het platform. De sub-app die deze view gebruikt, zal hierdoor op de hoogte worden gebracht wanneer de gebruiker de `verstuur-button` klikt en onderneemt daarna verdere aktie.


### Voorbeeld /pageapps/myform.js
```js
'use strict';

var PageAppClass = require('itsa-apps/app-classes/PageAppClass');

var SubApp = PageAppClass.subClass(function() {
        // initialiseer eea hier
        this.setupEvents();
    },
    {
        setupEvents: function() {
            var instance = this;
            // instance-eventlisteners worden automatisch ge-detached bij destruction
            instance.after('myform:send', instance.handleMyformSend.bind(handleMyformSend));
        },

        handleMyformSend: function(e) {
            var payload = e.data,
                resetForm = e.resetForm,
                formio;

            formio = instance.io.send('/send-myform', payload);

            formio.then(function(response) {
                if (rresponse==='OK') {
                    resetForm();
                }
            });
        }

    }
);

module.exports = SubApp;
```

De sub-applicatie heeft ingebouwde `event` en `io` op de instance (zie [itsa-event](http://itsa.io/docs/itsa-event) en [itsa-io](http://itsa.io/docs/itsa-io)). Hier maken wij gebruik van om de io te initialiseren, zodra de `myform:send`-event wordt verstuurd.


# Serverside

Aan de server-kant, moeten eerst de routes worden ingesteld:

### Voorbeeld /routes.js
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

Tot slot, moet het `action-bestand` worden gespecificeerd:

### Voorbeeld /actions/process-myform.js
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

Dit action-bestand zal de nieuwe gegevens aan een MYSQL-file toevoegen en 'OK' retourneren als alles is geslaagd.


# Gebruik de hoofd app.js om in te grijpen

Het is de bedoeling om de hoofd app (`/app.js`) teh gebruiken om in te grijpen bij enig event, wanneer het bijvoorbeeld nodig is om prevent-default op een aktie van een sub-app uit te voeren. Bij voorbeeld, wanneer je besluit dat er op een bepaald moment geen `send`-events mogen optreden, dan kunnen deze als volgt worden onderdrukt:

### Voorbeeld /app.js

```js
'use strict';

var MainAppRouterClass = require('itsa-apps/app-classes/MainAppRouterClass');

var MainApp = MainAppRouterClass.subClass(function() {
        // initialiseer eea hier
        // we nemen gemakshalve aan dat wij nooit een `send`-event willen laten optreden:
        this.interuptEvents();
    },
    {
        interuptEvents: function() {
            var instance = this;
            // luister naar de BEFORE-EVENT om in te grijpen:
            instance.before('*:send', function(e) {
                e.preventDefault();
            });
        }

    }
);

module.exports = MainApp;
```