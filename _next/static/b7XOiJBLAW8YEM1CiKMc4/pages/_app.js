(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var a=o(n("q1tI")),i=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(i.AmpStateContext))}},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),o=n("hfKm"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(t,"__esModule",{value:!0});var i=a(n("q1tI")),u=a(n("Xuae")),c=n("lwAK"),l=n("FYa8"),f=n("/0+H");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=s;var d=["name","httpEquiv","charSet","itemProp"];function y(e,t){return e.reduce(function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(p,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,o={};return function(a){if(a.key&&"number"!==typeof a.key&&0===a.key.indexOf(".$"))return!e.has(a.key)&&(e.add(a.key),!0);switch(a.type){case"title":case"base":if(t.has(a.type))return!1;t.add(a.type);break;case"meta":for(var i=0,u=d.length;i<u;i++){var c=d[i];if(a.props.hasOwnProperty(c))if("charSet"===c){if(n.has(c))return!1;n.add(c)}else{var l=a.props[c],f=o[c]||new r;if(f.has(l))return!1;f.add(l),o[c]=f}}}return!0}}()).reverse().map(function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})})}var g=u.default();function v(e){var t=e.children;return i.default.createElement(c.AmpStateContext.Consumer,null,function(e){return i.default.createElement(l.HeadManagerContext.Consumer,null,function(n){return i.default.createElement(g,{reduceComponentsToState:y,handleStateChange:n,inAmpMode:f.isInAmpMode(e)},t)})})}v.rewind=g.rewind,t.default=v},B5Ud:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),a=n("ZDA2"),i=n("/+P4"),u=n("N9n2"),c=n("ln6h"),l=n("KI45");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=m,t.default=void 0;var f=l(n("htGi")),s=l(n("+oT+")),p=l(n("q1tI")),d=l(n("17x9")),y=n("g/15");t.AppInitialProps=y.AppInitialProps;var g=n("nOHt");function v(e){return b.apply(this,arguments)}function b(){return(b=(0,s.default)(c.mark(function e(t){var n,r,o;return c.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,(0,y.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var h=function(e){function t(){return r(this,t),a(this,i(t).apply(this,arguments))}return u(t,e),o(t,[{key:"getChildContext",value:function(){return{router:(0,g.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=m(t);return p.default.createElement(n,(0,f.default)({},r,{url:o}))}}]),t}(p.default.Component);function m(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=h,h.childContextTypes={router:d.default.object},h.origGetInitialProps=v,h.getInitialProps=v},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return r.def(o(this,"Set"),e=0===e?0:e,e)}},r)},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),o=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},PQJW:function(e,t,n){var r=n("d04V"),o=n("yLu3");e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},TbGu:function(e,t,n){var r=n("fGSI"),o=n("PQJW"),a=n("2PDY");e.exports=function(e){return r(e)||o(e)||a()}},"V+O7":function(e,t,n){n("aPfg")("Set")},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),a=n("JB68"),i=n("sNwI"),u=n("NwJ3"),c=n("tEej"),l=n("IP1Z"),f=n("fNZA");o(o.S+o.F*!n("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,s,p=a(e),d="function"==typeof this?this:Array,y=arguments.length,g=y>1?arguments[1]:void 0,v=void 0!==g,b=0,h=f(p);if(v&&(g=r(g,y>2?arguments[2]:void 0,2)),void 0==h||d==Array&&u(h))for(n=new d(t=c(p.length));t>b;b++)l(n,b,v?g(p[b],b):p[b]);else for(s=h.call(p),n=new d;!(o=s.next()).done;b++)l(n,b,v?i(s,g,[o.value,b],!0):o.value);return n.length=b,n}})},VKFn:function(e,t,n){n("bBy9"),n("FlQf"),e.exports=n("ldVq")},Xuae:function(e,t,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),a=n("/+P4"),i=n("K47E"),u=n("WaGi"),c=n("N9n2"),l=n("TbGu"),f=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var s=n("q1tI"),p=!1;t.default=function(){var e,t=new f;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){function f(e){var u;return r(this,f),u=o(this,a(f).call(this,e)),p&&(t.add(i(u)),n(i(u))),u}return c(f,l),u(f,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(s.Component)}},cha2:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"initialize",function(){return we}),n.d(r,"ga",function(){return Oe}),n.d(r,"set",function(){return je}),n.d(r,"send",function(){return ke}),n.d(r,"pageview",function(){return Pe}),n.d(r,"modalview",function(){return Se}),n.d(r,"timing",function(){return Ae}),n.d(r,"event",function(){return Ee}),n.d(r,"exception",function(){return xe}),n.d(r,"plugin",function(){return Ce}),n.d(r,"outboundLink",function(){return _e}),n.d(r,"testModeAPI",function(){return Te}),n.d(r,"default",function(){return Ie});var o=n("hfKm"),a=n.n(o);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),a()(e,r.key,r)}}var u=n("XVgq"),c=n.n(u),l=n("Z7t5"),f=n.n(l);function s(e){return(s="function"===typeof f.a&&"symbol"===typeof c.a?function(e){return typeof e}:function(e){return e&&"function"===typeof f.a&&e.constructor===f.a&&e!==f.a.prototype?"symbol":typeof e})(e)}function p(e){return(p="function"===typeof f.a&&"symbol"===s(c.a)?function(e){return s(e)}:function(e){return e&&"function"===typeof f.a&&e.constructor===f.a&&e!==f.a.prototype?"symbol":s(e)})(e)}function d(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var y=n("Bhuq"),g=n.n(y),v=n("TRZx"),b=n.n(v);function h(e){return(h=b.a?g.a:function(e){return e.__proto__||g()(e)})(e)}var m=n("SqZg"),w=n.n(m);function O(e,t){return(O=b.a||function(e,t){return e.__proto__=t,e})(e,t)}var j=n("q1tI"),k=n.n(j),P=n("8Bbg"),S=n.n(P),A=n("8Kt/"),E=n.n(A),x=n("wx14"),C=n("17x9"),_=n.n(C),T=n("OKji"),I=n("aXM8"),D=n("hfi/");var N=function(e){var t=e.children,n=e.theme,r=Object(I.a)(),o=k.a.useMemo(function(){var e=null===r?n:function(e,t){return"function"===typeof t?t(e):Object(x.a)({},e,{},t)}(r,n);return null!=e&&(e[D.a]=null!==r),e},[n,r]);return k.a.createElement(T.a.Provider,{value:o},t)},q=n("5CWz"),M=n("viY9"),L=n("fWIC"),B=n.n(L),G=Object(M.a)({palette:{primary:{main:"#5d4037"},secondary:{main:"#bcaaa4"},error:{main:B.a.A400},background:{default:"#fff"}},typography:{fontFamily:["Noto Sans TC","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}});function K(e){console.warn("[react-ga]",e)}function J(e){return(J="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function F(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q="_blank",Y=1,X=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return r=this,o=(e=U(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==J(o)&&"function"!==typeof o?Z(r):o,H(Z(n),"handleClick",function(e){var r=n.props,o=r.target,a=r.eventLabel,i=r.to,u=r.onClick,c=r.trackerNames,l={label:a},f=o!==Q,s=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===Y);f&&s?(e.preventDefault(),t.trackLink(l,function(){window.location.href=i},c)):t.trackLink(l,function(){},c),u&&u(e)}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,j["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach(function(t){H(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},F(e,["to"]),{href:t,onClick:this.handleClick});return this.props.target===Q&&(n.rel="noopener noreferrer"),delete n.eventLabel,delete n.trackerNames,k.a.createElement("a",n)}}])&&W(n.prototype,r),o&&W(n,o),t}();function z(e){return e.replace(/^\s+|\s+$/g,"")}H(X,"trackLink",function(){K("ga tracking not enabled")}),H(X,"propTypes",{eventLabel:_.a.string.isRequired,target:_.a.string,to:_.a.string,onClick:_.a.func,trackerNames:_.a.arrayOf(_.a.string)}),H(X,"defaultProps",{target:null,to:null,onClick:null,trackerNames:null});var $=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;var ee="REDACTED (Potential Email Address)";function te(e,t){return function(e){return"string"===typeof e&&-1!==e.indexOf("@")}(e)?(K("This arg looks like an email address, redacting."),ee):t?z(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,n){return t>0&&t+e.length!==n.length&&e.search($)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}):e}var ne=function(e){var t,n,r,o,a,i,u,c="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?c=e.gaAddress:e&&e.debug&&(c="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",o=c,a="ga",t.GoogleAnalyticsObject=a,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,i=n.createElement(r),u=n.getElementsByTagName(r)[0],i.async=1,i.src=o,u.parentNode.insertBefore(i,u)};function re(e){console.info("[react-ga]",e)}var oe=[],ae={calls:oe,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];oe.push([].concat(t))},resetCalls:function(){oe.length=0}};function ie(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function le(e){return(le="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var se="undefined"===typeof window||"undefined"===typeof document,pe=!1,de=!0,ye=!1,ge=!0,ve=function(){var e;return ye?ae.ga.apply(ae,arguments):!se&&(window.ga?(e=window).ga.apply(e,arguments):K("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function be(e){return te(e,de)}function he(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];if("function"===typeof ve){if("string"!==typeof o)return void K("ga command must be a string");!ge&&Array.isArray(e)||ve.apply(void 0,n),Array.isArray(e)&&e.forEach(function(e){ve.apply(void 0,fe(["".concat(e,".").concat(o)].concat(n.slice(1))))})}}function me(e,t){e?t&&(t.debug&&!0===t.debug&&(pe=!0),!1===t.titleCase&&(de=!1),t.useExistingGa)||(t&&t.gaOptions?ve("create",e,t.gaOptions):ve("create",e,"auto")):K("gaTrackingID is required in initialize()")}function we(e,t){if(t&&!0===t.testMode)ye=!0;else{if(se)return!1;t&&!0===t.standardImplementation||ne(t)}return ge=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach(function(e){"object"===le(e)?me(e.trackingId,e):K("All configs must be an object")}):me(e,t),!0}function Oe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(ve.apply(void 0,t),pe&&(re("called ga('arguments');"),re("with arguments: ".concat(JSON.stringify(t))))),window.ga}function je(e,t){e?"object"===le(e)?(0===Object.keys(e).length&&K("empty `fieldsObject` given to .set()"),he(t,"set",e),pe&&(re("called ga('set', fieldsObject);"),re("with fieldsObject: ".concat(JSON.stringify(e))))):K("Expected `fieldsObject` arg to be an Object"):K("`fieldsObject` is required in .set()")}function ke(e,t){he(t,"send",e),pe&&(re("called ga('send', fieldObject);"),re("with fieldObject: ".concat(JSON.stringify(e))),re("with trackers: ".concat(JSON.stringify(t))))}function Pe(e,t,n){if(e){var r=z(e);if(""!==r){var o={};if(n&&(o.title=n),he(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(n,!0).forEach(function(t){ce(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({hitType:"pageview",page:r},o)),pe){re("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),re("with path: ".concat(r).concat(a))}}else K("path cannot be an empty string in .pageview()")}else K("path is required in .pageview()")}function Se(e,t){if(e){var n,r="/"===(n=z(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);he(t,"send","pageview",o),pe&&(re("called ga('send', 'pageview', path);"),re("with path: ".concat(o)))}else K("modalName cannot be an empty string or a single / in .modalview()")}else K("modalName is required in .modalview(modalName)")}function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,a=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"===typeof r){var i={hitType:"timing",timingCategory:be(t),timingVar:be(n),timingValue:r};o&&(i.timingLabel=be(o)),ke(i,a)}else K("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function Ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,i=e.transport,u=ie(e,["category","action","label","value","nonInteraction","transport"]),c=arguments.length>1?arguments[1]:void 0;if(t&&n){var l={hitType:"event",eventCategory:be(t),eventAction:be(n)};r&&(l.eventLabel=be(r)),"undefined"!==typeof o&&("number"!==typeof o?K("Expected `args.value` arg to be a Number."):l.eventValue=o),"undefined"!==typeof a&&("boolean"!==typeof a?K("`args.nonInteraction` must be a boolean."):l.nonInteraction=a),"undefined"!==typeof i&&("string"!==typeof i?K("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&K("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=i)),Object.keys(u).filter(function(e){return"dimension"===e.substr(0,"dimension".length)}).forEach(function(e){l[e]=u[e]}),Object.keys(u).filter(function(e){return"metric"===e.substr(0,"metric".length)}).forEach(function(e){l[e]=u[e]}),ke(l,c)}else K("args.category AND args.action are required in event()")}function xe(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=be(n)),"undefined"!==typeof r&&("boolean"!==typeof r?K("`args.fatal` must be a boolean."):o.exFatal=r),ke(o,t)}var Ce={require:function(e,t,n){if(e){var r=z(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==le(t))return void K("Expected `options` arg to be an Object");0===Object.keys(t).length&&K("Empty `options` given to .require()"),Oe(o,r,t),pe&&re("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else Oe(o,r),pe&&re("called ga('require', '".concat(r,"');"))}else K("`name` cannot be an empty string in .require()")}else K("`name` is required in .require()")},execute:function(e,t){var n,r;if(1===(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!==typeof e)K("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)K("Expected `action` arg to be a String.");else{var o="".concat(e,":").concat(t);n=n||null,r&&n?(Oe(o,r,n),pe&&(re("called ga('".concat(o,"');")),re('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(Oe(o,n),pe&&(re("called ga('".concat(o,"');")),re("with payload: ".concat(JSON.stringify(n))))):(Oe(o),pe&&re("called ga('".concat(o,"');")))}}};function _e(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:be(e.label)},o=!1,a=setTimeout(function(){o=!0,t()},250);r.hitCallback=function(){clearTimeout(a),o||t()},ke(r,n)}else K("args.label is required in outboundLink()");else K("hitCallback function is required")}var Te=ae,Ie={initialize:we,ga:Oe,set:je,send:ke,pageview:Pe,modalview:Se,timing:Ae,event:Ee,exception:xe,plugin:Ce,outboundLink:_e,testModeAPI:ae};function De(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}X.origTrackLink=X.trackLink,X.trackLink=_e;var qe=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?De(n,!0).forEach(function(t){Ne(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):De(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},r,{OutboundLink:X});n.d(t,"default",function(){return Le});var Me=k.a.createElement,Le=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,h(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=w()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,S.a),n=t,(r=[{key:"componentDidMount",value:function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode.removeChild(e),qe.initialize("UA-65156776-3"),qe.pageview(document.location.pathname)}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return Me(k.a.Fragment,null,Me(E.a,null,Me("title",null,"MinecraftScepter"),Me("link",{rel:"shortcut icon",href:"/static/favicon.ico"}),Me("link",{href:"https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap",rel:"stylesheet"}),Me("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','GTM-TW6BGGL');"}})),Me(N,{theme:G},Me(q.a,null),Me(t,n)))}}])&&i(n.prototype,r),o&&i(n,o),t}()},d04V:function(e,t,n){e.exports=n("0tVQ")},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},fWIC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};t.default=r},ldVq:function(e,t,n){var r=n("QMMT"),o=n("UWiX")("iterator"),a=n("SBuE");e.exports=n("WEpk").isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||a.hasOwnProperty(r(t))}},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var a=o(n("q1tI"));t.AmpStateContext=a.createContext({})},ttDY:function(e,t,n){e.exports=n("+iuc")},xvv9:function(e,t,n){n("cHUd")("Set")},yLu3:function(e,t,n){e.exports=n("VKFn")}},[["74v/",1,0]]]);