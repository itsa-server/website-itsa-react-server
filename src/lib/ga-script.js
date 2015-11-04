'use strict';
console.log('fase 1');

var React = require('react'),

    SCRIPT_CONTENT = 'var WINDOW = window,'+
    'GA = \'ga\','+
    'URL = \'//www.google-analytics.com/analytics.js\';'+
    'WINDOW[\'GoogleAnalyticsObject\'] = GA;'+
    'gaScript = io.get(URL)'+
        '.then(function(response) {'+
            'try {'+
                'eval(reponse);'+
            '}'+
            'catch(err) {}'+
        '});'+
    'WINDOW[GA] = function() {'+
        'var args = arguments;'+
        'gaScript.then(function() {'+
            'WINDOW[GA][URL].push(args);'+
        '});'+
    '};'+
    'WINDOW[GA].l = 1 * new Date();';

var GaScript = React.createClass({
    render: function() {
console.log('fase 2');
        var scriptContent = {__html: SCRIPT_CONTENT};
        return (
            <script dangerouslySetInnerHTML={scriptContent} />
        );
    }
});

module.exports = GaScript;