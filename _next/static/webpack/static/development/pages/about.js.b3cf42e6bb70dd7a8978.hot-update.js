webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about/index.tsx":
/*!*******************************!*\
  !*** ./pages/about/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ListAlt */ "./node_modules/@material-ui/icons/ListAlt.js");
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/PlayCircleFilled */ "./node_modules/@material-ui/icons/PlayCircleFilled.js");
/* harmony import */ var _material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_MonetizationOnRounded__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/MonetizationOnRounded */ "./node_modules/@material-ui/icons/MonetizationOnRounded.js");
/* harmony import */ var _material_ui_icons_MonetizationOnRounded__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MonetizationOnRounded__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/header */ "./src/header.tsx");
/* harmony import */ var _src_footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../src/footer */ "./src/footer.tsx");
/* harmony import */ var _src_utility_translator_translatorContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../src/utility/translator/translatorContext */ "./src/utility/translator/translatorContext.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  var _avatarContainer, _avatar;

  return {
    paper: {
      padding: 16
    },
    avatarContainer: (_avatarContainer = {
      position: "relative",
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      paddingTop: "25%"
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_avatarContainer, theme.breakpoints.up('md'), {
      paddingTop: '100%'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_avatarContainer, "display", "flex"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_avatarContainer, "justifyContent", "center"), _avatarContainer),
    avatar: (_avatar = {
      position: "absolute",
      width: "25%",
      height: "100%"
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_avatar, theme.breakpoints.up('md'), {
      width: "100%"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_avatar, "top", 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_avatar, "objectFit", "contain"), _avatar),
    labelTricker: {
      flexDirection: "column"
    }
  };
}); // https://documentation.laborator.co/kb/kalium/creating-about-me-page/
// https://www.pinterest.com/pin/153966880985437642

function Index() {
  var classes = useStyles({});
  var t = Object(_src_utility_translator_translatorContext__WEBPACK_IMPORTED_MODULE_16__["useTranslatorContext"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_src_header__WEBPACK_IMPORTED_MODULE_14__["default"], {
    tabIndex: 5
  }), __jsx("main", null, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      paddingTop: 24,
      minHeight: "90vh"
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h4",
    gutterBottom: true
  }, t.about.about_software), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: 16
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    spacing: 3
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.avatarContainer,
    style: {
      boxShadow: "none"
    }
  }, __jsx("img", {
    className: classes.avatar,
    src: "/images/about/minecraft_scepter.png",
    style: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    }
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 6,
    sm: 12,
    xs: 12
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.paper
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h5",
    gutterBottom: true
  }, t.about.minecraft_scepter_title), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      borderRadius: 16,
      border: "3px solid black"
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: 16
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h6",
    gutterBottom: true,
    style: {
      color: "#00000044",
      fontStyle: "italic"
    }
  }, t.about.minecraft_scepter_desc_a), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: 16
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h6",
    gutterBottom: true,
    style: {
      color: "#2B2B2B"
    }
  }, __jsx("u", null, t.about.minecraft_scepter_desc_b), t.about.minecraft_scepter_desc_c, __jsx("b", null, t.about.minecraft_scepter_desc_d), t.about.minecraft_scepter_desc_e, __jsx("i", null, t.about.minecraft_scepter_desc_f), t.about.minecraft_scepter_desc_g))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 2,
    sm: 12,
    xs: 12
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: function onClick() {
      return window.open("https://www.youtube.com/channel/UCWx2R78GhmltZudJHLEnd5w", '_blank');
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "subtitle1"
  }, t.about.yt_channel), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    width: 4
  }), __jsx(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_11___default.a, {
    fontSize: "large",
    style: {
      color: "#F9000B"
    }
  })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.paper,
    style: {
      padding: 0
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: function onClick() {
      return window.open("https://docs.google.com/forms/d/e/1FAIpQLSd0ObxdeGqnurQ4GOpqmaIFXYGmg1jh4W_1Y-DcTsjBonuxew/viewform?usp=sf_link", '_blank');
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "subtitle1"
  }, t.about.form), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    width: 4
  }), __jsx(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_10___default.a, {
    fontSize: "large"
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: // () => window.open("https://p.ecpay.com.tw/8F8FE", '_blank')
    function onClick() {
      return window.open("http://bit.ly/minecraftscepterdonation_en", '_blank');
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "subtitle1"
  }, t.about.support), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    width: 4
  }), __jsx(_material_ui_icons_MonetizationOnRounded__WEBPACK_IMPORTED_MODULE_13___default.a, {
    fontSize: "large",
    style: {
      color: "#FFBF00"
    }
  }))))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: 24
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      backgroundColor: "#EAEAEA",
      boxShadow: "inset 0px -4px 8px -5px #000, inset 0px 4px 8px -5px #000",
      paddingBottom: 36,
      paddingTop: 36,
      minHeight: "90vh",
      maxWidth: "100%"
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h4",
    gutterBottom: true
  }, t.about.about_author), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: 16
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    spacing: 3
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 6,
    sm: 12,
    xs: 12
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.paper
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h5",
    gutterBottom: true
  }, t.about.chinyun), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      borderRadius: 16,
      border: "3px solid black"
    }
  }), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: 16
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h6",
    gutterBottom: true,
    style: {
      color: "#00000044",
      fontStyle: "italic"
    }
  }, t.about.author_desc_a), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: 16
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h6",
    gutterBottom: true,
    style: {
      color: "#2B2B2B"
    }
  }, t.about.author_desc_b))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 4,
    sm: 12,
    xs: 12
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      padding: 24
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.avatarContainer,
    style: {
      boxShadow: "none"
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: "/images/about/about_me.png",
    className: classes.avatar,
    style: {
      boxShadow: "0 0 0 6px rgb(30,85,192), 0 2px 19px 6px #000"
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 2,
    sm: 12,
    xs: 12
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.paper,
    style: {
      padding: 0,
      display: "flex",
      justifyContent: "center"
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: 16
  }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    classes: {
      label: "".concat(classes.labelTricker)
    },
    onClick: function onClick() {
      return window.open("mailto:tokenyete@gmail.com?subject=請問青雲...&body=內容");
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "subtitle1"
  }, t.about.author_mail), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "subtitle1"
  }, "tokenyete@gmail.com"), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    width: 4
  }), __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_12___default.a, {
    fontSize: "large",
    style: {
      color: "rgb(82, 141, 238)"
    }
  })))))))), __jsx(_src_footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: undefined
  }));
}

/***/ })

})
//# sourceMappingURL=about.js.b3cf42e6bb70dd7a8978.hot-update.js.map