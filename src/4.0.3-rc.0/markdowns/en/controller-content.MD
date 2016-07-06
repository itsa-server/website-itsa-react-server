Itsa-server has a controller on the serverside, and can optionally run a controller on the client.

# Serverside controller

The serverside controller is active by the framework. You just define your route-file and whenever reply.reactview gets invoked, the view will be rendered with the proper modeldata.

# Clientside controller

The clientside controller is active on the client, as long as your `app.js` sub-classes `require('itsa-apps/app-classes/MainAppRouterClass')`, which is the default. Read [Appfiles](/appfile) for more info.

If you really think you need to manage this yourself, then read on...

## Managing your own clienside controller
**Note: this is not recomended and you really need to master the whole framework**

There are 2 ways the client can recieve the controller: a plain controller that you need to manage yourself, or by making use of our clientside router, which uses this controller internally.

For both ways, you need to setup `app.js` which lies in the root-folder of the develop-application.

## Using just the controller

To get the controller on the client, your `app.js` should look like this:

### Example custom /app.js
```js
'use strict';

const Classes = require('itsa-classes'),
      controller = require('itsa-client-controller');

const MainApp = Classes.createClass(() => {
        // inititiate anything here
        controller.init();
    },
    {
        destroy() {
            // destroy anything here
        }
    }
);

module.exports = MainApp;
```

The controller contains the `model` which also was used on the server, and some other information.

### Available methods of the controller

** getComponentId(): returns the unique `id` of the current page-chunk that webpack created
** getProps(): returns the `model`-data of the view (available at the server-view with this.props)
** getView(): returns the current view-name
** getLang(): returns the current language that the visiter gets presented
** isStaticView(): whether the current view is static
** getTitle(): current title van de webpage
** getBodyComponent(): current React-Component that is rendered inside the `body`-element
** getCss(): current `css`, that belongs with the current React-Component
** setPage({config}): is used to swith the page-content. The argument is an object, containing the next properties: view, BodyComponent, title, props, css, staticView, componentId, requireId.

It is not recomended to use `setPage()` yourself. Modules like `itsa-react-router` take care of this. However, if you want to create something like this, then you'll need to preload the right component from the server, and you'll need additional information (requireId, componentId and title) --> these values can be lookedup through `controller.getProps().__routes`.