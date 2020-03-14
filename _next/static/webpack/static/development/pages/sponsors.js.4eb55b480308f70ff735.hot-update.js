webpackHotUpdate("static\\development\\pages\\sponsors.js",{

/***/ "./pages/sponsors/bloc/donation_section_bloc.ts":
/*!******************************************************!*\
  !*** ./pages/sponsors/bloc/donation_section_bloc.ts ***!
  \******************************************************/
/*! exports provided: DonationSectionEvent, DonationType, PageStartEvent, NextPageEvent, PreviousPageEvent, DonationSectionState, DonationSectionBloc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationSectionEvent", function() { return DonationSectionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationType", function() { return DonationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageStartEvent", function() { return PageStartEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextPageEvent", function() { return NextPageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousPageEvent", function() { return PreviousPageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationSectionState", function() { return DonationSectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationSectionBloc", function() { return DonationSectionBloc; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/wrapAsyncGenerator */ "./node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/awaitAsyncGenerator */ "./node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncIterator */ "./node_modules/@babel/runtime/helpers/esm/asyncIterator.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncGeneratorDelegate */ "./node_modules/@babel/runtime/helpers/esm/asyncGeneratorDelegate.js");
/* harmony import */ var _felangel_bloc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @felangel/bloc */ "./node_modules/@felangel/bloc/dist/bloc.es5.js");
/* harmony import */ var _src_repository_helper_repository__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../src/repository/helper_repository */ "./src/repository/helper_repository.ts");














var DonationSectionEvent = function DonationSectionEvent() {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, DonationSectionEvent);
};
var DonationType;

(function (DonationType) {
  DonationType[DonationType["Top"] = 0] = "Top";
  DonationType[DonationType["Latest"] = 1] = "Latest";
})(DonationType || (DonationType = {}));

