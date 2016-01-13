webpackJsonp([ 0 ], {
    21: function(e, t, n) {
        "use strict";
        var i = "__itsa_view__index";
        i && (i = null), n(454), n(481), n(480), n(472), n(479);
        var r = n(222), s = n(469), o = n(468), a = n(443), c = n(452), l = n(482), u = r.createClass({
            displayName: "Body",
            mixins: [ a.connect(c) ],
            render: function() {
                var e = this.state.menuActivated ? "active" : "";
                return r.createElement("div", {
                    className: e
                }, r.createElement(s, this.props), r.createElement(o, this.props), r.createElement("div", {
                    className: "main"
                }, r.createElement("div", {
                    className: "splash-container"
                }, r.createElement("div", {
                    className: "splash"
                }, r.createElement("img", {
                    className: "logo-large",
                    src: l
                }), r.createElement("h1", {
                    className: "splash-head"
                }, "Itsa react-server"), r.createElement("p", {
                    className: "splash-subhead"
                }, this.props.messages.intro_react_server), r.createElement("p", null, r.createElement("a", {
                    href: "https://www.npmjs.com/package/itsa-cli",
                    className: "pure-button pure-button-primary"
                }, this.props.messages.install, " cli"), r.createElement("a", {
                    href: "https://github.com/itsa-server/website-itsa-react-server/tree/master/src/3.0.10",
                    className: "pure-button pure-button-primary"
                }, this.props.messages.viewthis, " website-code")))), r.createElement("div", {
                    className: "content-wrapper"
                }, r.createElement("div", {
                    className: "content"
                }, r.createElement("h1", null, this.props.messages.features, ":"), r.createElement("div", {
                    className: "pure-g"
                }, r.createElement("div", {
                    className: "pure-u-1 pure-u-md-1-2"
                }, r.createElement("ul", null, this.props.messages.features_first.map(function(e, t) {
                    return r.createElement("li", {
                        key: t
                    }, r.createElement("i", {
                        className: "fa fa-rocket"
                    }), e);
                }))), r.createElement("div", {
                    className: "pure-u-1 pure-u-md-1-2"
                }, r.createElement("ul", null, this.props.messages.features_second.map(function(e, t) {
                    return r.createElement("li", {
                        key: t
                    }, r.createElement("i", {
                        className: "fa fa-rocket"
                    }), e);
                })))), r.createElement("h1", null, this.props.messages.why_this_framework, "?"), r.createElement("div", null, this.props.messages.why_this_framework_content)), r.createElement("div", {
                    className: "footer l-box is-center"
                }, this.props.messages.designedby, " ", r.createElement("a", {
                    href: "http://itsasbreuk.nl"
                }, "Marco Asbreuk"), ", Itsa react-server ", this.props.messages.licenced, " ", r.createElement("a", {
                    href: "http://choosealicense.com/licenses/bsd-3-clause/"
                }, "New BSD License")))));
            }
        });
        e.exports = u;
    },
    441: function(e, t, n) {
        "use strict";
        function i(e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        }
        function r(e, n) {
            return n = n || "on", n + t.capitalize(e);
        }
        function s(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e;
        }
        function o(e) {
            if (!s(e)) return e;
            for (var t, n, i = 1, r = arguments.length; r > i; i++) {
                t = arguments[i];
                for (n in t) if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
                    var o = Object.getOwnPropertyDescriptor(t, n);
                    Object.defineProperty(e, n, o);
                } else e[n] = t[n];
            }
            return e;
        }
        function a(e) {
            return "function" == typeof e;
        }
        function c(e, t) {
            for (var n = {}, i = 0; i < e.length; i++) n[e[i]] = t[i];
            return n;
        }
        function l(e) {
            return "object" == typeof e && "callee" in e && "number" == typeof e.length;
        }
        function u(e, t) {
            if (e) throw Error(t || e);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.capitalize = i, t.callbackName = r, t.isObject = s, t.extend = o, t.isFunction = a, 
        t.object = c, t.isArguments = l, t.throwIf = u, t.EventEmitter = n(458), t.nextTick = function(e) {
            setTimeout(e, 0);
        };
    },
    442: function(e, t, n) {
        "use strict";
        var i = n(441), r = n(450).instanceJoinCreator, s = function(e) {
            for (var t, n = 0, i = {}; n < (e.children || []).length; ++n) t = e.children[n], 
            e[t] && (i[t] = e[t]);
            return i;
        }, o = function a(e) {
            var t = {};
            for (var n in e) {
                var r = e[n], o = s(r), c = a(o);
                t[n] = r;
                for (var l in c) {
                    var u = c[l];
                    t[n + i.capitalize(l)] = u;
                }
            }
            return t;
        };
        e.exports = {
            hasListener: function(e) {
                for (var t, n, i, r = 0; r < (this.subscriptions || []).length; ++r) for (i = [].concat(this.subscriptions[r].listenable), 
                t = 0; t < i.length; t++) if (n = i[t], n === e || n.hasListener && n.hasListener(e)) return !0;
                return !1;
            },
            listenToMany: function(e) {
                var t = o(e);
                for (var n in t) {
                    var r = i.callbackName(n), s = this[r] ? r : this[n] ? n : void 0;
                    s && this.listenTo(t[n], s, this[r + "Default"] || this[s + "Default"] || s);
                }
            },
            validateListening: function(e) {
                return e === this ? "Listener is not able to listen to itself" : i.isFunction(e.listen) ? e.hasListener && e.hasListener(this) ? "Listener cannot listen to this listenable because of circular loop" : void 0 : e + " is missing a listen method";
            },
            listenTo: function(e, t, n) {
                var r, s, o, a = this.subscriptions = this.subscriptions || [];
                return i.throwIf(this.validateListening(e)), this.fetchInitialState(e, n), r = e.listen(this[t] || t, this), 
                s = function() {
                    var e = a.indexOf(o);
                    i.throwIf(-1 === e, "Tried to remove listen already gone from subscriptions list!"), 
                    a.splice(e, 1), r();
                }, o = {
                    stop: s,
                    listenable: e
                }, a.push(o), o;
            },
            stopListeningTo: function(e) {
                for (var t, n = 0, r = this.subscriptions || []; n < r.length; n++) if (t = r[n], 
                t.listenable === e) return t.stop(), i.throwIf(-1 !== r.indexOf(t), "Failed to remove listen from subscriptions list!"), 
                !0;
                return !1;
            },
            stopListeningToAll: function() {
                for (var e, t = this.subscriptions || []; e = t.length; ) t[0].stop(), i.throwIf(t.length !== e - 1, "Failed to remove listen from subscriptions list!");
            },
            fetchInitialState: function(e, t) {
                t = t && this[t] || t;
                var n = this;
                if (i.isFunction(t) && i.isFunction(e.getInitialState)) {
                    var r = e.getInitialState();
                    r && i.isFunction(r.then) ? r.then(function() {
                        t.apply(n, arguments);
                    }) : t.call(this, r);
                }
            },
            joinTrailing: r("last"),
            joinLeading: r("first"),
            joinConcat: r("all"),
            joinStrict: r("strict")
        };
    },
    443: function(e, t, n) {
        "use strict";
        var i = n(461);
        i.connect = n(463), i.connectFilter = n(464), i.ListenerMixin = n(446), i.listenTo = n(465), 
        i.listenToMany = n(466), e.exports = i;
    },
    444: function(e, t) {
        "use strict";
        t.createdStores = [], t.createdActions = [], t.reset = function() {
            for (;t.createdStores.length; ) t.createdStores.pop();
            for (;t.createdActions.length; ) t.createdActions.pop();
        };
    },
    445: function(e, t, n) {
        "use strict";
        var i = n(441);
        e.exports = {
            preEmit: function() {},
            shouldEmit: function() {
                return !0;
            },
            listen: function(e, t) {
                t = t || this;
                var n = function(n) {
                    r || e.apply(t, n);
                }, i = this, r = !1;
                return this.emitter.addListener(this.eventLabel, n), function() {
                    r = !0, i.emitter.removeListener(i.eventLabel, n);
                };
            },
            trigger: function() {
                var e = arguments, t = this.preEmit.apply(this, e);
                e = void 0 === t ? e : i.isArguments(t) ? t : [].concat(t), this.shouldEmit.apply(this, e) && this.emitter.emit(this.eventLabel, e);
            },
            triggerAsync: function() {
                var e = arguments, t = this;
                i.nextTick(function() {
                    t.trigger.apply(t, e);
                });
            },
            deferWith: function(e) {
                var t = this.trigger, n = this, i = function() {
                    t.apply(n, arguments);
                };
                this.trigger = function() {
                    e.apply(n, [ i ].concat([].splice.call(arguments, 0)));
                };
            }
        };
    },
    446: function(e, t, n) {
        "use strict";
        var i = n(441), r = n(442);
        e.exports = i.extend({
            componentWillUnmount: r.stopListeningToAll
        }, r);
    },
    447: function(e, t) {
        "use strict";
        e.exports = {};
    },
    448: function(e, t) {
        "use strict";
        e.exports = {};
    },
    449: function(e, t, n) {
        "use strict";
        var i = n(441), r = n(444), s = n(462), o = n(459), a = {
            preEmit: 1,
            shouldEmit: 1
        };
        e.exports = function(e) {
            function t() {
                var t, n = 0;
                if (this.subscriptions = [], this.emitter = new i.EventEmitter(), this.eventLabel = "change", 
                o(this, e), this.init && i.isFunction(this.init) && this.init(), this.listenables) for (t = [].concat(this.listenables); n < t.length; n++) this.listenToMany(t[n]);
            }
            var c = n(448), l = n(445), u = n(442);
            e = e || {};
            for (var f in c) if (!a[f] && (l[f] || u[f])) throw new Error("Cannot override API method " + f + " in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");
            for (var h in e) if (!a[h] && (l[h] || u[h])) throw new Error("Cannot override API method " + h + " in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");
            e = s(e), i.extend(t.prototype, u, l, c, e);
            var p = new t();
            return r.createdStores.push(p), p;
        };
    },
    450: function(e, t, n) {
        "use strict";
        function i(e, t, n) {
            return function() {
                var i, r = n.subscriptions, s = r ? r.indexOf(e) : -1;
                for (c.throwIf(-1 === s, "Tried to remove join already gone from subscriptions list!"), 
                i = 0; i < t.length; i++) t[i]();
                r.splice(s, 1);
            };
        }
        function r(e) {
            e.listenablesEmitted = new Array(e.numberOfListenables), e.args = new Array(e.numberOfListenables);
        }
        function s(e, t) {
            return function() {
                var n = l.call(arguments);
                if (t.listenablesEmitted[e]) switch (t.strategy) {
                  case "strict":
                    throw new Error("Strict join failed because listener triggered twice.");

                  case "last":
                    t.args[e] = n;
                    break;

                  case "all":
                    t.args[e].push(n);
                } else t.listenablesEmitted[e] = !0, t.args[e] = "all" === t.strategy ? [ n ] : n;
                o(t);
            };
        }
        function o(e) {
            for (var t = 0; t < e.numberOfListenables; t++) if (!e.listenablesEmitted[t]) return;
            e.callback.apply(e.listener, e.args), r(e);
        }
        var a = n(449), c = n(441), l = Array.prototype.slice, u = {
            strict: "joinStrict",
            first: "joinLeading",
            last: "joinTrailing",
            all: "joinConcat"
        };
        t.staticJoinCreator = function(e) {
            return function() {
                var t = l.call(arguments);
                return a({
                    init: function() {
                        this[u[e]].apply(this, t.concat("triggerAsync"));
                    }
                });
            };
        }, t.instanceJoinCreator = function(e) {
            return function() {
                c.throwIf(arguments.length < 2, "Cannot create a join with less than 2 listenables!");
                var t, n, o = l.call(arguments), a = o.pop(), u = o.length, f = {
                    numberOfListenables: u,
                    callback: this[a] || a,
                    listener: this,
                    strategy: e
                }, h = [];
                for (t = 0; u > t; t++) c.throwIf(this.validateListening(o[t]));
                for (t = 0; u > t; t++) h.push(o[t].listen(s(t, f), this));
                return r(f), n = {
                    listenable: o
                }, n.stop = i(n, h, this), this.subscriptions = (this.subscriptions || []).concat(n), 
                n;
            };
        };
    },
    451: function(e, t, n) {
        "use strict";
        var i, r = n(443), s = n(470);
        i = [ s.TOGGLE_MENU ], e.exports = r.createActions(i);
    },
    452: function(e, t, n) {
        "use strict";
        var i, r = n(443), s = n(451), o = n(455), a = r.createStore({
            mixins: [ o ],
            listenables: [ s ],
            onToggleMenu: function() {
                i = !i, this.trigger({
                    menuActivated: i
                });
            },
            getInitialState: function() {
                var e = {
                    menuActivated: !1
                }, t = this.readStateFromClientStorage(e);
                return i = t.menuActivated, t;
            }
        });
        e.exports = a;
    },
    453: function(e, t) {},
    454: 453,
    455: function(e, t, n) {
        (function(t) {
            "use strict";
            var i, r = "undefined" != typeof t && "[object global]" === {}.toString.call(t) && (!t.document || "[object HTMLDocument]" !== {}.toString.call(t.document)), s = !1, o = r ? {} : window, a = n(457), c = n(456), l = "itsaRefluxClientStorage", u = 3600, f = function(e) {
                if (!s) {
                    s = !0;
                    var t = function(t) {
                        a(i, t[0]), c.setItem(l + e, {
                            time: Date.now(),
                            state: i
                        });
                    };
                    this.emitter.addListener("change", t);
                }
            }, h = function() {
                return o.history && o.history.pushState;
            }, p = {
                envBrowser: function() {
                    return !r;
                },
                readStateFromClientStorage: function(e, t) {
                    var r;
                    if (t ? e = "@" + e : (t = e, e = ""), this.envBrowser() && c) {
                        var s = n(223), o = s.getProps().__sessiontime;
                        h() || (o = Math.max(o, u)), r = c.getItem(l + e, !0), r && r.time && r.time > Date.now() - 1e3 * o && (t = a({}, t, r.state)), 
                        c.setItem(l + e, {
                            time: Date.now(),
                            state: t
                        }), f.call(this, e);
                    }
                    return i = a({}, t), t;
                }
            };
            e.exports = p;
        }).call(t, function() {
            return this;
        }());
    },
    456: function(e, t) {
        "use strict";
        var n = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/, i = function(e, t) {
            return n.test(t) ? new Date(t) : t;
        }, r = {
            getItem: function(e, t) {
                var n, r = localStorage.getItem(e);
                if (r) try {
                    n = JSON.parse(r, t ? i : null);
                } catch (s) {
                    n = {};
                }
                return n;
            },
            setItem: function(e, t) {
                try {
                    t = JSON.stringify(t), localStorage.setItem(e, t);
                } catch (n) {
                    return !1;
                }
                return !0;
            },
            removeItem: function(e) {
                try {
                    localStorage.removeItem(e);
                } catch (t) {
                    return !1;
                }
                return !0;
            }
        };
        e.exports = r;
    },
    457: 274,
    458: function(e, t, n) {
        "use strict";
        function i(e, t, n) {
            this.fn = e, this.context = t, this.once = n || !1;
        }
        function r() {}
        var s = "function" != typeof Object.create ? "~" : !1;
        r.prototype._events = void 0, r.prototype.listeners = function(e, t) {
            var n = s ? s + e : e, i = this._events && this._events[n];
            if (t) return !!i;
            if (!i) return [];
            if (i.fn) return [ i.fn ];
            for (var r = 0, o = i.length, a = new Array(o); o > r; r++) a[r] = i[r].fn;
            return a;
        }, r.prototype.emit = function(e, t, n, i, r, o) {
            var a = s ? s + e : e;
            if (!this._events || !this._events[a]) return !1;
            var c, l, u = this._events[a], f = arguments.length;
            if ("function" == typeof u.fn) {
                switch (u.once && this.removeListener(e, u.fn, void 0, !0), f) {
                  case 1:
                    return u.fn.call(u.context), !0;

                  case 2:
                    return u.fn.call(u.context, t), !0;

                  case 3:
                    return u.fn.call(u.context, t, n), !0;

                  case 4:
                    return u.fn.call(u.context, t, n, i), !0;

                  case 5:
                    return u.fn.call(u.context, t, n, i, r), !0;

                  case 6:
                    return u.fn.call(u.context, t, n, i, r, o), !0;
                }
                for (l = 1, c = new Array(f - 1); f > l; l++) c[l - 1] = arguments[l];
                u.fn.apply(u.context, c);
            } else {
                var h, p = u.length;
                for (l = 0; p > l; l++) switch (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), 
                f) {
                  case 1:
                    u[l].fn.call(u[l].context);
                    break;

                  case 2:
                    u[l].fn.call(u[l].context, t);
                    break;

                  case 3:
                    u[l].fn.call(u[l].context, t, n);
                    break;

                  default:
                    if (!c) for (h = 1, c = new Array(f - 1); f > h; h++) c[h - 1] = arguments[h];
                    u[l].fn.apply(u[l].context, c);
                }
            }
            return !0;
        }, r.prototype.on = function(e, t, n) {
            var r = new i(t, n || this), o = s ? s + e : e;
            return this._events || (this._events = s ? {} : Object.create(null)), this._events[o] ? this._events[o].fn ? this._events[o] = [ this._events[o], r ] : this._events[o].push(r) : this._events[o] = r, 
            this;
        }, r.prototype.once = function(e, t, n) {
            var r = new i(t, n || this, !0), o = s ? s + e : e;
            return this._events || (this._events = s ? {} : Object.create(null)), this._events[o] ? this._events[o].fn ? this._events[o] = [ this._events[o], r ] : this._events[o].push(r) : this._events[o] = r, 
            this;
        }, r.prototype.removeListener = function(e, t, n, i) {
            var r = s ? s + e : e;
            if (!this._events || !this._events[r]) return this;
            var o = this._events[r], a = [];
            if (t) if (o.fn) (o.fn !== t || i && !o.once || n && o.context !== n) && a.push(o); else for (var c = 0, l = o.length; l > c; c++) (o[c].fn !== t || i && !o[c].once || n && o[c].context !== n) && a.push(o[c]);
            return a.length ? this._events[r] = 1 === a.length ? a[0] : a : delete this._events[r], 
            this;
        }, r.prototype.removeAllListeners = function(e) {
            return this._events ? (e ? delete this._events[s ? s + e : e] : this._events = s ? {} : Object.create(null), 
            this) : this;
        }, r.prototype.off = r.prototype.removeListener, r.prototype.addListener = r.prototype.on, 
        r.prototype.setMaxListeners = function() {
            return this;
        }, r.prefixed = s, e.exports = r;
    },
    459: function(e, t) {
        "use strict";
        e.exports = function(e, t) {
            for (var n in t) if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (!i.value || "function" != typeof i.value || !t.hasOwnProperty(n)) continue;
                e[n] = t[n].bind(e);
            } else {
                var r = t[n];
                if ("function" != typeof r || !t.hasOwnProperty(n)) continue;
                e[n] = r.bind(e);
            }
            return e;
        };
    },
    460: function(e, t, n) {
        "use strict";
        var i = n(441), r = n(447), s = n(445), o = n(444), a = {
            preEmit: 1,
            shouldEmit: 1
        }, c = function l(e) {
            e = e || {}, i.isObject(e) || (e = {
                actionName: e
            });
            for (var t in r) if (!a[t] && s[t]) throw new Error("Cannot override API method " + t + " in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead.");
            for (var n in e) if (!a[n] && s[n]) throw new Error("Cannot override API method " + n + " in action creation. Use another method name or override it on Reflux.PublisherMethods instead.");
            e.children = e.children || [], e.asyncResult && (e.children = e.children.concat([ "completed", "failed" ]));
            for (var c = 0, u = {}; c < e.children.length; c++) {
                var f = e.children[c];
                u[f] = l(f);
            }
            var h = i.extend({
                eventLabel: "action",
                emitter: new i.EventEmitter(),
                _isAction: !0
            }, s, r, e), p = function m() {
                var e = m.sync ? "trigger" : "triggerAsync";
                return m[e].apply(m, arguments);
            };
            return i.extend(p, u, h), o.createdActions.push(p), p;
        };
        e.exports = c;
    },
    461: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {
            version: {
                "reflux-core": "0.3.0"
            }
        };
        i.ActionMethods = n(447), i.ListenerMethods = n(442), i.PublisherMethods = n(445), 
        i.StoreMethods = n(448), i.createAction = n(460), i.createStore = n(449);
        var r = n(450).staticJoinCreator;
        i.joinTrailing = i.all = r("last"), i.joinLeading = r("first"), i.joinStrict = r("strict"), 
        i.joinConcat = r("all");
        var s = i.utils = n(441);
        i.EventEmitter = s.EventEmitter, i.Promise = s.Promise, i.createActions = function() {
            var e = function(e, t) {
                Object.keys(e).forEach(function(n) {
                    var r = e[n];
                    t[n] = i.createAction(r);
                });
            };
            return function(t) {
                var n = {};
                return t instanceof Array ? t.forEach(function(t) {
                    s.isObject(t) ? e(t, n) : n[t] = i.createAction(t);
                }) : e(t, n), n;
            };
        }(), i.setEventEmitter = function(e) {
            i.EventEmitter = s.EventEmitter = e;
        }, i.nextTick = function(e) {
            s.nextTick = e;
        }, i.use = function(e) {
            e(i);
        }, i.__keep = n(444), !Function.prototype.bind, t["default"] = i, e.exports = t["default"];
    },
    462: function(e, t, n) {
        "use strict";
        var i = n(441);
        e.exports = function(e) {
            var t = {
                init: [],
                preEmit: [],
                shouldEmit: []
            }, n = function r(e) {
                var n = {};
                return e.mixins && e.mixins.forEach(function(e) {
                    i.extend(n, r(e));
                }), i.extend(n, e), Object.keys(t).forEach(function(n) {
                    e.hasOwnProperty(n) && t[n].push(e[n]);
                }), n;
            }(e);
            return t.init.length > 1 && (n.init = function() {
                var e = arguments;
                t.init.forEach(function(t) {
                    t.apply(this, e);
                }, this);
            }), t.preEmit.length > 1 && (n.preEmit = function() {
                return t.preEmit.reduce(function(e, t) {
                    var n = t.apply(this, e);
                    return void 0 === n ? e : [ n ];
                }.bind(this), arguments);
            }), t.shouldEmit.length > 1 && (n.shouldEmit = function() {
                var e = arguments;
                return !t.shouldEmit.some(function(t) {
                    return !t.apply(this, e);
                }, this);
            }), Object.keys(t).forEach(function(e) {
                1 === t[e].length && (n[e] = t[e][0]);
            }), n;
        };
    },
    463: function(e, t, n) {
        "use strict";
        var i = n(442), r = n(446), s = n(441);
        e.exports = function(e, t) {
            return {
                getInitialState: function() {
                    return s.isFunction(e.getInitialState) ? void 0 === t ? e.getInitialState() : s.object([ t ], [ e.getInitialState() ]) : {};
                },
                componentDidMount: function() {
                    s.extend(this, i);
                    var n = this, r = void 0 === t ? this.setState : function(e) {
                        ("undefined" == typeof n.isMounted || n.isMounted() === !0) && n.setState(s.object([ t ], [ e ]));
                    };
                    this.listenTo(e, r);
                },
                componentWillUnmount: r.componentWillUnmount
            };
        };
    },
    464: function(e, t, n) {
        "use strict";
        var i = n(442), r = n(446), s = n(441);
        e.exports = function(e, t, n) {
            return n = s.isFunction(t) ? t : n, {
                getInitialState: function() {
                    if (s.isFunction(e.getInitialState)) {
                        if (s.isFunction(t)) return n.call(this, e.getInitialState());
                        var i = n.call(this, e.getInitialState());
                        return "undefined" != typeof i ? s.object([ t ], [ i ]) : {};
                    }
                    return {};
                },
                componentDidMount: function() {
                    s.extend(this, i);
                    var r = this, o = function(e) {
                        if (s.isFunction(t)) r.setState(n.call(r, e)); else {
                            var i = n.call(r, e);
                            r.setState(s.object([ t ], [ i ]));
                        }
                    };
                    this.listenTo(e, o);
                },
                componentWillUnmount: r.componentWillUnmount
            };
        };
    },
    465: function(e, t, n) {
        "use strict";
        var i = n(442);
        e.exports = function(e, t, n) {
            return {
                componentDidMount: function() {
                    for (var r in i) if (this[r] !== i[r]) {
                        if (this[r]) throw "Can't have other property '" + r + "' when using Reflux.listenTo!";
                        this[r] = i[r];
                    }
                    this.listenTo(e, t, n);
                },
                componentWillUnmount: i.stopListeningToAll
            };
        };
    },
    466: function(e, t, n) {
        "use strict";
        var i = n(442);
        e.exports = function(e) {
            return {
                componentDidMount: function() {
                    for (var t in i) if (this[t] !== i[t]) {
                        if (this[t]) throw "Can't have other property '" + t + "' when using Reflux.listenToMany!";
                        this[t] = i[t];
                    }
                    this.listenToMany(e);
                },
                componentWillUnmount: i.stopListeningToAll
            };
        };
    },
    467: function(e, t, n) {
        "use strict";
        var i = n(222), r = "pure-menu-list", s = "pure-menu-item", o = "pure-menu-selected", a = "pure-menu-link", c = i.createClass({
            displayName: "LanguageMenu",
            render: function() {
                var e = [], t = Object.keys(this.props.__languages), n = this;
                return t.forEach(function(t) {
                    n.props.__languages[t] !== !1 && e.push(t);
                }), i.createElement("ul", {
                    className: r
                }, e.map(function(e) {
                    var t = s + (n.props.__lang === e ? " " + o : ""), r = "/" + e + n.props.__uri, c = e.toUpperCase();
                    return i.createElement("li", {
                        key: e,
                        className: t
                    }, i.createElement("a", {
                        href: r,
                        "data-setlang": e,
                        className: a
                    }, c));
                }));
            }
        });
        e.exports = c;
    },
    468: function(e, t, n) {
        "use strict";
        n(453), n(471);
        var i = n(222), r = n(443), s = n(452), o = n(451), a = [ "installation", "configuration" ], c = [ "pages", "models", "async-models", "client-model", "actions", "controller", "router", "appfile", "different-devices", "markdown", "i18n", "databases" ], l = [ "developing", "production", "gulp" ], u = "pure-menu-", f = u + "link", h = u + "item", p = u + "heading", m = u + "list", v = " " + u + "selected", g = i.createClass({
            displayName: "Menu",
            mixins: [ r.connect(s) ],
            render: function() {
                var e = this, t = "menu-link" + (this.state.menuActivated ? " active" : "");
                return i.createElement("div", null, i.createElement("a", {
                    className: t,
                    onClick: o.toggleMenu
                }, i.createElement("span", null)), i.createElement("div", {
                    id: "leftmenu"
                }, i.createElement("div", {
                    className: "pure-menu"
                }, i.createElement("a", {
                    className: p
                }, this.props.messages.setup), i.createElement("ul", {
                    className: m
                }, a.map(function(t) {
                    var n = h + (e.props.__path === "/" + t ? v : ""), r = e.props.__langprefix + "/" + t, s = e.props.messages[t];
                    return i.createElement("li", {
                        key: t,
                        className: n
                    }, i.createElement("a", {
                        href: r,
                        className: f
                    }, s));
                })), i.createElement("a", {
                    className: p
                }, this.props.messages.create), i.createElement("ul", {
                    className: m
                }, c.map(function(t) {
                    var n = h + (e.props.__path === "/" + t ? v : ""), r = e.props.__langprefix + "/" + t, s = e.props.messages[t];
                    return i.createElement("li", {
                        key: t,
                        className: n
                    }, i.createElement("a", {
                        href: r,
                        className: f
                    }, s));
                })), i.createElement("a", {
                    className: p
                }, this.props.messages.build), i.createElement("ul", {
                    className: m
                }, l.map(function(t) {
                    var n = h + (e.props.__path === "/" + t ? v : ""), r = e.props.__langprefix + "/" + t, s = e.props.messages[t];
                    return i.createElement("li", {
                        key: t,
                        className: n
                    }, i.createElement("a", {
                        href: r,
                        className: f
                    }, s));
                })))));
            }
        });
        e.exports = g;
    },
    469: function(e, t, n) {
        "use strict";
        n(453), n(454), n(473);
        var i = n(467), r = n(222), s = [ "/" ], o = n(474), a = r.createClass({
            displayName: "Menu",
            render: function() {
                var e = {}, t = {}, n = this;
                return s.forEach(function(i) {
                    e[i] = "pure-menu-item" + (n.props.__path === i ? " menu-item-invisible" : ""), 
                    t[i] = n.props.__langprefix + i;
                }), r.createElement("div", {
                    className: "top-menu pure-g pure-menu pure-menu-horizontal pure-menu-fixed"
                }, r.createElement("div", {
                    className: "pure-u-5-12"
                }, r.createElement("img", {
                    src: o
                })), r.createElement("div", {
                    className: "pure-u-1-6 center"
                }, r.createElement("div", {
                    className: e["/"]
                }, r.createElement("a", {
                    href: t["/"],
                    className: "pure-menu-link"
                }, "« home"))), r.createElement("div", {
                    className: "pure-u-5-12 right"
                }, r.createElement(i, this.props)));
            }
        });
        e.exports = a;
    },
    470: function(e, t) {
        "use strict";
        var n = {
            TOGGLE_MENU: "toggleMenu"
        };
        e.exports = n;
    },
    471: 453,
    472: 453,
    473: 453,
    474: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASxQTFRF5Rsk//////z84gUP6DM74AAA8o2S5BAZ5BQe5Roj4QAA+9vd9Jqe5Rgh97W44gAI85qe+9ze5BYf//7+3wAA4wsU4gAK6UBI4gQO5Rwl6DA4+c7Q5BQd//395BEa5Roi+9nb85OX+L3A3QAA6khQ5h8o8ouQ4gIL5Rcg85yg9q6x5R8o5RYf4gAJ6TpC5Bcg+97f5BMe97C0/Ofo4gAG5A8Y5R4o+93f/Ofp5BIc5A4X4w4S4wwW4w0W5BMc4w4X5A8Z4gMM+MDD6UNL5BUe5Rki9KKn/OPk5iAr85SZ5BMd8oyR4gAH9qms8pGV4wYP7FRb5BYg9Jmd4wgS8HuB6DU96DQ89aWp6DI68o6S+dLU5R4m5y835ycw4gYQ4QAB4wUO+97g//v75R0mVn9+cQAAAQ5JREFUeNpiYBgFBIAZuwQzHiARLCkJUagRG8qCB4TFcHJCFLJ6CzPhAbIKHOxQhZ6MeIEFhylUIRt+hdxwE0lSKBzux4MBgiITMRQyySlzYQJlX0yFERKcGEDDhw9ToaoIZliri2hhKlTRxgxrKXklTF/LYg1tYfKDh3iFxFpNtGeIDx4WZswkzcvPh1Whhz8rEoiXTMal0DqADQmE8OrgUijihhIsXla4FKIGKFB+SCtUQ1aoYCmHrhAknyQVx8CliKzQndPe1cQIpNAQqhAsL6znyMmliazQONpGJ8EJyDAIdACrg8o763JyCaC40YXdzjYKyDDXZ4cqBMuLi6EpFBRilxGVhjBooRAgwADWTCbgZ9jExQAAAABJRU5ErkJggg==";
    },
    479: 453,
    480: 453,
    481: 453,
    482: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACiCAIAAABNkIFMAAACg0lEQVR4nOzcsU5UWRyA8Z0N7G4CYXu23cZoiJ3xAUx8Jxoa2yngoYzR1mBC6fAAMg0qBqksHTmQOyPf79f/c07uF86Q3Juzdf7f/3/w0P257g0wBZkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTtsbG/n7+7H73wS+6Wiy+fTy/7dRs7O6R/cXZwBR3t5yfLOfHt51yaCfInCBzgswJMifInCBzgswJMifInCBzgswJMifInCBzgswJMicMfiQ05tPRq6v3p1OuuMn2jg63Hz+aZq1JM980/vz6zZQrbrLri4vJ1nJoJ8icIHOCzAkyJ8icIHOCzAkyJ8icIHOCzAkyJ8icIHPCpO+bt6Z6i/5bmO3tTbbWpJn/PTqccjl+cGgnyJwgc4LMCTInyJwgc4LMCTInyJwgc4LMCTInyJwgc4LMCS6lWBuXUiS4lIJ7JnOCzAkyJ8icIHOCzAkyJ8icIHOCzAkyJ8icIHOCzAkyJ0z6WcGY/cXZurewwnJ+spwfr3sXP+OvOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTNj3zZPfH38VfTw/WvYUVNj3zbGdn3VtYbba7u+4trLDpmbkXMieMZB7+vfzn5YuxwYfn5hluHzwZGBz7P2Ak8/Dv5fXl5djghvvy9t1tR26e4dhj/Hr6YWDKoZ0gc4LMCTInyJwgc4LMCTInyJwgc4LMCTInyJwgc4LMCTInyJzwPQAA///sAj6rx70XPwAAAABJRU5ErkJggg==";
    }
});