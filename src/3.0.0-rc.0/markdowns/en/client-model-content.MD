The `model`-data that was used to render the view on the server (that is: `this.props` inside the views), is automaticly available on the client. This way, you can pass through data and make it usable inside your clientside app.

This is a powerful way, because the data is baked inside the page's html request: you don't need to make an extra request on the client to retrieve data.

Clientside code (`app.js`, or a subapp), can make use of this data. A typical situation would be, if you want to make an array of items available on the client:

### Example serverside model (f.e. index.js)
```js
'use strict';

const model = (options, language) => {
    // this === request
    var data = [];

    for (i=0; i<500; i++) {
        data.push({item: i});
    }
    return {
        items: data
    };
};

module.exports = model;
```

### Example clientside code (app.js)
```js
'use strict';

const controller = require('itsa-client-controller');
let items = controller.getProps().items;

// items = [{item: 0}, {item: 0} ... {item: 499}]
```

You can require the controller next to [itsa-react-router](/router), they share the same controller.