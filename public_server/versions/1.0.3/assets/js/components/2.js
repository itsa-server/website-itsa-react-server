webpackJsonp([2],Array(23).concat([function(e,t,n){"use strict";var r="router";r&&(r=null),e.exports=n(606)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,2,3,[333,445,413,402,404],[399,415],7,[293,429],[310,469,413,403,539,422,448,449,433,450,402,401,429,416,404],[343,417,420,413,403,427,447,421,422,473,414,423,450,409,436,479,571,456,401,458,459,404],[357,439,411,413,414,423,435,402,401,404],function(e,t,n){"use strict";function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function o(e,n){return n=n||"on",n+t.capitalize(e)}function i(e){var t=typeof e;return"function"===t||"object"===t&&!!e}function a(e){if(!i(e))return e;for(var t,n,r=1,o=arguments.length;o>r;r++){t=arguments[r];for(n in t)if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var a=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,a)}else e[n]=t[n]}return e}function s(e){return"function"==typeof e}function u(e,t){for(var n={},r=0;r<e.length;r++)n[e[r]]=t[r];return n}function c(e){return"object"==typeof e&&"callee"in e&&"number"==typeof e.length}function l(e,t){if(e)throw Error(t||e)}Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=r,t.callbackName=o,t.isObject=i,t.extend=a,t.isFunction=s,t.object=u,t.isArguments=c,t.throwIf=l,t.EventEmitter=n(590),t.nextTick=function(e){setTimeout(e,0)}},[304,401],[306,480],31,32,33,34,[288,401],[364,411,402,415,455],function(e,t,n){"use strict";var r=n(410),o=n(494).instanceJoinCreator,i=function(e){for(var t,n=0,r={};n<(e.children||[]).length;++n)t=e.children[n],e[t]&&(r[t]=e[t]);return r},a=function s(e){var t={};for(var n in e){var o=e[n],a=i(o),u=s(a);t[n]=o;for(var c in u){var l=u[c];t[n+r.capitalize(c)]=l}}return t};e.exports={hasListener:function(e){for(var t,n,r,o=0;o<(this.subscriptions||[]).length;++o)for(r=[].concat(this.subscriptions[o].listenable),t=0;t<r.length;t++)if(n=r[t],n===e||n.hasListener&&n.hasListener(e))return!0;return!1},listenToMany:function(e){var t=a(e);for(var n in t){var o=r.callbackName(n),i=this[o]?o:this[n]?n:void 0;i&&this.listenTo(t[n],i,this[o+"Default"]||this[i+"Default"]||i)}},validateListening:function(e){return e===this?"Listener is not able to listen to itself":r.isFunction(e.listen)?e.hasListener&&e.hasListener(this)?"Listener cannot listen to this listenable because of circular loop":void 0:e+" is missing a listen method"},listenTo:function(e,t,n){var o,i,a,s=this.subscriptions=this.subscriptions||[];return r.throwIf(this.validateListening(e)),this.fetchInitialState(e,n),o=e.listen(this[t]||t,this),i=function(){var e=s.indexOf(a);r.throwIf(-1===e,"Tried to remove listen already gone from subscriptions list!"),s.splice(e,1),o()},a={stop:i,listenable:e},s.push(a),a},stopListeningTo:function(e){for(var t,n=0,o=this.subscriptions||[];n<o.length;n++)if(t=o[n],t.listenable===e)return t.stop(),r.throwIf(-1!==o.indexOf(t),"Failed to remove listen from subscriptions list!"),!0;return!1},stopListeningToAll:function(){for(var e,t=this.subscriptions||[];e=t.length;)t[0].stop(),r.throwIf(t.length!==e-1,"Failed to remove listen from subscriptions list!")},fetchInitialState:function(e,t){t=t&&this[t]||t;var n=this;if(r.isFunction(t)&&r.isFunction(e.getInitialState)){var o=e.getInitialState();o&&r.isFunction(o.then)?o.then(function(){t.apply(n,arguments)}):t.call(this,o)}},joinTrailing:o("last"),joinLeading:o("first"),joinConcat:o("all"),joinStrict:o("strict")}},[307,406,425,468,540,478,402,457],[341,477,401],43,[352,546,427],[289,417,581,404],[295,468,440,451,452,401],[298,406,425,451,452],[334,403,431,449,433,413,432,483,401,404],[370,418,455],[389,401],[282,481],[338,403,404],[346,402,401],61,[368,428,478,454],[372,401],64,65,function(e,t,n){"use strict";var r=n(593);r.connect=n(595),r.connectFilter=n(596),r.ListenerMixin=n(462),r.listenTo=n(597),r.listenToMany=n(598),e.exports=r},[285,411,402,401],[297,406,401],[301,475,401],[302,420,451,452,401],[312,470,408],[313,401],[315,402,436,404],[318,467,417,424,420,443,408,543,414,402,437,401,457,416,404],[335,403,422,401],80,[348,429],[356,448,413,403,422,409,402,401,404],[373,401],84,85,86,87,[386,524,447,432,402,401,404],[387,405],[394,405],[396,404],function(e,t){"use strict";t.createdStores=[],t.createdActions=[],t.reset=function(){for(;t.createdStores.length;)t.createdStores.pop();for(;t.createdActions.length;)t.createdActions.pop()}},function(e,t,n){"use strict";var r=n(410);e.exports={preEmit:function(){},shouldEmit:function(){return!0},listen:function(e,t){t=t||this;var n=function(n){o||e.apply(t,n)},r=this,o=!1;return this.emitter.addListener(this.eventLabel,n),function(){o=!0,r.emitter.removeListener(r.eventLabel,n)}},trigger:function(){var e=arguments,t=this.preEmit.apply(this,e);e=void 0===t?e:r.isArguments(t)?t:[].concat(t),this.shouldEmit.apply(this,e)&&this.emitter.emit(this.eventLabel,e)},triggerAsync:function(){var e=arguments,t=this;r.nextTick(function(){t.trigger.apply(t,e)})},deferWith:function(e){var t=this.trigger,n=this,r=function(){t.apply(n,arguments)};this.trigger=function(){e.apply(n,[r].concat([].splice.call(arguments,0)))}}}},function(e,t,n){"use strict";var r=n(410),o=n(419);e.exports=r.extend({componentWillUnmount:o.stopListeningToAll},o)},function(e,t){},39,[278,508,506],114,[284,466,405,563,567,574,577,404],[296,401],[311,450,401,404],[320,467,513,424,408,414,401,458],[327,424,443,446,402,437],[340,533,479,481,482],[342,561],[345,429],[349,403,431,433,415],[350,411,420,402],125,126,[375,575],[380,413,422,408,401,486,404],129,130,131,[383,405,401],[384,405],134,135,[398,403,431,421,483,401,404],[281,490],[278,589,588],function(e,t){"use strict";e.exports={}},function(e,t){"use strict";e.exports={}},function(e,t,n){"use strict";var r=n(410),o=n(460),i=n(594),a=n(591),s={preEmit:1,shouldEmit:1};e.exports=function(e){function t(){var t,n=0;if(this.subscriptions=[],this.emitter=new r.EventEmitter,this.eventLabel="change",a(this,e),this.init&&r.isFunction(this.init)&&this.init(),this.listenables)for(t=[].concat(this.listenables);n<t.length;n++)this.listenToMany(t[n])}var u=n(492),c=n(461),l=n(419);e=e||{};for(var p in u)if(!s[p]&&(c[p]||l[p]))throw new Error("Cannot override API method "+p+" in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");for(var d in e)if(!s[d]&&(c[d]||l[d]))throw new Error("Cannot override API method "+d+" in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");e=i(e),r.extend(t.prototype,l,c,u,e);var f=new t;return o.createdStores.push(f),f}},function(e,t,n){"use strict";function r(e,t,n){return function(){var r,o=n.subscriptions,i=o?o.indexOf(e):-1;for(u.throwIf(-1===i,"Tried to remove join already gone from subscriptions list!"),r=0;r<t.length;r++)t[r]();o.splice(i,1)}}function o(e){e.listenablesEmitted=new Array(e.numberOfListenables),e.args=new Array(e.numberOfListenables)}function i(e,t){return function(){var n=c.call(arguments);if(t.listenablesEmitted[e])switch(t.strategy){case"strict":throw new Error("Strict join failed because listener triggered twice.");case"last":t.args[e]=n;break;case"all":t.args[e].push(n)}else t.listenablesEmitted[e]=!0,t.args[e]="all"===t.strategy?[n]:n;a(t)}}function a(e){for(var t=0;t<e.numberOfListenables;t++)if(!e.listenablesEmitted[t])return;e.callback.apply(e.listener,e.args),o(e)}var s=n(493),u=n(410),c=Array.prototype.slice,l={strict:"joinStrict",first:"joinLeading",last:"joinTrailing",all:"joinConcat"};t.staticJoinCreator=function(e){return function(){var t=c.call(arguments);return s({init:function(){this[l[e]].apply(this,t.concat("triggerAsync"))}})}},t.instanceJoinCreator=function(e){return function(){u.throwIf(arguments.length<2,"Cannot create a join with less than 2 listenables!");var t,n,a=c.call(arguments),s=a.pop(),l=a.length,p={numberOfListenables:l,callback:this[s]||s,listener:this,strategy:e},d=[];for(t=0;l>t;t++)u.throwIf(this.validateListening(a[t]));for(t=0;l>t;t++)d.push(a[t].listen(i(t,p),this));return o(p),n={listenable:a},n.stop=r(n,d,this),this.subscriptions=(this.subscriptions||[]).concat(n),n}}},function(e,t,n){"use strict";var r,o=n(438),i=n(602);r=[i.TOGGLE_MENU],e.exports=o.createActions(r)},function(e,t,n){"use strict";var r,o=n(438),i=n(495),a=n(501),s=o.createStore({mixins:[a],listenables:[i],onToggleMenu:function(){r=!r,this.trigger({menuActivated:r})},getInitialState:function(){var e={menuActivated:!1},t=this.readStateFromClientStorage(e);return r=t.menuActivated,t}});e.exports=s},463,463,463,463,function(e,t,n){(function(t){"use strict";var r="undefined"!=typeof t&&"[object global]"==={}.toString.call(t)&&(!t.document||"[object HTMLDocument]"!=={}.toString.call(t.document)),o=!1,i=r?{}:window,a=n(502),s="itsaRefluxClientStorage",u=3600,c=function(){if(!o){o=!0;var e=function(e){var t={};Object.assign(t,e[0]),a.setItem(s,{time:Date.now(),state:t})};this.emitter.addListener("change",e)}},l=function(){return i.history&&i.history.pushState},p={envBrowser:function(){return!r},readStateFromClientStorage:function(e){var t;if(this.envBrowser()&&a){var r=n(503),o=r.getProps().__sessiontime;l()||(o=Math.max(o,u)),t=a.getItem(s,!0),t.time&&t.time>Date.now()-1e3*o&&Object.assign(e,t.state),c.call(this)}return e}};e.exports=p}).call(t,function(){return this}())},function(e,t){"use strict";var n=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,r=function(e,t){return n.test(t)?new Date(t):t},o={getItem:function(e,t){var n,o=localStorage.getItem(e);if(o)try{n=JSON.parse(o,t?r:null)}catch(i){n={}}return n},setItem:function(e,t){try{t=JSON.stringify(t),localStorage.setItem(e,t)}catch(n){return!1}return!0},removeItem:function(e){try{localStorage.removeItem(e)}catch(t){return!1}return!0}};e.exports=o},[274,585,586,504],[275,465,505,464],[276,465,507,464],155,[277,509],157,158,[283,406,426,405,518,554,557,416],[286,406,425,426,405,409,418,457,487,416],201,[287,514,474,582,401],[290,405,566,415,484,401],[291,416],[292,406,426,434,408,416],[294,415],[299,411,402,485],[300,417,405],[303,406,415],[305,440,523,469,407,445,413,403,427,525,471,536,421,408,414,475,423,547,402,480,578,405],[308,423,568,456,459],[309,411,431,488,404],[314,444,445,413,403,427,422,448,432,414,449,433,423,409,402,436,401,459,404],[316,403,427,576],[317,430,412,407,403,429],[319,406,442,412,407,403],[321,406,442,412,407,403],[322,406,442,412,407,403],[323,430,424,441,412,407,403,408,409,402,401],[324,412,407,403,404],[325,430,441,412,407,403,409,402],[326,405,570,485],[328,430,424,441,412,407,403,409,402,401,404],[329,409,435,402,415],[330,510,511,512,515,516,405,519,520,412,407,443,535,446,526,527,529,470,528,530,531,532,534,471,403,541,542,421,408,545,550,551,552,549,565,537],[331,417,538,408,414,580],[332,402],228,[336,425],[337,517,405,411,421,408,409,402,455,572],[339,417,425,444,407,447,420,432,446,414,477,409],[344,444,474,423,522],[347,401],[351,439,411,420,472,476,435,402],[353,544],[354,403,421,473,548,436,456,401],[355,411,439,476,435,402,415],[358,417],[359,406,426,472,418,482,487,416,583],240,[360,406,440,426,553,418,556,558,434,555,559,428,560,453,401,416,404],[361,418],[362,418],[363,434],[365,428],[366,418],[367,428,453,569,454],[369,428,454],[371,434],250,251,[374,562],[376,584],[377,407,403,401],[378,405,564,484,401],[379,466],[381,488,404],[382,453],259,260,261,262,[385,573],[388,486],265,266,[390,403,401],[391,405],[392,579],[393,437],[395,405,437,458],272,[397,401],[400,521],[279,587,489,489],[280,490],155,157,function(e,t,n){"use strict";function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(){}var i="function"!=typeof Object.create?"~":!1;o.prototype._events=void 0,o.prototype.listeners=function(e,t){var n=i?i+e:e,r=this._events&&this._events[n];if(t)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var o=0,a=r.length,s=new Array(a);a>o;o++)s[o]=r[o].fn;return s},o.prototype.emit=function(e,t,n,r,o,a){var s=i?i+e:e;if(!this._events||!this._events[s])return!1;var u,c,l=this._events[s],p=arguments.length;if("function"==typeof l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),p){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,n),!0;case 4:return l.fn.call(l.context,t,n,r),!0;case 5:return l.fn.call(l.context,t,n,r,o),!0;case 6:return l.fn.call(l.context,t,n,r,o,a),!0}for(c=1,u=new Array(p-1);p>c;c++)u[c-1]=arguments[c];l.fn.apply(l.context,u)}else{var d,f=l.length;for(c=0;f>c;c++)switch(l[c].once&&this.removeListener(e,l[c].fn,void 0,!0),p){case 1:l[c].fn.call(l[c].context);break;case 2:l[c].fn.call(l[c].context,t);break;case 3:l[c].fn.call(l[c].context,t,n);break;default:if(!u)for(d=1,u=new Array(p-1);p>d;d++)u[d-1]=arguments[d];l[c].fn.apply(l[c].context,u)}}return!0},o.prototype.on=function(e,t,n){var o=new r(t,n||this),a=i?i+e:e;return this._events||(this._events=i?{}:Object.create(null)),this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],o]:this._events[a].push(o):this._events[a]=o,this},o.prototype.once=function(e,t,n){var o=new r(t,n||this,!0),a=i?i+e:e;return this._events||(this._events=i?{}:Object.create(null)),this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],o]:this._events[a].push(o):this._events[a]=o,this},o.prototype.removeListener=function(e,t,n,r){var o=i?i+e:e;if(!this._events||!this._events[o])return this;var a=this._events[o],s=[];if(t)if(a.fn)(a.fn!==t||r&&!a.once||n&&a.context!==n)&&s.push(a);else for(var u=0,c=a.length;c>u;u++)(a[u].fn!==t||r&&!a[u].once||n&&a[u].context!==n)&&s.push(a[u]);return s.length?this._events[o]=1===s.length?s[0]:s:delete this._events[o],this},o.prototype.removeAllListeners=function(e){return this._events?(e?delete this._events[i?i+e:e]:this._events=i?{}:Object.create(null),this):this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prototype.setMaxListeners=function(){return this},o.prefixed=i,e.exports=o},function(e,t){"use strict";e.exports=function(e,t){for(var n in t)if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var r=Object.getOwnPropertyDescriptor(t,n);if(!r.value||"function"!=typeof r.value||!t.hasOwnProperty(n))continue;e[n]=t[n].bind(e)}else{var o=t[n];if("function"!=typeof o||!t.hasOwnProperty(n))continue;e[n]=o.bind(e)}return e}},function(e,t,n){"use strict";var r=n(410),o=n(491),i=n(461),a=n(460),s={preEmit:1,shouldEmit:1},u=function c(e){e=e||{},r.isObject(e)||(e={actionName:e});for(var t in o)if(!s[t]&&i[t])throw new Error("Cannot override API method "+t+" in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead.");for(var n in e)if(!s[n]&&i[n])throw new Error("Cannot override API method "+n+" in action creation. Use another method name or override it on Reflux.PublisherMethods instead.");e.children=e.children||[],e.asyncResult&&(e.children=e.children.concat(["completed","failed"]));for(var u=0,l={};u<e.children.length;u++){var p=e.children[u];l[p]=c(p)}var d=r.extend({eventLabel:"action",emitter:new r.EventEmitter,_isAction:!0},i,o,e),f=function h(){var e=h.sync?"trigger":"triggerAsync";return h[e].apply(h,arguments)};return r.extend(f,l,d),a.createdActions.push(f),f};e.exports=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={version:{"reflux-core":"0.3.0"}};r.ActionMethods=n(491),r.ListenerMethods=n(419),r.PublisherMethods=n(461),r.StoreMethods=n(492),r.createAction=n(592),r.createStore=n(493);var o=n(494).staticJoinCreator;r.joinTrailing=r.all=o("last"),r.joinLeading=o("first"),r.joinStrict=o("strict"),r.joinConcat=o("all");var i=r.utils=n(410);r.EventEmitter=i.EventEmitter,r.Promise=i.Promise,r.createActions=function(){var e=function(e,t){Object.keys(e).forEach(function(n){var o=e[n];t[n]=r.createAction(o)})};return function(t){var n={};return t instanceof Array?t.forEach(function(t){i.isObject(t)?e(t,n):n[t]=r.createAction(t)}):e(t,n),n}}(),r.setEventEmitter=function(e){r.EventEmitter=i.EventEmitter=e},r.nextTick=function(e){i.nextTick=e},r.use=function(e){e(r)},r.__keep=n(460),Function.prototype.bind||console.error("Function.prototype.bind not available. ES5 shim required. https://github.com/spoike/refluxjs#es5"),t["default"]=r,e.exports=t["default"]},function(e,t,n){"use strict";var r=n(410);e.exports=function(e){var t={init:[],preEmit:[],shouldEmit:[]},n=function o(e){var n={};return e.mixins&&e.mixins.forEach(function(e){r.extend(n,o(e))}),r.extend(n,e),Object.keys(t).forEach(function(n){e.hasOwnProperty(n)&&t[n].push(e[n])}),n}(e);return t.init.length>1&&(n.init=function(){var e=arguments;t.init.forEach(function(t){t.apply(this,e)},this)}),t.preEmit.length>1&&(n.preEmit=function(){return t.preEmit.reduce(function(e,t){var n=t.apply(this,e);return void 0===n?e:[n]}.bind(this),arguments)}),t.shouldEmit.length>1&&(n.shouldEmit=function(){var e=arguments;return!t.shouldEmit.some(function(t){return!t.apply(this,e)},this)}),Object.keys(t).forEach(function(e){1===t[e].length&&(n[e]=t[e][0])}),n}},function(e,t,n){"use strict";var r=n(419),o=n(462),i=n(410);e.exports=function(e,t){return{getInitialState:function(){return i.isFunction(e.getInitialState)?void 0===t?e.getInitialState():i.object([t],[e.getInitialState()]):{}},componentDidMount:function(){i.extend(this,r);var n=this,o=void 0===t?this.setState:function(e){("undefined"==typeof n.isMounted||n.isMounted()===!0)&&n.setState(i.object([t],[e]))};this.listenTo(e,o)},componentWillUnmount:o.componentWillUnmount}}},function(e,t,n){"use strict";var r=n(419),o=n(462),i=n(410);e.exports=function(e,t,n){return n=i.isFunction(t)?t:n,{getInitialState:function(){if(i.isFunction(e.getInitialState)){if(i.isFunction(t))return n.call(this,e.getInitialState());var r=n.call(this,e.getInitialState());return"undefined"!=typeof r?i.object([t],[r]):{}}return{}},componentDidMount:function(){i.extend(this,r);var o=this,a=function(e){if(i.isFunction(t))o.setState(n.call(o,e));else{var r=n.call(o,e);o.setState(i.object([t],[r]))}};this.listenTo(e,a)},componentWillUnmount:o.componentWillUnmount}}},function(e,t,n){"use strict";var r=n(419);e.exports=function(e,t,n){return{componentDidMount:function(){for(var o in r)if(this[o]!==r[o]){if(this[o])throw"Can't have other property '"+o+"' when using Reflux.listenTo!";this[o]=r[o]}this.listenTo(e,t,n)},componentWillUnmount:r.stopListeningToAll}}},function(e,t,n){"use strict";var r=n(419);e.exports=function(e){return{componentDidMount:function(){for(var t in r)if(this[t]!==r[t]){if(this[t])throw"Can't have other property '"+t+"' when using Reflux.listenToMany!";this[t]=r[t]}this.listenToMany(e)},componentWillUnmount:r.stopListeningToAll}}},function(e,t,n){"use strict";var r=n(137),o="pure-menu-list",i="pure-menu-item",a="pure-menu-selected",s="pure-menu-link",u=r.createClass({displayName:"LanguageMenu",render:function(){var e=[],t=Object.keys(this.props.__languages),n=this;return t.forEach(function(t){n.props.__languages[t]!==!1&&e.push(t)}),r.createElement("ul",{className:o},e.map(function(e){var t=i+(n.props.__lang===e?" "+a:""),o="/"+e+n.props.__uri,u=e.toUpperCase();return r.createElement("li",{key:e,className:t},r.createElement("a",{href:o,"data-setlang":e,className:s},u))}))}});e.exports=u},function(e,t,n){"use strict";n(463),n(498);var r=n(137),o=n(438),i=n(496),a=n(495),s=["installation","configuration"],u=["pages","models","async-models","controller","router","appfile","different-devices","markdown","i18n","databases"],c=["developing","production","gulp"],l="pure-menu-",p=l+"link",d=l+"item",f=l+"heading",h=l+"list",m=" "+l+"selected",v=r.createClass({displayName:"Menu",mixins:[o.connect(i)],render:function(){var e=this,t="menu-link"+(this.state.menuActivated?" active":"");return r.createElement("div",null,r.createElement("a",{className:t,onClick:a.toggleMenu},r.createElement("span",null)),r.createElement("div",{id:"leftmenu"},r.createElement("div",{className:"pure-menu"},r.createElement("a",{className:f},this.props.messages.setup),r.createElement("ul",{className:h},s.map(function(t){var n=d+(e.props.__path==="/"+t?m:""),o=e.props.__langprefix+"/"+t,i=e.props.messages[t];return r.createElement("li",{key:t,className:n},r.createElement("a",{href:o,className:p},i))})),r.createElement("a",{className:f},this.props.messages.create),r.createElement("ul",{className:h},u.map(function(t){var n=d+(e.props.__path==="/"+t?m:""),o=e.props.__langprefix+"/"+t,i=e.props.messages[t];return r.createElement("li",{key:t,className:n},r.createElement("a",{href:o,className:p},i))})),r.createElement("a",{className:f},this.props.messages.build),r.createElement("ul",{className:h},c.map(function(t){var n=d+(e.props.__path==="/"+t?m:""),o=e.props.__langprefix+"/"+t,i=e.props.messages[t];return r.createElement("li",{key:t,className:n},r.createElement("a",{href:o,className:p},i))})))))}});e.exports=v},function(e,t,n){"use strict";n(463),n(497),n(500);var r=n(599),o=n(137),i=["/"],a=n(603),s=o.createClass({displayName:"Menu",render:function(){var e={},t={},n=this;return i.forEach(function(r){e[r]="pure-menu-item"+(n.props.__path===r?" menu-item-invisible":""),t[r]=n.props.__langprefix+r}),o.createElement("div",{className:"top-menu pure-g pure-menu pure-menu-horizontal pure-menu-fixed"},o.createElement("div",{className:"pure-u-5-12"},o.createElement("img",{src:a})),o.createElement("div",{className:"pure-u-1-6 center"},o.createElement("div",{className:e["/"]},o.createElement("a",{href:t["/"],className:"pure-menu-link"},"« home"))),o.createElement("div",{className:"pure-u-5-12 right"},o.createElement(r,this.props)))}});e.exports=s},function(e,t){"use strict";var n={TOGGLE_MENU:"toggleMenu"};e.exports=n},function(e,t,n){e.exports=n.p+"52e737208a0ac30c3de9d327733b50fe.png"},463,463,function(e,t,n){"use strict";n(499),n(605),n(604);var r=n(137),o=n(601),i=n(600),a=n(438),s=n(496),u=r.createClass({displayName:"Body",mixins:[a.connect(s)],render:function(){var e=this.state.menuActivated?"active":"";return r.createElement("div",{className:e},r.createElement(o,this.props),r.createElement(i,this.props),r.createElement("div",{className:"main"},r.createElement("h1",{className:"header",dangerouslySetInnerHTML:this.props.pageheader}),r.createElement("div",{className:"content",dangerouslySetInnerHTML:this.props.pagecontent})))}});e.exports=u}]));