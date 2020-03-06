webpackHotUpdate("static\\development\\pages\\donation.js",{

/***/ "./pages/donation/_bloc/_donation_bloc.ts":
/*!************************************************!*\
  !*** ./pages/donation/_bloc/_donation_bloc.ts ***!
  \************************************************/
/*! exports provided: DonationFormEvent, ModifyEmailEvent, ModifyNameEvent, ModifyCurrencyEvent, ModifyPriceEvent, ModifyTitleEvent, ModifyCommentEvent, SubmitEvent, DonationFormState, DonationBloc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationFormEvent", function() { return DonationFormEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyEmailEvent", function() { return ModifyEmailEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyNameEvent", function() { return ModifyNameEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyCurrencyEvent", function() { return ModifyCurrencyEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyPriceEvent", function() { return ModifyPriceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyTitleEvent", function() { return ModifyTitleEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyCommentEvent", function() { return ModifyCommentEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitEvent", function() { return SubmitEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationFormState", function() { return DonationFormState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationBloc", function() { return DonationBloc; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/wrapAsyncGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/wrapAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/awaitAsyncGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/awaitAsyncGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncIterator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncIterator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncGeneratorDelegate */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncGeneratorDelegate.js");
/* harmony import */ var _felangel_bloc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @felangel/bloc */ "./node_modules/@felangel/bloc/dist/bloc.es5.js");
/* harmony import */ var _src_repository_helper_repository__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../src/repository/helper_repository */ "./src/repository/helper_repository.ts");














var DonationFormEvent = function DonationFormEvent() {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, DonationFormEvent);
};
var ModifyEmailEvent =
/*#__PURE__*/
function (_DonationFormEvent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ModifyEmailEvent, _DonationFormEvent);

  function ModifyEmailEvent(email) {
    var _this9;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, ModifyEmailEvent);

    _this9 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ModifyEmailEvent).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this9), "email", void 0);

    _this9.email = email;
    return _this9;
  }

  return ModifyEmailEvent;
}(DonationFormEvent);
var ModifyNameEvent =
/*#__PURE__*/
function (_DonationFormEvent2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ModifyNameEvent, _DonationFormEvent2);

  function ModifyNameEvent(name) {
    var _this10;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, ModifyNameEvent);

    _this10 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ModifyNameEvent).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this10), "name", void 0);

    _this10.name = name;
    return _this10;
  }

  return ModifyNameEvent;
}(DonationFormEvent);
var ModifyCurrencyEvent =
/*#__PURE__*/
function (_DonationFormEvent3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ModifyCurrencyEvent, _DonationFormEvent3);

  function ModifyCurrencyEvent(currency) {
    var _this11;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, ModifyCurrencyEvent);

    _this11 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ModifyCurrencyEvent).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this11), "currency", void 0);

    _this11.currency = currency;
    return _this11;
  }

  return ModifyCurrencyEvent;
}(DonationFormEvent);
var ModifyPriceEvent =
/*#__PURE__*/
function (_DonationFormEvent4) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ModifyPriceEvent, _DonationFormEvent4);

  function ModifyPriceEvent(price) {
    var _this12;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, ModifyPriceEvent);

    _this12 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ModifyPriceEvent).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this12), "price", void 0);

    _this12.price = price;
    return _this12;
  }

  return ModifyPriceEvent;
}(DonationFormEvent);
var ModifyTitleEvent =
/*#__PURE__*/
function (_DonationFormEvent5) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ModifyTitleEvent, _DonationFormEvent5);

  function ModifyTitleEvent(title) {
    var _this13;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, ModifyTitleEvent);

    _this13 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ModifyTitleEvent).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this13), "title", void 0);

    _this13.title = title;
    return _this13;
  }

  return ModifyTitleEvent;
}(DonationFormEvent);
var ModifyCommentEvent =
/*#__PURE__*/
function (_DonationFormEvent6) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ModifyCommentEvent, _DonationFormEvent6);

  function ModifyCommentEvent(comment) {
    var _this14;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, ModifyCommentEvent);

    _this14 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ModifyCommentEvent).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this14), "comment", void 0);

    _this14.comment = comment;
    return _this14;
  }

  return ModifyCommentEvent;
}(DonationFormEvent);
var SubmitEvent =
/*#__PURE__*/
function (_DonationFormEvent7) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SubmitEvent, _DonationFormEvent7);

  function SubmitEvent(window) {
    var _this15;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, SubmitEvent);

    _this15 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SubmitEvent).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this15), "window", void 0);

    _this15.window = window;
    return _this15;
  }

  return SubmitEvent;
}(DonationFormEvent);