var PageStartEvent = /*#__PURE__*/function (_DonationSectionEvent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PageStartEvent, _DonationSectionEvent);

  function PageStartEvent(type) {
    var _this5;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, PageStartEvent);

    _this5 = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PageStartEvent).call(this));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this5), "type", void 0);

    _this5.type = type;
    return _this5;
  }

  return PageStartEvent;
}(DonationSectionEvent);
var NextPageEvent = /*#__PURE__*/function (_DonationSectionEvent2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NextPageEvent, _DonationSectionEvent2);

  function NextPageEvent() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, NextPageEvent);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NextPageEvent).apply(this, arguments));
  }

  return NextPageEvent;
}(DonationSectionEvent);
var PreviousPageEvent = /*#__PURE__*/function (_DonationSectionEvent3) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PreviousPageEvent, _DonationSectionEvent3);

  function PreviousPageEvent() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, PreviousPageEvent);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PreviousPageEvent).apply(this, arguments));
  }

  return PreviousPageEvent;
}(DonationSectionEvent);
var DonationSectionState = /*#__PURE__*/function () {
  function DonationSectionState(isNextValid, isPrevValid, isLoading, page, datas) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, DonationSectionState);

    this.isNextValid = isNextValid;
    this.isPrevValid = isPrevValid;
    this.isLoading = isLoading;
    this.page = page;
    this.datas = datas;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DonationSectionState, [{
    key: "copyWith",
    value: function copyWith(_ref) {
      var isNextValid = _ref.isNextValid,
          isPrevValid = _ref.isPrevValid,
          isLoading = _ref.isLoading,
          page = _ref.page,
          datas = _ref.datas;
      return new DonationSectionState(isNextValid != null ? isNextValid : this.isNextValid, isPrevValid != null ? isPrevValid : this.isPrevValid, isLoading != null ? isLoading : this.isLoading, page != null ? page : this.page, datas != null ? datas : this.datas);
    }
  }], [{
    key: "empty",
    value: function empty() {
      return new DonationSectionState(true, false, false, 0, []);
    }
  }]);

  return DonationSectionState;
}();
var DonationSectionBloc = /*#__PURE__*/function (_Bloc) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DonationSectionBloc, _Bloc);

  function DonationSectionBloc() {
    var _getPrototypeOf2;

    var _this6;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, DonationSectionBloc);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this6 = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DonationSectionBloc)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this6), "type", void 0);

    return _this6;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DonationSectionBloc, [{
    key: "initialState",
    value: function initialState() {
      return DonationSectionState.empty();
    }
  }, {
    key: "mapEventToState",
    value: function mapEventToState(event) {
      var _this = this;

      return Object(_babel_runtime_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(event instanceof PageStartEvent)) {
                  _context.next = 5;
                  break;
                }

                _this.type = event.type;
                return _context.delegateYield(Object(_babel_runtime_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_10__["default"])(_this._mapPageStartEventToState(event)), _babel_runtime_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"]), "t0", 3);

              case 3:
                _context.next = 11;
                break;

              case 5:
                if (!(event instanceof NextPageEvent)) {
                  _context.next = 9;
                  break;
                }

                return _context.delegateYield(Object(_babel_runtime_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_10__["default"])(_this._mapNextPageEventToState(event)), _babel_runtime_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"]), "t1", 7);

              case 7:
                _context.next = 11;
                break;

              case 9:
                if (!(event instanceof PreviousPageEvent)) {
                  _context.next = 11;
                  break;
                }

                return _context.delegateYield(Object(_babel_runtime_helpers_esm_asyncGeneratorDelegate__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_10__["default"])(_this._mapPreviousPageEventToState(event)), _babel_runtime_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"]), "t2", 11);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }, {
    key: "_mapPageStartEventToState",
    value: function _mapPageStartEventToState(event) {
      var _this2 = this;

      return Object(_babel_runtime_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var currentState, _datas, _datas2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                currentState = _this2.currentState;
                _context2.next = 3;
                return currentState.copyWith({
                  isLoading: true
                });

              case 3:
                if (!(_this2.type == DonationType.Top)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 6;
                return Object(_babel_runtime_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(_src_repository_helper_repository__WEBPACK_IMPORTED_MODULE_13__["default"].getTop(0));

              case 6:
                _datas = _context2.sent;
                _context2.next = 9;
                return currentState.copyWith({
                  isLoading: false,
                  isPrevValid: false,
                  isNextValid: _datas.length == 10,
                  page: 0,
                  datas: _datas
                });

              case 9:
                if (!(_this2.type == DonationType.Latest)) {
                  _context2.next = 15;
                  break;
                }

                _context2.next = 12;
                return Object(_babel_runtime_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(_src_repository_helper_repository__WEBPACK_IMPORTED_MODULE_13__["default"].getLatest(0));

              case 12:
                _datas2 = _context2.sent;
                _context2.next = 15;
                return currentState.copyWith({
                  isLoading: false,
                  isPrevValid: false,
                  isNextValid: _datas2.length == 10,
                  page: 0,
                  datas: _datas2
                });

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }, {
    key: "_mapNextPageEventToState",
    value: function _mapNextPageEventToState(event) {
      var _this3 = this;

      return Object(_babel_runtime_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var currentState, _datas3, finalPage, _datas4, _finalPage;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                currentState = _this3.currentState;
                _context3.next = 3;
                return currentState.copyWith({
                  isLoading: true
                });

              case 3:
                if (!(_this3.type == DonationType.Top)) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 6;
                return Object(_babel_runtime_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(_src_repository_helper_repository__WEBPACK_IMPORTED_MODULE_13__["default"].getTop(currentState.page + 1));

              case 6:
                _datas3 = _context3.sent;
                finalPage = _datas3.length == 0 ? currentState.page : currentState.page + 1;
                _context3.next = 10;
                return currentState.copyWith({
                  isLoading: false,
                  isPrevValid: finalPage !== 0,
                  isNextValid: _datas3.length == 10,
                  page: finalPage,
                  datas: _datas3
                });

              case 10:
                if (!(_this3.type == DonationType.Latest)) {
                  _context3.next = 17;
                  break;
                }

                _context3.next = 13;
                return Object(_babel_runtime_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(_src_repository_helper_repository__WEBPACK_IMPORTED_MODULE_13__["default"].getLatest(currentState.page + 1));

              case 13:
                _datas4 = _context3.sent;
                _finalPage = _datas4.length == 0 ? currentState.page : currentState.page + 1;
                _context3.next = 17;
                return currentState.copyWith({
                  isLoading: false,
                  isPrevValid: _finalPage !== 0,
                  isNextValid: _datas4.length == 10,
                  page: _finalPage,
                  datas: _datas4
                });

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }, {
    key: "_mapPreviousPageEventToState",
    value: function _mapPreviousPageEventToState(event) {
      var _this4 = this;

      return Object(_babel_runtime_helpers_esm_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var currentState, _datas5, _datas6;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                currentState = _this4.currentState;
                _context4.next = 3;
                return currentState.copyWith({
                  isLoading: true
                });

              case 3:
                if (!(_this4.type == DonationType.Top)) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 6;
                return Object(_babel_runtime_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(_src_repository_helper_repository__WEBPACK_IMPORTED_MODULE_13__["default"].getTop(Math.max(0, currentState.page - 1)));

              case 6:
                _datas5 = _context4.sent;
                _context4.next = 9;
                return currentState.copyWith({
                  isLoading: false,
                  isPrevValid: currentState.page - 1 > 0,
                  isNextValid: true,
                  page: Math.max(0, currentState.page - 1),
                  datas: _datas5
                });

              case 9:
                if (!(_this4.type == DonationType.Latest)) {
                  _context4.next = 15;
                  break;
                }

                _context4.next = 12;
                return Object(_babel_runtime_helpers_esm_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(_src_repository_helper_repository__WEBPACK_IMPORTED_MODULE_13__["default"].getLatest(Math.max(0, currentState.page - 1)));

              case 12:
                _datas6 = _context4.sent;
                _context4.next = 15;
                return currentState.copyWith({
                  isLoading: false,
                  isPrevValid: currentState.page - 1 > 0,
                  isNextValid: true,
                  page: Math.max(0, currentState.page - 1),
                  datas: _datas6
                });

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }]);

  return DonationSectionBloc;
}(_felangel_bloc__WEBPACK_IMPORTED_MODULE_12__["Bloc"]);

/***/ })

})
//# sourceMappingURL=sponsors.js.4eb55b480308f70ff735.hot-update.js.map