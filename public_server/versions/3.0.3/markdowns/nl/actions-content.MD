De `reply.action` heeft een speciaal doel: het initiëren van sommige acties, of opvragen van serverdata - het is bedoeld voor het verwerken van `AJAX-requests`. De server retourneert geen view, maar onderneemt enige actie en/of retourneert data.

De reply.action krijgt 2 argumenten: `action` en `options`.

`actions` is de naam van de action-file, welke moet zijn aangemaakt in de `actions-folder`. `options` is aanvullende opties (object) welke het action-bestand ontvangt. Het action-bestand moet een `commonjs`-module zijn met de volgende structuur:

### Set-up van reply.action in routes.js
```js
'use strict';

var routes = [
    {
        method: 'PUT',
        path: '/process-order',
        handler: function (request, reply) {
            reply.action('order');
        }
    }
];

module.exports = routes;
```

### Voorbeeld action-module
```js
'use strict';

var actionFn = function(request, options) {
    return {status: 'OK'};
};

module.exports = actionFn;
```

NB. de module moet een `functie` retourneren, die 2 argumenten ontvangt: het request-object en options. What de action-funtie retourneert, zal worden gebruikt om de request te retourneren.

## Asynchrone action-bestande
Vaak komt het voor dat je een asynchrone actie wilt uitvoeren, voordat de request wordt geretourneerd. Wanneer de action-functie een `Promise` retourneert, dan zal de request pas geretourneert worden zodra de Promise resolved is. Hierbij wordt de Promise-waarde gebruikt als retourwaarde van de request:

### Voorbeeld asynchroon action-module
```js
'use strict';

var getConnection = require('../modules/connector.js')('dbName');

var actionFn = function(request, options) {
    const customerid = request.query.customerid;

    return getConnection.then(connection => {
        return connection.getRecord('SELECT name FROM customers WHERE id=?', customerid)
    });
};

module.exports = actionFn;
```
*Kijk [hier hoe](/databases) gebruik te maken van mysql-databases*

NB. wanneer de Promise rejects, dan zal de server retourneren met een 500-error, met de rejected error-value. Wanneer dit niet de bedoeling is, dan kan de Promise worden ge-catched binnenin de action-module. Op deze manier zal er altijd een geresolvede Promise worden geretourneerd:

### Voorbeeld asynchroon action-module die nooit een error-waarde retourneert
```js
'use strict';

var getConnection = require('../modules/connector.js')('dbName');

var actionFn = function(request, options) {
    const customerid = request.query.customerid;

    return getConnection.then(connection => {
        return connection.getRecord('SELECT name FROM customers WHERE id=?', customerid)
    }).catch(() => {
        return {};
    })
};

module.exports = actionFn;
```