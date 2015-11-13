webpackJsonp([ 3 ], {
    22: function(e, t, n) {
        "use strict";
        var r = "__itsa_view__installation";
        r && (r = null), n(478), n(472), n(476), n(475);
        var a = n(222), l = n(469), s = n(468), c = n(443), o = n(452), i = a.createClass({
            displayName: "Body",
            mixins: [ c.connect(o) ],
            render: function() {
                var e = this.state.menuActivated ? "active" : "";
                return a.createElement("div", {
                    className: e
                }, a.createElement(l, this.props), a.createElement(s, this.props), a.createElement("div", {
                    className: "main"
                }, a.createElement("h1", {
                    className: "header",
                    dangerouslySetInnerHTML: this.props.pageheader
                }), a.createElement("div", {
                    className: "content",
                    dangerouslySetInnerHTML: this.props.pagecontent
                }), a.createElement("table", null, a.createElement("tbody", null, a.createElement("tr", null, a.createElement("td", {
                    colSpan: "2",
                    className: "border"
                }, '"Appname"'), a.createElement("td", {
                    colSpan: "5",
                    className: "special"
                }, "<—root-folder of your webapplication")), a.createElement("tr", null, a.createElement("td", null), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    colSpan: "5"
                })), a.createElement("tr", null, a.createElement("td", null), a.createElement("td", {
                    className: "left-border"
                }, "————"), a.createElement("td", {
                    colSpan: "2",
                    className: "border"
                }, "lib"), a.createElement("td", {
                    colSpan: "3",
                    className: "special"
                }, "<—system folder")), a.createElement("tr", null, a.createElement("td", null), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    colSpan: "5"
                })), a.createElement("tr", null, a.createElement("td", null), a.createElement("td", {
                    className: "left-border"
                }, "————"), a.createElement("td", {
                    colSpan: "2",
                    className: "border"
                }, "public_server"), a.createElement("td", {
                    className: "special",
                    colSpan: "3"
                }, "<—this folder should be uploaded to your server")), a.createElement("tr", null, a.createElement("td", null), a.createElement("td", {
                    colSpan: "2",
                    className: "left-border"
                }), a.createElement("td", {
                    className: "left-border module"
                }, "—server.js"), a.createElement("td", {
                    colSpan: "3"
                })), a.createElement("tr", null, a.createElement("td", null), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    colSpan: "5"
                })), a.createElement("tr", null, a.createElement("td", null), a.createElement("td", {
                    className: "left-border"
                }, "————"), a.createElement("td", {
                    colSpan: "2",
                    className: "border"
                }, "src"), a.createElement("td", {
                    colSpan: "3"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "3"
                }), a.createElement("td", {
                    colSpan: "4",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "3"
                }), a.createElement("td", {
                    className: "left-border"
                }, "———"), a.createElement("td", {
                    className: "border special"
                }, "0.0.0-rc.0"), a.createElement("td", {
                    colSpan: "2",
                    className: "special"
                }, "<—your development version")), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    colSpan: "3",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }, "———————————"), a.createElement("td", {
                    className: "border module"
                }, "actions"), a.createElement("td", null)), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    colSpan: "3",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }, "———————————"), a.createElement("td", {
                    className: "border module"
                }, "assets"), a.createElement("td", null)), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    colSpan: "2",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    className: "left-border"
                }, "—————————"), a.createElement("td", {
                    className: "border module"
                }, "css")), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    colSpan: "2",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    className: "left-border"
                }, "—————————"), a.createElement("td", {
                    className: "border module"
                }, "images")), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    className: "left-border module"
                }, "—favicon.ico"), a.createElement("td", null)), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    colSpan: "3",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }, "———————————"), a.createElement("td", {
                    className: "border module"
                }, "languages"), a.createElement("td", null)), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    className: "left-border module"
                }, "—en.json"), a.createElement("td", null)), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    colSpan: "3",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }, "———————————"), a.createElement("td", {
                    className: "border module"
                }, "markdowns"), a.createElement("td", null)), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    colSpan: "2",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    className: "left-border"
                }, "—————————"), a.createElement("td", {
                    className: "border module"
                }, "en")), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", null), a.createElement("td", {
                    className: "left-border module"
                }, "—index.MD")), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    colSpan: "3",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }, "———————————"), a.createElement("td", {
                    className: "border module"
                }, "models"), a.createElement("td", null)), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    className: "left-border module"
                }, "—index.js"), a.createElement("td", null)), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    colSpan: "3",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }, "———————————"), a.createElement("td", {
                    className: "border module"
                }, "modules"), a.createElement("td", null)), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    colSpan: "3",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }, "———————————"), a.createElement("td", {
                    className: "border module"
                }, "pageapps"), a.createElement("td", null)), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    colSpan: "3",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }, "———————————"), a.createElement("td", {
                    className: "border module"
                }, "pagetitles"), a.createElement("td", null)), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    className: "left-border module"
                }, "—en.json"), a.createElement("td", null)), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    colSpan: "3",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }, "———————————"), a.createElement("td", {
                    className: "border module"
                }, "reflux"), a.createElement("td", null)), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    colSpan: "2",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    className: "left-border"
                }, "—————————"), a.createElement("td", {
                    className: "border module"
                }, "actions")), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", null), a.createElement("td", {
                    className: "left-border module"
                }, "—app-actions.js")), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    colSpan: "2",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    className: "left-border"
                }, "—————————"), a.createElement("td", {
                    className: "border module"
                }, "constants")), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", null), a.createElement("td", {
                    className: "left-border module"
                }, "—app-constants.js")), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    colSpan: "2",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    className: "left-border"
                }, "—————————"), a.createElement("td", {
                    className: "border module"
                }, "stores")), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", null), a.createElement("td", {
                    className: "left-border module"
                }, "—app-store.js")), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    colSpan: "3",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }, "———————————"), a.createElement("td", {
                    className: "border module"
                }, "views"), a.createElement("td", null)), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border"
                }), a.createElement("td", {
                    className: "left-border module"
                }, "—index.jsx"), a.createElement("td", null)), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    colSpan: "3",
                    className: "left-border"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border module"
                }, "—app.js"), a.createElement("td", {
                    colSpan: "2"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border module"
                }, "—file404.html"), a.createElement("td", {
                    colSpan: "2"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border module"
                }, "—reactserver.config.json"), a.createElement("td", {
                    colSpan: "2"
                })), a.createElement("tr", null, a.createElement("td", {
                    colSpan: "4"
                }), a.createElement("td", {
                    className: "left-border module"
                }, "—routes.js"), a.createElement("td", {
                    colSpan: "2"
                }))))));
            }
        });
        e.exports = i;
    },
    441: function(e, t, n) {
        "use strict";
        function r(e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        }
        function a(e, n) {
            return n = n || "on", n + t.capitalize(e);
        }
        function l(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e;
        }
        function s(e) {
            if (!l(e)) return e;
            for (var t, n, r = 1, a = arguments.length; a > r; r++) {
                t = arguments[r];
                for (n in t) if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
                    var s = Object.getOwnPropertyDescriptor(t, n);
                    Object.defineProperty(e, n, s);
                } else e[n] = t[n];
            }
            return e;
        }
        function c(e) {
            return "function" == typeof e;
        }
        function o(e, t) {
            for (var n = {}, r = 0; r < e.length; r++) n[e[r]] = t[r];
            return n;
        }
        function i(e) {
            return "object" == typeof e && "callee" in e && "number" == typeof e.length;
        }
        function m(e, t) {
            if (e) throw Error(t || e);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.capitalize = r, t.callbackName = a, t.isObject = l, t.extend = s, t.isFunction = c, 
        t.object = o, t.isArguments = i, t.throwIf = m, t.EventEmitter = n(458), t.nextTick = function(e) {
            setTimeout(e, 0);
        };
    },
    442: function(e, t, n) {
        "use strict";
        var r = n(441), a = n(450).instanceJoinCreator, l = function(e) {
            for (var t, n = 0, r = {}; n < (e.children || []).length; ++n) t = e.children[n], 
            e[t] && (r[t] = e[t]);
            return r;
        }, s = function c(e) {
            var t = {};
            for (var n in e) {
                var a = e[n], s = l(a), o = c(s);
                t[n] = a;
                for (var i in o) {
                    var m = o[i];
                    t[n + r.capitalize(i)] = m;
                }
            }
            return t;
        };
        e.exports = {
            hasListener: function(e) {
                for (var t, n, r, a = 0; a < (this.subscriptions || []).length; ++a) for (r = [].concat(this.subscriptions[a].listenable), 
                t = 0; t < r.length; t++) if (n = r[t], n === e || n.hasListener && n.hasListener(e)) return !0;
                return !1;
            },
            listenToMany: function(e) {
                var t = s(e);
                for (var n in t) {
                    var a = r.callbackName(n), l = this[a] ? a : this[n] ? n : void 0;
                    l && this.listenTo(t[n], l, this[a + "Default"] || this[l + "Default"] || l);
                }
            },
            validateListening: function(e) {
                return e === this ? "Listener is not able to listen to itself" : r.isFunction(e.listen) ? e.hasListener && e.hasListener(this) ? "Listener cannot listen to this listenable because of circular loop" : void 0 : e + " is missing a listen method";
            },
            listenTo: function(e, t, n) {
                var a, l, s, c = this.subscriptions = this.subscriptions || [];
                return r.throwIf(this.validateListening(e)), this.fetchInitialState(e, n), a = e.listen(this[t] || t, this), 
                l = function() {
                    var e = c.indexOf(s);
                    r.throwIf(-1 === e, "Tried to remove listen already gone from subscriptions list!"), 
                    c.splice(e, 1), a();
                }, s = {
                    stop: l,
                    listenable: e
                }, c.push(s), s;
            },
            stopListeningTo: function(e) {
                for (var t, n = 0, a = this.subscriptions || []; n < a.length; n++) if (t = a[n], 
                t.listenable === e) return t.stop(), r.throwIf(-1 !== a.indexOf(t), "Failed to remove listen from subscriptions list!"), 
                !0;
                return !1;
            },
            stopListeningToAll: function() {
                for (var e, t = this.subscriptions || []; e = t.length; ) t[0].stop(), r.throwIf(t.length !== e - 1, "Failed to remove listen from subscriptions list!");
            },
            fetchInitialState: function(e, t) {
                t = t && this[t] || t;
                var n = this;
                if (r.isFunction(t) && r.isFunction(e.getInitialState)) {
                    var a = e.getInitialState();
                    a && r.isFunction(a.then) ? a.then(function() {
                        t.apply(n, arguments);
                    }) : t.call(this, a);
                }
            },
            joinTrailing: a("last"),
            joinLeading: a("first"),
            joinConcat: a("all"),
            joinStrict: a("strict")
        };
    },
    443: function(e, t, n) {
        "use strict";
        var r = n(461);
        r.connect = n(463), r.connectFilter = n(464), r.ListenerMixin = n(446), r.listenTo = n(465), 
        r.listenToMany = n(466), e.exports = r;
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
        var r = n(441);
        e.exports = {
            preEmit: function() {},
            shouldEmit: function() {
                return !0;
            },
            listen: function(e, t) {
                t = t || this;
                var n = function(n) {
                    a || e.apply(t, n);
                }, r = this, a = !1;
                return this.emitter.addListener(this.eventLabel, n), function() {
                    a = !0, r.emitter.removeListener(r.eventLabel, n);
                };
            },
            trigger: function() {
                var e = arguments, t = this.preEmit.apply(this, e);
                e = void 0 === t ? e : r.isArguments(t) ? t : [].concat(t), this.shouldEmit.apply(this, e) && this.emitter.emit(this.eventLabel, e);
            },
            triggerAsync: function() {
                var e = arguments, t = this;
                r.nextTick(function() {
                    t.trigger.apply(t, e);
                });
            },
            deferWith: function(e) {
                var t = this.trigger, n = this, r = function() {
                    t.apply(n, arguments);
                };
                this.trigger = function() {
                    e.apply(n, [ r ].concat([].splice.call(arguments, 0)));
                };
            }
        };
    },
    446: function(e, t, n) {
        "use strict";
        var r = n(441), a = n(442);
        e.exports = r.extend({
            componentWillUnmount: a.stopListeningToAll
        }, a);
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
        var r = n(441), a = n(444), l = n(462), s = n(459), c = {
            preEmit: 1,
            shouldEmit: 1
        };
        e.exports = function(e) {
            function t() {
                var t, n = 0;
                if (this.subscriptions = [], this.emitter = new r.EventEmitter(), this.eventLabel = "change", 
                s(this, e), this.init && r.isFunction(this.init) && this.init(), this.listenables) for (t = [].concat(this.listenables); n < t.length; n++) this.listenToMany(t[n]);
            }
            var o = n(448), i = n(445), m = n(442);
            e = e || {};
            for (var u in o) if (!c[u] && (i[u] || m[u])) throw new Error("Cannot override API method " + u + " in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");
            for (var d in e) if (!c[d] && (i[d] || m[d])) throw new Error("Cannot override API method " + d + " in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");
            e = l(e), r.extend(t.prototype, m, i, o, e);
            var f = new t();
            return a.createdStores.push(f), f;
        };
    },
    450: function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return function() {
                var r, a = n.subscriptions, l = a ? a.indexOf(e) : -1;
                for (o.throwIf(-1 === l, "Tried to remove join already gone from subscriptions list!"), 
                r = 0; r < t.length; r++) t[r]();
                a.splice(l, 1);
            };
        }
        function a(e) {
            e.listenablesEmitted = new Array(e.numberOfListenables), e.args = new Array(e.numberOfListenables);
        }
        function l(e, t) {
            return function() {
                var n = i.call(arguments);
                if (t.listenablesEmitted[e]) switch (t.strategy) {
                  case "strict":
                    throw new Error("Strict join failed because listener triggered twice.");

                  case "last":
                    t.args[e] = n;
                    break;

                  case "all":
                    t.args[e].push(n);
                } else t.listenablesEmitted[e] = !0, t.args[e] = "all" === t.strategy ? [ n ] : n;
                s(t);
            };
        }
        function s(e) {
            for (var t = 0; t < e.numberOfListenables; t++) if (!e.listenablesEmitted[t]) return;
            e.callback.apply(e.listener, e.args), a(e);
        }
        var c = n(449), o = n(441), i = Array.prototype.slice, m = {
            strict: "joinStrict",
            first: "joinLeading",
            last: "joinTrailing",
            all: "joinConcat"
        };
        t.staticJoinCreator = function(e) {
            return function() {
                var t = i.call(arguments);
                return c({
                    init: function() {
                        this[m[e]].apply(this, t.concat("triggerAsync"));
                    }
                });
            };
        }, t.instanceJoinCreator = function(e) {
            return function() {
                o.throwIf(arguments.length < 2, "Cannot create a join with less than 2 listenables!");
                var t, n, s = i.call(arguments), c = s.pop(), m = s.length, u = {
                    numberOfListenables: m,
                    callback: this[c] || c,
                    listener: this,
                    strategy: e
                }, d = [];
                for (t = 0; m > t; t++) o.throwIf(this.validateListening(s[t]));
                for (t = 0; m > t; t++) d.push(s[t].listen(l(t, u), this));
                return a(u), n = {
                    listenable: s
                }, n.stop = r(n, d, this), this.subscriptions = (this.subscriptions || []).concat(n), 
                n;
            };
        };
    },
    451: function(e, t, n) {
        "use strict";
        var r, a = n(443), l = n(470);
        r = [ l.TOGGLE_MENU ], e.exports = a.createActions(r);
    },
    452: function(e, t, n) {
        "use strict";
        var r, a = n(443), l = n(451), s = n(455), c = a.createStore({
            mixins: [ s ],
            listenables: [ l ],
            onToggleMenu: function() {
                r = !r, this.trigger({
                    menuActivated: r
                });
            },
            getInitialState: function() {
                var e = {
                    menuActivated: !1
                }, t = this.readStateFromClientStorage(e);
                return r = t.menuActivated, t;
            }
        });
        e.exports = c;
    },
    453: function(e, t) {},
    454: 453,
    455: function(e, t, n) {
        (function(t) {
            "use strict";
            var r, a = "undefined" != typeof t && "[object global]" === {}.toString.call(t) && (!t.document || "[object HTMLDocument]" !== {}.toString.call(t.document)), l = !1, s = a ? {} : window, c = n(457), o = n(456), i = "itsaRefluxClientStorage", m = 3600, u = function(e) {
                if (!l) {
                    l = !0;
                    var t = function(t) {
                        c(r, t[0]), o.setItem(i + e, {
                            time: Date.now(),
                            state: r
                        });
                    };
                    this.emitter.addListener("change", t);
                }
            }, d = function() {
                return s.history && s.history.pushState;
            }, f = {
                envBrowser: function() {
                    return !a;
                },
                readStateFromClientStorage: function(e, t) {
                    var a;
                    if (t ? e = "@" + e : (t = e, e = ""), this.envBrowser() && o) {
                        var l = n(223), s = l.getProps().__sessiontime;
                        d() || (s = Math.max(s, m)), a = o.getItem(i + e, !0), a && a.time && a.time > Date.now() - 1e3 * s && (t = c({}, t, a.state)), 
                        o.setItem(i + e, {
                            time: Date.now(),
                            state: t
                        }), u.call(this, e);
                    }
                    return r = c({}, t), t;
                }
            };
            e.exports = f;
        }).call(t, function() {
            return this;
        }());
    },
    456: function(e, t) {
        "use strict";
        var n = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/, r = function(e, t) {
            return n.test(t) ? new Date(t) : t;
        }, a = {
            getItem: function(e, t) {
                var n, a = localStorage.getItem(e);
                if (a) try {
                    n = JSON.parse(a, t ? r : null);
                } catch (l) {
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
        e.exports = a;
    },
    457: 274,
    458: function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            this.fn = e, this.context = t, this.once = n || !1;
        }
        function a() {}
        var l = "function" != typeof Object.create ? "~" : !1;
        a.prototype._events = void 0, a.prototype.listeners = function(e, t) {
            var n = l ? l + e : e, r = this._events && this._events[n];
            if (t) return !!r;
            if (!r) return [];
            if (r.fn) return [ r.fn ];
            for (var a = 0, s = r.length, c = new Array(s); s > a; a++) c[a] = r[a].fn;
            return c;
        }, a.prototype.emit = function(e, t, n, r, a, s) {
            var c = l ? l + e : e;
            if (!this._events || !this._events[c]) return !1;
            var o, i, m = this._events[c], u = arguments.length;
            if ("function" == typeof m.fn) {
                switch (m.once && this.removeListener(e, m.fn, void 0, !0), u) {
                  case 1:
                    return m.fn.call(m.context), !0;

                  case 2:
                    return m.fn.call(m.context, t), !0;

                  case 3:
                    return m.fn.call(m.context, t, n), !0;

                  case 4:
                    return m.fn.call(m.context, t, n, r), !0;

                  case 5:
                    return m.fn.call(m.context, t, n, r, a), !0;

                  case 6:
                    return m.fn.call(m.context, t, n, r, a, s), !0;
                }
                for (i = 1, o = new Array(u - 1); u > i; i++) o[i - 1] = arguments[i];
                m.fn.apply(m.context, o);
            } else {
                var d, f = m.length;
                for (i = 0; f > i; i++) switch (m[i].once && this.removeListener(e, m[i].fn, void 0, !0), 
                u) {
                  case 1:
                    m[i].fn.call(m[i].context);
                    break;

                  case 2:
                    m[i].fn.call(m[i].context, t);
                    break;

                  case 3:
                    m[i].fn.call(m[i].context, t, n);
                    break;

                  default:
                    if (!o) for (d = 1, o = new Array(u - 1); u > d; d++) o[d - 1] = arguments[d];
                    m[i].fn.apply(m[i].context, o);
                }
            }
            return !0;
        }, a.prototype.on = function(e, t, n) {
            var a = new r(t, n || this), s = l ? l + e : e;
            return this._events || (this._events = l ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [ this._events[s], a ] : this._events[s].push(a) : this._events[s] = a, 
            this;
        }, a.prototype.once = function(e, t, n) {
            var a = new r(t, n || this, !0), s = l ? l + e : e;
            return this._events || (this._events = l ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [ this._events[s], a ] : this._events[s].push(a) : this._events[s] = a, 
            this;
        }, a.prototype.removeListener = function(e, t, n, r) {
            var a = l ? l + e : e;
            if (!this._events || !this._events[a]) return this;
            var s = this._events[a], c = [];
            if (t) if (s.fn) (s.fn !== t || r && !s.once || n && s.context !== n) && c.push(s); else for (var o = 0, i = s.length; i > o; o++) (s[o].fn !== t || r && !s[o].once || n && s[o].context !== n) && c.push(s[o]);
            return c.length ? this._events[a] = 1 === c.length ? c[0] : c : delete this._events[a], 
            this;
        }, a.prototype.removeAllListeners = function(e) {
            return this._events ? (e ? delete this._events[l ? l + e : e] : this._events = l ? {} : Object.create(null), 
            this) : this;
        }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, 
        a.prototype.setMaxListeners = function() {
            return this;
        }, a.prefixed = l, e.exports = a;
    },
    459: function(e, t) {
        "use strict";
        e.exports = function(e, t) {
            for (var n in t) if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
                var r = Object.getOwnPropertyDescriptor(t, n);
                if (!r.value || "function" != typeof r.value || !t.hasOwnProperty(n)) continue;
                e[n] = t[n].bind(e);
            } else {
                var a = t[n];
                if ("function" != typeof a || !t.hasOwnProperty(n)) continue;
                e[n] = a.bind(e);
            }
            return e;
        };
    },
    460: function(e, t, n) {
        "use strict";
        var r = n(441), a = n(447), l = n(445), s = n(444), c = {
            preEmit: 1,
            shouldEmit: 1
        }, o = function i(e) {
            e = e || {}, r.isObject(e) || (e = {
                actionName: e
            });
            for (var t in a) if (!c[t] && l[t]) throw new Error("Cannot override API method " + t + " in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead.");
            for (var n in e) if (!c[n] && l[n]) throw new Error("Cannot override API method " + n + " in action creation. Use another method name or override it on Reflux.PublisherMethods instead.");
            e.children = e.children || [], e.asyncResult && (e.children = e.children.concat([ "completed", "failed" ]));
            for (var o = 0, m = {}; o < e.children.length; o++) {
                var u = e.children[o];
                m[u] = i(u);
            }
            var d = r.extend({
                eventLabel: "action",
                emitter: new r.EventEmitter(),
                _isAction: !0
            }, l, a, e), f = function p() {
                var e = p.sync ? "trigger" : "triggerAsync";
                return p[e].apply(p, arguments);
            };
            return r.extend(f, m, d), s.createdActions.push(f), f;
        };
        e.exports = o;
    },
    461: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = {
            version: {
                "reflux-core": "0.3.0"
            }
        };
        r.ActionMethods = n(447), r.ListenerMethods = n(442), r.PublisherMethods = n(445), 
        r.StoreMethods = n(448), r.createAction = n(460), r.createStore = n(449);
        var a = n(450).staticJoinCreator;
        r.joinTrailing = r.all = a("last"), r.joinLeading = a("first"), r.joinStrict = a("strict"), 
        r.joinConcat = a("all");
        var l = r.utils = n(441);
        r.EventEmitter = l.EventEmitter, r.Promise = l.Promise, r.createActions = function() {
            var e = function(e, t) {
                Object.keys(e).forEach(function(n) {
                    var a = e[n];
                    t[n] = r.createAction(a);
                });
            };
            return function(t) {
                var n = {};
                return t instanceof Array ? t.forEach(function(t) {
                    l.isObject(t) ? e(t, n) : n[t] = r.createAction(t);
                }) : e(t, n), n;
            };
        }(), r.setEventEmitter = function(e) {
            r.EventEmitter = l.EventEmitter = e;
        }, r.nextTick = function(e) {
            l.nextTick = e;
        }, r.use = function(e) {
            e(r);
        }, r.__keep = n(444), !Function.prototype.bind, t["default"] = r, e.exports = t["default"];
    },
    462: function(e, t, n) {
        "use strict";
        var r = n(441);
        e.exports = function(e) {
            var t = {
                init: [],
                preEmit: [],
                shouldEmit: []
            }, n = function a(e) {
                var n = {};
                return e.mixins && e.mixins.forEach(function(e) {
                    r.extend(n, a(e));
                }), r.extend(n, e), Object.keys(t).forEach(function(n) {
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
        var r = n(442), a = n(446), l = n(441);
        e.exports = function(e, t) {
            return {
                getInitialState: function() {
                    return l.isFunction(e.getInitialState) ? void 0 === t ? e.getInitialState() : l.object([ t ], [ e.getInitialState() ]) : {};
                },
                componentDidMount: function() {
                    l.extend(this, r);
                    var n = this, a = void 0 === t ? this.setState : function(e) {
                        ("undefined" == typeof n.isMounted || n.isMounted() === !0) && n.setState(l.object([ t ], [ e ]));
                    };
                    this.listenTo(e, a);
                },
                componentWillUnmount: a.componentWillUnmount
            };
        };
    },
    464: function(e, t, n) {
        "use strict";
        var r = n(442), a = n(446), l = n(441);
        e.exports = function(e, t, n) {
            return n = l.isFunction(t) ? t : n, {
                getInitialState: function() {
                    if (l.isFunction(e.getInitialState)) {
                        if (l.isFunction(t)) return n.call(this, e.getInitialState());
                        var r = n.call(this, e.getInitialState());
                        return "undefined" != typeof r ? l.object([ t ], [ r ]) : {};
                    }
                    return {};
                },
                componentDidMount: function() {
                    l.extend(this, r);
                    var a = this, s = function(e) {
                        if (l.isFunction(t)) a.setState(n.call(a, e)); else {
                            var r = n.call(a, e);
                            a.setState(l.object([ t ], [ r ]));
                        }
                    };
                    this.listenTo(e, s);
                },
                componentWillUnmount: a.componentWillUnmount
            };
        };
    },
    465: function(e, t, n) {
        "use strict";
        var r = n(442);
        e.exports = function(e, t, n) {
            return {
                componentDidMount: function() {
                    for (var a in r) if (this[a] !== r[a]) {
                        if (this[a]) throw "Can't have other property '" + a + "' when using Reflux.listenTo!";
                        this[a] = r[a];
                    }
                    this.listenTo(e, t, n);
                },
                componentWillUnmount: r.stopListeningToAll
            };
        };
    },
    466: function(e, t, n) {
        "use strict";
        var r = n(442);
        e.exports = function(e) {
            return {
                componentDidMount: function() {
                    for (var t in r) if (this[t] !== r[t]) {
                        if (this[t]) throw "Can't have other property '" + t + "' when using Reflux.listenToMany!";
                        this[t] = r[t];
                    }
                    this.listenToMany(e);
                },
                componentWillUnmount: r.stopListeningToAll
            };
        };
    },
    467: function(e, t, n) {
        "use strict";
        var r = n(222), a = "pure-menu-list", l = "pure-menu-item", s = "pure-menu-selected", c = "pure-menu-link", o = r.createClass({
            displayName: "LanguageMenu",
            render: function() {
                var e = [], t = Object.keys(this.props.__languages), n = this;
                return t.forEach(function(t) {
                    n.props.__languages[t] !== !1 && e.push(t);
                }), r.createElement("ul", {
                    className: a
                }, e.map(function(e) {
                    var t = l + (n.props.__lang === e ? " " + s : ""), a = "/" + e + n.props.__uri, o = e.toUpperCase();
                    return r.createElement("li", {
                        key: e,
                        className: t
                    }, r.createElement("a", {
                        href: a,
                        "data-setlang": e,
                        className: c
                    }, o));
                }));
            }
        });
        e.exports = o;
    },
    468: function(e, t, n) {
        "use strict";
        n(453), n(471);
        var r = n(222), a = n(443), l = n(452), s = n(451), c = [ "installation", "configuration" ], o = [ "pages", "models", "async-models", "client-model", "actions", "controller", "router", "appfile", "different-devices", "markdown", "i18n", "databases" ], i = [ "developing", "production", "gulp" ], m = "pure-menu-", u = m + "link", d = m + "item", f = m + "heading", p = m + "list", E = " " + m + "selected", h = r.createClass({
            displayName: "Menu",
            mixins: [ a.connect(l) ],
            render: function() {
                var e = this, t = "menu-link" + (this.state.menuActivated ? " active" : "");
                return r.createElement("div", null, r.createElement("a", {
                    className: t,
                    onClick: s.toggleMenu
                }, r.createElement("span", null)), r.createElement("div", {
                    id: "leftmenu"
                }, r.createElement("div", {
                    className: "pure-menu"
                }, r.createElement("a", {
                    className: f
                }, this.props.messages.setup), r.createElement("ul", {
                    className: p
                }, c.map(function(t) {
                    var n = d + (e.props.__path === "/" + t ? E : ""), a = e.props.__langprefix + "/" + t, l = e.props.messages[t];
                    return r.createElement("li", {
                        key: t,
                        className: n
                    }, r.createElement("a", {
                        href: a,
                        className: u
                    }, l));
                })), r.createElement("a", {
                    className: f
                }, this.props.messages.create), r.createElement("ul", {
                    className: p
                }, o.map(function(t) {
                    var n = d + (e.props.__path === "/" + t ? E : ""), a = e.props.__langprefix + "/" + t, l = e.props.messages[t];
                    return r.createElement("li", {
                        key: t,
                        className: n
                    }, r.createElement("a", {
                        href: a,
                        className: u
                    }, l));
                })), r.createElement("a", {
                    className: f
                }, this.props.messages.build), r.createElement("ul", {
                    className: p
                }, i.map(function(t) {
                    var n = d + (e.props.__path === "/" + t ? E : ""), a = e.props.__langprefix + "/" + t, l = e.props.messages[t];
                    return r.createElement("li", {
                        key: t,
                        className: n
                    }, r.createElement("a", {
                        href: a,
                        className: u
                    }, l));
                })))));
            }
        });
        e.exports = h;
    },
    469: function(e, t, n) {
        "use strict";
        n(453), n(454), n(473);
        var r = n(467), a = n(222), l = [ "/" ], s = n(474), c = a.createClass({
            displayName: "Menu",
            render: function() {
                var e = {}, t = {}, n = this;
                return l.forEach(function(r) {
                    e[r] = "pure-menu-item" + (n.props.__path === r ? " menu-item-invisible" : ""), 
                    t[r] = n.props.__langprefix + r;
                }), a.createElement("div", {
                    className: "top-menu pure-g pure-menu pure-menu-horizontal pure-menu-fixed"
                }, a.createElement("div", {
                    className: "pure-u-5-12"
                }, a.createElement("img", {
                    src: s
                })), a.createElement("div", {
                    className: "pure-u-1-6 center"
                }, a.createElement("div", {
                    className: e["/"]
                }, a.createElement("a", {
                    href: t["/"],
                    className: "pure-menu-link"
                }, "« home"))), a.createElement("div", {
                    className: "pure-u-5-12 right"
                }, a.createElement(r, this.props)));
            }
        });
        e.exports = c;
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
    475: 453,
    476: 453,
    478: 453
});