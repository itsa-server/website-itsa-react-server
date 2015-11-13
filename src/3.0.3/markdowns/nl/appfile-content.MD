Applicatie bestanden zijn javascript bestanden die op de client draaien. `itsa-react-server` is arg slim in het bouw-proces: het verwijdert de app-code van bij serverside rendering. Dit betekent dat je typische browser-modules in de apps kunt `require()`-en, terwijl je nog steeds in staat bent serverside te renderen.

Er is één master app-bestand dat gedurende de hele SPA-sessie werkzaam is. En er zijn (maar niet strict noodzakelijk) sub-app bestanden voor iedere pagina (view). Beide App-bestanden moeten een `Class` exporteren, welke automatisch wordt geinitialiseerd. Het is sterk aan te raden om classes te gebruiken die door de `itsa-apps`-module worden aangeleverd, maar niet verplicht. Deze Classes maken gebruik van [ITSA-classes](https://www.npmjs.com/package/itsa-classes) en hebben een `destructor` welke door de gehele class-inheritance opruimt. Tevens leveren deze classes Events and io.

# Master app.js file
The file `app.js` is meant as the general application-file. It is active on every page (only 1 instance). It is up to the developer what to set up in this file, but the least you need is to setup a [clientside router](/router). If you extend `itsa-apps/app-classes/MainAppRouterClass`, then you don't need to: it is done already by this Class.

We advice to use the next code at the least for your clientside app:

```js
'use strict';

var MainAppRouterClass = require('itsa-apps/app-classes/MainAppRouterClass');

var MainApp = MainAppRouterClass.subClass(function() {
        // inititiate anything here
    },
    {
        destroy: function() {
            // destroy anything here
        }
    }
);

module.exports = MainApp;
```
Dit is ook het bestand dat `itsa-cli` aanmaakt tijdens de installatie. Door code aan de initializer toe te voegen (en methodes in de MainApp-Class te defniëren), kuj je jouw eigen running app bouwen.

# App-bestanden per view
Er kunnen ook sub app-bestanden worden aangemaakt: deze draaien enkel op de betreffende pagina.

Het is een goed gebruik om Reflux de verantwoordelijkheid te laten UI-interacties en voor het onderhouden van de `state` van de applicatie. Sub-apps kunnen worden gedefinieerd wanneer enige code nodig is dat niet UI gerelateerd is.

De sub-apps moeten in een speciale map worden bewaard: **pageapps**, waarbij het een goed gebruik is om de subapps dezelfde naam te geven als de view waarin die actief is (alleen dan met `.js` as extentie). In de view, <u>MOET</u> deze sub-app geinitialiseerd worden zodra de view's component wordt gemount. en MOET worden destroyed wanneer ge-unmount.

De sub-apps behoren een constructor en een methode voor destruction te hebben. Wij adviseren gebruik te maken van [ITSA-classes](https://www.npmjs.com/package/itsa-classes): deze hebben een ingebouwde destructor welke door de gehele class-inheritance opruimt.

### Example of a view using a subapp:
```js
const React = require('react'),
      Event = require('itsa-event'),
      SubApp = require('../pageapps/index.js'); // <-- wanneer serverside gerendered, retourneert deze een lege Class

const Body = React.createClass({
    componentDidMount() {
        this.subapp = new SubApp();
    },
    componentWillUnmount() {
        this.subapp.destroy(); // <-- destroy is aanwezig voor ITSA-Classes, niet ES6-Classes
    },
    btnClick: function(e) {
        Event.emit('startIO', e); // <-- deze zal emitten via Event (http://itsa.io/docs/itsa-event)
    },
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <button onClick={this.btnClick}>Klik hier om IO te starten</button>
            </div>
        );
    }
});

module.exports = Body;
```

### Content pageapp/index.js
```js
'use strict';

var PageAppClass = require('itsa-apps/app-classes/PageAppClass');
    store = require('../reflux/stores/app-store');

var SubApp = PageAppClass.subClass(
    function() {
        // initialisation gebeurt hier
        // in dit geval wordt de winkelwagen geleegd en een timer gezet
        store.emptyBasket();
        this.timer = setInterval(this.doSomethingByTimer.bind(this), 1000);
        this.setupListener();
    },
    {
        doSomethingByTimer: function() {
            console.log('timer');
        },
        setupListener: function() {
            var instance = this;
            instance.after('*:startIO', function() {
                instance.io.read('http://mydomain.com', {pageid=2}); // <-- `io` is onderdeel van PageAppClass, zie (http://itsa.io/docs/itsa-io)
            });
        },
        destroy: function() {
            // opruimen gebeurt hier
            // Eventlisteners op de instance worden automatisch gedetached
            clearInterval(this.timer);
        }
    }
);

module.exports = SubApp;
```