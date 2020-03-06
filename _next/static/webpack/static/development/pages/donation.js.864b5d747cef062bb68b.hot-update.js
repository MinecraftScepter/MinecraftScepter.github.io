webpackHotUpdate("static\\development\\pages\\donation.js",{

/***/ "./src/repository/helper_repository.ts":
/*!*********************************************!*\
  !*** ./src/repository/helper_repository.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/config/index.ts");




 // import { IArticleRequest } from '../json/request/article';
// import { ICommentRequest } from '../json/request/comment';
// import { ArticleResponse, SimpleArticleResponse, SearchArticleResponse  } from '../json/response/article';
// import { CommentListResponse, CommentResponse  } from '../json/response/comment';


var url = _config__WEBPACK_IMPORTED_MODULE_5__["default"].helperApi;

var HelperApiRepository =
/*#__PURE__*/
function () {
  function HelperApiRepository() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, HelperApiRepository);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(HelperApiRepository, null, [{
    key: "getRedirectUrl",
    value: function () {
      var _getRedirectUrl = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var title, comment, email, name, price;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                title = _ref.title, comment = _ref.comment, email = _ref.email, name = _ref.name, price = _ref.price;
                return _context.abrupt("return", url + "/donations?email=".concat(encodeURIComponent(email), "&name=").concat(encodeURIComponent(name), "&price=").concat(price, "&title=").concat(encodeURIComponent(title), "&comment=").concat(encodeURIComponent(comment)));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getRedirectUrl(_x) {
        return _getRedirectUrl.apply(this, arguments);
      }

      return getRedirectUrl;
    }() // static async getArticle(slug: string, ) : Promise<ArticleResponse | null> {
    //   try {
    //     const res = superagent
    //       .get(config.api + `${url}/${slug}`)
    //       .set("accept", "json")
    //       .set({'Content-Type': 'application/json'})
    //       if(token)
    //         res.set({'Authorization': 'Bearer ' + token})   
    //     const response = await res.send();
    //     const article = response.body as ArticleResponse;
    //     return article;
    //   } catch(err) {
    //     console.log(err);
    //     return null;
    //   }
    // }

  }, {
    key: "getRedirectUrl",
    value: function () {
      var _getRedirectUrl2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref2) {
        var title, comment, email, name, price, orderId, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                title = _ref2.title, comment = _ref2.comment, email = _ref2.email, name = _ref2.name, price = _ref2.price, orderId = _ref2.orderId;
                _context2.next = 3;
                return superagent__WEBPACK_IMPORTED_MODULE_4___default.a.post(url + "/tests/paypal_callback").send({
                  title: title,
                  email: email,
                  name: name,
                  comment: comment,
                  price: price,
                  orderId: orderId
                });

              case 3:
                res = _context2.sent;
                return _context2.abrupt("return", res.body);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getRedirectUrl(_x2) {
        return _getRedirectUrl2.apply(this, arguments);
      }

      return getRedirectUrl;
    }()
  }]);

  return HelperApiRepository;
}();

/* harmony default export */ __webpack_exports__["default"] = (HelperApiRepository);

/***/ })

})
//# sourceMappingURL=donation.js.864b5d747cef062bb68b.hot-update.js.map