webpackHotUpdate("static\\development\\pages\\donation.js",{

/***/ "./src/components/paypal_button.tsx":
/*!******************************************!*\
  !*** ./src/components/paypal_button.tsx ***!
  \******************************************/
/*! exports provided: PayPalButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalButton", function() { return PayPalButton; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);










var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;




var PayPalButton =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(PayPalButton, _React$Component);

  function PayPalButton(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, PayPalButton);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(PayPalButton).call(this, props));
    _this.state = {
      isSdkReady: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(PayPalButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ( true && window !== undefined && window.paypal === undefined) {
        this.addPaypalSdk();
      } else if ( true && window !== undefined && window.paypal !== undefined && this.props.onButtonReady) {
        this.props.onButtonReady();
      }

      var instance = this;
      setInterval(function () {
        var btnElement = document.getElementsByClassName("paypal-button")[0];

        if (btnElement !== undefined) {
          if (instance.props.disabled) {
            btnElement.style.background = "grey";
          } else {
            btnElement.style.background = "#ffc439";
          }
        }
      }, 100);
    }
  }, {
    key: "createOrder",
    value: function createOrder(data, actions) {
      var _this$props = this.props,
          currency = _this$props.currency,
          options = _this$props.options,
          amount = _this$props.amount,
          shippingPreference = _this$props.shippingPreference;
      return actions.order.create({
        purchase_units: [{
          amount: {
            currency_code: currency ? currency : options && options.currency ? options.currency : "USD",
            value: amount.toString()
          }
        }],
        application_context: {
          shipping_preference: shippingPreference
        }
      });
    }
  }, {
    key: "onApprove",
    value: function onApprove(data, actions) {
      var _this2 = this;

      return actions.order.capture().then(function (details) {
        if (_this2.props.onSuccess) {
          return _this2.props.onSuccess(details, data);
        }
      })["catch"](function (err) {
        if (_this2.props.catchError) {
          return _this2.props.catchError(err);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          amount = _this$props2.amount,
          onSuccess = _this$props2.onSuccess,
          createOrder = _this$props2.createOrder,
          createSubscription = _this$props2.createSubscription,
          onApprove = _this$props2.onApprove,
          style = _this$props2.style;
      var isSdkReady = this.state.isSdkReady;

      if (!isSdkReady && ( false || window.paypal === undefined)) {
        return null;
      }

      var Button = window.paypal.Buttons.driver("react", {
        React: react__WEBPACK_IMPORTED_MODULE_10___default.a,
        ReactDOM: react_dom__WEBPACK_IMPORTED_MODULE_11___default.a
      });
      var createOrderFn = amount && !createOrder ? function (data, actions) {
        return _this3.createOrder(data, actions);
      } : function (data, actions) {
        return createOrder(data, actions);
      };
      return __jsx(Button, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, this.props, {
        createOrder: createSubscription ? undefined : createOrderFn,
        createSubscription: createSubscription,
        onApprove: onSuccess ? function (data, actions) {
          return _this3.onApprove(data, actions);
        } : function (data, actions) {
          return onApprove(data, actions);
        },
        style: style
      }));
    }
  }, {
    key: "addPaypalSdk",
    value: function addPaypalSdk() {
      var _this4 = this;

      var _this$props3 = this.props,
          options = _this$props3.options,
          onButtonReady = _this$props3.onButtonReady;

      var separator = function separator(key) {
        return key.split(/(?=[A-Z])/).join("-").toLowerCase();
      };

      var createQueryParam = function createQueryParam(object, modifier) {
        return _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(object).reduce(function (acc, _ref) {
          var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          acc.push("".concat(modifier(key), "=").concat(value));
          return acc;
        }, []).join("&");
      };

      var queryParam = createQueryParam(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, PayPalButton.defaultProps.options, options), separator);
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://www.paypal.com/sdk/js?".concat(queryParam);
      script.async = true;

      script.onload = function () {
        _this4.setState({
          isSdkReady: true
        });

        if (onButtonReady) {
          onButtonReady();
        }
      };

      script.onerror = function () {
        throw new Error("Paypal SDK could not be loaded.");
      };

      document.body.appendChild(script);
    }
  }]);

  return PayPalButton;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(PayPalButton, "propTypes", {
  amount: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string]),
  currency: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string]),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
  shippingPreference: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  catchError: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  onError: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  createOrder: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  createSubscription: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  onApprove: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  style: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object,
  options: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.shape({
    clientId: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    merchantId: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    currency: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string]),
    intent: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    commit: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string]),
    vault: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string]),
    component: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    disableFunding: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    disableCard: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    integrationDate: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    locale: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    buyerCountry: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
    debug: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string])
  }),
  onButtonReady: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(PayPalButton, "defaultProps", {
  style: {},
  options: {
    clientId: "sb",
    currency: "USD",
    disableFunding: "credit,card"
  },
  shippingPreference: "GET_FROM_FILE"
});



/***/ })

})
//# sourceMappingURL=donation.js.37dc6bd453fcd1473e65.hot-update.js.map