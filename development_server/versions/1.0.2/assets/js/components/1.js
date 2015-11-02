webpackJsonp([1],{

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var __itsa_view__ = 'pages';if (__itsa_view__) {
	  __itsa_view__ = null;
	}__webpack_require__(308);

	module.exports = __webpack_require__(307);

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.capitalize = capitalize;
	exports.callbackName = callbackName;
	exports.isObject = isObject;
	exports.extend = extend;
	exports.isFunction = isFunction;
	exports.object = object;
	exports.isArguments = isArguments;
	exports.throwIf = throwIf;

	function capitalize(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function callbackName(string, prefix) {
	    prefix = prefix || "on";
	    return prefix + exports.capitalize(string);
	}

	/*
	 * isObject, extend, isFunction, isArguments are taken from undescore/lodash in
	 * order to remove the dependency
	 */

	function isObject(obj) {
	    var type = typeof obj;
	    return type === "function" || type === "object" && !!obj;
	}

	function extend(obj) {
	    if (!isObject(obj)) {
	        return obj;
	    }
	    var source, prop;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	        source = arguments[i];
	        for (prop in source) {
	            if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
	                var propertyDescriptor = Object.getOwnPropertyDescriptor(source, prop);
	                Object.defineProperty(obj, prop, propertyDescriptor);
	            } else {
	                obj[prop] = source[prop];
	            }
	        }
	    }
	    return obj;
	}

	function isFunction(value) {
	    return typeof value === "function";
	}

	exports.EventEmitter = __webpack_require__(291);

	exports.nextTick = function (callback) {
	    setTimeout(callback, 0);
	};

	function object(keys, vals) {
	    var o = {},
	        i = 0;
	    for (; i < keys.length; i++) {
	        o[keys[i]] = vals[i];
	    }
	    return o;
	}

	function isArguments(value) {
	    return typeof value === "object" && "callee" in value && typeof value.length === "number";
	}

	function throwIf(val, msg) {
	    if (val) {
	        throw Error(msg || val);
	    }
	}

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ = __webpack_require__(265),
	    maker = __webpack_require__(277).instanceJoinCreator;

	/**
	 * Extract child listenables from a parent from their
	 * children property and return them in a keyed Object
	 *
	 * @param {Object} listenable The parent listenable
	 */
	var mapChildListenables = function mapChildListenables(listenable) {
	    var i = 0,
	        children = {},
	        childName;
	    for (; i < (listenable.children || []).length; ++i) {
	        childName = listenable.children[i];
	        if (listenable[childName]) {
	            children[childName] = listenable[childName];
	        }
	    }
	    return children;
	};

	/**
	 * Make a flat dictionary of all listenables including their
	 * possible children (recursively), concatenating names in camelCase.
	 *
	 * @param {Object} listenables The top-level listenables
	 */
	var flattenListenables = function flattenListenables(listenables) {
	    var flattened = {};
	    for (var key in listenables) {
	        var listenable = listenables[key];
	        var childMap = mapChildListenables(listenable);

	        // recursively flatten children
	        var children = flattenListenables(childMap);

	        // add the primary listenable and chilren
	        flattened[key] = listenable;
	        for (var childKey in children) {
	            var childListenable = children[childKey];
	            flattened[key + _.capitalize(childKey)] = childListenable;
	        }
	    }

	    return flattened;
	};

	/**
	 * A module of methods related to listening.
	 */
	module.exports = {

	    /**
	     * An internal utility function used by `validateListening`
	     *
	     * @param {Action|Store} listenable The listenable we want to search for
	     * @returns {Boolean} The result of a recursive search among `this.subscriptions`
	     */
	    hasListener: function hasListener(listenable) {
	        var i = 0,
	            j,
	            listener,
	            listenables;
	        for (; i < (this.subscriptions || []).length; ++i) {
	            listenables = [].concat(this.subscriptions[i].listenable);
	            for (j = 0; j < listenables.length; j++) {
	                listener = listenables[j];
	                if (listener === listenable || listener.hasListener && listener.hasListener(listenable)) {
	                    return true;
	                }
	            }
	        }
	        return false;
	    },

	    /**
	     * A convenience method that listens to all listenables in the given object.
	     *
	     * @param {Object} listenables An object of listenables. Keys will be used as callback method names.
	     */
	    listenToMany: function listenToMany(listenables) {
	        var allListenables = flattenListenables(listenables);
	        for (var key in allListenables) {
	            var cbname = _.callbackName(key),
	                localname = this[cbname] ? cbname : this[key] ? key : undefined;
	            if (localname) {
	                this.listenTo(allListenables[key], localname, this[cbname + "Default"] || this[localname + "Default"] || localname);
	            }
	        }
	    },

	    /**
	     * Checks if the current context can listen to the supplied listenable
	     *
	     * @param {Action|Store} listenable An Action or Store that should be
	     *  listened to.
	     * @returns {String|Undefined} An error message, or undefined if there was no problem.
	     */
	    validateListening: function validateListening(listenable) {
	        if (listenable === this) {
	            return "Listener is not able to listen to itself";
	        }
	        if (!_.isFunction(listenable.listen)) {
	            return listenable + " is missing a listen method";
	        }
	        if (listenable.hasListener && listenable.hasListener(this)) {
	            return "Listener cannot listen to this listenable because of circular loop";
	        }
	    },

	    /**
	     * Sets up a subscription to the given listenable for the context object
	     *
	     * @param {Action|Store} listenable An Action or Store that should be
	     *  listened to.
	     * @param {Function|String} callback The callback to register as event handler
	     * @param {Function|String} defaultCallback The callback to register as default handler
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is the object being listened to
	     */
	    listenTo: function listenTo(listenable, callback, defaultCallback) {
	        var desub,
	            unsubscriber,
	            subscriptionobj,
	            subs = this.subscriptions = this.subscriptions || [];
	        _.throwIf(this.validateListening(listenable));
	        this.fetchInitialState(listenable, defaultCallback);
	        desub = listenable.listen(this[callback] || callback, this);
	        unsubscriber = function () {
	            var index = subs.indexOf(subscriptionobj);
	            _.throwIf(index === -1, "Tried to remove listen already gone from subscriptions list!");
	            subs.splice(index, 1);
	            desub();
	        };
	        subscriptionobj = {
	            stop: unsubscriber,
	            listenable: listenable
	        };
	        subs.push(subscriptionobj);
	        return subscriptionobj;
	    },

	    /**
	     * Stops listening to a single listenable
	     *
	     * @param {Action|Store} listenable The action or store we no longer want to listen to
	     * @returns {Boolean} True if a subscription was found and removed, otherwise false.
	     */
	    stopListeningTo: function stopListeningTo(listenable) {
	        var sub,
	            i = 0,
	            subs = this.subscriptions || [];
	        for (; i < subs.length; i++) {
	            sub = subs[i];
	            if (sub.listenable === listenable) {
	                sub.stop();
	                _.throwIf(subs.indexOf(sub) !== -1, "Failed to remove listen from subscriptions list!");
	                return true;
	            }
	        }
	        return false;
	    },

	    /**
	     * Stops all subscriptions and empties subscriptions array
	     */
	    stopListeningToAll: function stopListeningToAll() {
	        var remaining,
	            subs = this.subscriptions || [];
	        while (remaining = subs.length) {
	            subs[0].stop();
	            _.throwIf(subs.length !== remaining - 1, "Failed to remove listen from subscriptions list!");
	        }
	    },

	    /**
	     * Used in `listenTo`. Fetches initial data from a publisher if it has a `getInitialState` method.
	     * @param {Action|Store} listenable The publisher we want to get initial state from
	     * @param {Function|String} defaultCallback The method to receive the data
	     */
	    fetchInitialState: function fetchInitialState(listenable, defaultCallback) {
	        defaultCallback = defaultCallback && this[defaultCallback] || defaultCallback;
	        var me = this;
	        if (_.isFunction(defaultCallback) && _.isFunction(listenable.getInitialState)) {
	            var data = listenable.getInitialState();
	            if (data && _.isFunction(data.then)) {
	                data.then(function () {
	                    defaultCallback.apply(me, arguments);
	                });
	            } else {
	                defaultCallback.call(this, data);
	            }
	        }
	    },

	    /**
	     * The callback will be called once all listenables have triggered at least once.
	     * It will be invoked with the last emission from each listenable.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinTrailing: maker("last"),

	    /**
	     * The callback will be called once all listenables have triggered at least once.
	     * It will be invoked with the first emission from each listenable.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinLeading: maker("first"),

	    /**
	     * The callback will be called once all listenables have triggered at least once.
	     * It will be invoked with all emission from each listenable.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinConcat: maker("all"),

	    /**
	     * The callback will be called once all listenables have triggered.
	     * If a callback triggers twice before that happens, an error is thrown.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinStrict: maker("strict")
	};

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(294);

	Reflux.connect = __webpack_require__(296);

	Reflux.connectFilter = __webpack_require__(297);

	Reflux.ListenerMixin = __webpack_require__(270);

	Reflux.listenTo = __webpack_require__(298);

	Reflux.listenToMany = __webpack_require__(299);

	module.exports = Reflux;

/***/ },

/***/ 268:
/***/ function(module, exports) {

	"use strict";

	exports.createdStores = [];

	exports.createdActions = [];

	exports.reset = function () {
	    while (exports.createdStores.length) {
	        exports.createdStores.pop();
	    }
	    while (exports.createdActions.length) {
	        exports.createdActions.pop();
	    }
	};

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ = __webpack_require__(265);

	/**
	 * A module of methods for object that you want to be able to listen to.
	 * This module is consumed by `createStore` and `createAction`
	 */
	module.exports = {

	    /**
	     * Hook used by the publisher that is invoked before emitting
	     * and before `shouldEmit`. The arguments are the ones that the action
	     * is invoked with. If this function returns something other than
	     * undefined, that will be passed on as arguments for shouldEmit and
	     * emission.
	     */
	    preEmit: function preEmit() {},

	    /**
	     * Hook used by the publisher after `preEmit` to determine if the
	     * event should be emitted with given arguments. This may be overridden
	     * in your application, default implementation always returns true.
	     *
	     * @returns {Boolean} true if event should be emitted
	     */
	    shouldEmit: function shouldEmit() {
	        return true;
	    },

	    /**
	     * Subscribes the given callback for action triggered
	     *
	     * @param {Function} callback The callback to register as event handler
	     * @param {Mixed} [optional] bindContext The context to bind the callback with
	     * @returns {Function} Callback that unsubscribes the registered event handler
	     */
	    listen: function listen(callback, bindContext) {
	        bindContext = bindContext || this;
	        var eventHandler = function eventHandler(args) {
	            if (aborted) {
	                return;
	            }
	            callback.apply(bindContext, args);
	        },
	            me = this,
	            aborted = false;
	        this.emitter.addListener(this.eventLabel, eventHandler);
	        return function () {
	            aborted = true;
	            me.emitter.removeListener(me.eventLabel, eventHandler);
	        };
	    },

	    /**
	     * Publishes an event using `this.emitter` (if `shouldEmit` agrees)
	     */
	    trigger: function trigger() {
	        var args = arguments,
	            pre = this.preEmit.apply(this, args);
	        args = pre === undefined ? args : _.isArguments(pre) ? pre : [].concat(pre);
	        if (this.shouldEmit.apply(this, args)) {
	            this.emitter.emit(this.eventLabel, args);
	        }
	    },

	    /**
	     * Tries to publish the event on the next tick
	     */
	    triggerAsync: function triggerAsync() {
	        var args = arguments,
	            me = this;
	        _.nextTick(function () {
	            me.trigger.apply(me, args);
	        });
	    },

	    /**
	     * Wraps the trigger mechanism with a deferral function.
	     *
	     * @param {Function} callback the deferral function,
	     *        first argument is the resolving function and the
	     *        rest are the arguments provided from the previous
	     *        trigger invocation
	     */
	    deferWith: function deferWith(callback) {
	        var oldTrigger = this.trigger,
	            ctx = this,
	            resolver = function resolver() {
	            oldTrigger.apply(ctx, arguments);
	        };
	        this.trigger = function () {
	            callback.apply(ctx, [resolver].concat([].splice.call(arguments, 0)));
	        };
	    }

	};

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(265),
	    ListenerMethods = __webpack_require__(266);

	/**
	 * A module meant to be consumed as a mixin by a React component. Supplies the methods from
	 * `ListenerMethods` mixin and takes care of teardown of subscriptions.
	 * Note that if you're using the `connect` mixin you don't need this mixin, as connect will
	 * import everything this mixin contains!
	 */
	module.exports = _.extend({

	  /**
	   * Cleans up all listener previously registered.
	   */
	  componentWillUnmount: ListenerMethods.stopListeningToAll

	}, ListenerMethods);

/***/ },

/***/ 271:
/***/ function(module, exports) {

	

/***/ },

/***/ 272:
[261, 273],

/***/ 273:
[262, 288, 287],

/***/ 274:
/***/ function(module, exports) {

	/**
	 * A module of methods that you want to include in all actions.
	 * This module is consumed by `createAction`.
	 */
	"use strict";

	module.exports = {};

/***/ },

/***/ 275:
/***/ function(module, exports) {

	/**
	 * A module of methods that you want to include in all stores.
	 * This module is consumed by `createStore`.
	 */
	"use strict";

	module.exports = {};

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ = __webpack_require__(265),
	    Keep = __webpack_require__(268),
	    mixer = __webpack_require__(295),
	    bindMethods = __webpack_require__(292);

	var allowed = { preEmit: 1, shouldEmit: 1 };

	/**
	 * Creates an event emitting Data Store. It is mixed in with functions
	 * from the `ListenerMethods` and `PublisherMethods` mixins. `preEmit`
	 * and `shouldEmit` may be overridden in the definition object.
	 *
	 * @param {Object} definition The data store object definition
	 * @returns {Store} A data store instance
	 */
	module.exports = function (definition) {

	    var StoreMethods = __webpack_require__(275),
	        PublisherMethods = __webpack_require__(269),
	        ListenerMethods = __webpack_require__(266);

	    definition = definition || {};

	    for (var a in StoreMethods) {
	        if (!allowed[a] && (PublisherMethods[a] || ListenerMethods[a])) {
	            throw new Error("Cannot override API method " + a + " in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");
	        }
	    }

	    for (var d in definition) {
	        if (!allowed[d] && (PublisherMethods[d] || ListenerMethods[d])) {
	            throw new Error("Cannot override API method " + d + " in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");
	        }
	    }

	    definition = mixer(definition);

	    function Store() {
	        var i = 0,
	            arr;
	        this.subscriptions = [];
	        this.emitter = new _.EventEmitter();
	        this.eventLabel = "change";
	        bindMethods(this, definition);
	        if (this.init && _.isFunction(this.init)) {
	            this.init();
	        }
	        if (this.listenables) {
	            arr = [].concat(this.listenables);
	            for (; i < arr.length; i++) {
	                this.listenToMany(arr[i]);
	            }
	        }
	    }

	    _.extend(Store.prototype, ListenerMethods, PublisherMethods, StoreMethods, definition);

	    var store = new Store();
	    Keep.createdStores.push(store);

	    return store;
	};

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Internal module used to create static and instance join methods
	 */

	"use strict";

	var createStore = __webpack_require__(276),
	    _ = __webpack_require__(265);

	var slice = Array.prototype.slice,
	    strategyMethodNames = {
	    strict: "joinStrict",
	    first: "joinLeading",
	    last: "joinTrailing",
	    all: "joinConcat"
	};

	/**
	 * Used in `index.js` to create the static join methods
	 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
	 * @returns {Function} A static function which returns a store with a join listen on the given listenables using the given strategy
	 */
	exports.staticJoinCreator = function (strategy) {
	    return function () /* listenables... */{
	        var listenables = slice.call(arguments);
	        return createStore({
	            init: function init() {
	                this[strategyMethodNames[strategy]].apply(this, listenables.concat("triggerAsync"));
	            }
	        });
	    };
	};

	/**
	 * Used in `ListenerMethods.js` to create the instance join methods
	 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
	 * @returns {Function} An instance method which sets up a join listen on the given listenables using the given strategy
	 */
	exports.instanceJoinCreator = function (strategy) {
	    return function () /* listenables..., callback*/{
	        _.throwIf(arguments.length < 2, "Cannot create a join with less than 2 listenables!");
	        var listenables = slice.call(arguments),
	            callback = listenables.pop(),
	            numberOfListenables = listenables.length,
	            join = {
	            numberOfListenables: numberOfListenables,
	            callback: this[callback] || callback,
	            listener: this,
	            strategy: strategy
	        },
	            i,
	            cancels = [],
	            subobj;
	        for (i = 0; i < numberOfListenables; i++) {
	            _.throwIf(this.validateListening(listenables[i]));
	        }
	        for (i = 0; i < numberOfListenables; i++) {
	            cancels.push(listenables[i].listen(newListener(i, join), this));
	        }
	        reset(join);
	        subobj = { listenable: listenables };
	        subobj.stop = makeStopper(subobj, cancels, this);
	        this.subscriptions = (this.subscriptions || []).concat(subobj);
	        return subobj;
	    };
	};

	// ---- internal join functions ----

	function makeStopper(subobj, cancels, context) {
	    return function () {
	        var i,
	            subs = context.subscriptions,
	            index = subs ? subs.indexOf(subobj) : -1;
	        _.throwIf(index === -1, "Tried to remove join already gone from subscriptions list!");
	        for (i = 0; i < cancels.length; i++) {
	            cancels[i]();
	        }
	        subs.splice(index, 1);
	    };
	}

	function reset(join) {
	    join.listenablesEmitted = new Array(join.numberOfListenables);
	    join.args = new Array(join.numberOfListenables);
	}

	function newListener(i, join) {
	    return function () {
	        var callargs = slice.call(arguments);
	        if (join.listenablesEmitted[i]) {
	            switch (join.strategy) {
	                case "strict":
	                    throw new Error("Strict join failed because listener triggered twice.");
	                case "last":
	                    join.args[i] = callargs;break;
	                case "all":
	                    join.args[i].push(callargs);
	            }
	        } else {
	            join.listenablesEmitted[i] = true;
	            join.args[i] = join.strategy === "all" ? [callargs] : callargs;
	        }
	        emitIfAllListenablesEmitted(join);
	    };
	}

	function emitIfAllListenablesEmitted(join) {
	    for (var i = 0; i < join.numberOfListenables; i++) {
	        if (!join.listenablesEmitted[i]) {
	            return;
	        }
	    }
	    join.callback.apply(join.listener, join.args);
	    reset(join);
	}

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Reflux = __webpack_require__(267),
	    constants = __webpack_require__(303),
	    actions;

	actions = [constants.TOGGLE_MENU];

	module.exports = Reflux.createActions(actions);

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var menuActivated = undefined;

	var Reflux = __webpack_require__(267),
	    actions = __webpack_require__(278),
	    ItsaRefluxClientStorage = __webpack_require__(289);

	var store = Reflux.createStore({
	    mixins: [ItsaRefluxClientStorage],

	    listenables: [actions],

	    onToggleMenu: function onToggleMenu() {
	        menuActivated = !menuActivated;
	        this.trigger({ menuActivated: menuActivated });
	    },

	    getInitialState: function getInitialState() {
	        var initialSate = {
	            menuActivated: false
	        },
	            state = this.readStateFromClientStorage(initialSate);
	        menuActivated = state.menuActivated;
	        return state;
	    }
	});

	module.exports = store;

/***/ },

/***/ 280:
271,

/***/ 281:
271,

/***/ 282:
271,

/***/ 283:
271,

/***/ 284:
[258, 285],

/***/ 285:
[259, 286, 272, 272],

/***/ 286:
[260, 273],

/***/ 287:
151,

/***/ 288:
152,

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var isNode = typeof global !== 'undefined' && ({}).toString.call(global) === '[object global]' && (!global.document || ({}).toString.call(global.document) !== '[object HTMLDocument]');
	var alreadySet = false;

	var WINDOW = isNode ? {} : window,
	    localStorage = __webpack_require__(290),
	    KEY_ID = 'itsaRefluxClientStorage',
	    MIN_SESSION_BROWSERS_NO_HISTORY = 3600; // sec

	var setupListener = function setupListener() {
	    // do not use arrow function!
	    if (alreadySet) {
	        return;
	    }
	    // make sure only one listeners kieeps running:
	    alreadySet = true;
	    var eventHandler = function eventHandler(triggerState) {
	        // triggerState is an array where every item is an argument of the triggerFn
	        var newState = {};
	        Object.assign(newState, triggerState[0]);
	        localStorage.setItem(KEY_ID, { time: Date.now(), state: newState });
	    };
	    this.emitter.addListener('change', eventHandler);
	};

	var isBrowserWithHistory = function isBrowserWithHistory() {
	    // only activated to browsers with history-support
	    return WINDOW.history && WINDOW.history.pushState;
	};

	var RefluxClientStorageMixin = {
	    envBrowser: function envBrowser() {
	        return !isNode;
	    },

	    readStateFromClientStorage: function readStateFromClientStorage(initialState) {
	        var localState = undefined;
	        if (this.envBrowser() && localStorage) {
	            var controller = __webpack_require__(284);
	            var sessionTime = controller.getProps().__sessiontime;

	            if (!isBrowserWithHistory()) {
	                // force a specific sessiontime, to prevent stateloses during navigation
	                sessionTime = Math.max(sessionTime, MIN_SESSION_BROWSERS_NO_HISTORY);
	            }
	            localState = localStorage.getItem(KEY_ID, true);

	            if (localState.time && localState.time > Date.now() - 1000 * sessionTime) {
	                Object.assign(initialState, localState.state);
	            }
	            setupListener.call(this);
	        }
	        return initialState;
	    }

	};

	module.exports = RefluxClientStorageMixin;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 290:
/***/ function(module, exports) {

	'use strict';

	var DATEPATTERN = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,
	    // datepattern will return date-type
	REVIVER = function REVIVER(key, value) {
	    return DATEPATTERN.test(value) ? new Date(value) : value;
	};

	var Storage = {
	    /**
	     *
	     *
	     * @method getItem
	     * @param key {String}
	     * @param parseDate {boolean}
	     * @since 0.0.1
	     */
	    getItem: function getItem(key, parseDate) {
	        var value = localStorage.getItem(key),
	            obj;
	        if (value) {
	            try {
	                obj = JSON.parse(value, parseDate ? REVIVER : null);
	            } catch (err) {
	                // error in item: remove it from store
	                obj = {};
	            }
	        }
	        return obj;
	    },

	    /**
	     *
	     *
	     * @method setItem
	     * @param key {String}
	     * @param value {Any}
	     * @since 0.0.1
	     */
	    setItem: function setItem(key, value) {
	        try {
	            value = JSON.stringify(value);
	            localStorage.setItem(key, value);
	        } catch (err) {
	            // error storing
	            return false;
	        }
	        return true;
	    },

	    /**
	     *
	     *
	     * @method removeItem
	     * @param key {String}
	     * @since 0.0.1
	     */
	    removeItem: function removeItem(key) {
	        try {
	            localStorage.removeItem(key);
	        } catch (err) {
	            // error removing
	            return false;
	        }
	        return true;
	    }
	};

	module.exports = Storage;

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;

	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() {} /* Nothing to set */

	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;

	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event,
	      available = this._events && this._events[evt];

	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];

	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }

	  return ee;
	};

	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return false;

	  var listeners = this._events[evt],
	      len = arguments.length,
	      args,
	      i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1:
	        return (listeners.fn.call(listeners.context), true);
	      case 2:
	        return (listeners.fn.call(listeners.context, a1), true);
	      case 3:
	        return (listeners.fn.call(listeners.context, a1, a2), true);
	      case 4:
	        return (listeners.fn.call(listeners.context, a1, a2, a3), true);
	      case 5:
	        return (listeners.fn.call(listeners.context, a1, a2, a3, a4), true);
	      case 6:
	        return (listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true);
	    }

	    for (i = 1, args = new Array(len - 1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length,
	        j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1:
	          listeners[i].fn.call(listeners[i].context);break;
	        case 2:
	          listeners[i].fn.call(listeners[i].context, a1);break;
	        case 3:
	          listeners[i].fn.call(listeners[i].context, a1, a2);break;
	        default:
	          if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this),
	      evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
	  }

	  return this;
	};

	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true),
	      evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
	  }

	  return this;
	};

	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return this;

	  var listeners = this._events[evt],
	      events = [];

	  if (fn) {
	    if (listeners.fn) {
	      if (listeners.fn !== fn || once && !listeners.once || context && listeners.context !== context) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }

	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }

	  return this;
	};

	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[prefix ? prefix + event : event];else this._events = prefix ? {} : Object.create(null);

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}

