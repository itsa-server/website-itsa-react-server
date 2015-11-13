Het ontwerpen van een webapplicatie betekent dat je werkt aan een specifieke rc-versie. Deze versie kan lokaal worden opgebouwd en gedraaid. Een rc-versie heeft altijd een hoger nummer dan een produktie-versie. Zodra een rc-release klaar is voor produktie, kan een produktie-release worden opgebouwd, waarmee direct een nieuw rc-release wordt aangemaakt (gereed voor verdere ontwikkeling).

# Ontwikkel altijd in de hoogste rc-versie
Alle andere versies behoren bevroren te zijn.

# Bouwen en draaien van een rc-versie

Zodra een versie wordt gedraaid, zal webpack een complete runtime bouwen.

* Open de console in de root van de applicatie map
* Type: `gulp devserver`
* Open een browser en navigeer naar: `http://localhost:5001`

# Bouwen en draaien van een tablet-versie

Je kunt eenvoudig bekijken hoe de webapp zal functioneren op een tablet, geopend vanuit een desktop-browser.

* Open de console in de root van de applicatie map
* Type: `gulp devservertablet`
* Open een browser en navigeer naar: `http://localhost:5001`

NB. Deze aktie zal enkel de juiste affinity-bestande gaan gebruiken (device specifieke views en models). Het gedrag van een tablet wordt niet gesimuleerd, evenmin als de css-regels. Maak gebruik van Chrome canary om dit te doen.

# Bouwen en draaien van een tablet-versie

* Open de console in de root van de applicatie map
* Type: `gulp devserverphone`
* Open een browser en navigeer naar: `http://localhost:5001`

NB. Deze aktie zal enkel de juiste affinity-bestande gaan gebruiken (device specifieke views en models). Het gedrag van een phone wordt niet gesimuleerd, evenmin als de css-regels. Maak gebruik van Chrome canary om dit te doen.

# Over het bouw-process


Bij het opbouwen, wordt gebruik gemaakt van [webpack](https://webpack.github.io). Webpack's configuratie-bestand kan worden aangepast, maar het is sterk aan te raden uitsluitend plugins en loaders te installeren. De webpack configuratie-bestanden zijn sterk specifiek voor dit platform: aanpassingen kunnen snel leiden tot het falen van het platform. De webpack config-bestanden worden bewaard in de map: `app-root/lib`.

Het bouw-process is erg specifiek en gaat in `twee` sessies. De eerste zal de juiste bestand aanmaken dat de views gebruiken (zodra een bezoeker een volle pagina laadt) en heeft de juiste structuur om MVC werkbaar te maken. De tweede sessie bouwt afzonderlijke `chunks`, zodat de client deze kan opvragen.

De client laast de chunks via `XMLHttpRequests` (niet via `script-tags` zoals webpack native doet).

`NB`: momenteel worden -gedurende de bouw- in de src-map tijdelijke bestanden. Wij werken aan een in-memory oplossing, om te voorkomen dat deze bestanden nodig zijn (`itsa-cli` version 1.2.0).