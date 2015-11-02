webpackJsonp([1],{21:function(e,t,n){"use strict";var r="pages";r&&(r=null),n(308),e.exports=n(307)},265:function(e,t,n){"use strict";function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function o(e,n){return n=n||"on",n+t.capitalize(e)}function i(e){var t=typeof e;return"function"===t||"object"===t&&!!e}function a(e){if(!i(e))return e;for(var t,n,r=1,o=arguments.length;o>r;r++){t=arguments[r];for(n in t)if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var a=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,a)}else e[n]=t[n]}return e}function s(e){return"function"==typeof e}function u(e,t){for(var n={},r=0;r<e.length;r++)n[e[r]]=t[r];return n}function c(e){return"object"==typeof e&&"callee"in e&&"number"==typeof e.length}function l(e,t){if(e)throw Error(t||e)}Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=r,t.callbackName=o,t.isObject=i,t.extend=a,t.isFunction=s,t.object=u,t.isArguments=c,t.throwIf=l,t.EventEmitter=n(291),t.nextTick=function(e){setTimeout(e,0)}},266:function(e,t,n){"use strict";var r=n(265),o=n(277).instanceJoinCreator,i=function(e){for(var t,n=0,r={};n<(e.children||[]).length;++n)t=e.children[n],e[t]&&(r[t]=e[t]);return r},a=function s(e){var t={};for(var n in e){var o=e[n],a=i(o),u=s(a);t[n]=o;for(var c in u){var l=u[c];t[n+r.capitalize(c)]=l}}return t};e.exports={hasListener:function(e){for(var t,n,r,o=0;o<(this.subscriptions||[]).length;++o)for(r=[].concat(this.subscriptions[o].listenable),t=0;t<r.length;t++)if(n=r[t],n===e||n.hasListener&&n.hasListener(e))return!0;return!1},listenToMany:function(e){var t=a(e);for(var n in t){var o=r.callbackName(n),i=this[o]?o:this[n]?n:void 0;i&&this.listenTo(t[n],i,this[o+"Default"]||this[i+"Default"]||i)}},validateListening:function(e){return e===this?"Listener is not able to listen to itself":r.isFunction(e.listen)?e.hasListener&&e.hasListener(this)?"Listener cannot listen to this listenable because of circular loop":void 0:e+" is missing a listen method"},listenTo:function(e,t,n){var o,i,a,s=this.subscriptions=this.subscriptions||[];return r.throwIf(this.validateListening(e)),this.fetchInitialState(e,n),o=e.listen(this[t]||t,this),i=function(){var e=s.indexOf(a);r.throwIf(-1===e,"Tried to remove listen already gone from subscriptions list!"),s.splice(e,1),o()},a={stop:i,listenable:e},s.push(a),a},stopListeningTo:function(e){for(var t,n=0,o=this.subscriptions||[];n<o.length;n++)if(t=o[n],t.listenable===e)return t.stop(),r.throwIf(-1!==o.indexOf(t),"Failed to remove listen from subscriptions list!"),!0;return!1},stopListeningToAll:function(){for(var e,t=this.subscriptions||[];e=t.length;)t[0].stop(),r.throwIf(t.length!==e-1,"Failed to remove listen from subscriptions list!")},fetchInitialState:function(e,t){t=t&&this[t]||t;var n=this;if(r.isFunction(t)&&r.isFunction(e.getInitialState)){var o=e.getInitialState();o&&r.isFunction(o.then)?o.then(function(){t.apply(n,arguments)}):t.call(this,o)}},joinTrailing:o("last"),joinLeading:o("first"),joinConcat:o("all"),joinStrict:o("strict")}},267:function(e,t,n){"use strict";var r=n(294);r.connect=n(296),r.connectFilter=n(297),r.ListenerMixin=n(270),r.listenTo=n(298),r.listenToMany=n(299),e.exports=r},268:function(e,t){"use strict";t.createdStores=[],t.createdActions=[],t.reset=function(){for(;t.createdStores.length;)t.createdStores.pop();for(;t.createdActions.length;)t.createdActions.pop()}},269:function(e,t,n){"use strict";var r=n(265);e.exports={preEmit:function(){},shouldEmit:function(){return!0},listen:function(e,t){t=t||this;var n=function(n){o||e.apply(t,n)},r=this,o=!1;return this.emitter.addListener(this.eventLabel,n),function(){o=!0,r.emitter.removeListener(r.eventLabel,n)}},trigger:function(){var e=arguments,t=this.preEmit.apply(this,e);e=void 0===t?e:r.isArguments(t)?t:[].concat(t),this.shouldEmit.apply(this,e)&&this.emitter.emit(this.eventLabel,e)},triggerAsync:function(){var e=arguments,t=this;r.nextTick(function(){t.trigger.apply(t,e)})},deferWith:function(e){var t=this.trigger,n=this,r=function(){t.apply(n,arguments)};this.trigger=function(){e.apply(n,[r].concat([].splice.call(arguments,0)))}}}},270:function(e,t,n){"use strict";var r=n(265),o=n(266);e.exports=r.extend({componentWillUnmount:o.stopListeningToAll},o)},271:function(e,t){},272:[261,273],273:[262,288,287],274:function(e,t){"use strict";e.exports={}},275:function(e,t){"use strict";e.exports={}},276:function(e,t,n){"use strict";var r=n(265),o=n(268),i=n(295),a=n(292),s={preEmit:1,shouldEmit:1};e.exports=function(e){function t(){var t,n=0;if(this.subscriptions=[],this.emitter=new r.EventEmitter,this.eventLabel="change",a(this,e),this.init&&r.isFunction(this.init)&&this.init(),this.listenables)for(t=[].concat(this.listenables);n<t.length;n++)this.listenToMany(t[n])}var u=n(275),c=n(269),l=n(266);e=e||{};for(var p in u)if(!s[p]&&(c[p]||l[p]))throw new Error("Cannot override API method "+p+" in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");for(var d in e)if(!s[d]&&(c[d]||l[d]))throw new Error("Cannot override API method "+d+" in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");e=i(e),r.extend(t.prototype,l,c,u,e);var f=new t;return o.createdStores.push(f),f}},277:function(e,t,n){"use strict";function r(e,t,n){return function(){var r,o=n.subscriptions,i=o?o.indexOf(e):-1;for(u.throwIf(-1===i,"Tried to remove join already gone from subscriptions list!"),r=0;r<t.length;r++)t[r]();o.splice(i,1)}}function o(e){e.listenablesEmitted=new Array(e.numberOfListenables),e.args=new Array(e.numberOfListenables)}function i(e,t){return function(){var n=c.call(arguments);if(t.listenablesEmitted[e])switch(t.strategy){case"strict":throw new Error("Strict join failed because listener triggered twice.");case"last":t.args[e]=n;break;case"all":t.args[e].push(n)}else t.listenablesEmitted[e]=!0,t.args[e]="all"===t.strategy?[n]:n;a(t)}}function a(e){for(var t=0;t<e.numberOfListenables;t++)if(!e.listenablesEmitted[t])return;e.callback.apply(e.listener,e.args),o(e)}var s=n(276),u=n(265),c=Array.prototype.slice,l={strict:"joinStrict",first:"joinLeading",last:"joinTrailing",all:"joinConcat"};t.staticJoinCreator=function(e){return function(){var t=c.call(arguments);return s({init:function(){this[l[e]].apply(this,t.concat("triggerAsync"))}})}},t.instanceJoinCreator=function(e){return function(){u.throwIf(arguments.length<2,"Cannot create a join with less than 2 listenables!");var t,n,a=c.call(arguments),s=a.pop(),l=a.length,p={numberOfListenables:l,callback:this[s]||s,listener:this,strategy:e},d=[];for(t=0;l>t;t++)u.throwIf(this.validateListening(a[t]));for(t=0;l>t;t++)d.push(a[t].listen(i(t,p),this));return o(p),n={listenable:a},n.stop=r(n,d,this),this.subscriptions=(this.subscriptions||[]).concat(n),n}}},278:function(e,t,n){"use strict";var r,o=n(267),i=n(303);r=[i.TOGGLE_MENU],e.exports=o.createActions(r)},279:function(e,t,n){"use strict";var r=void 0,o=n(267),i=n(278),a=n(289),s=o.createStore({mixins:[a],listenables:[i],onToggleMenu:function(){r=!r,this.trigger({menuActivated:r})},getInitialState:function(){var e={menuActivated:!1},t=this.readStateFromClientStorage(e);return r=t.menuActivated,t}});e.exports=s},280:271,281:271,282:271,283:271,284:[258,285],285:[259,286,272,272],286:[260,273],287:151,288:152,289:function(e,t,n){(function(t){"use strict";var r="undefined"!=typeof t&&"[object global]"==={}.toString.call(t)&&(!t.document||"[object HTMLDocument]"!=={}.toString.call(t.document)),o=!1,i=r?{}:window,a=n(290),s="itsaRefluxClientStorage",u=3600,c=function(){if(!o){o=!0;var e=function(e){var t={};Object.assign(t,e[0]),a.setItem(s,{time:Date.now(),state:t})};this.emitter.addListener("change",e)}},l=function(){return i.history&&i.history.pushState},p={envBrowser:function(){return!r},readStateFromClientStorage:function(e){var t=void 0;if(this.envBrowser()&&a){var r=n(284),o=r.getProps().__sessiontime;l()||(o=Math.max(o,u)),t=a.getItem(s,!0),t.time&&t.time>Date.now()-1e3*o&&Object.assign(e,t.state),c.call(this)}return e}};e.exports=p}).call(t,function(){return this}())},290:function(e,t){"use strict";var n=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,r=function(e,t){return n.test(t)?new Date(t):t},o={getItem:function(e,t){var n,o=localStorage.getItem(e);if(o)try{n=JSON.parse(o,t?r:null)}catch(i){n={}}return n},setItem:function(e,t){try{t=JSON.stringify(t),localStorage.setItem(e,t)}catch(n){return!1}return!0},removeItem:function(e){try{localStorage.removeItem(e)}catch(t){return!1}return!0}};e.exports=o},291:function(e,t,n){"use strict";function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(){}var i="function"!=typeof Object.create?"~":!1;o.prototype._events=void 0,o.prototype.listeners=function(e,t){var n=i?i+e:e,r=this._events&&this._events[n];if(t)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var o=0,a=r.length,s=new Array(a);a>o;o++)s[o]=r[o].fn;return s},o.prototype.emit=function(e,t,n,r,o,a){var s=i?i+e:e;if(!this._events||!this._events[s])return!1;var u,c,l=this._events[s],p=arguments.length;if("function"==typeof l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),p){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,n),!0;case 4:return l.fn.call(l.context,t,n,r),!0;case 5:return l.fn.call(l.context,t,n,r,o),!0;case 6:return l.fn.call(l.context,t,n,r,o,a),!0}for(c=1,u=new Array(p-1);p>c;c++)u[c-1]=arguments[c];l.fn.apply(l.context,u)}else{var d,f=l.length;for(c=0;f>c;c++)switch(l[c].once&&this.removeListener(e,l[c].fn,void 0,!0),p){case 1:l[c].fn.call(l[c].context);break;case 2:l[c].fn.call(l[c].context,t);break;case 3:l[c].fn.call(l[c].context,t,n);break;default:if(!u)for(d=1,u=new Array(p-1);p>d;d++)u[d-1]=arguments[d];l[c].fn.apply(l[c].context,u)}}return!0},o.prototype.on=function(e,t,n){var o=new r(t,n||this),a=i?i+e:e;return this._events||(this._events=i?{}:Object.create(null)),this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],o]:this._events[a].push(o):this._events[a]=o,this},o.prototype.once=function(e,t,n){var o=new r(t,n||this,!0),a=i?i+e:e;return this._events||(this._events=i?{}:Object.create(null)),this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],o]:this._events[a].push(o):this._events[a]=o,this},o.prototype.removeListener=function(e,t,n,r){var o=i?i+e:e;if(!this._events||!this._events[o])return this;var a=this._events[o],s=[];if(t)if(a.fn)(a.fn!==t||r&&!a.once||n&&a.context!==n)&&s.push(a);else for(var u=0,c=a.length;c>u;u++)(a[u].fn!==t||r&&!a[u].once||n&&a[u].context!==n)&&s.push(a[u]);return s.length?this._events[o]=1===s.length?s[0]:s:delete this._events[o],this},o.prototype.removeAllListeners=function(e){return this._events?(e?delete this._events[i?i+e:e]:this._events=i?{}:Object.create(null),this):this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prototype.setMaxListeners=function(){return this},o.prefixed=i,e.exports=o},292:function(e,t){"use strict";e.exports=function(e,t){for(var n in t)if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var r=Object.getOwnPropertyDescriptor(t,n);if(!r.value||"function"!=typeof r.value||!t.hasOwnProperty(n))continue;e[n]=t[n].bind(e)}else{var o=t[n];if("function"!=typeof o||!t.hasOwnProperty(n))continue;e[n]=o.bind(e)}return e}},293:function(e,t,n){"use strict";var r=n(265),o=n(274),i=n(269),a=n(268),s={preEmit:1,shouldEmit:1},u=function c(e){e=e||{},r.isObject(e)||(e={actionName:e});for(var t in o)if(!s[t]&&i[t])throw new Error("Cannot override API method "+t+" in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead.");for(var n in e)if(!s[n]&&i[n])throw new Error("Cannot override API method "+n+" in action creation. Use another method name or override it on Reflux.PublisherMethods instead.");e.children=e.children||[],e.asyncResult&&(e.children=e.children.concat(["completed","failed"]));for(var u=0,l={};u<e.children.length;u++){var p=e.children[u];l[p]=c(p)}var d=r.extend({eventLabel:"action",emitter:new r.EventEmitter,_isAction:!0},i,o,e),f=function h(){var e=h.sync?"trigger":"triggerAsync";return h[e].apply(h,arguments)};return r.extend(f,l,d),a.createdActions.push(f),f};e.exports=u},294:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={version:{"reflux-core":"0.3.0"}};r.ActionMethods=n(274),r.ListenerMethods=n(266),r.PublisherMethods=n(269),r.StoreMethods=n(275),r.createAction=n(293),r.createStore=n(276);var o=n(277).staticJoinCreator;r.joinTrailing=r.all=o("last"),r.joinLeading=o("first"),r.joinStrict=o("strict"),r.joinConcat=o("all");var i=r.utils=n(265);r.EventEmitter=i.EventEmitter,r.Promise=i.Promise,r.createActions=function(){var e=function(e,t){Object.keys(e).forEach(function(n){var o=e[n];t[n]=r.createAction(o)})};return function(t){var n={};return t instanceof Array?t.forEach(function(t){i.isObject(t)?e(t,n):n[t]=r.createAction(t)}):e(t,n),n}}(),r.setEventEmitter=function(e){r.EventEmitter=i.EventEmitter=e},r.nextTick=function(e){i.nextTick=e},r.use=function(e){e(r)},r.__keep=n(268),Function.prototype.bind||console.error("Function.prototype.bind not available. ES5 shim required. https://github.com/spoike/refluxjs#es5"),t["default"]=r,e.exports=t["default"]},295:function(e,t,n){"use strict";var r=n(265);e.exports=function(e){var t={init:[],preEmit:[],shouldEmit:[]},n=function o(e){var n={};return e.mixins&&e.mixins.forEach(function(e){r.extend(n,o(e))}),r.extend(n,e),Object.keys(t).forEach(function(n){e.hasOwnProperty(n)&&t[n].push(e[n])}),n}(e);return t.init.length>1&&(n.init=function(){var e=arguments;t.init.forEach(function(t){t.apply(this,e)},this)}),t.preEmit.length>1&&(n.preEmit=function(){return t.preEmit.reduce(function(e,t){var n=t.apply(this,e);return void 0===n?e:[n]}.bind(this),arguments)}),t.shouldEmit.length>1&&(n.shouldEmit=function(){var e=arguments;return!t.shouldEmit.some(function(t){return!t.apply(this,e)},this)}),Object.keys(t).forEach(function(e){1===t[e].length&&(n[e]=t[e][0])}),n}},296:function(e,t,n){"use strict";var r=n(266),o=n(270),i=n(265);e.exports=function(e,t){return{getInitialState:function(){return i.isFunction(e.getInitialState)?void 0===t?e.getInitialState():i.object([t],[e.getInitialState()]):{}},componentDidMount:function(){i.extend(this,r);var n=this,o=void 0===t?this.setState:function(e){("undefined"==typeof n.isMounted||n.isMounted()===!0)&&n.setState(i.object([t],[e]))};this.listenTo(e,o)},componentWillUnmount:o.componentWillUnmount}}},297:function(e,t,n){"use strict";var r=n(266),o=n(270),i=n(265);e.exports=function(e,t,n){return n=i.isFunction(t)?t:n,{getInitialState:function(){if(i.isFunction(e.getInitialState)){if(i.isFunction(t))return n.call(this,e.getInitialState());var r=n.call(this,e.getInitialState());return"undefined"!=typeof r?i.object([t],[r]):{}}return{}},componentDidMount:function(){i.extend(this,r);var o=this,a=function(e){if(i.isFunction(t))o.setState(n.call(o,e));else{var r=n.call(o,e);o.setState(i.object([t],[r]))}};this.listenTo(e,a)},componentWillUnmount:o.componentWillUnmount}}},298:function(e,t,n){"use strict";var r=n(266);e.exports=function(e,t,n){return{componentDidMount:function(){for(var o in r)if(this[o]!==r[o]){if(this[o])throw"Can't have other property '"+o+"' when using Reflux.listenTo!";this[o]=r[o]}this.listenTo(e,t,n)},componentWillUnmount:r.stopListeningToAll}}},299:function(e,t,n){"use strict";var r=n(266);e.exports=function(e){return{componentDidMount:function(){for(var t in r)if(this[t]!==r[t]){if(this[t])throw"Can't have other property '"+t+"' when using Reflux.listenToMany!";this[t]=r[t]}this.listenToMany(e)},componentWillUnmount:r.stopListeningToAll}}},300:function(e,t,n){"use strict";var r=n(133),o="pure-menu-list",i="pure-menu-item",a="pure-menu-selected",s="pure-menu-link",u=r.createClass({displayName:"LanguageMenu",render:function(){var e=this,t=[],n=Object.keys(this.props.__languages);return n.forEach(function(n){e.props.__languages[n]!==!1&&t.push(n)}),r.createElement("ul",{className:o},t.map(function(t){var n=i+(e.props.__lang===t?" "+a:""),o="/"+t+e.props.__uri,u=t.toUpperCase();return r.createElement("li",{key:t,className:n},r.createElement("a",{href:o,"data-setlang":t,className:s},u))}))}});e.exports=u},301:function(e,t,n){"use strict";n(271),n(281);var r=n(133),o=n(267),i=n(279),a=n(278),s=["installation","configuration"],u=["pages","models","async-models","controller","router","appfile","different-devices","markdown","i18n","databases"],c=["developing","production","gulp"],l="pure-menu-",p=l+"link",d=l+"item",f=l+"heading",h=l+"list",m=" "+l+"selected",v=r.createClass({displayName:"Menu",mixins:[o.connect(i)],render:function(){var e=this,t="menu-link"+(this.state.menuActivated?" active":"");return r.createElement("div",null,r.createElement("a",{className:t,onClick:a.toggleMenu},r.createElement("span",null)),r.createElement("div",{id:"leftmenu"},r.createElement("div",{className:"pure-menu"},r.createElement("a",{className:f},this.props.messages.setup),r.createElement("ul",{className:h},s.map(function(t){var n=d+(e.props.__path==="/"+t?m:""),o=e.props.__langprefix+"/"+t,i=e.props.messages[t];return r.createElement("li",{key:t,className:n},r.createElement("a",{href:o,className:p},i))})),r.createElement("a",{className:f},this.props.messages.create),r.createElement("ul",{className:h},u.map(function(t){var n=d+(e.props.__path==="/"+t?m:""),o=e.props.__langprefix+"/"+t,i=e.props.messages[t];return r.createElement("li",{key:t,className:n},r.createElement("a",{href:o,className:p},i))})),r.createElement("a",{className:f},this.props.messages.build),r.createElement("ul",{className:h},c.map(function(t){var n=d+(e.props.__path==="/"+t?m:""),o=e.props.__langprefix+"/"+t,i=e.props.messages[t];return r.createElement("li",{key:t,className:n},r.createElement("a",{href:o,className:p},i))})))))}});e.exports=v},302:function(e,t,n){"use strict";n(271),n(280),n(283);var r=n(300),o=n(133),i=["/"],a=n(304),s=o.createClass({displayName:"Menu",render:function(){var e=this,t={},n={};return i.forEach(function(r){t[r]="pure-menu-item"+(e.props.__path===r?" menu-item-invisible":""),n[r]=e.props.__langprefix+r}),o.createElement("div",{className:"top-menu pure-g pure-menu pure-menu-horizontal pure-menu-fixed"},o.createElement("div",{className:"pure-u-5-12"},o.createElement("img",{src:a})),o.createElement("div",{className:"pure-u-1-6 center"},o.createElement("div",{className:t["/"]},o.createElement("a",{href:n["/"],className:"pure-menu-link"},"« home"))),o.createElement("div",{className:"pure-u-5-12 right"},o.createElement(r,this.props)))}});e.exports=s},303:function(e,t){"use strict";var n={TOGGLE_MENU:"toggleMenu"};e.exports=n},304:function(e,t,n){e.exports=n.p+"52e737208a0ac30c3de9d327733b50fe.png"},305:271,306:271,307:function(e,t,n){"use strict";n(282),n(306),n(305);var r=n(133),o=n(302),i=n(301),a=n(267),s=n(279),u=r.createClass({displayName:"Body",mixins:[a.connect(s)],render:function(){var e=this.state.menuActivated?"active":"";return r.createElement("div",{className:e},r.createElement(o,this.props),r.createElement(i,this.props),r.createElement("div",{className:"main"},r.createElement("h1",{className:"header",dangerouslySetInnerHTML:this.props.pageheader}),r.createElement("div",{className:"content",dangerouslySetInnerHTML:this.props.pagecontent})))}});e.exports=u},308:271});