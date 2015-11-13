# jsx-views as website pages
The webapplication comes with a folder named: **views**. This is the folder where you should build your jsx-pages. You must define viewnames with just [a-z][A-Z][0-9] characters, optional with an @ for the affinity.

Before explaining how to setup up a view, you need to understand how `Router` and `Models` work:

The **Router** is responsible for invoking the right view. Every view will recieve **this.props** which can be used for rendering the Component.

## Defining a Route (routes.js)
The **router** can access every view by its filename with a route:

```js
{
    method: 'GET',
    path: '/',
    handler(request, reply) {
        reply.reactview('index');
    }
},
```
The special property **reactview** will take care of serverside rendering of the view with the name: **index.jsx**.

The method **reply.reactview** accepts a second optional argument, which should be an object:
```js
{
    modelConfig, // <-- [object] passed though to the Model
    props, // <-- [object] props to be merged into this.props (additional to pre-defined porperties and model-properties)
    viewport, // <-- the viewport (meta-tag on the html-page)
    charset, // <-- the charset of the html-page
    description, // <-- the description (meta-tag) of the html-page
    staticView // <-- whether the view is a static view, which doesn't change
}
```


With some routes, you are sure that the view doesn't change over time. Practically, when you do not use this.props while rendering the view. In such cases, you are better of passing the second argument with **staticView: true**. This will prevent the client from making requests when navigating to the same page again.


## Passing properties to the view
Itsa-server will always pass through a **this.props**-object to the view. Some private properties are already pre-defined and always available: these properties have a signature of: **__propertyname**. More properties can be created by using a Model that should have the same name as the view, only with the extention of `.js`. See [Models](/models) for more info about the properties.

## Building a view-file

Every view should export a React-Component that will be rendered upon the **body** element. The view-files are **very efficient**. `webpack` already compiled the `css` and `javascript` bundles, and also are the `markdown`-files cached. The only rendering during the MVC-process, is building the `React-Component` with the right props.

Below are some examples how a view-file may look like:

### Simple view-file
```js
const React = require('react'),

const Body = React.createClass({
    render() {
        return (
            <div>
                <div>Hello World!</div>
            </div>
        );
    }
});

module.exports = Body;
```

### Advanced view-file

A more advance file may look like:

```js
require('../assets/css/main.scss');

const React = require('react'),
      Menu = require('../modules/menu.jsx'),
      Reflux = require('reflux'),
      store = require('../reflux/stores/app-store'),
      logo = require('../assets/images/logo.png');

const Body = React.createClass({
    mixins: [Reflux.connect(store)],
    render() {
        return (
            <div>
                <img className="logo" src={logo} />
                <Menu {...this.props}/>
                <div dangerouslySetInnerHTML={this.props.pagecontent} />
            </div>
        );
    }
});

module.exports = Body;
```

## Automaticly rendering on server and client

A view is a **jsx-file**, which is automaticly rendered on the serverside. Also, the server will send the body-component to the client, where it can be deployed again, giving you the full features (javascript) of the component. To make this done, you need to initialize the `itsa-react-router` inside the file `app.js`.

## Different views for different devices

By supplying the viewname with a affinity, you can setup different view-files to be served on the next devices: desktop, tablet and phone. See [Different devices](/different-devices).

## All CSS is automaticly extracted and combined into one file

You should define the `css` with `required` code like this:

```js
require('../assets/css/purecss/pure.css');
require('../assets/css/main.scss');
require('../assets/css/index.scss');

const React = require('react'),

const Body = React.createClass({
    render() {
        return (
            <div>
                <div>Hello World!</div>
            </div>
        );
    }
});

module.exports = Body;

```

All css is automaticly extracted out of the js-file, and combined (and minified) into one single css. On contrary of what webpack does by default (include it in the js-package), the css will load as a regular file inside the html, or preferable inline (so it won't delay rendering htlm on the page). You can use [configuration-file](http://itsaserver.io/configuration) to specify this.

## How to include images

Images are preferable included with `require` as well. Based upon the [configuration-file](http://itsaserver.io/configuration), they can automaticly be transformed into inline-uri images, saving you extra requests.

### Example loading images

```js
const React = require('react'),
      logo = require('../assets/images/logo.png');

const Body = React.createClass({
    render() {
        return (
            <div>
                <img src={logo} />
                <div>Hello World!</div>
            </div>
        );
    }
});

module.exports = Body;
```
