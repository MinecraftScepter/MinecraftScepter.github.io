webpackHotUpdate("static\\development\\pages\\donation.js",{

/***/ "./pages/donation/index.tsx":
/*!**********************************!*\
  !*** ./pages/donation/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _src_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/link */ "./src/link.tsx");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _felangel_react_bloc__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @felangel/react-bloc */ "./node_modules/@felangel/react-bloc/dist/react-bloc.es5.js");
/* harmony import */ var _bloc_donation_bloc__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_bloc/_donation_bloc */ "./pages/donation/_bloc/_donation_bloc.ts");
/* harmony import */ var _src_components_withTextEnchancer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../src/components/withTextEnchancer */ "./src/components/withTextEnchancer.tsx");
/* harmony import */ var _src_utility_bloc_utility__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../src/utility/bloc_utility */ "./src/utility/bloc_utility.ts");
/* harmony import */ var _src_components_paypal_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../src/components/paypal_button */ "./src/components/paypal_button.tsx");
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../src/config */ "./src/config/index.ts");




var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(function (theme) {
  return {
    '@global': {
      body: {
        backgroundColor: '#fafad2'
      }
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: "white",
      padding: 32,
      borderRadius: 16,
      boxShadow: "0px 5px 5px -3px rgba(255, 90, 90, 0.2), 0px 8px 10px 1px rgba(255, 82, 0, 0.14), 0px 3px 14px 2px rgba(251, 255, 0, 0.12)"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
});

function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, 'Copyright © ', __jsx(_src_link__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "inherit",
    href: "minecraftscepter.github.io/"
  }, "\u5275\u4E16\u795E\u6B0A\u6756"), ' ', new Date().getFullYear(), '.');
}

