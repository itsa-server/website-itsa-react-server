De `model`-data die is aangemaakt op de server om de view te renderen (`this.props` inside the views), is automatisch beschikbaar op de client. Via deze weg kan gegevens doorgespeeld worden aan de clientside app.

Dit is een krachtige manier, omdat de gegevens in de pagina's html request zit gebakken: er is geen extra request nodig om de gegevens op te vragen.

Clientside code (`app.js`, of een subapp), hebben deze gegevens beschikbaar op de prototype. Je kunt gebruik maken van deze gegevens via de `getProps()`-methode. Een typische situatie zal zijn, wanneer je een array met items wilt doorspelen aan de client:

### Voorbeeld serverside model (bijv. index.js)
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

### Voorbeeld clientside code (subapp.js)
```js
'use strict';

var PageAppClass = require('itsa-apps/app-classes/PageAppClass');

var SubApp = PageAppClass.subClass(function() {
        // inititiate anything here

        var props = this.getProps();
        // props.items = [{item: 0}, {item: 0} ... {item: 499}]
    },
    {
        destroy: function() {
            // destroy anything here
        }
    }
);

module.exports = SubApp;
```

## Modeldata verkrijgen in een andere module dan het app-bestand
Wanneer je clientside model-data in jouw eigen module (buiten app.js) wilt gaan gebruiken, dan is deze op te vragen via `require('itsa-client-router')`. Vergeet niet `.init()` aan te roepen --> er moet e.e.a. worden geïnitialiseerd, wat vanwege technische redenen buiten de constructor is gelaten.

```js
'use strict';

const controller = require('itsa-client-controller');
controller.init();
let items = controller.getProps().items;
```