'use strict';

var routes = [
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            // config = {modelConfig, props, viewport, charset, description, staticView}
            reply.reactview('index', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/installation',
        handler: function(request, reply) {
            reply.reactview('installation');
        }
    },

    {
        method: 'GET',
        path: '/configuration',
        handler: function(request, reply) {
            reply.reactview('configuration');
        }
    },

    {
        method: 'GET',
        path: '/pages',
        handler: function(request, reply) {
            reply.reactview('pages');
        }
    },

    {
        method: 'GET',
        path: '/models',
        handler: function(request, reply) {
            reply.reactview('models');
        }
    },

    {
        method: 'GET',
        path: '/async-models',
        handler: function(request, reply) {
            reply.reactview('asyncmodels');
        }
    },

    {
        method: 'GET',
        path: '/client-model',
        handler: function(request, reply) {
            reply.reactview('clientmodel');
        }
    },

    {
        method: 'GET',
        path: '/appfile',
        handler: function(request, reply) {
            reply.reactview('appfile');
        }
    },

    {
        method: 'GET',
        path: '/different-devices',
        handler: function(request, reply) {
            reply.reactview('devices');
        }
    },

    {
        method: 'GET',
        path: '/controller',
        handler: function(request, reply) {
            reply.reactview('controller');
        }
    },

    {
        method: 'GET',
        path: '/databases',
        handler: function(request, reply) {
            reply.reactview('databases');
        }
    },

    {
        method: 'GET',
        path: '/markdown',
        handler: function(request, reply) {
            reply.reactview('markdown');
        }
    },

    {
        method: 'GET',
        path: '/router',
        handler: function(request, reply) {
            reply.reactview('router');
        }
    },

    {
        method: 'GET',
        path: '/i18n',
        handler: function(request, reply) {
            reply.reactview('i18n');
        }
    },

    {
        method: 'GET',
        path: '/developing',
        handler: function(request, reply) {
            reply.reactview('developing');
        }
    },

    {
        method: 'GET',
        path: '/production',
        handler: function(request, reply) {
            reply.reactview('production');
        }
    },

    {
        method: 'GET',
        path: '/gulp',
        handler: function(request, reply) {
            reply.reactview('gulp');
        }
    }

];

module.exports = routes;