function Index() {
  var classes = useStyles({});
  var bloc = Object(_src_utility_bloc_utility__WEBPACK_IMPORTED_MODULE_20__["useBloc"])(new _bloc_donation_bloc__WEBPACK_IMPORTED_MODULE_18__["DonationBloc"]());
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: "main",
    maxWidth: "xs"
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.paper,
    elevation: 8
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.avatar
  }, __jsx(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_16___default.a, null)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: "h1",
    variant: "h5"
  }, "\u8D0A\u52A9\u57FA\u672C\u8CC7\u6599"), __jsx(_felangel_react_bloc__WEBPACK_IMPORTED_MODULE_17__["BlocBuilder"], {
    bloc: bloc,
    builder: function builder(state) {
      return __jsx("form", {
        className: classes.form,
        noValidate: true
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        container: true,
        spacing: 2
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        item: true,
        xs: 12
      }, __jsx(_src_components_withTextEnchancer__WEBPACK_IMPORTED_MODULE_19__["TextFieldEx"], {
        label: "Email",
        variant: "outlined",
        id: "email",
        name: "email",
        observedValue: state.email,
        error: !state.isEmailValid,
        helperText: !state.isEmailValid ? "Email 格式錯誤" : "",
        observedChanged: function observedChanged(value) {
          bloc.dispatch(new _bloc_donation_bloc__WEBPACK_IMPORTED_MODULE_18__["ModifyEmailEvent"](value));
        },
        fullWidth: true,
        autoComplete: "email",
        required: true,
        inputProps: {
          maxLength: 100
        }
      })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        item: true,
        xs: 12
      }, __jsx(_src_components_withTextEnchancer__WEBPACK_IMPORTED_MODULE_19__["TextFieldEx"], {
        label: "\u5C0F\u73A9\u5BB6\u7A31\u547C(\u9078\u586B\uFF09",
        variant: "outlined",
        id: "fullname",
        name: "fullname",
        fullWidth: true,
        autoComplete: "fullname",
        inputProps: {
          maxLength: 20
        },
        observedValue: state.name,
        observedChanged: function observedChanged(value) {
          bloc.dispatch(new _bloc_donation_bloc__WEBPACK_IMPORTED_MODULE_18__["ModifyNameEvent"](value));
        }
      })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        item: true,
        xs: 12
      }, __jsx(_src_components_withTextEnchancer__WEBPACK_IMPORTED_MODULE_19__["TextFieldEx"], {
        label: "\u8D0A\u52A9\u91D1\u984D(\u7DA0\u754C\u6700\u4F4E30\u5143)",
        type: "number",
        variant: "outlined",
        fullWidth: true,
        required: true,
        InputLabelProps: {
          shrink: true
        },
        inputProps: {
          maxLength: 20
        },
        observedValue: state.price.toString(),
        error: !state.isPriceValid,
        helperText: !state.isPriceValid ? "由於使用綠界最低 30 元！" : "",
        observedChanged: function observedChanged(value) {
          bloc.dispatch(new _bloc_donation_bloc__WEBPACK_IMPORTED_MODULE_18__["ModifyPriceEvent"](_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(value)));
        }
      })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        item: true,
        xs: 12
      }, __jsx(_src_components_withTextEnchancer__WEBPACK_IMPORTED_MODULE_19__["TextFieldEx"], {
        label: "\u60F3\u8981\u7684\u529F\u80FD\u6216\u6539\u5584(\u9078\u586B)",
        variant: "outlined",
        fullWidth: true,
        multiline: true,
        rows: "2",
        inputProps: {
          maxLength: 200
        },
        observedValue: state.title,
        observedChanged: function observedChanged(value) {
          bloc.dispatch(new _bloc_donation_bloc__WEBPACK_IMPORTED_MODULE_18__["ModifyTitleEvent"](value));
        }
      })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        item: true,
        xs: 12
      }, __jsx(_src_components_withTextEnchancer__WEBPACK_IMPORTED_MODULE_19__["TextFieldEx"], {
        id: "filled-multiline-static",
        label: "\u96A8\u610F\u6292\u767C(\u9078\u586B)",
        fullWidth: true,
        multiline: true,
        rows: "4",
        variant: "outlined",
        inputProps: {
          maxLength: 200
        },
        observedValue: state.comment,
        observedChanged: function observedChanged(value) {
          bloc.dispatch(new _bloc_donation_bloc__WEBPACK_IMPORTED_MODULE_18__["ModifyCommentEvent"](value));
        }
      })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        item: true,
        xs: 12
      })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        disabled: !state.isFormValid,
        type: "submit",
        fullWidth: true,
        variant: "contained",
        color: "primary",
        className: classes.submit,
        onClick: function onClick(e) {
          e.preventDefault();
          bloc.dispatch(new _bloc_donation_bloc__WEBPACK_IMPORTED_MODULE_18__["SubmitEvent"](window));
        }
      }, "\u8D0A\u52A9"), __jsx("div", {
        style: {
          pointerEvents: state.isFormValid ? "auto" : "none",
          mixBlendMode: state.isFormValid ? "inherit" : "luminosity"
        }
      }, __jsx(_src_components_paypal_button__WEBPACK_IMPORTED_MODULE_21__["PayPalButton"], {
        amount: "0.01" // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        ,
        onSuccess:
        /*#__PURE__*/
        function () {
          var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(details, data) {
            var response;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    alert("Transaction completed by " + details.payer.name.given_name); // OPTIONAL: Call your server to save the transaction

                    console.log("CALLA");
                    _context.next = 4;
                    return superagent__WEBPACK_IMPORTED_MODULE_15___default.a.agent().post(_src_config__WEBPACK_IMPORTED_MODULE_22__["default"].helperApi + "/tests/paypal_callback").send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                      orderId: data.orderID
                    }));

                  case 4:
                    response = _context.sent;
                    console.log("CALLB");
                    return _context.abrupt("return", response);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }(),
        options: {
          clientId: _src_config__WEBPACK_IMPORTED_MODULE_22__["default"].paypalClientId
        }
      })));
    }
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    mt: 5
  }, __jsx(Copyright, null)));
}

/***/ })

})
//# sourceMappingURL=donation.js.ba0da50725775da03d85.hot-update.js.map