/***/ },

/***/ 292:
/***/ function(module, exports) {

	"use strict";

	module.exports = function (store, definition) {
	    for (var name in definition) {
	        if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
	            var propertyDescriptor = Object.getOwnPropertyDescriptor(definition, name);

	            if (!propertyDescriptor.value || typeof propertyDescriptor.value !== "function" || !definition.hasOwnProperty(name)) {
	                continue;
	            }

	            store[name] = definition[name].bind(store);
	        } else {
	            var property = definition[name];

	            if (typeof property !== "function" || !definition.hasOwnProperty(name)) {
	                continue;
	            }

	            store[name] = property.bind(store);
	        }
	    }

	    return store;
	};

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ = __webpack_require__(265),
	    ActionMethods = __webpack_require__(274),
	    PublisherMethods = __webpack_require__(269),
	    Keep = __webpack_require__(268);

	var allowed = { preEmit: 1, shouldEmit: 1 };

	/**
	 * Creates an action functor object. It is mixed in with functions
	 * from the `PublisherMethods` mixin. `preEmit` and `shouldEmit` may
	 * be overridden in the definition object.
	 *
	 * @param {Object} definition The action object definition
	 */
	var createAction = function createAction(definition) {

	    definition = definition || {};
	    if (!_.isObject(definition)) {
	        definition = { actionName: definition };
	    }

	    for (var a in ActionMethods) {
	        if (!allowed[a] && PublisherMethods[a]) {
	            throw new Error("Cannot override API method " + a + " in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead.");
	        }
	    }

	    for (var d in definition) {
	        if (!allowed[d] && PublisherMethods[d]) {
	            throw new Error("Cannot override API method " + d + " in action creation. Use another method name or override it on Reflux.PublisherMethods instead.");
	        }
	    }

	    definition.children = definition.children || [];
	    if (definition.asyncResult) {
	        definition.children = definition.children.concat(["completed", "failed"]);
	    }

	    var i = 0,
	        childActions = {};
	    for (; i < definition.children.length; i++) {
	        var name = definition.children[i];
	        childActions[name] = createAction(name);
	    }

	    var context = _.extend({
	        eventLabel: "action",
	        emitter: new _.EventEmitter(),
	        _isAction: true
	    }, PublisherMethods, ActionMethods, definition);

	    var functor = function functor() {
	        var triggerType = functor.sync ? "trigger" : "triggerAsync";
	        return functor[triggerType].apply(functor, arguments);
	    };

	    _.extend(functor, childActions, context);

	    Keep.createdActions.push(functor);

	    return functor;
	};

	module.exports = createAction;

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Reflux = {
	    version: {
	        "reflux-core": "0.3.0"
	    }
	};

	Reflux.ActionMethods = __webpack_require__(274);

	Reflux.ListenerMethods = __webpack_require__(266);

	Reflux.PublisherMethods = __webpack_require__(269);

	Reflux.StoreMethods = __webpack_require__(275);

	Reflux.createAction = __webpack_require__(293);

	Reflux.createStore = __webpack_require__(276);

	var maker = __webpack_require__(277).staticJoinCreator;

	Reflux.joinTrailing = Reflux.all = maker("last"); // Reflux.all alias for backward compatibility

	Reflux.joinLeading = maker("first");

	Reflux.joinStrict = maker("strict");

	Reflux.joinConcat = maker("all");

	var _ = Reflux.utils = __webpack_require__(265);

	Reflux.EventEmitter = _.EventEmitter;

	Reflux.Promise = _.Promise;

	/**
	 * Convenience function for creating a set of actions
	 *
	 * @param definitions the definitions for the actions to be created
	 * @returns an object with actions of corresponding action names
	 */
	Reflux.createActions = (function () {
	    var reducer = function reducer(definitions, actions) {
	        Object.keys(definitions).forEach(function (actionName) {
	            var val = definitions[actionName];
	            actions[actionName] = Reflux.createAction(val);
	        });
	    };

	    return function (definitions) {
	        var actions = {};
	        if (definitions instanceof Array) {
	            definitions.forEach(function (val) {
	                if (_.isObject(val)) {
	                    reducer(val, actions);
	                } else {
	                    actions[val] = Reflux.createAction(val);
	                }
	            });
	        } else {
	            reducer(definitions, actions);
	        }
	        return actions;
	    };
	})();

	/**
	 * Sets the eventmitter that Reflux uses
	 */
	Reflux.setEventEmitter = function (ctx) {
	    Reflux.EventEmitter = _.EventEmitter = ctx;
	};

	/**
	 * Sets the method used for deferring actions and stores
	 */
	Reflux.nextTick = function (nextTick) {
	    _.nextTick = nextTick;
	};

	Reflux.use = function (pluginCb) {
	    pluginCb(Reflux);
	};

	/**
	 * Provides the set of created actions and stores for introspection
	 */
	/*eslint-disable no-underscore-dangle*/
	Reflux.__keep = __webpack_require__(268);
	/*eslint-enable no-underscore-dangle*/

	/**
	 * Warn if Function.prototype.bind not available
	 */
	if (!Function.prototype.bind) {
	    console.error("Function.prototype.bind not available. " + "ES5 shim required. " + "https://github.com/spoike/refluxjs#es5");
	}

	exports["default"] = Reflux;
	module.exports = exports["default"];

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ = __webpack_require__(265);

	module.exports = function mix(def) {
	    var composed = {
	        init: [],
	        preEmit: [],
	        shouldEmit: []
	    };

	    var updated = (function mixDef(mixin) {
	        var mixed = {};
	        if (mixin.mixins) {
	            mixin.mixins.forEach(function (subMixin) {
	                _.extend(mixed, mixDef(subMixin));
	            });
	        }
	        _.extend(mixed, mixin);
	        Object.keys(composed).forEach(function (composable) {
	            if (mixin.hasOwnProperty(composable)) {
	                composed[composable].push(mixin[composable]);
	            }
	        });
	        return mixed;
	    })(def);

	    if (composed.init.length > 1) {
	        updated.init = function () {
	            var args = arguments;
	            composed.init.forEach(function (init) {
	                init.apply(this, args);
	            }, this);
	        };
	    }
	    if (composed.preEmit.length > 1) {
	        updated.preEmit = function () {
	            return composed.preEmit.reduce((function (args, preEmit) {
	                var newValue = preEmit.apply(this, args);
	                return newValue === undefined ? args : [newValue];
	            }).bind(this), arguments);
	        };
	    }
	    if (composed.shouldEmit.length > 1) {
	        updated.shouldEmit = function () {
	            var args = arguments;
	            return !composed.shouldEmit.some(function (shouldEmit) {
	                return !shouldEmit.apply(this, args);
	            }, this);
	        };
	    }
	    Object.keys(composed).forEach(function (composable) {
	        if (composed[composable].length === 1) {
	            updated[composable] = composed[composable][0];
	        }
	    });

	    return updated;
	};

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ListenerMethods = __webpack_require__(266),
	    ListenerMixin = __webpack_require__(270),
	    _ = __webpack_require__(265);

	module.exports = function (listenable, key) {
	    return {
	        getInitialState: function getInitialState() {
	            if (!_.isFunction(listenable.getInitialState)) {
	                return {};
	            } else if (key === undefined) {
	                return listenable.getInitialState();
	            } else {
	                return _.object([key], [listenable.getInitialState()]);
	            }
	        },
	        componentDidMount: function componentDidMount() {
	            _.extend(this, ListenerMethods);
	            var me = this,
	                cb = key === undefined ? this.setState : function (v) {
	                if (typeof me.isMounted === "undefined" || me.isMounted() === true) {
	                    me.setState(_.object([key], [v]));
	                }
	            };
	            this.listenTo(listenable, cb);
	        },
	        componentWillUnmount: ListenerMixin.componentWillUnmount
	    };
	};

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ListenerMethods = __webpack_require__(266),
	    ListenerMixin = __webpack_require__(270),
	    _ = __webpack_require__(265);

	module.exports = function (listenable, key, filterFunc) {
	    filterFunc = _.isFunction(key) ? key : filterFunc;
	    return {
	        getInitialState: function getInitialState() {
	            if (!_.isFunction(listenable.getInitialState)) {
	                return {};
	            } else if (_.isFunction(key)) {
	                return filterFunc.call(this, listenable.getInitialState());
	            } else {
	                // Filter initial payload from store.
	                var result = filterFunc.call(this, listenable.getInitialState());
	                if (typeof result !== "undefined") {
	                    return _.object([key], [result]);
	                } else {
	                    return {};
	                }
	            }
	        },
	        componentDidMount: function componentDidMount() {
	            _.extend(this, ListenerMethods);
	            var me = this;
	            var cb = function cb(value) {
	                if (_.isFunction(key)) {
	                    me.setState(filterFunc.call(me, value));
	                } else {
	                    var result = filterFunc.call(me, value);
	                    me.setState(_.object([key], [result]));
	                }
	            };

	            this.listenTo(listenable, cb);
	        },
	        componentWillUnmount: ListenerMixin.componentWillUnmount
	    };
	};

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ListenerMethods = __webpack_require__(266);

	/**
	 * A mixin factory for a React component. Meant as a more convenient way of using the `ListenerMixin`,
	 * without having to manually set listeners in the `componentDidMount` method.
	 *
	 * @param {Action|Store} listenable An Action or Store that should be
	 *  listened to.
	 * @param {Function|String} callback The callback to register as event handler
	 * @param {Function|String} defaultCallback The callback to register as default handler
	 * @returns {Object} An object to be used as a mixin, which sets up the listener for the given listenable.
	 */
	module.exports = function (listenable, callback, initial) {
	    return {
	        /**
	         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
	         * and then make the call to `listenTo` with the arguments provided to the factory function
	         */
	        componentDidMount: function componentDidMount() {
	            for (var m in ListenerMethods) {
	                if (this[m] !== ListenerMethods[m]) {
	                    if (this[m]) {
	                        throw "Can't have other property '" + m + "' when using Reflux.listenTo!";
	                    }
	                    this[m] = ListenerMethods[m];
	                }
	            }
	            this.listenTo(listenable, callback, initial);
	        },
	        /**
	         * Cleans up all listener previously registered.
	         */
	        componentWillUnmount: ListenerMethods.stopListeningToAll
	    };
	};

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ListenerMethods = __webpack_require__(266);

	/**
	 * A mixin factory for a React component. Meant as a more convenient way of using the `listenerMixin`,
	 * without having to manually set listeners in the `componentDidMount` method. This version is used
	 * to automatically set up a `listenToMany` call.
	 *
	 * @param {Object} listenables An object of listenables
	 * @returns {Object} An object to be used as a mixin, which sets up the listeners for the given listenables.
	 */
	module.exports = function (listenables) {
	    return {
	        /**
	         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
	         * and then make the call to `listenTo` with the arguments provided to the factory function
	         */
	        componentDidMount: function componentDidMount() {
	            for (var m in ListenerMethods) {
	                if (this[m] !== ListenerMethods[m]) {
	                    if (this[m]) {
	                        throw "Can't have other property '" + m + "' when using Reflux.listenToMany!";
	                    }
	                    this[m] = ListenerMethods[m];
	                }
	            }
	            this.listenToMany(listenables);
	        },
	        /**
	         * Cleans up all listener previously registered.
	         */
	        componentWillUnmount: ListenerMethods.stopListeningToAll
	    };
	};

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(133),
	    classList = 'pure-menu-list',
	    classMenuItem = 'pure-menu-item',
	    classMenuItemSelected = 'pure-menu-selected',
	    classMenuItemLink = 'pure-menu-link';

	var LanguageMenu = React.createClass({
	    displayName: 'LanguageMenu',

	    render: function render() {
	        var _this = this;

	        // because this.props.__languages is an object, we need to transform it into an array first:
	        var languages = [];
	        var keys = Object.keys(this.props.__languages);
	        keys.forEach(function (lang) {
	            if (_this.props.__languages[lang] !== false) {
	                languages.push(lang);
	            }
	        });
	        return React.createElement(
	            'ul',
	            { className: classList },
	            languages.map(function (lang) {
	                var classname = classMenuItem + (_this.props.__lang === lang ? ' ' + classMenuItemSelected : ''),
	                    link = '/' + lang + _this.props.__uri,
	                    label = lang.toUpperCase(); // <-- you can specify another label here, perhaps countryflags
	                return React.createElement(
	                    'li',
	                    { key: lang, className: classname },
	                    React.createElement(
	                        'a',
	                        { href: link, 'data-setlang': lang, className: classMenuItemLink },
	                        label
	                    )
	                );
	            })
	        );
	    }
	});

	module.exports = LanguageMenu;

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(271);
	__webpack_require__(281);

	var React = __webpack_require__(133),
	    Reflux = __webpack_require__(267),
	    store = __webpack_require__(279),
	    actions = __webpack_require__(278),
	    menuitems_first = ['installation', 'configuration'],
	    menuitems_second = ['pages', 'models', 'async-models', 'controller', 'router', 'appfile', 'different-devices', 'markdown', 'i18n', 'databases'],
	    menuitems_third = ['developing', 'production', 'gulp'],
	    PURE_MENU_ = 'pure-menu-',
	    PURE_MENU_LINK = PURE_MENU_ + 'link',
	    PURE_MENU_ITEM = PURE_MENU_ + 'item',
	    PURE_MENU_HEADING = PURE_MENU_ + 'heading',
	    PURE_MENU_LIST = PURE_MENU_ + 'list',
	    PURE_MENU_SELECTED = ' ' + PURE_MENU_ + 'selected'; // with leading space

	var Menu = React.createClass({
	    displayName: 'Menu',

	    mixins: [Reflux.connect(store)],
	    render: function render() {
	        var _this = this;

	        var classname = {},
	            link = {};
	        var hamburgerClass = 'menu-link' + (this.state.menuActivated ? ' active' : '');
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'a',
	                { className: hamburgerClass, onClick: actions.toggleMenu },
	                React.createElement('span', null)
	            ),
	            React.createElement(
	                'div',
	                { id: 'leftmenu' },
	                React.createElement(
	                    'div',
	                    { className: 'pure-menu' },
	                    React.createElement(
	                        'a',
	                        { className: PURE_MENU_HEADING },
	                        this.props.messages.setup
	                    ),
	                    React.createElement(
	                        'ul',
	                        { className: PURE_MENU_LIST },
	                        menuitems_first.map(function (menuitem) {
	                            var classname = PURE_MENU_ITEM + (_this.props.__path === '/' + menuitem ? PURE_MENU_SELECTED : ''),
	                                link = _this.props.__langprefix + '/' + menuitem,
	                                label = _this.props.messages[menuitem];
	                            return React.createElement(
	                                'li',
	                                { key: menuitem, className: classname },
	                                React.createElement(
	                                    'a',
	                                    { href: link, className: PURE_MENU_LINK },
	                                    label
	                                )
	                            );
	                        })
	                    ),
	                    React.createElement(
	                        'a',
	                        { className: PURE_MENU_HEADING },
	                        this.props.messages.create
	                    ),
	                    React.createElement(
	                        'ul',
	                        { className: PURE_MENU_LIST },
	                        menuitems_second.map(function (menuitem) {
	                            var classname = PURE_MENU_ITEM + (_this.props.__path === '/' + menuitem ? PURE_MENU_SELECTED : ''),
	                                link = _this.props.__langprefix + '/' + menuitem,
	                                label = _this.props.messages[menuitem];
	                            return React.createElement(
	                                'li',
	                                { key: menuitem, className: classname },
	                                React.createElement(
	                                    'a',
	                                    { href: link, className: PURE_MENU_LINK },
	                                    label
	                                )
	                            );
	                        })
	                    ),
	                    React.createElement(
	                        'a',
	                        { className: PURE_MENU_HEADING },
	                        this.props.messages.build
	                    ),
	                    React.createElement(
	                        'ul',
	                        { className: PURE_MENU_LIST },
	                        menuitems_third.map(function (menuitem) {
	                            var classname = PURE_MENU_ITEM + (_this.props.__path === '/' + menuitem ? PURE_MENU_SELECTED : ''),
	                                link = _this.props.__langprefix + '/' + menuitem,
	                                label = _this.props.messages[menuitem];
	                            return React.createElement(
	                                'li',
	                                { key: menuitem, className: classname },
	                                React.createElement(
	                                    'a',
	                                    { href: link, className: PURE_MENU_LINK },
	                                    label
	                                )
	                            );
	                        })
	                    )
	                )
	            )
	        );
	    }
	});

	module.exports = Menu;

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(271);
	__webpack_require__(280);

	__webpack_require__(283);

	var LangMenuList = __webpack_require__(300);

	var React = __webpack_require__(133),
	    menuURIs = ['/'],
	    logo = __webpack_require__(304);

	var Menu = React.createClass({
	    displayName: 'Menu',

	    render: function render() {
	        var _this = this;

	        var classname = {},
	            link = {};
	        menuURIs.forEach(function (menuURI) {
	            classname[menuURI] = 'pure-menu-item' + (_this.props.__path === menuURI ? ' menu-item-invisible' : '');
	            link[menuURI] = _this.props.__langprefix + menuURI;
	        });
	        return React.createElement(
	            'div',
	            { className: 'top-menu pure-g pure-menu pure-menu-horizontal pure-menu-fixed' },
	            React.createElement(
	                'div',
	                { className: 'pure-u-5-12' },
	                React.createElement('img', { src: logo })
	            ),
	            React.createElement(
	                'div',
	                { className: 'pure-u-1-6 center' },
	                React.createElement(
	                    'div',
	                    { className: classname['/'] },
	                    React.createElement(
	                        'a',
	                        { href: link['/'], className: 'pure-menu-link' },
	                        '« home'
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'pure-u-5-12 right' },
	                React.createElement(LangMenuList, this.props)
	            )
	        );
	    }
	});

	module.exports = Menu;

/***/ },

/***/ 303:
/***/ function(module, exports) {

	'use strict';

	var CONSTANTS = {
	    TOGGLE_MENU: 'toggleMenu'
	};

	module.exports = CONSTANTS;

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "52e737208a0ac30c3de9d327733b50fe.png"

/***/ },

/***/ 305:
271,

/***/ 306:
271,

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(282);
	// Because we need to highlight the code, we make use of highlightjs
	__webpack_require__(306);
	__webpack_require__(305);

	var React = __webpack_require__(133),
	    MenuTop = __webpack_require__(302),
	    MenuLeft = __webpack_require__(301),
	    Reflux = __webpack_require__(267),
	    store = __webpack_require__(279);

	var Body = React.createClass({
	    displayName: 'Body',

	    mixins: [Reflux.connect(store)],
	    render: function render() {
	        var activeClass = this.state.menuActivated ? 'active' : '';
	        return React.createElement(
	            'div',
	            { className: activeClass },
	            React.createElement(MenuTop, this.props),
	            React.createElement(MenuLeft, this.props),
	            React.createElement(
	                'div',
	                { className: 'main' },
	                React.createElement('h1', { className: 'header', dangerouslySetInnerHTML: this.props.pageheader }),
	                React.createElement('div', { className: 'content', dangerouslySetInnerHTML: this.props.pagecontent })
	            )
	        );
	    }
	});

	module.exports = Body;

/***/ },

/***/ 308:
271

});