'use strict';

var Labels = {
    getLabels: function(language) {
        var languageFile = require('../languages/'+language+'.json') || {};
        return {
            installation: languageFile['Installation'],
            configuration: languageFile['Configuration'],
            pages: languageFile['Views (pages)'],
            models: languageFile['Models'],
            actions: languageFile['Actions'],
            'async-models': languageFile['Async Models'],
            'client-server-io': languageFile['Client-Server io'],
            'client-model': languageFile['Clientside model'],
            'different-devices': languageFile['Different devices'],
            databases: languageFile['Using databases'],
            i18n: 'i18n',
            router: languageFile['Router'],
            controller: languageFile['Controller'],
            markdown: languageFile['Using markdown'],
            developing: languageFile['Developing'],
            production: languageFile['Production'],
            gulp: languageFile['Gulp commands'],
            setup: languageFile['Setup'],
            create: languageFile['Create'],
            appfile: languageFile['App-file'],
            build: languageFile['Build'],
            viewthis: languageFile['View this']
        };
    }
};

module.exports = Labels;