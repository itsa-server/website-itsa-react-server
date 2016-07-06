'use strict';

var menuActivated;

var Reflux = require('reflux'),
      actions = require('../actions/app-actions'),
      ItsaRefluxClientStorage = require('itsa-reflux-clientstorage');

var store = Reflux.createStore({
    mixins: [ItsaRefluxClientStorage],

    listenables: [actions],

    onToggleMenu: function() {
        menuActivated = !menuActivated;
        this.trigger({menuActivated: menuActivated});
    },

    getInitialState: function() {
        var initialSate = {
                menuActivated: false
            },
            state = this.readStateFromClientStorage(initialSate);
        menuActivated = state.menuActivated;
        return state;
    }
});

module.exports = store;