webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/theme */ "./src/theme.tsx");
/* harmony import */ var _src_utility_translator_translatorContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/utility/translator/translatorContext */ "./src/utility/translator/translatorContext.tsx");
/* harmony import */ var _src_utility_translator_translator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/utility/translator/translator */ "./src/utility/translator/translator.ts");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;









// import { useRouter } from 'next/router';
var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {// Remove the server-side injected CSS.
      //alert("Did mount");
      // const jssStyles = document.querySelector('#jss-server-side');
      // if (jssStyles) {
      //   jssStyles.parentNode!.removeChild(jssStyles);
      // }
      //alert("Did mount");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          router = _this$props.router; // const router = useRouter();

      var pack = _src_utility_translator_translator__WEBPACK_IMPORTED_MODULE_12__["Translator"].Eng; // const query = router.query;
      // console.log(`query: ${JSON. query}`);
      // if(query !== undefined && query["language"] === "tw") {
      //   pack = Translator.ZhTW;
      // }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx("title", null, "MinecraftScepter"), __jsx("link", {
        rel: "shortcut icon",
        href: "/static/favicon.ico"
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap",
        rel: "stylesheet"
      }), __jsx("script", {
        dangerouslySetInnerHTML: {
          __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','GTM-TW6BGGL');"
        }
      }), __jsx("script", {
        "data-ad-client": "ca-pub-6282899881501227",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      })), __jsx(_material_ui_styles__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
        theme: _src_theme__WEBPACK_IMPORTED_MODULE_10__["default"]
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_src_utility_translator_translatorContext__WEBPACK_IMPORTED_MODULE_11__["TranslatorContextProvider"], {
        pack: props.router.query !== undefined && props.router.query["language"] === "tw" ? _src_utility_translator_translator__WEBPACK_IMPORTED_MODULE_12__["Translator"].ZhTW : pack
      }, __jsx(Component, pageProps))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_6___default.a);


;

/***/ })

})
//# sourceMappingURL=_app.js.5963a5cbde14e45fe0c6.hot-update.js.map