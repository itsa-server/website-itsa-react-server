webpackJsonp([ 11 ], {
    16: function(t, e, n) {
        "use strict";
        var i = "__itsa_view__databases";
        i && (i = null), t.exports = n(477);
    },
    441: function(t, e, n) {
        "use strict";
        function i(t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
        }
        function r(t, n) {
            return n = n || "on", n + e.capitalize(t);
        }
        function s(t) {
            var e = typeof t;
            return "function" === e || "object" === e && !!t;
        }
        function o(t) {
            if (!s(t)) return t;
            for (var e, n, i = 1, r = arguments.length; r > i; i++) {
                e = arguments[i];
                for (n in e) if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(t, n, o);
                } else t[n] = e[n];
            }
            return t;
        }
        function a(t) {
            return "function" == typeof t;
        }
        function c(t, e) {
            for (var n = {}, i = 0; i < t.length; i++) n[t[i]] = e[i];
            return n;
        }
        function u(t) {
            return "object" == typeof t && "callee" in t && "number" == typeof t.length;
        }
        function l(t, e) {
            if (t) throw Error(e || t);
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.capitalize = i, e.callbackName = r, e.isObject = s, e.extend = o, e.isFunction = a, 
        e.object = c, e.isArguments = u, e.throwIf = l, e.EventEmitter = n(458), e.nextTick = function(t) {
            setTimeout(t, 0);
        };
    },
    442: function(t, e, n) {
        "use strict";
        var i = n(441), r = n(450).instanceJoinCreator, s = function(t) {
            for (var e, n = 0, i = {}; n < (t.children || []).length; ++n) e = t.children[n], 
            t[e] && (i[e] = t[e]);
            return i;
        }, o = function a(t) {
            var e = {};
            for (var n in t) {
                var r = t[n], o = s(r), c = a(o);
                e[n] = r;
                for (var u in c) {
                    var l = c[u];
                    e[n + i.capitalize(u)] = l;
                }
            }
            return e;
        };
        t.exports = {
            hasListener: function(t) {
                for (var e, n, i, r = 0; r < (this.subscriptions || []).length; ++r) for (i = [].concat(this.subscriptions[r].listenable), 
                e = 0; e < i.length; e++) if (n = i[e], n === t || n.hasListener && n.hasListener(t)) return !0;
                return !1;
            },
            listenToMany: function(t) {
                var e = o(t);
                for (var n in e) {
                    var r = i.callbackName(n), s = this[r] ? r : this[n] ? n : void 0;
                    s && this.listenTo(e[n], s, this[r + "Default"] || this[s + "Default"] || s);
                }
            },
            validateListening: function(t) {
                return t === this ? "Listener is not able to listen to itself" : i.isFunction(t.listen) ? t.hasListener && t.hasListener(this) ? "Listener cannot listen to this listenable because of circular loop" : void 0 : t + " is missing a listen method";
            },
            listenTo: function(t, e, n) {
                var r, s, o, a = this.subscriptions = this.subscriptions || [];
                return i.throwIf(this.validateListening(t)), this.fetchInitialState(t, n), r = t.listen(this[e] || e, this), 
                s = function() {
                    var t = a.indexOf(o);
                    i.throwIf(-1 === t, "Tried to remove listen already gone from subscriptions list!"), 
                    a.splice(t, 1), r();
                }, o = {
                    stop: s,
                    listenable: t
                }, a.push(o), o;
            },
            stopListeningTo: function(t) {
                for (var e, n = 0, r = this.subscriptions || []; n < r.length; n++) if (e = r[n], 
                e.listenable === t) return e.stop(), i.throwIf(-1 !== r.indexOf(e), "Failed to remove listen from subscriptions list!"), 
                !0;
                return !1;
            },
            stopListeningToAll: function() {
                for (var t, e = this.subscriptions || []; t = e.length; ) e[0].stop(), i.throwIf(e.length !== t - 1, "Failed to remove listen from subscriptions list!");
            },
            fetchInitialState: function(t, e) {
                e = e && this[e] || e;
                var n = this;
                if (i.isFunction(e) && i.isFunction(t.getInitialState)) {
                    var r = t.getInitialState();
                    r && i.isFunction(r.then) ? r.then(function() {
                        e.apply(n, arguments);
                    }) : e.call(this, r);
                }
            },
            joinTrailing: r("last"),
            joinLeading: r("first"),
            joinConcat: r("all"),
            joinStrict: r("strict")
        };
    },
    443: function(t, e, n) {
        "use strict";
        var i = n(461);
        i.connect = n(463), i.connectFilter = n(464), i.ListenerMixin = n(446), i.listenTo = n(465), 
        i.listenToMany = n(466), t.exports = i;
    },
    444: function(t, e) {
        "use strict";
        e.createdStores = [], e.createdActions = [], e.reset = function() {
            for (;e.createdStores.length; ) e.createdStores.pop();
            for (;e.createdActions.length; ) e.createdActions.pop();
        };
    },
    445: function(t, e, n) {
        "use strict";
        var i = n(441);
        t.exports = {
            preEmit: function() {},
            shouldEmit: function() {
                return !0;
            },
            listen: function(t, e) {
                e = e || this;
                var n = function(n) {
                    r || t.apply(e, n);
                }, i = this, r = !1;
                return this.emitter.addListener(this.eventLabel, n), function() {
                    r = !0, i.emitter.removeListener(i.eventLabel, n);
                };
            },
            trigger: function() {
                var t = arguments, e = this.preEmit.apply(this, t);
                t = void 0 === e ? t : i.isArguments(e) ? e : [].concat(e), this.shouldEmit.apply(this, t) && this.emitter.emit(this.eventLabel, t);
            },
            triggerAsync: function() {
                var t = arguments, e = this;
                i.nextTick(function() {
                    e.trigger.apply(e, t);
                });
            },
            deferWith: function(t) {
                var e = this.trigger, n = this, i = function() {
                    e.apply(n, arguments);
                };
                this.trigger = function() {
                    t.apply(n, [ i ].concat([].splice.call(arguments, 0)));
                };
            }
        };
    },
    446: function(t, e, n) {
        "use strict";
        var i = n(441), r = n(442);
        t.exports = i.extend({
            componentWillUnmount: r.stopListeningToAll
        }, r);
    },
    447: function(t, e) {
        "use strict";
        t.exports = {};
    },
    448: function(t, e) {
        "use strict";
        t.exports = {};
    },
    449: function(t, e, n) {
        "use strict";
        var i = n(441), r = n(444), s = n(462), o = n(459), a = {
            preEmit: 1,
            shouldEmit: 1
        };
        t.exports = function(t) {
            function e() {
                var e, n = 0;
                if (this.subscriptions = [], this.emitter = new i.EventEmitter(), this.eventLabel = "change", 
                o(this, t), this.init && i.isFunction(this.init) && this.init(), this.listenables) for (e = [].concat(this.listenables); n < e.length; n++) this.listenToMany(e[n]);
            }
            var c = n(448), u = n(445), l = n(442);
            t = t || {};
            for (var f in c) if (!a[f] && (u[f] || l[f])) throw new Error("Cannot override API method " + f + " in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");
            for (var h in t) if (!a[h] && (u[h] || l[h])) throw new Error("Cannot override API method " + h + " in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");
            t = s(t), i.extend(e.prototype, l, u, c, t);
            var p = new e();
            return r.createdStores.push(p), p;
        };
    },
    450: function(t, e, n) {
        "use strict";
        function i(t, e, n) {
            return function() {
                var i, r = n.subscriptions, s = r ? r.indexOf(t) : -1;
                for (c.throwIf(-1 === s, "Tried to remove join already gone from subscriptions list!"), 
                i = 0; i < e.length; i++) e[i]();
                r.splice(s, 1);
            };
        }
        function r(t) {
            t.listenablesEmitted = new Array(t.numberOfListenables), t.args = new Array(t.numberOfListenables);
        }
        function s(t, e) {
            return function() {
                var n = u.call(arguments);
                if (e.listenablesEmitted[t]) switch (e.strategy) {
                  case "strict":
                    throw new Error("Strict join failed because listener triggered twice.");

                  case "last":
                    e.args[t] = n;
                    break;

                  case "all":
                    e.args[t].push(n);
                } else e.listenablesEmitted[t] = !0, e.args[t] = "all" === e.strategy ? [ n ] : n;
                o(e);
            };
        }
        function o(t) {
            for (var e = 0; e < t.numberOfListenables; e++) if (!t.listenablesEmitted[e]) return;
            t.callback.apply(t.listener, t.args), r(t);
        }
        var a = n(449), c = n(441), u = Array.prototype.slice, l = {
            strict: "joinStrict",
            first: "joinLeading",
            last: "joinTrailing",
            all: "joinConcat"
        };
        e.staticJoinCreator = function(t) {
            return function() {
                var e = u.call(arguments);
                return a({
                    init: function() {
                        this[l[t]].apply(this, e.concat("triggerAsync"));
                    }
                });
            };
        }, e.instanceJoinCreator = function(t) {
            return function() {
                c.throwIf(arguments.length < 2, "Cannot create a join with less than 2 listenables!");
                var e, n, o = u.call(arguments), a = o.pop(), l = o.length, f = {
                    numberOfListenables: l,
                    callback: this[a] || a,
                    listener: this,
                    strategy: t
                }, h = [];
                for (e = 0; l > e; e++) c.throwIf(this.validateListening(o[e]));
                for (e = 0; l > e; e++) h.push(o[e].listen(s(e, f), this));
                return r(f), n = {
                    listenable: o
                }, n.stop = i(n, h, this), this.subscriptions = (this.subscriptions || []).concat(n), 
                n;
            };
        };
    },
    451: function(t, e, n) {
        "use strict";
        var i, r = n(443), s = n(470);
        i = [ s.TOGGLE_MENU ], t.exports = r.createActions(i);
    },
    452: function(t, e, n) {
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
                var t = {
                    menuActivated: !1
                }, e = this.readStateFromClientStorage(t);
                return i = e.menuActivated, e;
            }
        });
        t.exports = a;
    },
    453: function(t, e) {},
    454: 453,
    455: function(t, e, n) {
        (function(e) {
            "use strict";
            var i, r = "undefined" != typeof e && "[object global]" === {}.toString.call(e) && (!e.document || "[object HTMLDocument]" !== {}.toString.call(e.document)), s = !1, o = r ? {} : window, a = n(457), c = n(456), u = "itsaRefluxClientStorage", l = 3600, f = function(t) {
                if (!s) {
                    s = !0;
                    var e = function(e) {
                        a(i, e[0]), c.setItem(u + t, {
                            time: Date.now(),
                            state: i
                        });
                    };
                    this.emitter.addListener("change", e);
                }
            }, h = function() {
                return o.history && o.history.pushState;
            }, p = {
                envBrowser: function() {
                    return !r;
                },
                readStateFromClientStorage: function(t, e) {
                    var r;
                    if (e ? t = "@" + t : (e = t, t = ""), this.envBrowser() && c) {
                        var s = n(223), o = s.getProps().__sessiontime;
                        h() || (o = Math.max(o, l)), r = c.getItem(u + t, !0), r && r.time && r.time > Date.now() - 1e3 * o && (e = a({}, e, r.state)), 
                        c.setItem(u + t, {
                            time: Date.now(),
                            state: e
                        }), f.call(this, t);
                    }
                    return i = a({}, e), e;
                }
            };
            t.exports = p;
        }).call(e, function() {
            return this;
        }());
    },
    456: function(t, e) {
        "use strict";
        var n = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/, i = function(t, e) {
            return n.test(e) ? new Date(e) : e;
        }, r = {
            getItem: function(t, e) {
                var n, r = localStorage.getItem(t);
                if (r) try {
                    n = JSON.parse(r, e ? i : null);
                } catch (s) {
                    n = {};
                }
                return n;
            },
            setItem: function(t, e) {
                try {
                    e = JSON.stringify(e), localStorage.setItem(t, e);
                } catch (n) {
                    return !1;
                }
                return !0;
            },
            removeItem: function(t) {
                try {
                    localStorage.removeItem(t);
                } catch (e) {
                    return !1;
                }
                return !0;
            }
        };
        t.exports = r;
    },
    457: 274,
    458: function(t, e, n) {
        "use strict";
        function i(t, e, n) {
            this.fn = t, this.context = e, this.once = n || !1;
        }
        function r() {}
        var s = "function" != typeof Object.create ? "~" : !1;
        r.prototype._events = void 0, r.prototype.listeners = function(t, e) {
            var n = s ? s + t : t, i = this._events && this._events[n];
            if (e) return !!i;
            if (!i) return [];
            if (i.fn) return [ i.fn ];
            for (var r = 0, o = i.length, a = new Array(o); o > r; r++) a[r] = i[r].fn;
            return a;
        }, r.prototype.emit = function(t, e, n, i, r, o) {
            var a = s ? s + t : t;
            if (!this._events || !this._events[a]) return !1;
            var c, u, l = this._events[a], f = arguments.length;
            if ("function" == typeof l.fn) {
                switch (l.once && this.removeListener(t, l.fn, void 0, !0), f) {
                  case 1:
                    return l.fn.call(l.context), !0;

                  case 2:
                    return l.fn.call(l.context, e), !0;

                  case 3:
                    return l.fn.call(l.context, e, n), !0;

                  case 4:
                    return l.fn.call(l.context, e, n, i), !0;

                  case 5:
                    return l.fn.call(l.context, e, n, i, r), !0;

                  case 6:
                    return l.fn.call(l.context, e, n, i, r, o), !0;
                }
                for (u = 1, c = new Array(f - 1); f > u; u++) c[u - 1] = arguments[u];
                l.fn.apply(l.context, c);
            } else {
                var h, p = l.length;
                for (u = 0; p > u; u++) switch (l[u].once && this.removeListener(t, l[u].fn, void 0, !0), 
                f) {
                  case 1:
                    l[u].fn.call(l[u].context);
                    break;

                  case 2:
                    l[u].fn.call(l[u].context, e);
                    break;

                  case 3:
                    l[u].fn.call(l[u].context, e, n);
                    break;

                  default:
                    if (!c) for (h = 1, c = new Array(f - 1); f > h; h++) c[h - 1] = arguments[h];
                    l[u].fn.apply(l[u].context, c);
                }
            }
            return !0;
        }, r.prototype.on = function(t, e, n) {
            var r = new i(e, n || this), o = s ? s + t : t;
            return this._events || (this._events = s ? {} : Object.create(null)), this._events[o] ? this._events[o].fn ? this._events[o] = [ this._events[o], r ] : this._events[o].push(r) : this._events[o] = r, 
            this;
        }, r.prototype.once = function(t, e, n) {
            var r = new i(e, n || this, !0), o = s ? s + t : t;
            return this._events || (this._events = s ? {} : Object.create(null)), this._events[o] ? this._events[o].fn ? this._events[o] = [ this._events[o], r ] : this._events[o].push(r) : this._events[o] = r, 
            this;
        }, r.prototype.removeListener = function(t, e, n, i) {
            var r = s ? s + t : t;
            if (!this._events || !this._events[r]) return this;
            var o = this._events[r], a = [];
            if (e) if (o.fn) (o.fn !== e || i && !o.once || n && o.context !== n) && a.push(o); else for (var c = 0, u = o.length; u > c; c++) (o[c].fn !== e || i && !o[c].once || n && o[c].context !== n) && a.push(o[c]);
            return a.length ? this._events[r] = 1 === a.length ? a[0] : a : delete this._events[r], 
            this;
        }, r.prototype.removeAllListeners = function(t) {
            return this._events ? (t ? delete this._events[s ? s + t : t] : this._events = s ? {} : Object.create(null), 
            this) : this;
        }, r.prototype.off = r.prototype.removeListener, r.prototype.addListener = r.prototype.on, 
        r.prototype.setMaxListeners = function() {
            return this;
        }, r.prefixed = s, t.exports = r;
    },
    459: function(t, e) {
        "use strict";
        t.exports = function(t, e) {
            for (var n in e) if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
                var i = Object.getOwnPropertyDescriptor(e, n);
                if (!i.value || "function" != typeof i.value || !e.hasOwnProperty(n)) continue;
                t[n] = e[n].bind(t);
            } else {
                var r = e[n];
                if ("function" != typeof r || !e.hasOwnProperty(n)) continue;
                t[n] = r.bind(t);
            }
            return t;
        };
    },
    460: function(t, e, n) {
        "use strict";
        var i = n(441), r = n(447), s = n(445), o = n(444), a = {
            preEmit: 1,
            shouldEmit: 1
        }, c = function u(t) {
            t = t || {}, i.isObject(t) || (t = {
                actionName: t
            });
            for (var e in r) if (!a[e] && s[e]) throw new Error("Cannot override API method " + e + " in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead.");
            for (var n in t) if (!a[n] && s[n]) throw new Error("Cannot override API method " + n + " in action creation. Use another method name or override it on Reflux.PublisherMethods instead.");
            t.children = t.children || [], t.asyncResult && (t.children = t.children.concat([ "completed", "failed" ]));
            for (var c = 0, l = {}; c < t.children.length; c++) {
                var f = t.children[c];
                l[f] = u(f);
            }
            var h = i.extend({
                eventLabel: "action",
                emitter: new i.EventEmitter(),
                _isAction: !0
            }, s, r, t), p = function m() {
                var t = m.sync ? "trigger" : "triggerAsync";
                return m[t].apply(m, arguments);
            };
            return i.extend(p, l, h), o.createdActions.push(p), p;
        };
        t.exports = c;
    },
    461: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
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
            var t = function(t, e) {
                Object.keys(t).forEach(function(n) {
                    var r = t[n];
                    e[n] = i.createAction(r);
                });
            };
            return function(e) {
                var n = {};
                return e instanceof Array ? e.forEach(function(e) {
                    s.isObject(e) ? t(e, n) : n[e] = i.createAction(e);
                }) : t(e, n), n;
            };
        }(), i.setEventEmitter = function(t) {
            i.EventEmitter = s.EventEmitter = t;
        }, i.nextTick = function(t) {
            s.nextTick = t;
        }, i.use = function(t) {
            t(i);
        }, i.__keep = n(444), !Function.prototype.bind, e["default"] = i, t.exports = e["default"];
    },
    462: function(t, e, n) {
        "use strict";
        var i = n(441);
        t.exports = function(t) {
            var e = {
                init: [],
                preEmit: [],
                shouldEmit: []
            }, n = function r(t) {
                var n = {};
                return t.mixins && t.mixins.forEach(function(t) {
                    i.extend(n, r(t));
                }), i.extend(n, t), Object.keys(e).forEach(function(n) {
                    t.hasOwnProperty(n) && e[n].push(t[n]);
                }), n;
            }(t);
            return e.init.length > 1 && (n.init = function() {
                var t = arguments;
                e.init.forEach(function(e) {
                    e.apply(this, t);
                }, this);
            }), e.preEmit.length > 1 && (n.preEmit = function() {
                return e.preEmit.reduce(function(t, e) {
                    var n = e.apply(this, t);
                    return void 0 === n ? t : [ n ];
                }.bind(this), arguments);
            }), e.shouldEmit.length > 1 && (n.shouldEmit = function() {
                var t = arguments;
                return !e.shouldEmit.some(function(e) {
                    return !e.apply(this, t);
                }, this);
            }), Object.keys(e).forEach(function(t) {
                1 === e[t].length && (n[t] = e[t][0]);
            }), n;
        };
    },
    463: function(t, e, n) {
        "use strict";
        var i = n(442), r = n(446), s = n(441);
        t.exports = function(t, e) {
            return {
                getInitialState: function() {
                    return s.isFunction(t.getInitialState) ? void 0 === e ? t.getInitialState() : s.object([ e ], [ t.getInitialState() ]) : {};
                },
                componentDidMount: function() {
                    s.extend(this, i);
                    var n = this, r = void 0 === e ? this.setState : function(t) {
                        ("undefined" == typeof n.isMounted || n.isMounted() === !0) && n.setState(s.object([ e ], [ t ]));
                    };
                    this.listenTo(t, r);
                },
                componentWillUnmount: r.componentWillUnmount
            };
        };
    },
    464: function(t, e, n) {
        "use strict";
        var i = n(442), r = n(446), s = n(441);
        t.exports = function(t, e, n) {
            return n = s.isFunction(e) ? e : n, {
                getInitialState: function() {
                    if (s.isFunction(t.getInitialState)) {
                        if (s.isFunction(e)) return n.call(this, t.getInitialState());
                        var i = n.call(this, t.getInitialState());
                        return "undefined" != typeof i ? s.object([ e ], [ i ]) : {};
                    }
                    return {};
                },
                componentDidMount: function() {
                    s.extend(this, i);
                    var r = this, o = function(t) {
                        if (s.isFunction(e)) r.setState(n.call(r, t)); else {
                            var i = n.call(r, t);
                            r.setState(s.object([ e ], [ i ]));
                        }
                    };
                    this.listenTo(t, o);
                },
                componentWillUnmount: r.componentWillUnmount
            };
        };
    },
    465: function(t, e, n) {
        "use strict";
        var i = n(442);
        t.exports = function(t, e, n) {
            return {
                componentDidMount: function() {
                    for (var r in i) if (this[r] !== i[r]) {
                        if (this[r]) throw "Can't have other property '" + r + "' when using Reflux.listenTo!";
                        this[r] = i[r];
                    }
                    this.listenTo(t, e, n);
                },
                componentWillUnmount: i.stopListeningToAll
            };
        };
    },
    466: function(t, e, n) {
        "use strict";
        var i = n(442);
        t.exports = function(t) {
            return {
                componentDidMount: function() {
                    for (var e in i) if (this[e] !== i[e]) {
                        if (this[e]) throw "Can't have other property '" + e + "' when using Reflux.listenToMany!";
                        this[e] = i[e];
                    }
                    this.listenToMany(t);
                },
                componentWillUnmount: i.stopListeningToAll
            };
        };
    },
    467: function(t, e, n) {
        "use strict";
        var i = n(222), r = "pure-menu-list", s = "pure-menu-item", o = "pure-menu-selected", a = "pure-menu-link", c = i.createClass({
            displayName: "LanguageMenu",
            render: function() {
                var t = [], e = Object.keys(this.props.__languages), n = this;
                return e.forEach(function(e) {
                    n.props.__languages[e] !== !1 && t.push(e);
                }), i.createElement("ul", {
                    className: r
                }, t.map(function(t) {
                    var e = s + (n.props.__lang === t ? " " + o : ""), r = "/" + t + n.props.__uri, c = t.toUpperCase();
                    return i.createElement("li", {
                        key: t,
                        className: e
                    }, i.createElement("a", {
                        href: r,
                        "data-setlang": t,
                        className: a
                    }, c));
                }));
            }
        });
        t.exports = c;
    },
    468: function(t, e, n) {
        "use strict";
        n(453), n(471);
        var i = n(222), r = n(443), s = n(452), o = n(451), a = [ "installation", "configuration" ], c = [ "pages", "models", "async-models", "client-model", "actions", "controller", "router", "appfile", "different-devices", "markdown", "i18n", "databases" ], u = [ "developing", "production", "gulp" ], l = "pure-menu-", f = l + "link", h = l + "item", p = l + "heading", m = l + "list", v = " " + l + "selected", d = i.createClass({
            displayName: "Menu",
            mixins: [ r.connect(s) ],
            render: function() {
                var t = this, e = "menu-link" + (this.state.menuActivated ? " active" : "");
                return i.createElement("div", null, i.createElement("a", {
                    className: e,
                    onClick: o.toggleMenu
                }, i.createElement("span", null)), i.createElement("div", {
                    id: "leftmenu"
                }, i.createElement("div", {
                    className: "pure-menu"
                }, i.createElement("a", {
                    className: p
                }, this.props.messages.setup), i.createElement("ul", {
                    className: m
                }, a.map(function(e) {
                    var n = h + (t.props.__path === "/" + e ? v : ""), r = t.props.__langprefix + "/" + e, s = t.props.messages[e];
                    return i.createElement("li", {
                        key: e,
                        className: n
                    }, i.createElement("a", {
                        href: r,
                        className: f
                    }, s));
                })), i.createElement("a", {
                    className: p
                }, this.props.messages.create), i.createElement("ul", {
                    className: m
                }, c.map(function(e) {
                    var n = h + (t.props.__path === "/" + e ? v : ""), r = t.props.__langprefix + "/" + e, s = t.props.messages[e];
                    return i.createElement("li", {
                        key: e,
                        className: n
                    }, i.createElement("a", {
                        href: r,
                        className: f
                    }, s));
                })), i.createElement("a", {
                    className: p
                }, this.props.messages.build), i.createElement("ul", {
                    className: m
                }, u.map(function(e) {
                    var n = h + (t.props.__path === "/" + e ? v : ""), r = t.props.__langprefix + "/" + e, s = t.props.messages[e];
                    return i.createElement("li", {
                        key: e,
                        className: n
                    }, i.createElement("a", {
                        href: r,
                        className: f
                    }, s));
                })))));
            }
        });
        t.exports = d;
    },
    469: function(t, e, n) {
        "use strict";
        n(453), n(454), n(473);
        var i = n(467), r = n(222), s = [ "/" ], o = n(474), a = r.createClass({
            displayName: "Menu",
            render: function() {
                var t = {}, e = {}, n = this;
                return s.forEach(function(i) {
                    t[i] = "pure-menu-item" + (n.props.__path === i ? " menu-item-invisible" : ""), 
                    e[i] = n.props.__langprefix + i;
                }), r.createElement("div", {
                    className: "top-menu pure-g pure-menu pure-menu-horizontal pure-menu-fixed"
                }, r.createElement("div", {
                    className: "pure-u-5-12"
                }, r.createElement("img", {
                    src: o
                })), r.createElement("div", {
                    className: "pure-u-1-6 center"
                }, r.createElement("div", {
                    className: t["/"]
                }, r.createElement("a", {
                    href: e["/"],
                    className: "pure-menu-link"
                }, "« home"))), r.createElement("div", {
                    className: "pure-u-5-12 right"
                }, r.createElement(i, this.props)));
            }
        });
        t.exports = a;
    },
    470: function(t, e) {
        "use strict";
        var n = {
            TOGGLE_MENU: "toggleMenu"
        };
        t.exports = n;
    },
    471: 453,
    472: 453,
    473: 453,
    474: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASxQTFRF5Rsk//////z84gUP6DM74AAA8o2S5BAZ5BQe5Roj4QAA+9vd9Jqe5Rgh97W44gAI85qe+9ze5BYf//7+3wAA4wsU4gAK6UBI4gQO5Rwl6DA4+c7Q5BQd//395BEa5Roi+9nb85OX+L3A3QAA6khQ5h8o8ouQ4gIL5Rcg85yg9q6x5R8o5RYf4gAJ6TpC5Bcg+97f5BMe97C0/Ofo4gAG5A8Y5R4o+93f/Ofp5BIc5A4X4w4S4wwW4w0W5BMc4w4X5A8Z4gMM+MDD6UNL5BUe5Rki9KKn/OPk5iAr85SZ5BMd8oyR4gAH9qms8pGV4wYP7FRb5BYg9Jmd4wgS8HuB6DU96DQ89aWp6DI68o6S+dLU5R4m5y835ycw4gYQ4QAB4wUO+97g//v75R0mVn9+cQAAAQ5JREFUeNpiYBgFBIAZuwQzHiARLCkJUagRG8qCB4TFcHJCFLJ6CzPhAbIKHOxQhZ6MeIEFhylUIRt+hdxwE0lSKBzux4MBgiITMRQyySlzYQJlX0yFERKcGEDDhw9ToaoIZliri2hhKlTRxgxrKXklTF/LYg1tYfKDh3iFxFpNtGeIDx4WZswkzcvPh1Whhz8rEoiXTMal0DqADQmE8OrgUijihhIsXla4FKIGKFB+SCtUQ1aoYCmHrhAknyQVx8CliKzQndPe1cQIpNAQqhAsL6znyMmliazQONpGJ8EJyDAIdACrg8o763JyCaC40YXdzjYKyDDXZ4cqBMuLi6EpFBRilxGVhjBooRAgwADWTCbgZ9jExQAAAABJRU5ErkJggg==";
    },
    475: 453,
    476: 453,
    477: function(t, e, n) {
        "use strict";
        n(472), n(476), n(475);
        var i = n(222), r = n(469), s = n(468), o = n(443), a = n(452), c = i.createClass({
            displayName: "Body",
            mixins: [ o.connect(a) ],
            render: function() {
                var t = this.state.menuActivated ? "active" : "";
                return i.createElement("div", {
                    className: t
                }, i.createElement(r, this.props), i.createElement(s, this.props), i.createElement("div", {
                    className: "main"
                }, i.createElement("h1", {
                    className: "header",
                    dangerouslySetInnerHTML: this.props.pageheader
                }), i.createElement("div", {
                    className: "content",
                    dangerouslySetInnerHTML: this.props.pagecontent
                })));
            }
        });
        t.exports = c;
    }
});