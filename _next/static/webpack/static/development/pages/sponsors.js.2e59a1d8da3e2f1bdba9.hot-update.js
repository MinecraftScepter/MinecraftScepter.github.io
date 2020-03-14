webpackHotUpdate("static\\development\\pages\\sponsors.js",{

/***/ "./pages/sponsors/index.tsx":
/*!**********************************!*\
  !*** ./pages/sponsors/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _src_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/header */ "./src/header.tsx");
/* harmony import */ var _src_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/footer */ "./src/footer.tsx");
/* harmony import */ var _src_utility_translator_translatorContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/utility/translator/translatorContext */ "./src/utility/translator/translatorContext.tsx");
/* harmony import */ var _bloc_donation_section_bloc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bloc/donation_section_bloc */ "./pages/sponsors/bloc/donation_section_bloc.ts");
/* harmony import */ var _src_utility_bloc_utility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/utility/bloc_utility */ "./src/utility/bloc_utility.ts");
/* harmony import */ var _felangel_react_bloc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @felangel/react-bloc */ "./node_modules/@felangel/react-bloc/dist/react-bloc.es5.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// https://cdn.dribbble.com/users/1217824/screenshots/2807461/gl.png










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
    }
  };
});
function Index() {
  var classes = useStyles({});
  var t = Object(_src_utility_translator_translatorContext__WEBPACK_IMPORTED_MODULE_6__["useTranslatorContext"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CssBaseline"], null), __jsx(_src_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tabIndex: 2
  }), __jsx("main", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      paddingTop: 16
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    style: {
      borderBottom: "2px solid"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4"
  }, "\u8D0A\u52A9\u8005\u5011")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: 16
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 6
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    elevation: 8,
    style: {
      padding: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], null, "\uD83C\uDFC6\u8D0A\u52A9\u699C"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: 16
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableContainer"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    style: {
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      overflow: "hidden"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableHead"], {
    style: {
      backgroundColor: "rgb(139,115,108)",
      outlineColor: "beige",
      outlineStyle: "outset"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    style: {
      fontWeight: "bold",
      color: "rgb(255,244,119)"
    }
  }, "\u8D0A\u52A9\u8005"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    style: {
      fontWeight: "bold",
      color: "rgb(255,244,119)"
    },
    align: "right"
  }, "\u91D1\u984D"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableBody"], {
    style: {
      color: "rgb(97,63,0)"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
    style: {
      backgroundColor: "#ffffc7"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "\uD83D\uDC51\u9752\u96F2"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "right"
  }, "TWD 500")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
    style: {
      backgroundColor: "#ffffc7"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "\u2B50\uFE0F\u9752\u96F2"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "right"
  }, "TWD 500")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
    style: {
      backgroundColor: "#ffffc7"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "\uD83D\uDE80\u9752\u96F2"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "right"
  }, "TWD 500")))), __jsx("div", {
    style: {
      "float": "right"
    }
  }, __jsx("span", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], null, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowLeft"], null)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], null, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowRight"], null))))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 6
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    elevation: 8,
    style: {
      padding: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], null, "\uD83C\uDD95\u6700\u65B0\u8D0A\u52A9"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: 16
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableContainer"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    style: {
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      overflow: "hidden"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableHead"], {
    style: {
      backgroundColor: "rgb(139,115,108)",
      outlineColor: "beige",
      outlineStyle: "outset"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    style: {
      fontWeight: "bold",
      color: "rgb(255,244,119)"
    }
  }, "\u8D0A\u52A9\u8005"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    style: {
      fontWeight: "bold",
      color: "rgb(255,244,119)"
    },
    align: "right"
  }, "\u91D1\u984D"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableBody"], {
    style: {
      color: "rgb(97,63,0)"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
    style: {
      backgroundColor: "#ffffc7"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "\uD83D\uDC51\u9752\u96F2"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "right"
  }, "TWD 500")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
    style: {
      backgroundColor: "#ffffc7"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "\u2B50\uFE0F\u9752\u96F2"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "right"
  }, "TWD 500")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
    style: {
      backgroundColor: "#ffffc7"
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "\uD83D\uDE80\u9752\u96F2"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "right"
  }, "TWD 500")))))))))), __jsx(_src_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: undefined
  }));
}

function DontaionTopSection() {
  var bloc = Object(_src_utility_bloc_utility__WEBPACK_IMPORTED_MODULE_8__["useBloc"])(new _bloc_donation_section_bloc__WEBPACK_IMPORTED_MODULE_7__["DonationSectionBloc"]());
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    bloc.dispatch(new _bloc_donation_section_bloc__WEBPACK_IMPORTED_MODULE_7__["PageStartEvent"](_bloc_donation_section_bloc__WEBPACK_IMPORTED_MODULE_7__["DonationType"].Top));
  });
  return __jsx(_felangel_react_bloc__WEBPACK_IMPORTED_MODULE_9__["BlocBuilder"], {
    bloc: bloc,
    builder: function builder(state) {
      if (state.isLoading) return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], null);
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        elevation: 8,
        style: {
          padding: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], null, "\uD83C\uDFC6\u8D0A\u52A9\u699C"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        height: 16
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableContainer"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        style: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          overflow: "hidden"
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableHead"], {
        style: {
          backgroundColor: "rgb(139,115,108)",
          outlineColor: "beige",
          outlineStyle: "outset"
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
        style: {
          fontWeight: "bold",
          color: "rgb(255,244,119)"
        }
      }, "\u8D0A\u52A9\u8005"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
        style: {
          fontWeight: "bold",
          color: "rgb(255,244,119)"
        },
        align: "right"
      }, "\u91D1\u984D"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableBody"], {
        style: {
          color: "rgb(97,63,0)"
        }
      }, state.datas.map(function (data, index) {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
          style: {
            backgroundColor: "#ffffc7"
          }
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, state.page == 0 && "\uD83D\uDC51".concat(data.names[data.names.length - 1])), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
          align: "right"
        }, "TWD ", data.total));
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
        style: {
          backgroundColor: "#ffffc7"
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "\u2B50\uFE0F\u9752\u96F2"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
        align: "right"
      }, "TWD 500")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
        style: {
          backgroundColor: "#ffffc7"
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "\uD83D\uDE80\u9752\u96F2"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
        align: "right"
      }, "TWD 500")))), __jsx("div", {
        style: {
          "float": "right"
        }
      }, __jsx("span", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], null, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowLeft"], null)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], null, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowRight"], null))))));
    }
  });
}

/***/ })

})
//# sourceMappingURL=sponsors.js.2e59a1d8da3e2f1bdba9.hot-update.js.map