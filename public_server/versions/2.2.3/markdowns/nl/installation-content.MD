# Stap 1: Installeer itsa-cli

Als eerste, moet `itsa-cli` op uw systeem worden geinstalleerd (global). Met deze cli kunnen nieuwe applicaties worden aangemaakt:

```js
npm install -g itsa-cli
```

# Stap 2: Installeer aanvullende globale packages

Om alle functionaleiten te krijgen, moeten drie aanvullende packages global worden geïnstalleerd:

### Installeer Gulp global:

```
npm install -g gulp
```

### Om gebruik te maken van linting, hebben we es-lint global nodig:

```
npm install -g eslint
```

### Omdat React syntax ook gelint moet worden, moet eslint-plugin-react global worden geïnstalleerd:

```
npm install -g eslint-plugin-react
```

# Stap 3: Maak een nieuwe web-applicatie

Maak een nieuwe web-applicatie ergens op het locale systeem. vanuit de console, type:

```js
itsa create appname
```

**appname** wordt een nieuwe map met de juiste bestanden.

# Step 4: npm install

Ga naar de zojuist aangemaakte map en run:

```js
npm install
```

--------------


Nu kun je direct kunt beginnen met de bouw van de applicatie. Maar voordat je dat doet, is het raadzaam om de webapplicatie zijn [configuration-file](/configuration) te finetunen.

## gecreerde mappen-structuur

De mappen-structuur van de webapplicatie ziet er als volgt uit: