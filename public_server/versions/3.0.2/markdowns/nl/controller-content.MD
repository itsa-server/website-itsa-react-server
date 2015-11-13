Itsa-server heeft een controller aan de server-kant, en je kunt optioneel een controller voor de client gebruiken.

# Serverside controller

De controller voor de server wordt beheert door het framework. Je hoeft alleen de route-file te defineren en zodra reply.reactview wordt aangeroepen, wordt het betreffende view gerendered met de juiste model-gegevens.

# Clientside controller

Er zijn 2 manieren waarop de client de controller kan ontvangen: enkel de controller die je zelf zult moeten gaan beheren, of door ebruik te maken van onze clientside router, die de controller intern gebruikt. Het laatste is sterk aan te raden.

In beide gevallen, moet `app.js` worden aangemaakt, die gesitueerd is in de root-folder van de develop-applicatie.

## Gebruik maken van alleen de controller

Om de controller op de client te gebruiken, moet `app.js` er als volgt uit zien:

```js
const controller = require('itsa-client-controller');
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

## Using itsa-react-router

Het heeft de voorkeur gebruik te maken van `itsa-react-router`. Deze module maakt gebruik van de controller, echter, het neemt de volledige routing controle over, gebasseerd op `routes.js` die op de server is gedefinieerd. Het werkt allemaal automatisch: de serverside route-data is beschikbaar op op de client (dat wil zeggen: het deel dat van toepassing is).

Met deze informatie zal `app.js` er als volgt uit moeten zien:

```js
var ItsaRouterClass = require('itsa-react-router');
new ItsaRouterClass();
```

itsa-react-router is een erg mooie manier om clientside routing op te zetten. Het enige dat nodig is, is bovenstaande code, dat is alles! Achter de schermen, worden  anchor-clicks geinspecteerd (delegated), default-prevented zodra er een match is met de server's `routes.js`-bestand en indien nodig een ajax-request gemaakt.