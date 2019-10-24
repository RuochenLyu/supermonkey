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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _classinfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../classinfo */ "./classinfo.js");
/* harmony import */ var _styles_popup_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/popup.scss */ "./styles/popup.scss");
/* harmony import */ var _styles_popup_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_popup_scss__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/ruochen/Documents/workspace/supermonkey/components/popup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var Popup =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Popup, _React$Component);

  function Popup(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Popup);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Popup).call(this, props));
    _this.pressESC = _this.pressESC.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Popup, [{
    key: "pressESC",
    value: function pressESC(event) {
      if (event.keyCode === 27) {
        this.props.onMaskClick();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.pressESC, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.pressESC, false);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.classId) return null;
      var data = _classinfo__WEBPACK_IMPORTED_MODULE_7__["default"][this.props.classId.toString()];
      if (!data.className) return null;
      var video = data.video ? __jsx("iframe", {
        frameBorder: "0",
        src: "//v.qq.com/txp/iframe/player.html?vid=".concat(data.video, "&autoplay=true&mini=true&disableplugin=IframeBottomOpenClientBar,IframeEndRecommend,IframePauseRecommend,IframeRelateRecommend"),
        allowFullScreen: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }) : null;
      return __jsx("div", {
        className: _styles_popup_scss__WEBPACK_IMPORTED_MODULE_8___default.a.popup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("div", {
        className: _styles_popup_scss__WEBPACK_IMPORTED_MODULE_8___default.a.mask,
        onClick: this.props.onMaskClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx("div", {
        className: _styles_popup_scss__WEBPACK_IMPORTED_MODULE_8___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, video, __jsx("div", {
        className: _styles_popup_scss__WEBPACK_IMPORTED_MODULE_8___default.a.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, data.className), __jsx("p", {
        dangerouslySetInnerHTML: {
          __html: data.classIntroduce
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), __jsx("span", {
        className: _styles_popup_scss__WEBPACK_IMPORTED_MODULE_8___default.a.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\u8BAD\u7EC3\u6548\u679C"), __jsx("p", {
        dangerouslySetInnerHTML: {
          __html: data.trainingEffect
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx("span", {
        className: _styles_popup_scss__WEBPACK_IMPORTED_MODULE_8___default.a.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u9002\u5408\u4EBA\u7FA4"), __jsx("p", {
        dangerouslySetInnerHTML: {
          __html: data.suitablePeople
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }))));
    }
  }]);

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ })

})
//# sourceMappingURL=index.js.26367e742593253bf123.hot-update.js.map