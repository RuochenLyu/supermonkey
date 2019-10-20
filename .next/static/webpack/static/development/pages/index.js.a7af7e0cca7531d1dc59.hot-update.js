webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/city-picker.js":
false,

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_nav_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/nav.scss */ "./styles/nav.scss");
/* harmony import */ var _styles_nav_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_nav_scss__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/ruochen/Documents/workspace/supermonkey/components/nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var BoxList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BoxList, _React$Component);

  function BoxList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BoxList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BoxList).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BoxList, [{
    key: "handleClick",
    value: function handleClick(e) {
      this.props.onBoxIdChange(e.target.dataset.id * 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          boxId = _this$props.boxId,
          currentCity = _this$props.currentCity;
      var _data$main$boxArea = data.main.boxArea,
          cityMap = _data$main$boxArea.cityMap,
          cityList = _data$main$boxArea.cityList;
      var boxList = cityMap[currentCity][0].boxList;
      var boxItems = boxList.map(function (item) {
        return __jsx("div", {
          key: item.boxId,
          className: _styles_nav_scss__WEBPACK_IMPORTED_MODULE_8___default.a.box,
          onClick: _this2.handleClick,
          "data-id": item.boxId,
          "data-current": boxId === item.boxId,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, item.boxname);
      });
      return __jsx("div", {
        className: _styles_nav_scss__WEBPACK_IMPORTED_MODULE_8___default.a.list,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, boxItems);
    }
  }]);

  return BoxList;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

BoxList.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  boxId: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  currentCity: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (BoxList);

/***/ })

})
//# sourceMappingURL=index.js.a7af7e0cca7531d1dc59.hot-update.js.map