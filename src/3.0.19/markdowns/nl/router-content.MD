De router moet worden gedefinieerd d.m.v. het bestand `routes.js`. Dit is de plek waar de routes worden gedefinieerd. Dit bestand wordt tevens gebruikt om de juiste clientside route informatie te genereren, welke kan worden gebruikt in een client-side-router (zoals itsa-react-router).

# Structuur routes.js

Routes.js moet een commonjs bestand zijn dat een array van route-objecten exporteert:

### Voorbeeld /routes.js file
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

De structuur is gebasseerd op Hapi: zie de [Hapi.js docs](http://hapijs.com) voor aanvullende informatie.

# Aanvullende reply-methodes

Itsa-server zorgt er voor dat het reply-object drie aanvullende methods bezit:

* **reactview()** <-- response de gespecificeerde view
* **assets()** <-- response een bestand (door [Inert](https://github.com/hapijs/inert)) vanuit de `/assets`-map
* **action()** <-- voert een specifieke aktie uit, gebruikt voor ajax-request (see [Akties](/actions))

## Using itsa-react-router

Wanneer je gebruik maakt van `itsa-react-router` (standaard in (app.js)[/appfile]), dan is alle router-data automatisch op de client beschikbaar.  Deze module maakt gebruik van de controller, echter, het neemt de volledige routing controle over, gebasseerd op `routes.js` die op de server is gedefinieerd. Het werkt allemaal automatisch: de serverside route-data is beschikbaar op op de client (dat wil zeggen: het deel dat van toepassing is).

itsa-react-router is een erg mooie manier om clientside routing op te zetten. Het enige dat nodig is, is bovenstaande code, dat is alles! Achter de schermen, worden  anchor-clicks geinspecteerd (delegated), default-prevented zodra er een match is met de server's `routes.js`-bestand en indien nodig een ajax-request gemaakt.