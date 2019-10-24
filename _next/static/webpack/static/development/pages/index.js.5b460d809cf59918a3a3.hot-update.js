webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/popup.js":
/*!*****************************!*\
  !*** ./components/popup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_popup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/popup.scss */ "./styles/popup.scss");
/* harmony import */ var _styles_popup_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_popup_scss__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/ruochen/Documents/workspace/supermonkey/components/popup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Popup =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Popup, _React$Component);

  function Popup() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Popup);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Popup).call(this));
    _this.state = {
      shown: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Popup, [{
    key: "render",
    value: function render() {
      var classId = this.props.classId;

      if (classId) {
        this.setState({
          shown: true
        });
      }

      return this.state.shown ? __jsx("div", {
        className: _styles_popup_scss__WEBPACK_IMPORTED_MODULE_6___default.a.popup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("div", {
        className: _styles_popup_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("iframe", {
        frameBorder: "0",
        src: "//v.qq.com/txp/iframe/player.html?autoplay=true&mini=true&disableplugin=IframeBottomOpenClientBar,IframeEndRecommend,IframePauseRecommend,IframeRelateRecommend&vid=t0876aven6f",
        allowFullScreen: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), __jsx("div", {
        className: _styles_popup_scss__WEBPACK_IMPORTED_MODULE_6___default.a.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Hip-hop\u9ED1\u6CE1\u6CE1\u7EC3\u4E60\u5BA4"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Hip-hop\u9ED1\u6CE1\u6CE1\u7EC3\u4E60\u5BA4", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), "-Hip-hop\u662F\u4EBA\u4EEC\u6700\u5E38\u63A5\u89E6\u7684\u4E00\u79CD\u821E\u8E48\uFF0C\u5B83\u6709\u7740\u5E45\u5EA6\u5927\u800C\u7B80\u5355\u7684\u821E\u6B65\uFF0C\u80FD\u591F\u8868\u73B0\u51FA\u591A\u5C42\u6B21\u7684\u821E\u611F\u3002\u56E0\u4E3A\u5BB9\u6613\u5B66\u4E60\uFF0C\u8DF3\u8D77\u6765\u8F7B\u677E\u81EA\u7531\u4E14\u91CA\u653E\u60C5\u7EEA\uFF0C\u6240\u4EE5\u5F88\u53D7\u5927\u4F17\u559C\u7231\uFF0E"), __jsx("span", {
        className: _styles_popup_scss__WEBPACK_IMPORTED_MODULE_6___default.a.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "\u8BAD\u7EC3\u6548\u679C"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Hip-hop\u9ED1\u6CE1\u6CE1\u7EC3\u4E60\u5BA4", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), "-\u957F\u671F\u7EC3\u4E60\u80FD\u66F4\u597D\u7684\u63D0\u9AD8\u534F\u8C03\u80FD\u529B\uFF0C\u5E76\u4E14\u4F7F\u8EAB\u4F53\u4E0D\u5E38\u8FD0\u52A8\u5230\u7684\u5C0F\u5173\u8282\u548C\u5C0F\u808C\u8089\u7FA4\u5F97\u4EE5\u5145\u5206\u953B\u70BC\u3002", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), "-\u8FD0\u52A8\u5F3A\u5EA6\u9002\u4E2D\uFF0C\u5177\u5907\u6709\u6C27\u8FD0\u52A8\u7684\u6548\u679C\uFF0C\u5728\u63D0\u9AD8\u4E3B\u80BA\u529F\u80FD\u7684\u540C\u65F6\uFF0C\u8FBE\u5230\u51CF\u80A5\u7684\u76EE\u7684\u3002", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), "-\u53EF\u4EE5\u6839\u636E\u81EA\u8EAB\u7684\u8EAB\u4F53\u72B6\u51B5\u548C\u8FD0\u52A8\u57FA\u7840\uFF0C\u9009\u62E9\u4E0D\u540C\u8282\u594F\u7684\u97F3\u4E50\u6765\u8C03\u6574\u8FD0\u52A8\u7684\u5F3A\u5EA6\u3002"), __jsx("span", {
        className: _styles_popup_scss__WEBPACK_IMPORTED_MODULE_6___default.a.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "\u9002\u5408\u4EBA\u7FA4"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Hip-hop\u9ED1\u6CE1\u6CE1\u7EC3\u4E60\u5BA4", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), "-Hip-hop\u9002\u5408\u6240\u6709\u4EBA\uFF0C\u5BF9\u57FA\u7840\u5E76\u6CA1\u6709\u7279\u6B8A\u8981\u6C42\u3002")))) : null;
    }
  }]);

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ })

})
//# sourceMappingURL=index.js.5b460d809cf59918a3a3.hot-update.js.map