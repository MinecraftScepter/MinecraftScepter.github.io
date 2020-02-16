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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/config/index.ts");




// import { IArticleRequest } from '../json/request/article';
// import { ICommentRequest } from '../json/request/comment';
// import { ArticleResponse, SimpleArticleResponse, SearchArticleResponse  } from '../json/response/article';
// import { CommentListResponse, CommentResponse  } from '../json/response/comment';

var url = _config__WEBPACK_IMPORTED_MODULE_4__["default"].helperApi;

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

  }]);

  return HelperApiRepository;
}();

/* harmony default export */ __webpack_exports__["default"] = (HelperApiRepository);

/***/ })

})
//# sourceMappingURL=donation.js.d0fbfaf9754d68c2e050.hot-update.js.map