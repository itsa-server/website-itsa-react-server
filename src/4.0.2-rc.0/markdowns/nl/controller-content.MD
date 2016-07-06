Itsa-server heeft een controller aan de server-kant, en je kunt optioneel een controller voor de client gebruiken.

# Serverside controller

De controller voor de server wordt beheert door het framework. Je hoeft alleen de route-file te defineren en zodra reply.reactview wordt aangeroepen, wordt het betreffende view gerendered met de juiste model-gegevens.

# Clientside controller

De clientside controller wordt geactiveerd op client, indien de `app.js` een subclass is van `require('itsa-apps/app-classes/MainAppRouterClass')` (dit is de standaard). Lees [Appfiles](/appfile) voor meer informatie.

Wanneer het echt wenselijk is dit zelf te regelen, lees dan verder...

## Jouw eigen clienside controller instellen
**NB: dit is niet aan te raden en je zult het gehele framework goed moeten beheersen**

Om de controller op de client te gebruiken, moet `app.js` er als volgt uit zien:

### voorbeeld zelf opgezette /app.js
```js
'use strict';

const Classes = require('itsa-classes'),
      controller = require('itsa-client-controller');

const MainApp = Classes.createClass(() => {
        // initialisatie gebeurt hier
        controller.init();
    },
    {
        destroy() {
            // destroy gebeurt hier
        }
    }
);

module.exports = MainApp;
```

De controller heeft toegang tot de `model` welke ook op de server wordt gebruikt, alsmede extra informatie.

### Beschikbare methodes van de controller

** getComponentId(): retourneert de unieke `id` van de huidige pagina-chunk die door webpack is aangemaakt
** getProps(): retourneert de `model`-gegevens van de view (beschikbaar op de server-view via this.props)
** getView(): retourneert de huidige view-naam
** getLang(): retourneert de huidige taal die de gebruiker in beeld heeft
** isStaticView(): of de huidige view statisch is
** getTitle(): de huidige titel van de website
** getBodyComponent(): huidig React-Component die is gerendered in de `body`-element
** getCss(): huidige `css`, die hoort bij het huidige React-Component
** setPage({config}): wordt gebruikt om pagina-inhoud te wisselen. Het argument is een object en bevat de volgende velden: view, BodyComponent, title, props, css, staticView, componentId, requireId.

Het is niet aan te raden `setPage()` direct te gebruiken. Modules als `itsa-react-router` zorgen hiervoor. Echter, wanneer je dit toch wilt doen, dan moet eerst het juiste component van de server worden ingeladen, en heb je de volgende gegevens nodig: (requireId, componentId en title) --> deze waarden kunnen worden ingelezen via `controller.getProps().__routes`.