webpackHotUpdate("static\\development\\pages\\changelogs.js",{

/***/ "./pages/changelogs/index.tsx":
/*!************************************!*\
  !*** ./pages/changelogs/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _src_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/header */ "./src/header.tsx");
/* harmony import */ var _src_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/footer */ "./src/footer.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "D:\\Project\\McDedicatedServer\\minecraft_scepter_home\\nextjs-with-typescript\\pages\\changelogs\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var ReactMarkdown = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    icon: {
      marginRight: theme.spacing(2)
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
      marginTop: theme.spacing(4)
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardMedia: {
      paddingTop: '56.25%' // 16:9

    },
    cardContent: {
      flexGrow: 1
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6)
    },
    markdownContainer: {
      backgroundColor: "#ffffff",
      borderRadius: 16
    }
  };
});

function MarkdownLoader(_ref) {
  var url = _ref.url;

  // const [loading, setLoading] = useState(false);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      text = _React$useState2[0],
      setText = _React$useState2[1]; //https://raw.githubusercontent.com/Tokenyet/MinecraftScepterVersioner/master/content.md


  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    superagent__WEBPACK_IMPORTED_MODULE_9___default.a.get(url).then(function (response) {
      setText(response.text);
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, text == "" ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 120,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }) : __jsx(ReactMarkdown, {
    source: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }));
}

function Index() {
  var classes = useStyles({});
  return __jsx("div", {
    style: {
      backgroundColor: "#f2f2f2"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("link", {
    href: "/static/github.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), __jsx(_src_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tabIndex: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    maxWidth: "lg",
    className: "markdown-body ".concat(classes.markdownContainer),
    style: {
      marginTop: 24,
      marginBottom: 24,
      paddingTop: 16,
      paddingBottom: 16,
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(MarkdownLoader, {
    url: "https://raw.githubusercontent.com/Tokenyet/MinecraftScepterVersioner/master/content.md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))), __jsx(_src_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      backgroundColor: "#f2f2f2"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=changelogs.js.0ecaa5c3309929767acf.hot-update.js.map