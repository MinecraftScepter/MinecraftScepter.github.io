(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var a=o(n("q1tI")),u=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}e.isInAmpMode=i,e.useAmp=function(){return i(a.default.useContext(u.AmpStateContext))}},"0iUn":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return r})},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"74v/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),o=n("hfKm"),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};o(e,"__esModule",{value:!0});var u=a(n("q1tI")),i=a(n("Xuae")),c=n("lwAK"),f=n("FYa8"),s=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[u.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];return t||e.push(u.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function p(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===u.default.Fragment?t.concat(u.default.Children.toArray(e.props.children).reduce(function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)},[])):t.concat(e)}e.defaultHead=l;var d=["name","httpEquiv","charSet","itemProp"];function h(t,e){return t.reduce(function(t,e){var n=u.default.Children.toArray(e.props.children);return t.concat(n)},[]).reduce(p,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,o={};return function(a){if(a.key&&"number"!==typeof a.key&&0===a.key.indexOf(".$"))return!t.has(a.key)&&(t.add(a.key),!0);switch(a.type){case"title":case"base":if(e.has(a.type))return!1;e.add(a.type);break;case"meta":for(var u=0,i=d.length;u<i;u++){var c=d[u];if(a.props.hasOwnProperty(c))if("charSet"===c){if(n.has(c))return!1;n.add(c)}else{var f=a.props[c],s=o[c]||new r;if(s.has(f))return!1;s.add(f),o[c]=s}}}return!0}}()).reverse().map(function(t,e){var n=t.key||e;return u.default.cloneElement(t,{key:n})})}var v=i.default();function m(t){var e=t.children;return u.default.createElement(c.AmpStateContext.Consumer,null,function(t){return u.default.createElement(f.HeadManagerContext.Consumer,null,function(n){return u.default.createElement(v,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:s.isInAmpMode(t)},e)})})}m.rewind=v.rewind,e.default=m},"AT/M":function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",function(){return r})},B5Ud:function(t,e,n){"use strict";var r=n("/HRN"),o=n("WaGi"),a=n("ZDA2"),u=n("/+P4"),i=n("N9n2"),c=n("ln6h"),f=n("KI45");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=w,e.default=void 0;var s=f(n("htGi")),l=f(n("+oT+")),p=f(n("q1tI")),d=f(n("17x9")),h=n("g/15");e.AppInitialProps=h.AppInitialProps;var v=n("nOHt");function m(t){return y.apply(this,arguments)}function y(){return(y=(0,l.default)(c.mark(function t(e){var n,r,o;return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,r=e.ctx,t.next=3,(0,h.loadGetInitialProps)(n,r);case 3:return o=t.sent,t.abrupt("return",{pageProps:o});case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}var g=function(t){function e(){return r(this,e),a(this,u(e).apply(this,arguments))}return i(e,t),o(e,[{key:"getChildContext",value:function(){return{router:(0,v.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=w(e);return p.default.createElement(n,(0,s.default)({},r,{url:o}))}}]),e}(p.default.Component);function w(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=g,g.childContextTypes={router:d.default.object},g.origGetInitialProps=m,g.getInitialProps=m},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},FYa8:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var a=o(n("q1tI"));e.HeadManagerContext=a.createContext(null)},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),o=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},MI3g:function(t,e,n){"use strict";var r=n("XVgq"),o=n.n(r),a=n("Z7t5"),u=n.n(a);function i(t){return(i="function"===typeof u.a&&"symbol"===typeof o.a?function(t){return typeof t}:function(t){return t&&"function"===typeof u.a&&t.constructor===u.a&&t!==u.a.prototype?"symbol":typeof t})(t)}function c(t){return(c="function"===typeof u.a&&"symbol"===i(o.a)?function(t){return i(t)}:function(t){return t&&"function"===typeof u.a&&t.constructor===u.a&&t!==u.a.prototype?"symbol":i(t)})(t)}var f=n("AT/M");function s(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?Object(f.a)(t):e}n.d(e,"a",function(){return s})},PQJW:function(t,e,n){var r=n("d04V"),o=n("yLu3");t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},TbGu:function(t,e,n){var r=n("fGSI"),o=n("PQJW"),a=n("2PDY");t.exports=function(t){return r(t)||o(t)||a()}},Tit0:function(t,e,n){"use strict";var r=n("SqZg"),o=n.n(r),a=n("TRZx"),u=n.n(a);function i(t,e){return(i=u.a||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=o()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}n.d(e,"a",function(){return c})},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),a=n("JB68"),u=n("sNwI"),i=n("NwJ3"),c=n("tEej"),f=n("IP1Z"),s=n("fNZA");o(o.S+o.F*!n("TuGD")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,p=a(t),d="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,y=0,g=s(p);if(m&&(v=r(v,h>2?arguments[2]:void 0,2)),void 0==g||d==Array&&i(g))for(n=new d(e=c(p.length));e>y;y++)f(n,y,m?v(p[y],y):p[y]);else for(l=g.call(p),n=new d;!(o=l.next()).done;y++)f(n,y,m?u(l,v,[o.value,y],!0):o.value);return n.length=y,n}})},VKFn:function(t,e,n){n("bBy9"),n("FlQf"),t.exports=n("ldVq")},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),a=n("/+P4"),u=n("K47E"),i=n("WaGi"),c=n("N9n2"),f=n("TbGu"),s=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var l=n("q1tI"),p=!1;e.default=function(){var t,e=new s;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(f){function s(t){var i;return r(this,s),i=o(this,a(s).call(this,t)),p&&(e.add(u(i)),n(u(i))),i}return c(s,f),i(s,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(s,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(l.Component)}},a7VT:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("Bhuq"),o=n.n(r),a=n("TRZx"),u=n.n(a);function i(t){return(i=u.a?o.a:function(t){return t.__proto__||o()(t)})(t)}},cha2:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),o=n("sLSF"),a=n("MI3g"),u=n("a7VT"),i=n("Tit0"),c=n("q1tI"),f=n.n(c),s=n("8Bbg"),l=n.n(s),p=n("8Kt/"),d=n.n(p),h=n("wx14"),v=(n("17x9"),n("OKji")),m=n("aXM8"),y=n("hfi/");var g=function(t){var e=t.children,n=t.theme,r=Object(m.a)(),o=f.a.useMemo(function(){var t=null===r?n:function(t,e){return"function"===typeof e?e(t):Object(h.a)({},t,{},e)}(r,n);return null!=t&&(t[y.a]=null!==r),t},[n,r]);return f.a.createElement(v.a.Provider,{value:o},e)},w=n("5CWz"),b=n("viY9"),_=n("fWIC"),S=n.n(_),x=Object(b.a)({palette:{primary:{main:"#5d4037"},secondary:{main:"#bcaaa4"},error:{main:S.a.A400},background:{default:"#fff"}},typography:{fontFamily:["Noto Sans TC","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}});n.d(e,"default",function(){return k});var C=f.a.createElement,k=function(t){function e(){return Object(r.a)(this,e),Object(a.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(i.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return C(f.a.Fragment,null,C(d.a,null,C("title",null,"MinecraftScepter"),C("link",{rel:"shortcut icon",href:"/static/favicon.ico"}),C("link",{href:"https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap",rel:"stylesheet"}),C("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','GTM-TW6BGGL');"}}),C("script",{"data-ad-client":"ca-pub-6282899881501227",async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"})),C(g,{theme:x},C(w.a,null),C(e,n)))}}]),e}(l.a)},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},fWIC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};e.default=r},ldVq:function(t,e,n){var r=n("QMMT"),o=n("UWiX")("iterator"),a=n("SBuE");t.exports=n("WEpk").isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||a.hasOwnProperty(r(e))}},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var a=o(n("q1tI"));e.AmpStateContext=a.createContext({})},sLSF:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n("hfKm"),o=n.n(r);function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}function u(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}},ttDY:function(t,e,n){t.exports=n("+iuc")},xvv9:function(t,e,n){n("cHUd")("Set")},yLu3:function(t,e,n){t.exports=n("VKFn")}},[["74v/",1,0]]]);