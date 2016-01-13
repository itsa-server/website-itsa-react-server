The router should be defined inside the file `routes.js`. This is the place where you define your routes. This file will also be used to generate the proper clientside route information, which can be used inside a client-side router (like itsa-react-router).

# Structure routes.js

Routes.js should be a commonjs file that exports an array of route-objects:

### Example routes.js file
```js
'use strict';

const routes = [
    {
        method: 'GET',
        path: '/',
        handler(request, reply) {
            reply.reactview('index', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/help',
        handler(request, reply) {
            reply.reactview('help');
        }
    }
];

module.exports = routes;
```

The structure is based upon Hapi: see the [Hapi.js docs](http://hapijs.com) for more info.

# Additional reply-methods

Itsa-server makes sure that the reply-object has three additional methods:

* **reactview()** <-- response the specified view
* **assets()** <-- responses a file (by [Inert](https://github.com/hapijs/inert)) from the `/assets` folder
* **action()** <-- performs a specific action, used to handle ajax-request (see [Actions](/actions))

## Router also available on client

If you make use of `itsa-react-router` (default on (app.js)[/appfile]), you have the router-data on the client full automaticly. This module makes use of the controller, however it takes fully charge of how to manage this, based upon `routes.js` that is defined on the server. This all works automaticly: the serverside route-data will be available on the client (that is: the part that is appropriate on the client).

itsa-react-router is a very convenient way to setup clientside routing. You just need the above code, that's it! Behind the scenes, it will inspect anchor-clicks (delegated), prevent default-action whenever there is a match with the server's `routes.js` file and make an ajax-request if needed.