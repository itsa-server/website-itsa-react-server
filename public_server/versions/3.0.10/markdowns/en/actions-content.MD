The `reply.action` has a special purpose: to initiate some actions or requests serverdata - it is meant to deal with `AJAX-requests`. The server does not reply a view, but takes some actions and returns proper data.

The reply.action takes 2 arguments: `action` and `options`.

`actions` is the name of the action-file which should be defined inside the `actions-folder`. `options` are additional options (object) that the action-file receives. The action-file should be a `commonjs`-module with this signature:

### Setting up reply.action inside routes.js
```js
'use strict';

let routes = [
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

### Example action-module
```js
'use strict';

const actionFn = (request, options) => {status: 'OK'};

module.exports = actionFn;
```

Note that the module needs to return a `function` that will receive 2 arguments: the request-object and options. Whatever the action-funtion returns, will be used to reply the request.

## Asynchronous action-files
Often, you will need to perform an asynchronous action, before replying the request. If the action-function returns a `Promise`, then the reply will happen as soon as the Promise gets resolved, replying the Promise-result:

### Example asynchronous action-module
```js
'use strict';

const getConnection = require('../modules/connector.js')('dbName');

const actionFn = (request, options) => {
    const customerid = request.query.customerid;

    return getConnection.then(
        connection => connection.getRecord('SELECT name FROM customers WHERE id=?', customerid)
    );
};

module.exports = actionFn;
```
*Look [here about how](/databases) to use mysql-databases*

Note that if the Promise gets rejected, the server will response with a 500-error holding the rejected error-value. If you want to prevent this, you should catch the error inside the action-module, so that you always return a resolved Promise:

### Example asynchronous action-module that never errors
```js
'use strict';

const getConnection = require('../modules/connector.js')('dbName');

const actionFn = function(request, options) {
    const customerid = request.query.customerid;

    return getConnection.then(
        connection => connection.getRecord('SELECT name FROM customers WHERE id=?', customerid);
    ).catch(
        () => {};
    );
};

module.exports = actionFn;
```
