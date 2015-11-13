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
            reply.reactview('installation', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/configuration',
        handler: function(request, reply) {
            reply.reactview('configuration', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/pages',
        handler: function(request, reply) {
            reply.reactview('pages', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/models',
        handler: function(request, reply) {
            reply.reactview('models', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/async-models',
        handler: function(request, reply) {
            reply.reactview('asyncmodels', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/client-model',
        handler: function(request, reply) {
            reply.reactview('clientmodel', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/appfile',
        handler: function(request, reply) {
            reply.reactview('appfile', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/different-devices',
        handler: function(request, reply) {
            reply.reactview('devices', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/controller',
        handler: function(request, reply) {
            reply.reactview('controller', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/databases',
        handler: function(request, reply) {
            reply.reactview('databases', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/markdown',
        handler: function(request, reply) {
            reply.reactview('markdown', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/router',
        handler: function(request, reply) {
            reply.reactview('router', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/i18n',
        handler: function(request, reply) {
            reply.reactview('i18n', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/developing',
        handler: function(request, reply) {
            reply.reactview('developing', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/production',
        handler: function(request, reply) {
            reply.reactview('production', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/gulp',
        handler: function(request, reply) {
            reply.reactview('gulp', {staticView: true});
        }
    }

];

module.exports = routes;