Modellen kunnen complexe datastructuren asynchroon opbouwen. Dit gebeurt door een Promise te retourneren in plaats van een object. De resolved Promise moet op zichzelf wel een object retourneren.

### Voorbeeld asynchronous model-bestand /models/index.js

```js
'use strict';

require('fs-extra');

const fsp = require('fs-promise');

const model = (options, language) => {
    // this === request

    return fsp.readJson('../languages/'+language+'.json').then(
        // model moet een object retourneren: this.props.msg kan door de view worden gebruikt
        langfile => {msg: langfile['Hello world']};
    );

};

module.exports = model;
```