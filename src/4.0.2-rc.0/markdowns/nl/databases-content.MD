Gebruik maken van databases is niet Itsa-server specifiek. Je kunt [Async models](/async-models) gebruiken om gegevens als een Promise op te vragen. Om het eenvoudiger te maken, hebben wij de module `itsa-mysql-promise` ontworpen, die msql-data op een eenvoudige manier als Promise kan opvragen.

Als eerste moet deze module worden geïnstalleerd:

```js
npm install -S `itsa-mysql-promise`
```

## Voorbeeld mysql data

### Definitie van de connector: /modules/connector.js
```js
'use strict';

require('fs-extra');

let databaseConnections = {},
    getConnection;

const fsp = require('fs-promise'),
      Path = require('path'),
      mysqlPromise = require('itsa-mysql-promise');

getConnection = database => {
    if (!databaseConnections[database]) {
        databaseConnections[database] = fsp.readJSON(Path.join(__dirname,'../reactserver.config.json'))
        .then(appConfig => {
            var dbConfig = appConfig.databases[database];
            if (dbConfig) {
                return mysqlPromise.getConnection(dbConfig);
            }
            else {
                throw new Error('no db-configuration');
            }
        })
        .catch(err => {
            console.log(err);
            throw new Error('no db-configuration');
        });
    }
    return databaseConnections[database];
};

module.exports = getConnection;
```

### Definitie van een model /models/index.js:
```js
'use strict';
var getConnection = require('../modules/connector.js')('dbName');

const model = (options, language) => {
    // this === request
    const customerid = request.query.customerid;

    return getConnection
           .then(
               connection => connection.getRecord('SELECT name FROM customers WHERE id=?', customerid);
           );
};
```