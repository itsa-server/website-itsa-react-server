webpackJsonp([ 38 ], [ function(n, e, o) {
    "use strict";
    try{eval('0?0:webpackJsonp([ 0 ], {\n    22: function(e, t, n) {\n        \"use strict\";\n        var i = \"__itsa_view__index\";\n        i && (i = null), n(455), n(482), n(481), n(473), n(480);\n        var r = n(223), s = n(470), o = n(469), a = n(444), c = n(453), l = n(483), u = r.createClass({\n            displayName: \"Body\",\n            mixins: [ a.connect(c) ],\n            render: function() {\n                var e = this.state.menuActivated ? \"active\" : \"\";\n                return r.createElement(\"div\", {\n                    className: e\n                }, r.createElement(s, this.props), r.createElement(o, this.props), r.createElement(\"div\", {\n                    className: \"main\"\n                }, r.createElement(\"div\", {\n                    className: \"splash-container\"\n                }, r.createElement(\"div\", {\n                    className: \"splash\"\n                }, r.createElement(\"img\", {\n                    className: \"logo-large\",\n                    src: l\n                }), r.createElement(\"h1\", {\n                    className: \"splash-head\"\n                }, \"Itsa react-server\"), r.createElement(\"p\", {\n                    className: \"splash-subhead\"\n                }, this.props.messages.intro_react_server), r.createElement(\"p\", null, r.createElement(\"a\", {\n                    href: \"https://www.npmjs.com/package/itsa-cli\",\n                    className: \"pure-button pure-button-primary\"\n                }, this.props.messages.install, \" itsa-cli 2.3.4\"), r.createElement(\"a\", {\n                    href: \"https://github.com/itsa-server/website-itsa-react-server/tree/master/src/3.0.10\",\n                    className: \"pure-button pure-button-primary\"\n                }, this.props.messages.viewthis, \" website-code\")))), r.createElement(\"div\", {\n                    className: \"content-wrapper\"\n                }, r.createElement(\"div\", {\n                    className: \"content\"\n                }, r.createElement(\"h1\", null, this.props.messages.features, \":\"), r.createElement(\"div\", {\n                    className: \"pure-g\"\n                }, r.createElement(\"div\", {\n                    className: \"pure-u-1 pure-u-md-1-2\"\n                }, r.createElement(\"ul\", null, this.props.messages.features_first.map(function(e, t) {\n                    return r.createElement(\"li\", {\n                        key: t\n                    }, r.createElement(\"i\", {\n                        className: \"fa fa-rocket\"\n                    }), e);\n                }))), r.createElement(\"div\", {\n                    className: \"pure-u-1 pure-u-md-1-2\"\n                }, r.createElement(\"ul\", null, this.props.messages.features_second.map(function(e, t) {\n                    return r.createElement(\"li\", {\n                        key: t\n                    }, r.createElement(\"i\", {\n                        className: \"fa fa-rocket\"\n                    }), e);\n                })))), r.createElement(\"h1\", null, this.props.messages.why_this_framework, \"?\"), r.createElement(\"div\", null, this.props.messages.why_this_framework_content)), r.createElement(\"div\", {\n                    className: \"footer l-box is-center\"\n                }, this.props.messages.designedby, \" \", r.createElement(\"a\", {\n                    href: \"http://itsasbreuk.nl\"\n                }, \"Marco Asbreuk\"), \", Itsa react-server \", this.props.messages.licenced, \" \", r.createElement(\"a\", {\n                    href: \"http://choosealicense.com/licenses/bsd-3-clause/\"\n                }, \"New BSD License\")))));\n            }\n        });\n        e.exports = u;\n    },\n    442: function(e, t, n) {\n        \"use strict\";\n        function i(e) {\n            return e.charAt(0).toUpperCase() + e.slice(1);\n        }\n        function r(e, n) {\n            return n = n || \"on\", n + t.capitalize(e);\n        }\n        function s(e) {\n            var t = typeof e;\n            return \"function\" === t || \"object\" === t && !!e;\n        }\n        function o(e) {\n            if (!s(e)) return e;\n            for (var t, n, i = 1, r = arguments.length; r > i; i++) {\n                t = arguments[i];\n                for (n in t) if (Object.getOwnPropertyDescriptor && Object.defineProperty) {\n                    var o = Object.getOwnPropertyDescriptor(t, n);\n                    Object.defineProperty(e, n, o);\n                } else e[n] = t[n];\n            }\n            return e;\n        }\n        function a(e) {\n            return \"function\" == typeof e;\n        }\n        function c(e, t) {\n            for (var n = {}, i = 0; i < e.length; i++) n[e[i]] = t[i];\n            return n;\n        }\n        function l(e) {\n            return \"object\" == typeof e && \"callee\" in e && \"number\" == typeof e.length;\n        }\n        function u(e, t) {\n            if (e) throw Error(t || e);\n        }\n        Object.defineProperty(t, \"__esModule\", {\n            value: !0\n        }), t.capitalize = i, t.callbackName = r, t.isObject = s, t.extend = o, t.isFunction = a, \n        t.object = c, t.isArguments = l, t.throwIf = u, t.EventEmitter = n(459), t.nextTick = function(e) {\n            setTimeout(e, 0);\n        };\n    },\n    443: function(e, t, n) {\n        \"use strict\";\n        var i = n(442), r = n(451).instanceJoinCreator, s = function(e) {\n            for (var t, n = 0, i = {}; n < (e.children || []).length; ++n) t = e.children[n], \n            e[t] && (i[t] = e[t]);\n            return i;\n        }, o = function a(e) {\n            var t = {};\n            for (var n in e) {\n                var r = e[n], o = s(r), c = a(o);\n                t[n] = r;\n                for (var l in c) {\n                    var u = c[l];\n                    t[n + i.capitalize(l)] = u;\n                }\n            }\n            return t;\n        };\n        e.exports = {\n            hasListener: function(e) {\n                for (var t, n, i, r = 0; r < (this.subscriptions || []).length; ++r) for (i = [].concat(this.subscriptions[r].listenable), \n                t = 0; t < i.length; t++) if (n = i[t], n === e || n.hasListener && n.hasListener(e)) return !0;\n                return !1;\n            },\n            listenToMany: function(e) {\n                var t = o(e);\n                for (var n in t) {\n                    var r = i.callbackName(n), s = this[r] ? r : this[n] ? n : void 0;\n                    s && this.listenTo(t[n], s, this[r + \"Default\"] || this[s + \"Default\"] || s);\n                }\n            },\n            validateListening: function(e) {\n                return e === this ? \"Listener is not able to listen to itself\" : i.isFunction(e.listen) ? e.hasListener && e.hasListener(this) ? \"Listener cannot listen to this listenable because of circular loop\" : void 0 : e + \" is missing a listen method\";\n            },\n            listenTo: function(e, t, n) {\n                var r, s, o, a = this.subscriptions = this.subscriptions || [];\n                return i.throwIf(this.validateListening(e)), this.fetchInitialState(e, n), r = e.listen(this[t] || t, this), \n                s = function() {\n                    var e = a.indexOf(o);\n                    i.throwIf(-1 === e, \"Tried to remove listen already gone from subscriptions list!\"), \n                    a.splice(e, 1), r();\n                }, o = {\n                    stop: s,\n                    listenable: e\n                }, a.push(o), o;\n            },\n            stopListeningTo: function(e) {\n                for (var t, n = 0, r = this.subscriptions || []; n < r.length; n++) if (t = r[n], \n                t.listenable === e) return t.stop(), i.throwIf(-1 !== r.indexOf(t), \"Failed to remove listen from subscriptions list!\"), \n                !0;\n                return !1;\n            },\n            stopListeningToAll: function() {\n                for (var e, t = this.subscriptions || []; e = t.length; ) t[0].stop(), i.throwIf(t.length !== e - 1, \"Failed to remove listen from subscriptions list!\");\n            },\n            fetchInitialState: function(e, t) {\n                t = t && this[t] || t;\n                var n = this;\n                if (i.isFunction(t) && i.isFunction(e.getInitialState)) {\n                    var r = e.getInitialState();\n                    r && i.isFunction(r.then) ? r.then(function() {\n                        t.apply(n, arguments);\n                    }) : t.call(this, r);\n                }\n            },\n            joinTrailing: r(\"last\"),\n            joinLeading: r(\"first\"),\n            joinConcat: r(\"all\"),\n            joinStrict: r(\"strict\")\n        };\n    },\n    444: function(e, t, n) {\n        \"use strict\";\n        var i = n(462);\n        i.connect = n(464), i.connectFilter = n(465), i.ListenerMixin = n(447), i.listenTo = n(466), \n        i.listenToMany = n(467), e.exports = i;\n    },\n    445: function(e, t) {\n        \"use strict\";\n        t.createdStores = [], t.createdActions = [], t.reset = function() {\n            for (;t.createdStores.length; ) t.createdStores.pop();\n            for (;t.createdActions.length; ) t.createdActions.pop();\n        };\n    },\n    446: function(e, t, n) {\n        \"use strict\";\n        var i = n(442);\n        e.exports = {\n            preEmit: function() {},\n            shouldEmit: function() {\n                return !0;\n            },\n            listen: function(e, t) {\n                t = t || this;\n                var n = function(n) {\n                    r || e.apply(t, n);\n                }, i = this, r = !1;\n                return this.emitter.addListener(this.eventLabel, n), function() {\n                    r = !0, i.emitter.removeListener(i.eventLabel, n);\n                };\n            },\n            trigger: function() {\n                var e = arguments, t = this.preEmit.apply(this, e);\n                e = void 0 === t ? e : i.isArguments(t) ? t : [].concat(t), this.shouldEmit.apply(this, e) && this.emitter.emit(this.eventLabel, e);\n            },\n            triggerAsync: function() {\n                var e = arguments, t = this;\n                i.nextTick(function() {\n                    t.trigger.apply(t, e);\n                });\n            },\n            deferWith: function(e) {\n                var t = this.trigger, n = this, i = function() {\n                    t.apply(n, arguments);\n                };\n                this.trigger = function() {\n                    e.apply(n, [ i ].concat([].splice.call(arguments, 0)));\n                };\n            }\n        };\n    },\n    447: function(e, t, n) {\n        \"use strict\";\n        var i = n(442), r = n(443);\n        e.exports = i.extend({\n            componentWillUnmount: r.stopListeningToAll\n        }, r);\n    },\n    448: function(e, t) {\n        \"use strict\";\n        e.exports = {};\n    },\n    449: function(e, t) {\n        \"use strict\";\n        e.exports = {};\n    },\n    450: function(e, t, n) {\n        \"use strict\";\n        var i = n(442), r = n(445), s = n(463), o = n(460), a = {\n            preEmit: 1,\n            shouldEmit: 1\n        };\n        e.exports = function(e) {\n            function t() {\n                var t, n = 0;\n                if (this.subscriptions = [], this.emitter = new i.EventEmitter(), this.eventLabel = \"change\", \n                o(this, e), this.init && i.isFunction(this.init) && this.init(), this.listenables) for (t = [].concat(this.listenables); n < t.length; n++) this.listenToMany(t[n]);\n            }\n            var c = n(449), l = n(446), u = n(443);\n            e = e || {};\n            for (var f in c) if (!a[f] && (l[f] || u[f])) throw new Error(\"Cannot override API method \" + f + \" in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.\");\n            for (var h in e) if (!a[h] && (l[h] || u[h])) throw new Error(\"Cannot override API method \" + h + \" in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.\");\n            e = s(e), i.extend(t.prototype, u, l, c, e);\n            var p = new t();\n            return r.createdStores.push(p), p;\n        };\n    },\n    451: function(e, t, n) {\n        \"use strict\";\n        function i(e, t, n) {\n            return function() {\n                var i, r = n.subscriptions, s = r ? r.indexOf(e) : -1;\n                for (c.throwIf(-1 === s, \"Tried to remove join already gone from subscriptions list!\"), \n                i = 0; i < t.length; i++) t[i]();\n                r.splice(s, 1);\n            };\n        }\n        function r(e) {\n            e.listenablesEmitted = new Array(e.numberOfListenables), e.args = new Array(e.numberOfListenables);\n        }\n        function s(e, t) {\n            return function() {\n                var n = l.call(arguments);\n                if (t.listenablesEmitted[e]) switch (t.strategy) {\n                  case \"strict\":\n                    throw new Error(\"Strict join failed because listener triggered twice.\");\n\n                  case \"last\":\n                    t.args[e] = n;\n                    break;\n\n                  case \"all\":\n                    t.args[e].push(n);\n                } else t.listenablesEmitted[e] = !0, t.args[e] = \"all\" === t.strategy ? [ n ] : n;\n                o(t);\n            };\n        }\n        function o(e) {\n            for (var t = 0; t < e.numberOfListenables; t++) if (!e.listenablesEmitted[t]) return;\n            e.callback.apply(e.listener, e.args), r(e);\n        }\n        var a = n(450), c = n(442), l = Array.prototype.slice, u = {\n            strict: \"joinStrict\",\n            first: \"joinLeading\",\n            last: \"joinTrailing\",\n            all: \"joinConcat\"\n        };\n        t.staticJoinCreator = function(e) {\n            return function() {\n                var t = l.call(arguments);\n                return a({\n                    init: function() {\n                        this[u[e]].apply(this, t.concat(\"triggerAsync\"));\n                    }\n                });\n            };\n        }, t.instanceJoinCreator = function(e) {\n            return function() {\n                c.throwIf(arguments.length < 2, \"Cannot create a join with less than 2 listenables!\");\n                var t, n, o = l.call(arguments), a = o.pop(), u = o.length, f = {\n                    numberOfListenables: u,\n                    callback: this[a] || a,\n                    listener: this,\n                    strategy: e\n                }, h = [];\n                for (t = 0; u > t; t++) c.throwIf(this.validateListening(o[t]));\n                for (t = 0; u > t; t++) h.push(o[t].listen(s(t, f), this));\n                return r(f), n = {\n                    listenable: o\n                }, n.stop = i(n, h, this), this.subscriptions = (this.subscriptions || []).concat(n), \n                n;\n            };\n        };\n    },\n    452: function(e, t, n) {\n        \"use strict\";\n        var i, r = n(444), s = n(471);\n        i = [ s.TOGGLE_MENU ], e.exports = r.createActions(i);\n    },\n    453: function(e, t, n) {\n        \"use strict\";\n        var i, r = n(444), s = n(452), o = n(456), a = r.createStore({\n            mixins: [ o ],\n            listenables: [ s ],\n            onToggleMenu: function() {\n                i = !i, this.trigger({\n                    menuActivated: i\n                });\n            },\n            getInitialState: function() {\n                var e = {\n                    menuActivated: !1\n                }, t = this.readStateFromClientStorage(e);\n                return i = t.menuActivated, t;\n            }\n        });\n        e.exports = a;\n    },\n    454: function(e, t) {},\n    455: 454,\n    456: function(e, t, n) {\n        (function(t) {\n            \"use strict\";\n            var i, r = \"undefined\" != typeof t && \"[object global]\" === {}.toString.call(t) && (!t.document || \"[object HTMLDocument]\" !== {}.toString.call(t.document)), s = !1, o = r ? {} : window, a = n(458), c = n(457), l = \"itsaRefluxClientStorage\", u = 3600, f = function(e) {\n                if (!s) {\n                    s = !0;\n                    var t = function(t) {\n                        a(i, t[0]), c.setItem(l + e, {\n                            time: Date.now(),\n                            state: i\n                        });\n                    };\n                    this.emitter.addListener(\"change\", t);\n                }\n            }, h = function() {\n                return o.history && o.history.pushState;\n            }, p = {\n                envBrowser: function() {\n                    return !r;\n                },\n                readStateFromClientStorage: function(e, t) {\n                    var r;\n                    if (t ? e = \"@\" + e : (t = e, e = \"\"), this.envBrowser() && c) {\n                        var s = n(224), o = s.getProps().__sessiontime;\n                        h() || (o = Math.max(o, u)), r = c.getItem(l + e, !0), r && r.time && r.time > Date.now() - 1e3 * o && (t = a({}, t, r.state)), \n                        c.setItem(l + e, {\n                            time: Date.now(),\n                            state: t\n                        }), f.call(this, e);\n                    }\n                    return i = a({}, t), t;\n                }\n            };\n            e.exports = p;\n        }).call(t, function() {\n            return this;\n        }());\n    },\n    457: function(e, t) {\n        \"use strict\";\n        var n = /\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z/, i = function(e, t) {\n            return n.test(t) ? new Date(t) : t;\n        }, r = {\n            getItem: function(e, t) {\n                var n, r = localStorage.getItem(e);\n                if (r) try {\n                    n = JSON.parse(r, t ? i : null);\n                } catch (s) {\n                    n = {};\n                }\n                return n;\n            },\n            setItem: function(e, t) {\n                try {\n                    t = JSON.stringify(t), localStorage.setItem(e, t);\n                } catch (n) {\n                    return !1;\n                }\n                return !0;\n            },\n            removeItem: function(e) {\n                try {\n                    localStorage.removeItem(e);\n                } catch (t) {\n                    return !1;\n                }\n                return !0;\n            }\n        };\n        e.exports = r;\n    },\n    458: 275,\n    459: function(e, t, n) {\n        \"use strict\";\n        function i(e, t, n) {\n            this.fn = e, this.context = t, this.once = n || !1;\n        }\n        function r() {}\n        var s = \"function\" != typeof Object.create ? \"~\" : !1;\n        r.prototype._events = void 0, r.prototype.listeners = function(e, t) {\n            var n = s ? s + e : e, i = this._events && this._events[n];\n            if (t) return !!i;\n            if (!i) return [];\n            if (i.fn) return [ i.fn ];\n            for (var r = 0, o = i.length, a = new Array(o); o > r; r++) a[r] = i[r].fn;\n            return a;\n        }, r.prototype.emit = function(e, t, n, i, r, o) {\n            var a = s ? s + e : e;\n            if (!this._events || !this._events[a]) return !1;\n            var c, l, u = this._events[a], f = arguments.length;\n            if (\"function\" == typeof u.fn) {\n                switch (u.once && this.removeListener(e, u.fn, void 0, !0), f) {\n                  case 1:\n                    return u.fn.call(u.context), !0;\n\n                  case 2:\n                    return u.fn.call(u.context, t), !0;\n\n                  case 3:\n                    return u.fn.call(u.context, t, n), !0;\n\n                  case 4:\n                    return u.fn.call(u.context, t, n, i), !0;\n\n                  case 5:\n                    return u.fn.call(u.context, t, n, i, r), !0;\n\n                  case 6:\n                    return u.fn.call(u.context, t, n, i, r, o), !0;\n                }\n                for (l = 1, c = new Array(f - 1); f > l; l++) c[l - 1] = arguments[l];\n                u.fn.apply(u.context, c);\n            } else {\n                var h, p = u.length;\n                for (l = 0; p > l; l++) switch (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), \n                f) {\n                  case 1:\n                    u[l].fn.call(u[l].context);\n                    break;\n\n                  case 2:\n                    u[l].fn.call(u[l].context, t);\n                    break;\n\n                  case 3:\n                    u[l].fn.call(u[l].context, t, n);\n                    break;\n\n                  default:\n                    if (!c) for (h = 1, c = new Array(f - 1); f > h; h++) c[h - 1] = arguments[h];\n                    u[l].fn.apply(u[l].context, c);\n                }\n            }\n            return !0;\n        }, r.prototype.on = function(e, t, n) {\n            var r = new i(t, n || this), o = s ? s + e : e;\n            return this._events || (this._events = s ? {} : Object.create(null)), this._events[o] ? this._events[o].fn ? this._events[o] = [ this._events[o], r ] : this._events[o].push(r) : this._events[o] = r, \n            this;\n        }, r.prototype.once = function(e, t, n) {\n            var r = new i(t, n || this, !0), o = s ? s + e : e;\n            return this._events || (this._events = s ? {} : Object.create(null)), this._events[o] ? this._events[o].fn ? this._events[o] = [ this._events[o], r ] : this._events[o].push(r) : this._events[o] = r, \n            this;\n        }, r.prototype.removeListener = function(e, t, n, i) {\n            var r = s ? s + e : e;\n            if (!this._events || !this._events[r]) return this;\n            var o = this._events[r], a = [];\n            if (t) if (o.fn) (o.fn !== t || i && !o.once || n && o.context !== n) && a.push(o); else for (var c = 0, l = o.length; l > c; c++) (o[c].fn !== t || i && !o[c].once || n && o[c].context !== n) && a.push(o[c]);\n            return a.length ? this._events[r] = 1 === a.length ? a[0] : a : delete this._events[r], \n            this;\n        }, r.prototype.removeAllListeners = function(e) {\n            return this._events ? (e ? delete this._events[s ? s + e : e] : this._events = s ? {} : Object.create(null), \n            this) : this;\n        }, r.prototype.off = r.prototype.removeListener, r.prototype.addListener = r.prototype.on, \n        r.prototype.setMaxListeners = function() {\n            return this;\n        }, r.prefixed = s, e.exports = r;\n    },\n    460: function(e, t) {\n        \"use strict\";\n        e.exports = function(e, t) {\n            for (var n in t) if (Object.getOwnPropertyDescriptor && Object.defineProperty) {\n                var i = Object.getOwnPropertyDescriptor(t, n);\n                if (!i.value || \"function\" != typeof i.value || !t.hasOwnProperty(n)) continue;\n                e[n] = t[n].bind(e);\n            } else {\n                var r = t[n];\n                if (\"function\" != typeof r || !t.hasOwnProperty(n)) continue;\n                e[n] = r.bind(e);\n            }\n            return e;\n        };\n    },\n    461: function(e, t, n) {\n        \"use strict\";\n        var i = n(442), r = n(448), s = n(446), o = n(445), a = {\n            preEmit: 1,\n            shouldEmit: 1\n        }, c = function l(e) {\n            e = e || {}, i.isObject(e) || (e = {\n                actionName: e\n            });\n            for (var t in r) if (!a[t] && s[t]) throw new Error(\"Cannot override API method \" + t + \" in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead.\");\n            for (var n in e) if (!a[n] && s[n]) throw new Error(\"Cannot override API method \" + n + \" in action creation. Use another method name or override it on Reflux.PublisherMethods instead.\");\n            e.children = e.children || [], e.asyncResult && (e.children = e.children.concat([ \"completed\", \"failed\" ]));\n            for (var c = 0, u = {}; c < e.children.length; c++) {\n                var f = e.children[c];\n                u[f] = l(f);\n            }\n            var h = i.extend({\n                eventLabel: \"action\",\n                emitter: new i.EventEmitter(),\n                _isAction: !0\n            }, s, r, e), p = function m() {\n                var e = m.sync ? \"trigger\" : \"triggerAsync\";\n                return m[e].apply(m, arguments);\n            };\n            return i.extend(p, u, h), o.createdActions.push(p), p;\n        };\n        e.exports = c;\n    },\n    462: function(e, t, n) {\n        \"use strict\";\n        Object.defineProperty(t, \"__esModule\", {\n            value: !0\n        });\n        var i = {\n            version: {\n                \"reflux-core\": \"0.3.0\"\n            }\n        };\n        i.ActionMethods = n(448), i.ListenerMethods = n(443), i.PublisherMethods = n(446), \n        i.StoreMethods = n(449), i.createAction = n(461), i.createStore = n(450);\n        var r = n(451).staticJoinCreator;\n        i.joinTrailing = i.all = r(\"last\"), i.joinLeading = r(\"first\"), i.joinStrict = r(\"strict\"), \n        i.joinConcat = r(\"all\");\n        var s = i.utils = n(442);\n        i.EventEmitter = s.EventEmitter, i.Promise = s.Promise, i.createActions = function() {\n            var e = function(e, t) {\n                Object.keys(e).forEach(function(n) {\n                    var r = e[n];\n                    t[n] = i.createAction(r);\n                });\n            };\n            return function(t) {\n                var n = {};\n                return t instanceof Array ? t.forEach(function(t) {\n                    s.isObject(t) ? e(t, n) : n[t] = i.createAction(t);\n                }) : e(t, n), n;\n            };\n        }(), i.setEventEmitter = function(e) {\n            i.EventEmitter = s.EventEmitter = e;\n        }, i.nextTick = function(e) {\n            s.nextTick = e;\n        }, i.use = function(e) {\n            e(i);\n        }, i.__keep = n(445), !Function.prototype.bind, t[\"default\"] = i, e.exports = t[\"default\"];\n    },\n    463: function(e, t, n) {\n        \"use strict\";\n        var i = n(442);\n        e.exports = function(e) {\n            var t = {\n                init: [],\n                preEmit: [],\n                shouldEmit: []\n            }, n = function r(e) {\n                var n = {};\n                return e.mixins && e.mixins.forEach(function(e) {\n                    i.extend(n, r(e));\n                }), i.extend(n, e), Object.keys(t).forEach(function(n) {\n                    e.hasOwnProperty(n) && t[n].push(e[n]);\n                }), n;\n            }(e);\n            return t.init.length > 1 && (n.init = function() {\n                var e = arguments;\n                t.init.forEach(function(t) {\n                    t.apply(this, e);\n                }, this);\n            }), t.preEmit.length > 1 && (n.preEmit = function() {\n                return t.preEmit.reduce(function(e, t) {\n                    var n = t.apply(this, e);\n                    return void 0 === n ? e : [ n ];\n                }.bind(this), arguments);\n            }), t.shouldEmit.length > 1 && (n.shouldEmit = function() {\n                var e = arguments;\n                return !t.shouldEmit.some(function(t) {\n                    return !t.apply(this, e);\n                }, this);\n            }), Object.keys(t).forEach(function(e) {\n                1 === t[e].length && (n[e] = t[e][0]);\n            }), n;\n        };\n    },\n    464: function(e, t, n) {\n        \"use strict\";\n        var i = n(443), r = n(447), s = n(442);\n        e.exports = function(e, t) {\n            return {\n                getInitialState: function() {\n                    return s.isFunction(e.getInitialState) ? void 0 === t ? e.getInitialState() : s.object([ t ], [ e.getInitialState() ]) : {};\n                },\n                componentDidMount: function() {\n                    s.extend(this, i);\n                    var n = this, r = void 0 === t ? this.setState : function(e) {\n                        (\"undefined\" == typeof n.isMounted || n.isMounted() === !0) && n.setState(s.object([ t ], [ e ]));\n                    };\n                    this.listenTo(e, r);\n                },\n                componentWillUnmount: r.componentWillUnmount\n            };\n        };\n    },\n    465: function(e, t, n) {\n        \"use strict\";\n        var i = n(443), r = n(447), s = n(442);\n        e.exports = function(e, t, n) {\n            return n = s.isFunction(t) ? t : n, {\n                getInitialState: function() {\n                    if (s.isFunction(e.getInitialState)) {\n                        if (s.isFunction(t)) return n.call(this, e.getInitialState());\n                        var i = n.call(this, e.getInitialState());\n                        return \"undefined\" != typeof i ? s.object([ t ], [ i ]) : {};\n                    }\n                    return {};\n                },\n                componentDidMount: function() {\n                    s.extend(this, i);\n                    var r = this, o = function(e) {\n                        if (s.isFunction(t)) r.setState(n.call(r, e)); else {\n                            var i = n.call(r, e);\n                            r.setState(s.object([ t ], [ i ]));\n                        }\n                    };\n                    this.listenTo(e, o);\n                },\n                componentWillUnmount: r.componentWillUnmount\n            };\n        };\n    },\n    466: function(e, t, n) {\n        \"use strict\";\n        var i = n(443);\n        e.exports = function(e, t, n) {\n            return {\n                componentDidMount: function() {\n                    for (var r in i) if (this[r] !== i[r]) {\n                        if (this[r]) throw \"Can\'t have other property \'\" + r + \"\' when using Reflux.listenTo!\";\n                        this[r] = i[r];\n                    }\n                    this.listenTo(e, t, n);\n                },\n                componentWillUnmount: i.stopListeningToAll\n            };\n        };\n    },\n    467: function(e, t, n) {\n        \"use strict\";\n        var i = n(443);\n        e.exports = function(e) {\n            return {\n                componentDidMount: function() {\n                    for (var t in i) if (this[t] !== i[t]) {\n                        if (this[t]) throw \"Can\'t have other property \'\" + t + \"\' when using Reflux.listenToMany!\";\n                        this[t] = i[t];\n                    }\n                    this.listenToMany(e);\n                },\n                componentWillUnmount: i.stopListeningToAll\n            };\n        };\n    },\n    468: function(e, t, n) {\n        \"use strict\";\n        var i = n(223), r = \"pure-menu-list\", s = \"pure-menu-item\", o = \"pure-menu-selected\", a = \"pure-menu-link\", c = i.createClass({\n            displayName: \"LanguageMenu\",\n            render: function() {\n                var e = [], t = Object.keys(this.props.__languages), n = this;\n                return t.forEach(function(t) {\n                    n.props.__languages[t] !== !1 && e.push(t);\n                }), i.createElement(\"ul\", {\n                    className: r\n                }, e.map(function(e) {\n                    var t = s + (n.props.__lang === e ? \" \" + o : \"\"), r = \"/\" + e + n.props.__uri, c = e.toUpperCase();\n                    return i.createElement(\"li\", {\n                        key: e,\n                        className: t\n                    }, i.createElement(\"a\", {\n                        href: r,\n                        \"data-setlang\": e,\n                        className: a\n                    }, c));\n                }));\n            }\n        });\n        e.exports = c;\n    },\n    469: function(e, t, n) {\n        \"use strict\";\n        n(454), n(472);\n        var i = n(223), r = n(444), s = n(453), o = n(452), a = [ \"installation\", \"configuration\" ], c = [ \"pages\", \"models\", \"async-models\", \"client-model\", \"actions\", \"controller\", \"router\", \"appfile\", \"different-devices\", \"markdown\", \"i18n\", \"databases\", \"client-server-io\" ], l = [ \"developing\", \"production\", \"gulp\" ], u = \"pure-menu-\", f = u + \"link\", h = u + \"item\", p = u + \"heading\", m = u + \"list\", v = \" \" + u + \"selected\", g = i.createClass({\n            displayName: \"Menu\",\n            mixins: [ r.connect(s) ],\n            render: function() {\n                var e = this, t = \"menu-link\" + (this.state.menuActivated ? \" active\" : \"\");\n                return i.createElement(\"div\", null, i.createElement(\"a\", {\n                    className: t,\n                    onClick: o.toggleMenu\n                }, i.createElement(\"span\", null)), i.createElement(\"div\", {\n                    id: \"leftmenu\"\n                }, i.createElement(\"div\", {\n                    className: \"pure-menu\"\n                }, i.createElement(\"a\", {\n                    className: p\n                }, this.props.messages.setup), i.createElement(\"ul\", {\n                    className: m\n                }, a.map(function(t) {\n                    var n = h + (e.props.__path === \"/\" + t ? v : \"\"), r = e.props.__langprefix + \"/\" + t, s = e.props.messages[t];\n                    return i.createElement(\"li\", {\n                        key: t,\n                        className: n\n                    }, i.createElement(\"a\", {\n                        href: r,\n                        className: f\n                    }, s));\n                })), i.createElement(\"a\", {\n                    className: p\n                }, this.props.messages.create), i.createElement(\"ul\", {\n                    className: m\n                }, c.map(function(t) {\n                    var n = h + (e.props.__path === \"/\" + t ? v : \"\"), r = e.props.__langprefix + \"/\" + t, s = e.props.messages[t];\n                    return i.createElement(\"li\", {\n                        key: t,\n                        className: n\n                    }, i.createElement(\"a\", {\n                        href: r,\n                        className: f\n                    }, s));\n                })), i.createElement(\"a\", {\n                    className: p\n                }, this.props.messages.build), i.createElement(\"ul\", {\n                    className: m\n                }, l.map(function(t) {\n                    var n = h + (e.props.__path === \"/\" + t ? v : \"\"), r = e.props.__langprefix + \"/\" + t, s = e.props.messages[t];\n                    return i.createElement(\"li\", {\n                        key: t,\n                        className: n\n                    }, i.createElement(\"a\", {\n                        href: r,\n                        className: f\n                    }, s));\n                })))));\n            }\n        });\n        e.exports = g;\n    },\n    470: function(e, t, n) {\n        \"use strict\";\n        n(454), n(455), n(474);\n        var i = n(468), r = n(223), s = [ \"/\" ], o = n(475), a = r.createClass({\n            displayName: \"Menu\",\n            render: function() {\n                var e = {}, t = {}, n = this;\n                return s.forEach(function(i) {\n                    e[i] = \"pure-menu-item\" + (n.props.__path === i ? \" menu-item-invisible\" : \"\"), \n                    t[i] = n.props.__langprefix + i;\n                }), r.createElement(\"div\", {\n                    className: \"top-menu pure-g pure-menu pure-menu-horizontal pure-menu-fixed\"\n                }, r.createElement(\"div\", {\n                    className: \"pure-u-5-12\"\n                }, r.createElement(\"img\", {\n                    src: o\n                })), r.createElement(\"div\", {\n                    className: \"pure-u-1-6 center\"\n                }, r.createElement(\"div\", {\n                    className: e[\"/\"]\n                }, r.createElement(\"a\", {\n                    href: t[\"/\"],\n                    className: \"pure-menu-link\"\n                }, \"« home\"))), r.createElement(\"div\", {\n                    className: \"pure-u-5-12 right\"\n                }, r.createElement(i, this.props)));\n            }\n        });\n        e.exports = a;\n    },\n    471: function(e, t) {\n        \"use strict\";\n        var n = {\n            TOGGLE_MENU: \"toggleMenu\"\n        };\n        e.exports = n;\n    },\n    472: 454,\n    473: 454,\n    474: 454,\n    475: function(e, t) {\n        e.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASxQTFRF5Rsk//////z84gUP6DM74AAA8o2S5BAZ5BQe5Roj4QAA+9vd9Jqe5Rgh97W44gAI85qe+9ze5BYf//7+3wAA4wsU4gAK6UBI4gQO5Rwl6DA4+c7Q5BQd//395BEa5Roi+9nb85OX+L3A3QAA6khQ5h8o8ouQ4gIL5Rcg85yg9q6x5R8o5RYf4gAJ6TpC5Bcg+97f5BMe97C0/Ofo4gAG5A8Y5R4o+93f/Ofp5BIc5A4X4w4S4wwW4w0W5BMc4w4X5A8Z4gMM+MDD6UNL5BUe5Rki9KKn/OPk5iAr85SZ5BMd8oyR4gAH9qms8pGV4wYP7FRb5BYg9Jmd4wgS8HuB6DU96DQ89aWp6DI68o6S+dLU5R4m5y835ycw4gYQ4QAB4wUO+97g//v75R0mVn9+cQAAAQ5JREFUeNpiYBgFBIAZuwQzHiARLCkJUagRG8qCB4TFcHJCFLJ6CzPhAbIKHOxQhZ6MeIEFhylUIRt+hdxwE0lSKBzux4MBgiITMRQyySlzYQJlX0yFERKcGEDDhw9ToaoIZliri2hhKlTRxgxrKXklTF/LYg1tYfKDh3iFxFpNtGeIDx4WZswkzcvPh1Whhz8rEoiXTMal0DqADQmE8OrgUijihhIsXla4FKIGKFB+SCtUQ1aoYCmHrhAknyQVx8CliKzQndPe1cQIpNAQqhAsL6znyMmliazQONpGJ8EJyDAIdACrg8o763JyCaC40YXdzjYKyDDXZ4cqBMuLi6EpFBRilxGVhjBooRAgwADWTCbgZ9jExQAAAABJRU5ErkJggg==\";\n    },\n    480: 454,\n    481: 454,\n    482: 454,\n    483: function(e, t) {\n        e.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACiCAIAAABNkIFMAAACg0lEQVR4nOzcsU5UWRyA8Z0N7G4CYXu23cZoiJ3xAUx8Jxoa2yngoYzR1mBC6fAAMg0qBqksHTmQOyPf79f/c07uF86Q3Juzdf7f/3/w0P257g0wBZkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTtsbG/n7+7H73wS+6Wiy+fTy/7dRs7O6R/cXZwBR3t5yfLOfHt51yaCfInCBzgswJMifInCBzgswJMifInCBzgswJMifInCBzgswJMicMfiQ05tPRq6v3p1OuuMn2jg63Hz+aZq1JM980/vz6zZQrbrLri4vJ1nJoJ8icIHOCzAkyJ8icIHOCzAkyJ8icIHOCzAkyJ8icIHPCpO+bt6Z6i/5bmO3tTbbWpJn/PTqccjl+cGgnyJwgc4LMCTInyJwgc4LMCTInyJwgc4LMCTInyJwgc4LMCS6lWBuXUiS4lIJ7JnOCzAkyJ8icIHOCzAkyJ8icIHOCzAkyJ8icIHOCzAkyJ0z6WcGY/cXZurewwnJ+spwfr3sXP+OvOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTNj3zZPfH38VfTw/WvYUVNj3zbGdn3VtYbba7u+4trLDpmbkXMieMZB7+vfzn5YuxwYfn5hluHzwZGBz7P2Ak8/Dv5fXl5djghvvy9t1tR26e4dhj/Hr6YWDKoZ0gc4LMCTInyJwgc4LMCTInyJwgc4LMCTInyJwgc4LMCTInyJzwPQAA///sAj6rx70XPwAAAABJRU5ErkJggg==\";\n    }\n});');}catch(e){console.warn('eval-error:',e);}window.__itsa_react_server||(window.__itsa_react_server={});window.__itsa_react_server.BodyComponent=arguments[2](22);
    var t = o(9), i = t.subClass();
    n.exports = i, 
new n.exports();
} ]);