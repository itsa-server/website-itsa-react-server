Het ontwikkelen van een webapplicatie houdt in dat je werkt aan een specifieke rc-versie. Zodra deze versie gereed if voor produktie, kan een produktie-versie worden opgebouwd, welke moet worden geupload naar de server

# Aanmaken van een nieuwe produktie-versie

Het aanmaken van een produktie-versie kan worden gedaan door gebruik te maken van het juiste Gulp-commando. Er zijn drie verschillende methoden voor het aanmaken van een produktie-versie:

* Bumpen van de path-versie (f.e. 1.0.2 --> 1.0.3)
* Bumpen van de minor-versie (f.e. 1.0.2 --> 1.1.0)
* Bumpen van de major-versie (f.e. 1.0.2 --> 2.0.0)

Bij het opbouwen van een versie, wordt gebruik gemaakt van [webpack](https://webpack.github.io). Webpack's configuratie-bestand kan worden aangepast, maar het is sterk aan te raden uitsluitend plugins en loaders te installeren. De webpack configuratie-bestanden zijn sterk specifiek voor dit platform: aanpassingen kunnen snel leiden tot het falen van het platform. De webpack config-bestanden worden bewaard in de map: `app-root/lib`.

## Bumpen van versies

### Bumpen patch-versie
* Open de console in de root van de app-folder
* Type: `gulp bumppatch`
* upload de nieuwe versie version naar de server, alsmede package.json (die nu het laatste version-number bezit)
* herstart de server

### Bumpen minor-version
* Open de console in de root van de app-folder
* Type: `gulp bumpminor`
* upload de nieuwe versie version naar de server, alsmede package.json (die nu het laatste version-number bezit)
* herstart de server

### Bumpen major-version
* Open de console in de root van de app-folder
* Type: `gulp bumpmajor`
* upload de nieuwe versie version naar de server, alsmede package.json (die nu het laatste version-number bezit)
* herstart de server

## Reversie naar vorige version (aan de serverkant)
Indien de productie-versie een kritische bug blijkt te hebben, kan er eenvoudig worden teruggevallen op een vorige versie. Onthoud: de vorige versies zijn volledig aanwezig middels een eigen versie-nummer.

* Ga naar de root-application-map op de server
* Wijzig het bestand `package.json` --> zet het versie-nummer op de versie die je wilt gebruiken
* herstart the server

Zodra Itsa-server start, zal het de versie starten die gespecificeerd is in `package.json`.

# Uploaden van de juiste bestanden naar de server
The serverside applicatie wordt bepaald door het bestand: `public_server/server.js`. Dit bestand start een applicatie gebasseerd op [Hapi.js](http://hapijs.com). Je kunt `server.js` aanpassen naar eigen behoefte, echter, in de meeste gevallen is dit niet nodig. Hoe dan ook, behoud de plugin `ReactServerPlugin`: deze geeft `Itsa-server` zijn functionaliteit.

## Uploaden van een lopend project
De map `public_server` bevat alle bestanden die op de server moeten staan. Nadat een produktie-versie is gebumpt, wordt het bestand **package.json** ge-update, en een nieuwe map binnenin `public_server\versions` is aangemaakt. <u>Beide moeten naar de server worden geupload</u>.

## Uploaden van een nieuw project
Wanneer de map `public_server` nog niet eerder op de server is geplaatst, dan moeten de volgende stappen worden genomen (alleen de eerste keer):

* Upload de map `public_server` naar de server
* Hernoem de map-naam naar de naam die je gaat gebruiken voor de web-application
* run: `npm install` in de console van de server. Dit zal alle benodigde packages installeren

# Opstarten van de web-applicatie op de server
De webapplicatie kan op de server worden gestart met het volgende commando:

```js
node server.js
```
Merk op, dat dit process wordt beëindigd zodra de console wordt verlaten. Er zijn diverse utilities die zorgen dat een process blijft draaien nadat de console wordt verlaten: o.a. `forever`:

```js
forever start server.js
```
# Structuur van de server-map