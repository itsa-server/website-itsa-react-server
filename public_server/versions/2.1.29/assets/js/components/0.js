webpackJsonp([ 0 ], [ , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = "__itsa_view__index";
    r && (r = null), n(481), n(590), n(589), n(483), n(588);
    var o = n(133), i = n(581), a = n(580), s = n(424), u = n(480), c = n(591), l = o.createClass({
        displayName: "Body",
        mixins: [ s.connect(u) ],
        render: function() {
            var e = this.state.menuActivated ? "active" : "";
            return o.createElement("div", {
                className: e
            }, o.createElement(i, this.props), o.createElement(a, this.props), o.createElement("div", {
                className: "main"
            }, o.createElement("div", {
                className: "splash-container"
            }, o.createElement("div", {
                className: "splash"
            }, o.createElement("img", {
                className: "logo-large",
                src: c
            }), o.createElement("h1", {
                className: "splash-head"
            }, "Itsa react-server"), o.createElement("p", {
                className: "splash-subhead"
            }, this.props.messages.intro_react_server), o.createElement("p", null, o.createElement("a", {
                href: "https://github.com/itsa-server/itsa-cli/archive/master.zip",
                className: "pure-button pure-button-primary"
            }, "Download cli"), o.createElement("a", {
                href: "https://github.com/ItsAsbreuk/website-itsa-react-server",
                className: "pure-button pure-button-primary"
            }, this.props.messages.viewthis, " website-code")))), o.createElement("div", {
                className: "content-wrapper"
            }, o.createElement("div", {
                className: "content"
            }, o.createElement("h1", null, "Features:"), o.createElement("div", {
                className: "pure-g"
            }, o.createElement("div", {
                className: "pure-u-1 pure-u-md-1-2"
            }, o.createElement("ul", null, this.props.messages.features_first.map(function(e, t) {
                return o.createElement("li", {
                    key: t
                }, o.createElement("i", {
                    className: "fa fa-rocket"
                }), e);
            }))), o.createElement("div", {
                className: "pure-u-1 pure-u-md-1-2"
            }, o.createElement("ul", null, this.props.messages.features_second.map(function(e, t) {
                return o.createElement("li", {
                    key: t
                }, o.createElement("i", {
                    className: "fa fa-rocket"
                }), e);
            })))), o.createElement("h1", null, this.props.messages.why_this_framework, "?"), o.createElement("div", null, this.props.messages.why_this_framework_content)), o.createElement("div", {
                className: "footer l-box is-center"
            }, this.props.messages.designedby, " ", o.createElement("a", {
                href: "http://itsasbreuk.nl"
            }, "Marco Asbreuk"), ", Itsa react-server ", this.props.messages.licenced, " ", o.createElement("a", {
                href: "http://choosealicense.com/licenses/bsd-3-clause/"
            }, "New BSD License")))));
        }
    });
    e.exports = l;
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 2, 3, [ 319, 431, 399, 388, 390 ], [ 385, 401 ], 7, [ 279, 415 ], [ 296, 453, 399, 389, 518, 408, 434, 435, 419, 436, 388, 387, 415, 402, 390 ], [ 329, 403, 406, 399, 389, 413, 433, 407, 408, 457, 400, 409, 436, 395, 422, 463, 550, 442, 387, 444, 445, 390 ], [ 343, 425, 397, 399, 400, 409, 421, 388, 387, 390 ], function(e, t, n) {
    "use strict";
    function r(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
    }
    function o(e, n) {
        return n = n || "on", n + t.capitalize(e);
    }
    function i(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e;
    }
    function a(e) {
        if (!i(e)) return e;
        for (var t, n, r = 1, o = arguments.length; o > r; r++) {
            t = arguments[r];
            for (n in t) if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
                var a = Object.getOwnPropertyDescriptor(t, n);
                Object.defineProperty(e, n, a);
            } else e[n] = t[n];
        }
        return e;
    }
    function s(e) {
        return "function" == typeof e;
    }
    function u(e, t) {
        for (var n = {}, r = 0; r < e.length; r++) n[e[r]] = t[r];
        return n;
    }
    function c(e) {
        return "object" == typeof e && "callee" in e && "number" == typeof e.length;
    }
    function l(e, t) {
        if (e) throw Error(t || e);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.capitalize = r, t.callbackName = o, t.isObject = i, t.extend = a, t.isFunction = s, 
    t.object = u, t.isArguments = c, t.throwIf = l, t.EventEmitter = n(570), t.nextTick = function(e) {
        setTimeout(e, 0);
    };
}, [ 290, 387 ], [ 292, 464 ], 30, 31, 32, 33, [ 274, 387 ], [ 350, 397, 388, 401, 441 ], function(e, t, n) {
    "use strict";
    var r = n(396), o = n(478).instanceJoinCreator, i = function(e) {
        for (var t, n = 0, r = {}; n < (e.children || []).length; ++n) t = e.children[n], 
        e[t] && (r[t] = e[t]);
        return r;
    }, a = function s(e) {
        var t = {};
        for (var n in e) {
            var o = e[n], a = i(o), u = s(a);
            t[n] = o;
            for (var c in u) {
                var l = u[c];
                t[n + r.capitalize(c)] = l;
            }
        }
        return t;
    };
    e.exports = {
        hasListener: function(e) {
            for (var t, n, r, o = 0; o < (this.subscriptions || []).length; ++o) for (r = [].concat(this.subscriptions[o].listenable), 
            t = 0; t < r.length; t++) if (n = r[t], n === e || n.hasListener && n.hasListener(e)) return !0;
            return !1;
        },
        listenToMany: function(e) {
            var t = a(e);
            for (var n in t) {
                var o = r.callbackName(n), i = this[o] ? o : this[n] ? n : void 0;
                i && this.listenTo(t[n], i, this[o + "Default"] || this[i + "Default"] || i);
            }
        },
        validateListening: function(e) {
            return e === this ? "Listener is not able to listen to itself" : r.isFunction(e.listen) ? e.hasListener && e.hasListener(this) ? "Listener cannot listen to this listenable because of circular loop" : void 0 : e + " is missing a listen method";
        },
        listenTo: function(e, t, n) {
            var o, i, a, s = this.subscriptions = this.subscriptions || [];
            return r.throwIf(this.validateListening(e)), this.fetchInitialState(e, n), o = e.listen(this[t] || t, this), 
            i = function() {
                var e = s.indexOf(a);
                r.throwIf(-1 === e, "Tried to remove listen already gone from subscriptions list!"), 
                s.splice(e, 1), o();
            }, a = {
                stop: i,
                listenable: e
            }, s.push(a), a;
        },
        stopListeningTo: function(e) {
            for (var t, n = 0, o = this.subscriptions || []; n < o.length; n++) if (t = o[n], 
            t.listenable === e) return t.stop(), r.throwIf(-1 !== o.indexOf(t), "Failed to remove listen from subscriptions list!"), 
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
                var o = e.getInitialState();
                o && r.isFunction(o.then) ? o.then(function() {
                    t.apply(n, arguments);
                }) : t.call(this, o);
            }
        },
        joinTrailing: o("last"),
        joinLeading: o("first"),
        joinConcat: o("all"),
        joinStrict: o("strict")
    };
}, [ 293, 392, 411, 452, 519, 462, 388, 443 ], [ 327, 461, 387 ], 43, [ 338, 525, 413 ], [ 275, 403, 560, 390 ], [ 281, 452, 426, 437, 438, 387 ], [ 284, 392, 411, 437, 438 ], [ 320, 389, 417, 435, 419, 399, 418, 467, 387, 390 ], [ 356, 404, 441 ], [ 375, 387 ], [ 268, 465 ], [ 324, 389, 390 ], [ 332, 388, 387 ], 60, [ 354, 414, 462, 440 ], [ 358, 387 ], 63, 64, function(e, t, n) {
    "use strict";
    var r = n(573);
    r.connect = n(575), r.connectFilter = n(576), r.ListenerMixin = n(448), r.listenTo = n(577), 
    r.listenToMany = n(578), e.exports = r;
}, [ 271, 397, 388, 387 ], [ 283, 392, 387 ], [ 287, 459, 387 ], [ 288, 406, 437, 438, 387 ], [ 298, 454, 394 ], [ 299, 387 ], [ 301, 388, 422, 390 ], [ 304, 451, 403, 410, 406, 429, 394, 522, 400, 388, 423, 387, 443, 402, 390 ], [ 321, 389, 408, 387 ], 79, [ 334, 415 ], [ 342, 434, 399, 389, 408, 395, 388, 387, 390 ], [ 359, 387 ], 83, 84, 85, 86, [ 372, 503, 433, 418, 388, 387, 390 ], [ 373, 391 ], [ 380, 391 ], [ 382, 390 ], function(e, t) {
    "use strict";
    t.createdStores = [], t.createdActions = [], t.reset = function() {
        for (;t.createdStores.length; ) t.createdStores.pop();
        for (;t.createdActions.length; ) t.createdActions.pop();
    };
}, function(e, t, n) {
    "use strict";
    var r = n(396);
    e.exports = {
        preEmit: function() {},
        shouldEmit: function() {
            return !0;
        },
        listen: function(e, t) {
            t = t || this;
            var n = function(n) {
                o || e.apply(t, n);
            }, r = this, o = !1;
            return this.emitter.addListener(this.eventLabel, n), function() {
                o = !0, r.emitter.removeListener(r.eventLabel, n);
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
}, function(e, t, n) {
    "use strict";
    var r = n(396), o = n(405);
    e.exports = r.extend({
        componentWillUnmount: o.stopListeningToAll
    }, o);
}, function(e, t) {}, 109, [ 270, 450, 391, 542, 546, 553, 556, 390 ], [ 282, 387 ], [ 297, 436, 387, 390 ], [ 306, 451, 492, 410, 394, 400, 387, 444 ], [ 313, 410, 429, 432, 388, 423 ], [ 326, 512, 463, 465, 466 ], [ 328, 540 ], [ 331, 415 ], [ 335, 389, 417, 419, 401 ], [ 336, 397, 406, 388 ], 120, 121, [ 361, 554 ], [ 366, 399, 408, 394, 387, 470, 390 ], 124, 125, 126, [ 369, 391, 387 ], [ 370, 391 ], 129, 130, [ 384, 389, 417, 407, 467, 387, 390 ], [ 264, 474 ], [ 265, 568, 567 ], function(e, t) {
    "use strict";
    e.exports = {};
}, function(e, t) {
    "use strict";
    e.exports = {};
}, function(e, t, n) {
    "use strict";
    var r = n(396), o = n(446), i = n(574), a = n(571), s = {
        preEmit: 1,
        shouldEmit: 1
    };
    e.exports = function(e) {
        function t() {
            var t, n = 0;
            if (this.subscriptions = [], this.emitter = new r.EventEmitter(), this.eventLabel = "change", 
            a(this, e), this.init && r.isFunction(this.init) && this.init(), this.listenables) for (t = [].concat(this.listenables); n < t.length; n++) this.listenToMany(t[n]);
        }
        var u = n(476), c = n(447), l = n(405);
        e = e || {};
        for (var p in u) if (!s[p] && (c[p] || l[p])) throw new Error("Cannot override API method " + p + " in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");
        for (var d in e) if (!s[d] && (c[d] || l[d])) throw new Error("Cannot override API method " + d + " in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");
        e = i(e), r.extend(t.prototype, l, c, u, e);
        var f = new t();
        return o.createdStores.push(f), f;
    };
}, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        return function() {
            var r, o = n.subscriptions, i = o ? o.indexOf(e) : -1;
            for (u.throwIf(-1 === i, "Tried to remove join already gone from subscriptions list!"), 
            r = 0; r < t.length; r++) t[r]();
            o.splice(i, 1);
        };
    }
    function o(e) {
        e.listenablesEmitted = new Array(e.numberOfListenables), e.args = new Array(e.numberOfListenables);
    }
    function i(e, t) {
        return function() {
            var n = c.call(arguments);
            if (t.listenablesEmitted[e]) switch (t.strategy) {
              case "strict":
                throw new Error("Strict join failed because listener triggered twice.");

              case "last":
                t.args[e] = n;
                break;

              case "all":
                t.args[e].push(n);
            } else t.listenablesEmitted[e] = !0, t.args[e] = "all" === t.strategy ? [ n ] : n;
            a(t);
        };
    }
    function a(e) {
        for (var t = 0; t < e.numberOfListenables; t++) if (!e.listenablesEmitted[t]) return;
        e.callback.apply(e.listener, e.args), o(e);
    }
    var s = n(477), u = n(396), c = Array.prototype.slice, l = {
        strict: "joinStrict",
        first: "joinLeading",
        last: "joinTrailing",
        all: "joinConcat"
    };
    t.staticJoinCreator = function(e) {
        return function() {
            var t = c.call(arguments);
            return s({
                init: function() {
                    this[l[e]].apply(this, t.concat("triggerAsync"));
                }
            });
        };
    }, t.instanceJoinCreator = function(e) {
        return function() {
            u.throwIf(arguments.length < 2, "Cannot create a join with less than 2 listenables!");
            var t, n, a = c.call(arguments), s = a.pop(), l = a.length, p = {
                numberOfListenables: l,
                callback: this[s] || s,
                listener: this,
                strategy: e
            }, d = [];
            for (t = 0; l > t; t++) u.throwIf(this.validateListening(a[t]));
            for (t = 0; l > t; t++) d.push(a[t].listen(i(t, p), this));
            return o(p), n = {
                listenable: a
            }, n.stop = r(n, d, this), this.subscriptions = (this.subscriptions || []).concat(n), 
            n;
        };
    };
}, function(e, t, n) {
    "use strict";
    var r, o = n(424), i = n(582);
    r = [ i.TOGGLE_MENU ], e.exports = o.createActions(r);
}, function(e, t, n) {
    "use strict";
    var r, o = n(424), i = n(479), a = n(485), s = o.createStore({
        mixins: [ a ],
        listenables: [ i ],
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
    e.exports = s;
}, 449, 449, 449, 449, function(e, t, n) {
    (function(t) {
        "use strict";
        var r = "undefined" != typeof t && "[object global]" === {}.toString.call(t) && (!t.document || "[object HTMLDocument]" !== {}.toString.call(t.document)), o = !1, i = r ? {} : window, a = n(569), s = n(486), u = "itsaRefluxClientStorage", c = 3600, l = function() {
            if (!o) {
                o = !0;
                var e = function(e) {
                    var t = {};
                    a(t, e[0]), s.setItem(u, {
                        time: Date.now(),
                        state: t
                    });
                };
                this.emitter.addListener("change", e);
            }
        }, p = function() {
            return i.history && i.history.pushState;
        }, d = {
            envBrowser: function() {
                return !r;
            },
            readStateFromClientStorage: function(e) {
                var t;
                if (this.envBrowser() && s) {
                    var r = n(487), o = r.getProps().__sessiontime;
                    p() || (o = Math.max(o, c)), t = s.getItem(u, !0), t && t.time && t.time > Date.now() - 1e3 * o && a(e, t.state), 
                    l.call(this);
                }
                return e;
            }
        };
        e.exports = d;
    }).call(t, function() {
        return this;
    }());
}, function(e, t) {
    "use strict";
    var n = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/, r = function(e, t) {
        return n.test(t) ? new Date(t) : t;
    }, o = {
        getItem: function(e, t) {
            var n, o = localStorage.getItem(e);
            if (o) try {
                n = JSON.parse(o, t ? r : null);
            } catch (i) {
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
    e.exports = o;
}, [ 261, 564, 565, 488 ], 148, [ 269, 392, 412, 391, 497, 533, 536, 402 ], [ 272, 392, 411, 412, 391, 395, 404, 443, 471, 402 ], 188, [ 273, 493, 458, 561, 387 ], [ 276, 391, 545, 401, 468, 387 ], [ 277, 402 ], [ 278, 392, 412, 420, 394, 402 ], [ 280, 401 ], [ 285, 397, 388, 469 ], [ 286, 403, 391 ], [ 289, 392, 401 ], [ 291, 426, 502, 453, 393, 431, 399, 389, 413, 504, 455, 515, 407, 394, 400, 459, 409, 526, 388, 464, 557, 391 ], [ 294, 409, 547, 442, 445 ], [ 295, 397, 417, 472, 390 ], [ 300, 430, 431, 399, 389, 413, 408, 434, 418, 400, 435, 419, 409, 395, 388, 422, 387, 445, 390 ], [ 302, 389, 413, 555 ], [ 303, 416, 398, 393, 389, 415 ], [ 305, 392, 428, 398, 393, 389 ], [ 307, 392, 428, 398, 393, 389 ], [ 308, 392, 428, 398, 393, 389 ], [ 309, 416, 410, 427, 398, 393, 389, 394, 395, 388, 387 ], [ 310, 398, 393, 389, 390 ], [ 311, 416, 427, 398, 393, 389, 395, 388 ], [ 312, 391, 549, 469 ], [ 314, 416, 410, 427, 398, 393, 389, 395, 388, 387, 390 ], [ 315, 395, 421, 388, 401 ], [ 316, 489, 490, 491, 494, 495, 391, 498, 499, 398, 393, 429, 514, 432, 505, 506, 508, 454, 507, 509, 510, 511, 513, 455, 389, 520, 521, 407, 394, 524, 529, 530, 531, 528, 544, 516 ], [ 317, 403, 517, 394, 400, 559 ], [ 318, 388 ], 215, [ 322, 411 ], [ 323, 496, 391, 397, 407, 394, 395, 388, 441, 551 ], [ 325, 403, 411, 430, 393, 433, 406, 418, 432, 400, 461, 395 ], [ 330, 430, 458, 409, 501 ], [ 333, 387 ], [ 337, 425, 397, 406, 456, 460, 421, 388 ], [ 339, 523 ], [ 340, 389, 407, 457, 527, 422, 442, 387 ], [ 341, 397, 425, 460, 421, 388, 401 ], [ 344, 403 ], [ 345, 392, 412, 456, 404, 466, 471, 402, 562 ], 227, [ 346, 392, 426, 412, 532, 404, 535, 537, 420, 534, 538, 414, 539, 439, 387, 402, 390 ], [ 347, 404 ], [ 348, 404 ], [ 349, 420 ], [ 351, 414 ], [ 352, 404 ], [ 353, 414, 439, 548, 440 ], [ 355, 414, 440 ], [ 357, 420 ], 237, 238, [ 360, 541 ], [ 362, 563 ], [ 363, 393, 389, 387 ], [ 364, 391, 543, 468, 387 ], [ 365, 450 ], [ 367, 472, 390 ], [ 368, 439 ], 246, 247, 248, 249, [ 371, 552 ], [ 374, 470 ], 252, 253, [ 376, 389, 387 ], [ 377, 391 ], [ 378, 558 ], [ 379, 423 ], [ 381, 391, 423, 444 ], 259, [ 383, 387 ], [ 386, 500 ], [ 262, 566, 473, 473 ], [ 263, 474 ], 153, 154, 185, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        this.fn = e, this.context = t, this.once = n || !1;
    }
    function o() {}
    var i = "function" != typeof Object.create ? "~" : !1;
    o.prototype._events = void 0, o.prototype.listeners = function(e, t) {
        var n = i ? i + e : e, r = this._events && this._events[n];
        if (t) return !!r;
        if (!r) return [];
        if (r.fn) return [ r.fn ];
        for (var o = 0, a = r.length, s = new Array(a); a > o; o++) s[o] = r[o].fn;
        return s;
    }, o.prototype.emit = function(e, t, n, r, o, a) {
        var s = i ? i + e : e;
        if (!this._events || !this._events[s]) return !1;
        var u, c, l = this._events[s], p = arguments.length;
        if ("function" == typeof l.fn) {
            switch (l.once && this.removeListener(e, l.fn, void 0, !0), p) {
              case 1:
                return l.fn.call(l.context), !0;

              case 2:
                return l.fn.call(l.context, t), !0;

              case 3:
                return l.fn.call(l.context, t, n), !0;

              case 4:
                return l.fn.call(l.context, t, n, r), !0;

              case 5:
                return l.fn.call(l.context, t, n, r, o), !0;

              case 6:
                return l.fn.call(l.context, t, n, r, o, a), !0;
            }
            for (c = 1, u = new Array(p - 1); p > c; c++) u[c - 1] = arguments[c];
            l.fn.apply(l.context, u);
        } else {
            var d, f = l.length;
            for (c = 0; f > c; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), 
            p) {
              case 1:
                l[c].fn.call(l[c].context);
                break;

              case 2:
                l[c].fn.call(l[c].context, t);
                break;

              case 3:
                l[c].fn.call(l[c].context, t, n);
                break;

              default:
                if (!u) for (d = 1, u = new Array(p - 1); p > d; d++) u[d - 1] = arguments[d];
                l[c].fn.apply(l[c].context, u);
            }
        }
        return !0;
    }, o.prototype.on = function(e, t, n) {
        var o = new r(t, n || this), a = i ? i + e : e;
        return this._events || (this._events = i ? {} : Object.create(null)), this._events[a] ? this._events[a].fn ? this._events[a] = [ this._events[a], o ] : this._events[a].push(o) : this._events[a] = o, 
        this;
    }, o.prototype.once = function(e, t, n) {
        var o = new r(t, n || this, !0), a = i ? i + e : e;
        return this._events || (this._events = i ? {} : Object.create(null)), this._events[a] ? this._events[a].fn ? this._events[a] = [ this._events[a], o ] : this._events[a].push(o) : this._events[a] = o, 
        this;
    }, o.prototype.removeListener = function(e, t, n, r) {
        var o = i ? i + e : e;
        if (!this._events || !this._events[o]) return this;
        var a = this._events[o], s = [];
        if (t) if (a.fn) (a.fn !== t || r && !a.once || n && a.context !== n) && s.push(a); else for (var u = 0, c = a.length; c > u; u++) (a[u].fn !== t || r && !a[u].once || n && a[u].context !== n) && s.push(a[u]);
        return s.length ? this._events[o] = 1 === s.length ? s[0] : s : delete this._events[o], 
        this;
    }, o.prototype.removeAllListeners = function(e) {
        return this._events ? (e ? delete this._events[i ? i + e : e] : this._events = i ? {} : Object.create(null), 
        this) : this;
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, 
    o.prototype.setMaxListeners = function() {
        return this;
    }, o.prefixed = i, e.exports = o;
}, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        for (var n in t) if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (!r.value || "function" != typeof r.value || !t.hasOwnProperty(n)) continue;
            e[n] = t[n].bind(e);
        } else {
            var o = t[n];
            if ("function" != typeof o || !t.hasOwnProperty(n)) continue;
            e[n] = o.bind(e);
        }
        return e;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(396), o = n(475), i = n(447), a = n(446), s = {
        preEmit: 1,
        shouldEmit: 1
    }, u = function c(e) {
        e = e || {}, r.isObject(e) || (e = {
            actionName: e
        });
        for (var t in o) if (!s[t] && i[t]) throw new Error("Cannot override API method " + t + " in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead.");
        for (var n in e) if (!s[n] && i[n]) throw new Error("Cannot override API method " + n + " in action creation. Use another method name or override it on Reflux.PublisherMethods instead.");
        e.children = e.children || [], e.asyncResult && (e.children = e.children.concat([ "completed", "failed" ]));
        for (var u = 0, l = {}; u < e.children.length; u++) {
            var p = e.children[u];
            l[p] = c(p);
        }
        var d = r.extend({
            eventLabel: "action",
            emitter: new r.EventEmitter(),
            _isAction: !0
        }, i, o, e), f = function h() {
            var e = h.sync ? "trigger" : "triggerAsync";
            return h[e].apply(h, arguments);
        };
        return r.extend(f, l, d), a.createdActions.push(f), f;
    };
    e.exports = u;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {
        version: {
            "reflux-core": "0.3.0"
        }
    };
    r.ActionMethods = n(475), r.ListenerMethods = n(405), r.PublisherMethods = n(447), 
    r.StoreMethods = n(476), r.createAction = n(572), r.createStore = n(477);
    var o = n(478).staticJoinCreator;
    r.joinTrailing = r.all = o("last"), r.joinLeading = o("first"), r.joinStrict = o("strict"), 
    r.joinConcat = o("all");
    var i = r.utils = n(396);
    r.EventEmitter = i.EventEmitter, r.Promise = i.Promise, r.createActions = function() {
        var e = function(e, t) {
            Object.keys(e).forEach(function(n) {
                var o = e[n];
                t[n] = r.createAction(o);
            });
        };
        return function(t) {
            var n = {};
            return t instanceof Array ? t.forEach(function(t) {
                i.isObject(t) ? e(t, n) : n[t] = r.createAction(t);
            }) : e(t, n), n;
        };
    }(), r.setEventEmitter = function(e) {
        r.EventEmitter = i.EventEmitter = e;
    }, r.nextTick = function(e) {
        i.nextTick = e;
    }, r.use = function(e) {
        e(r);
    }, r.__keep = n(446), !Function.prototype.bind, t["default"] = r, e.exports = t["default"];
}, function(e, t, n) {
    "use strict";
    var r = n(396);
    e.exports = function(e) {
        var t = {
            init: [],
            preEmit: [],
            shouldEmit: []
        }, n = function o(e) {
            var n = {};
            return e.mixins && e.mixins.forEach(function(e) {
                r.extend(n, o(e));
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
}, function(e, t, n) {
    "use strict";
    var r = n(405), o = n(448), i = n(396);
    e.exports = function(e, t) {
        return {
            getInitialState: function() {
                return i.isFunction(e.getInitialState) ? void 0 === t ? e.getInitialState() : i.object([ t ], [ e.getInitialState() ]) : {};
            },
            componentDidMount: function() {
                i.extend(this, r);
                var n = this, o = void 0 === t ? this.setState : function(e) {
                    ("undefined" == typeof n.isMounted || n.isMounted() === !0) && n.setState(i.object([ t ], [ e ]));
                };
                this.listenTo(e, o);
            },
            componentWillUnmount: o.componentWillUnmount
        };
    };
}, function(e, t, n) {
    "use strict";
    var r = n(405), o = n(448), i = n(396);
    e.exports = function(e, t, n) {
        return n = i.isFunction(t) ? t : n, {
            getInitialState: function() {
                if (i.isFunction(e.getInitialState)) {
                    if (i.isFunction(t)) return n.call(this, e.getInitialState());
                    var r = n.call(this, e.getInitialState());
                    return "undefined" != typeof r ? i.object([ t ], [ r ]) : {};
                }
                return {};
            },
            componentDidMount: function() {
                i.extend(this, r);
                var o = this, a = function(e) {
                    if (i.isFunction(t)) o.setState(n.call(o, e)); else {
                        var r = n.call(o, e);
                        o.setState(i.object([ t ], [ r ]));
                    }
                };
                this.listenTo(e, a);
            },
            componentWillUnmount: o.componentWillUnmount
        };
    };
}, function(e, t, n) {
    "use strict";
    var r = n(405);
    e.exports = function(e, t, n) {
        return {
            componentDidMount: function() {
                for (var o in r) if (this[o] !== r[o]) {
                    if (this[o]) throw "Can't have other property '" + o + "' when using Reflux.listenTo!";
                    this[o] = r[o];
                }
                this.listenTo(e, t, n);
            },
            componentWillUnmount: r.stopListeningToAll
        };
    };
}, function(e, t, n) {
    "use strict";
    var r = n(405);
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
}, function(e, t, n) {
    "use strict";
    var r = n(133), o = "pure-menu-list", i = "pure-menu-item", a = "pure-menu-selected", s = "pure-menu-link", u = r.createClass({
        displayName: "LanguageMenu",
        render: function() {
            var e = [], t = Object.keys(this.props.__languages), n = this;
            return t.forEach(function(t) {
                n.props.__languages[t] !== !1 && e.push(t);
            }), r.createElement("ul", {
                className: o
            }, e.map(function(e) {
                var t = i + (n.props.__lang === e ? " " + a : ""), o = "/" + e + n.props.__uri, u = e.toUpperCase();
                return r.createElement("li", {
                    key: e,
                    className: t
                }, r.createElement("a", {
                    href: o,
                    "data-setlang": e,
                    className: s
                }, u));
            }));
        }
    });
    e.exports = u;
}, function(e, t, n) {
    "use strict";
    n(449), n(482);
    var r = n(133), o = n(424), i = n(480), a = n(479), s = [ "installation", "configuration" ], u = [ "pages", "models", "async-models", "controller", "router", "appfile", "different-devices", "markdown", "i18n", "databases" ], c = [ "developing", "production", "gulp" ], l = "pure-menu-", p = l + "link", d = l + "item", f = l + "heading", h = l + "list", m = " " + l + "selected", v = r.createClass({
        displayName: "Menu",
        mixins: [ o.connect(i) ],
        render: function() {
            var e = this, t = "menu-link" + (this.state.menuActivated ? " active" : "");
            return r.createElement("div", null, r.createElement("a", {
                className: t,
                onClick: a.toggleMenu
            }, r.createElement("span", null)), r.createElement("div", {
                id: "leftmenu"
            }, r.createElement("div", {
                className: "pure-menu"
            }, r.createElement("a", {
                className: f
            }, this.props.messages.setup), r.createElement("ul", {
                className: h
            }, s.map(function(t) {
                var n = d + (e.props.__path === "/" + t ? m : ""), o = e.props.__langprefix + "/" + t, i = e.props.messages[t];
                return r.createElement("li", {
                    key: t,
                    className: n
                }, r.createElement("a", {
                    href: o,
                    className: p
                }, i));
            })), r.createElement("a", {
                className: f
            }, this.props.messages.create), r.createElement("ul", {
                className: h
            }, u.map(function(t) {
                var n = d + (e.props.__path === "/" + t ? m : ""), o = e.props.__langprefix + "/" + t, i = e.props.messages[t];
                return r.createElement("li", {
                    key: t,
                    className: n
                }, r.createElement("a", {
                    href: o,
                    className: p
                }, i));
            })), r.createElement("a", {
                className: f
            }, this.props.messages.build), r.createElement("ul", {
                className: h
            }, c.map(function(t) {
                var n = d + (e.props.__path === "/" + t ? m : ""), o = e.props.__langprefix + "/" + t, i = e.props.messages[t];
                return r.createElement("li", {
                    key: t,
                    className: n
                }, r.createElement("a", {
                    href: o,
                    className: p
                }, i));
            })))));
        }
    });
    e.exports = v;
}, function(e, t, n) {
    "use strict";
    n(449), n(481), n(484);
    var r = n(579), o = n(133), i = [ "/" ], a = n(583), s = o.createClass({
        displayName: "Menu",
        render: function() {
            var e = {}, t = {}, n = this;
            return i.forEach(function(r) {
                e[r] = "pure-menu-item" + (n.props.__path === r ? " menu-item-invisible" : ""), 
                t[r] = n.props.__langprefix + r;
            }), o.createElement("div", {
                className: "top-menu pure-g pure-menu pure-menu-horizontal pure-menu-fixed"
            }, o.createElement("div", {
                className: "pure-u-5-12"
            }, o.createElement("img", {
                src: a
            })), o.createElement("div", {
                className: "pure-u-1-6 center"
            }, o.createElement("div", {
                className: e["/"]
            }, o.createElement("a", {
                href: t["/"],
                className: "pure-menu-link"
            }, "« home"))), o.createElement("div", {
                className: "pure-u-5-12 right"
            }, o.createElement(r, this.props)));
        }
    });
    e.exports = s;
}, function(e, t) {
    "use strict";
    var n = {
        TOGGLE_MENU: "toggleMenu"
    };
    e.exports = n;
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASxQTFRF5Rsk//////z84gUP6DM74AAA8o2S5BAZ5BQe5Roj4QAA+9vd9Jqe5Rgh97W44gAI85qe+9ze5BYf//7+3wAA4wsU4gAK6UBI4gQO5Rwl6DA4+c7Q5BQd//395BEa5Roi+9nb85OX+L3A3QAA6khQ5h8o8ouQ4gIL5Rcg85yg9q6x5R8o5RYf4gAJ6TpC5Bcg+97f5BMe97C0/Ofo4gAG5A8Y5R4o+93f/Ofp5BIc5A4X4w4S4wwW4w0W5BMc4w4X5A8Z4gMM+MDD6UNL5BUe5Rki9KKn/OPk5iAr85SZ5BMd8oyR4gAH9qms8pGV4wYP7FRb5BYg9Jmd4wgS8HuB6DU96DQ89aWp6DI68o6S+dLU5R4m5y835ycw4gYQ4QAB4wUO+97g//v75R0mVn9+cQAAAQ5JREFUeNpiYBgFBIAZuwQzHiARLCkJUagRG8qCB4TFcHJCFLJ6CzPhAbIKHOxQhZ6MeIEFhylUIRt+hdxwE0lSKBzux4MBgiITMRQyySlzYQJlX0yFERKcGEDDhw9ToaoIZliri2hhKlTRxgxrKXklTF/LYg1tYfKDh3iFxFpNtGeIDx4WZswkzcvPh1Whhz8rEoiXTMal0DqADQmE8OrgUijihhIsXla4FKIGKFB+SCtUQ1aoYCmHrhAknyQVx8CliKzQndPe1cQIpNAQqhAsL6znyMmliazQONpGJ8EJyDAIdACrg8o763JyCaC40YXdzjYKyDDXZ4cqBMuLi6EpFBRilxGVhjBooRAgwADWTCbgZ9jExQAAAABJRU5ErkJggg==";
}, , , , , 449, 449, 449, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACiCAIAAABNkIFMAAACg0lEQVR4nOzcsU5UWRyA8Z0N7G4CYXu23cZoiJ3xAUx8Jxoa2yngoYzR1mBC6fAAMg0qBqksHTmQOyPf79f/c07uF86Q3Juzdf7f/3/w0P257g0wBZkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTtsbG/n7+7H73wS+6Wiy+fTy/7dRs7O6R/cXZwBR3t5yfLOfHt51yaCfInCBzgswJMifInCBzgswJMifInCBzgswJMifInCBzgswJMicMfiQ05tPRq6v3p1OuuMn2jg63Hz+aZq1JM980/vz6zZQrbrLri4vJ1nJoJ8icIHOCzAkyJ8icIHOCzAkyJ8icIHOCzAkyJ8icIHPCpO+bt6Z6i/5bmO3tTbbWpJn/PTqccjl+cGgnyJwgc4LMCTInyJwgc4LMCTInyJwgc4LMCTInyJwgc4LMCS6lWBuXUiS4lIJ7JnOCzAkyJ8icIHOCzAkyJ8icIHOCzAkyJ8icIHOCzAkyJ0z6WcGY/cXZurewwnJ+spwfr3sXP+OvOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTZE6QOUHmBJkTNj3zZPfH38VfTw/WvYUVNj3zbGdn3VtYbba7u+4trLDpmbkXMieMZB7+vfzn5YuxwYfn5hluHzwZGBz7P2Ak8/Dv5fXl5djghvvy9t1tR26e4dhj/Hr6YWDKoZ0gc4LMCTInyJwgc4LMCTInyJwgc4LMCTInyJwgc4LMCTInyJzwPQAA///sAj6rx70XPwAAAABJRU5ErkJggg==";
} ]);