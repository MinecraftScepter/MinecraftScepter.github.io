webpackHotUpdate("static\\development\\pages\\sponsors.js",{

/***/ "./src/repository/helper_repository.ts":
/*!*********************************************!*\
  !*** ./src/repository/helper_repository.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/config/index.ts");



 // import { IArticleRequest } from '../json/request/article';
// import { ICommentRequest } from '../json/request/comment';
// import { ArticleResponse, SimpleArticleResponse, SearchArticleResponse  } from '../json/response/article';
// import { CommentListResponse, CommentResponse  } from '../json/response/comment';


var url = _config__WEBPACK_IMPORTED_MODULE_4__["default"].helperApi;

var HelperApiRepository = /*#__PURE__*/function () {
  function HelperApiRepository() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HelperApiRepository);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(HelperApiRepository, null, [{
    key: "getRedirectUrl",
    value: function getRedirectUrl(_ref) {
      var title, comment, email, name, price;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getRedirectUrl$(_context) {
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
      }, null, null, null, Promise);
    } // static async getArticle(slug: string, ) : Promise<ArticleResponse | null> {
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
    key: "postPaypalCheckout",
    value: function postPaypalCheckout(_ref2) {
      var title, comment, email, name, price, orderId, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function postPaypalCheckout$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              title = _ref2.title, comment = _ref2.comment, email = _ref2.email, name = _ref2.name, price = _ref2.price, orderId = _ref2.orderId;
              _context2.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(superagent__WEBPACK_IMPORTED_MODULE_3___default.a.post(url + "/donations/paypal").send({
                title: title,
                email: email,
                name: name,
                comment: comment,
                price: price,
                orderId: orderId
              }));

            case 3:
              res = _context2.sent;
              return _context2.abrupt("return", res.body);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "getTop",
    value: function getTop() {
      var page,
          res,
          _args3 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getTop$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              page = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 0;
              console.log(url + "/donations/top");
              _context3.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(superagent__WEBPACK_IMPORTED_MODULE_3___default.a.get(url + "/donations/top").query({
                page: page
              }));

            case 4:
              res = _context3.sent;
              return _context3.abrupt("return", res.body);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "getLatest",
    value: function getLatest() {
      var page,
          res,
          _args4 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getLatest$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              page = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : 0;
              _context4.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(superagent__WEBPACK_IMPORTED_MODULE_3___default.a.get(url + "/donations/latest").query({
                page: page
              }));

            case 3:
              res = _context4.sent;
              return _context4.abrupt("return", res.body);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return HelperApiRepository;
}();

/* harmony default export */ __webpack_exports__["default"] = (HelperApiRepository);

/***/ })

})
//# sourceMappingURL=sponsors.js.3989c000512901901f34.hot-update.js.map