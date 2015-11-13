De `model`-data die is aangemaakt op de server om de view te renderen (`this.props` inside the views), is automatisch beschikbaar op de client. Via deze weg kan gegevens doorgespeeld worden aan de clientside app.

Dit is een krachtige manier, omdat de gegevens in de pagina's html request zit gebakken: er is geen extra request nodig om de gegevens op te vragen.

Clientside code (`app.js`, of een subapp), kan gebruik maken van deze gegevens. Een typische situatie zal zijn, wanneer je een array met items wilt doorspelen aan de client:

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

### Voorbeeld clientside code (app.js)
```js
'use strict';

const controller = require('itsa-client-controller');
let items = controller.getProps().items;

// items = [{item: 0}, {item: 0} ... {item: 499}]
```

De controller kan gewoon -naast [itsa-react-router](/router)- worden gebruikt, deze delen dezelfde controller.