function validEmail(val) {
  return !/(\.{2}|-{2}|_{2})/.test(val) && /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(val);
}

var DonationFormState =
/*#__PURE__*/
function () {
  function DonationFormState(isEmailValid, isPriceValid, email, name, currency, price, title, comment) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, DonationFormState);

    this.isEmailValid = isEmailValid;
    this.isPriceValid = isPriceValid;
    this.email = email;
    this.name = name;
    this.currency = currency;
    this.price = price;
    this.title = title;
    this.comment = comment;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DonationFormState, [{
    key: "copyWith",
    value: function copyWith(_ref) {
      var isEmailValid = _ref.isEmailValid,
          isPriceValid = _ref.isPriceValid,
          email = _ref.email,
          name = _ref.name,
          currency = _ref.currency,
          price = _ref.price,
          title = _ref.title,
          comment = _ref.comment;
      return new DonationFormState(isEmailValid != null ? isEmailValid : this.isEmailValid, isPriceValid != null ? isPriceValid : this.isPriceValid, email != null ? email : this.email, name != null ? name : this.name, currency != null ? currency : this.currency, price != null ? price : this.price, title != null ? title : this.title, comment != null ? comment : this.comment);
    }
  }, {
    key: "isFormValid",
    get: function get() {
      // console.log(!this.email || !this.price || !(this.email === "") || !(this.price < 30));
      return this.email !== "" && this.price >= 30;
    }
  }], [{
    key: "empty",
    value: function empty() {
      return new DonationFormState(true, true, "", "", "TWD", 0, "", "");
    }
  }]);

  return DonationFormState;
}();
var DonationBloc =
/*#__PURE__*/
function (_Bloc) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DonationBloc, _Bloc);

  function DonationBloc() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, DonationBloc);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DonationBloc).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DonationBloc, [{
    key: "initialState",
    value: function initialState() {
      return DonationFormState.empty();
    }
  }, {
    key: "mapEventToState",
    value: function mapEventToState(event) {
      var _this = this;

      return Object(_babel_runtime_corejs2_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(event instanceof ModifyEmailEvent)) {
                  _context.next = 4;
                  break;
                }

                return _context.delegateYield(Object(_babel_runtime_corejs2_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_10__["default"])(_this._mapModifyEmailEventToState(event)), _babel_runtime_corejs2_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"]), "t0", 2);

              case 2:
                _context.next = 26;
                break;

              case 4:
                if (!(event instanceof ModifyNameEvent)) {
                  _context.next = 8;
                  break;
                }

                return _context.delegateYield(Object(_babel_runtime_corejs2_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_10__["default"])(_this._mapModifyNameEventToState(event)), _babel_runtime_corejs2_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"]), "t1", 6);

              case 6:
                _context.next = 26;
                break;

              case 8:
                if (!(event instanceof ModifyPriceEvent)) {
                  _context.next = 12;
                  break;
                }

                return _context.delegateYield(Object(_babel_runtime_corejs2_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_10__["default"])(_this._mapModifyPriceEventToState(event)), _babel_runtime_corejs2_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"]), "t2", 10);

              case 10:
                _context.next = 26;
                break;

              case 12:
                if (!(event instanceof ModifyTitleEvent)) {
                  _context.next = 16;
                  break;
                }

                return _context.delegateYield(Object(_babel_runtime_corejs2_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_10__["default"])(_this._mapModifyTitleEventToState(event)), _babel_runtime_corejs2_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"]), "t3", 14);

              case 14:
                _context.next = 26;
                break;

              case 16:
                if (!(event instanceof ModifyCommentEvent)) {
                  _context.next = 20;
                  break;
                }

                return _context.delegateYield(Object(_babel_runtime_corejs2_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_10__["default"])(_this._mapModifyCommentEventToState(event)), _babel_runtime_corejs2_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"]), "t4", 18);

              case 18:
                _context.next = 26;
                break;

              case 20:
                if (!(event instanceof ModifyCurrencyEvent)) {
                  _context.next = 24;
                  break;
                }

                return _context.delegateYield(Object(_babel_runtime_corejs2_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_10__["default"])(_this._mapModifyCurrencyEventToState(event)), _babel_runtime_corejs2_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"]), "t5", 22);

              case 22:
                _context.next = 26;
                break;

              case 24:
                if (!(event instanceof SubmitEvent)) {
                  _context.next = 26;
                  break;
                }

                return _context.delegateYield(Object(_babel_runtime_corejs2_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_10__["default"])(_this._mapSubmitEventToState(event)), _babel_runtime_corejs2_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"]), "t6", 26);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }, {
    key: "_mapModifyEmailEventToState",
    value: function _mapModifyEmailEventToState(event) {
      var _this2 = this;

      return Object(_babel_runtime_corejs2_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var currentState;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                currentState = _this2.currentState;
                _context2.next = 3;
                return currentState.copyWith({
                  isEmailValid: validEmail(event.email),
                  email: event.email
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }, {
    key: "_mapModifyNameEventToState",
    value: function _mapModifyNameEventToState(event) {
      var _this3 = this;

      return Object(_babel_runtime_corejs2_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var currentState;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                currentState = _this3.currentState;
                _context3.next = 3;
                return currentState.copyWith({
                  name: event.name
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }, {
    key: "_mapModifyPriceEventToState",
    value: function _mapModifyPriceEventToState(event) {
      var _this4 = this;

      return Object(_babel_runtime_corejs2_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var currentState;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                currentState = _this4.currentState;
                _context4.next = 3;
                return currentState.copyWith({
                  isPriceValid: event.price >= 30,
                  price: event.price
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }, {
    key: "_mapModifyTitleEventToState",
    value: function _mapModifyTitleEventToState(event) {
      var _this5 = this;

      return Object(_babel_runtime_corejs2_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var currentState;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                currentState = _this5.currentState;
                _context5.next = 3;
                return currentState.copyWith({
                  title: event.title
                });

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  }, {
    key: "_mapModifyCommentEventToState",
    value: function _mapModifyCommentEventToState(event) {
      var _this6 = this;

      return Object(_babel_runtime_corejs2_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var currentState;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                currentState = _this6.currentState;
                _context6.next = 3;
                return currentState.copyWith({
                  comment: event.comment
                });

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    }
  }, {
    key: "_mapModifyCurrencyEventToState",
    value: function _mapModifyCurrencyEventToState(event) {
      var _this7 = this;

      return Object(_babel_runtime_corejs2_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var currentState;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                currentState = _this7.currentState;
                _context7.next = 3;
                return currentState.copyWith({
                  currency: event.currency
                });

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    }
  }, {
    key: "_mapSubmitEventToState",
    value: function _mapSubmitEventToState(event) {
      var _this8 = this;

      return Object(_babel_runtime_corejs2_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var currentState, url;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                currentState = _this8.currentState;
                _context8.next = 3;
                return Object(_babel_runtime_corejs2_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(_src_repository_helper_repository__WEBPACK_IMPORTED_MODULE_13__["default"].getRedirectUrl({
                  title: currentState.title,
                  comment: currentState.comment,
                  email: currentState.email,
                  name: currentState.name,
                  price: currentState.currency.toLocaleLowerCase() === "usd" ? currentState.price * 30 : currentState.price
                }));

              case 3:
                url = _context8.sent;
                console.log(event.window);
                console.log(url);
                event.window.location.href = url;

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    }
  }]);

  return DonationBloc;
}(_felangel_bloc__WEBPACK_IMPORTED_MODULE_12__["Bloc"]);

/***/ })

})
//# sourceMappingURL=donation.js.febc2fa3feae0ca23899.hot-update.js.map