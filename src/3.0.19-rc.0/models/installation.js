'use strict';

var fsMD = require('itsa-react-fs-markdown')(__dirname);
var menulabels = require('../modules/menulabels');

var model = function(options, language) {
    // this === request
    var pageheaderPromise = fsMD.readFile('../markdowns/'+language+'/installation-header.MD');
    var pagecontentPromise = fsMD.readFile('../markdowns/'+language+'/installation-content.MD');

    return Promise.all([pageheaderPromise, pagecontentPromise])
        .then(function(response) {
            return {
                pageheader: response[0],
                pagecontent: response[1],
                messages: menulabels.getLabels(language)
            };
        }
    );
};

module.exports = model;