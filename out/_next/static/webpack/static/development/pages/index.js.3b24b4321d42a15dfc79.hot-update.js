webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/city-picker.js":
/*!***********************************!*\
  !*** ./components/city-picker.js ***!
  \***********************************/
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
/* harmony import */ var _styles_city_picker_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/city-picker.scss */ "./styles/city-picker.scss");
/* harmony import */ var _styles_city_picker_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_city_picker_scss__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/ruochen/Documents/workspace/supermonkey/components/city-picker.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var CityPicker =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CityPicker, _React$Component);

  function CityPicker(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CityPicker);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CityPicker).call(this, props));
    _this.state = {
      opend: false
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CityPicker, [{
    key: "handleClick",
    value: function handleClick(e) {
      this.props.onCurrentCityChange(e.target.dataset.id);
    }
  }, {
    key: "toggleList",
    value: function toggleList() {
      this.setState(function (prevState) {
        return {
          opend: !prevState.opend
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          cityList = _this$props.cityList,
          currentCity = _this$props.currentCity;
      var cityItems = cityList.map(function (item) {
        return __jsx("div", {
          key: item,
          className: _styles_city_picker_scss__WEBPACK_IMPORTED_MODULE_8___default.a.city,
          onClick: _this2.handleClick,
          "data-id": item,
          "data-current": currentCity === item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, item);
      });
      return __jsx("div", {
        className: _styles_city_picker_scss__WEBPACK_IMPORTED_MODULE_8___default.a.picker,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("div", {
        className: _styles_city_picker_scss__WEBPACK_IMPORTED_MODULE_8___default.a.current,
        onClick: function onClick() {
          return _this2.toggleList();
        },
        "data-opend": this.state.opend,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("img", {
        src: "/static/touch-icon.png",
        alt: "\u8D85\u7EA7\u7329\u7329\xB7\u8BFE\u7A0B\u8868",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, currentCity), __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("polyline", {
        points: "6 9 12 15 18 9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }))), __jsx("div", {
        className: _styles_city_picker_scss__WEBPACK_IMPORTED_MODULE_8___default.a.dropdown,
        "data-opend": this.state.opend,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, cityItems));
    }
  }]);

  return CityPicker;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CityPicker.propTypes = {
  cityList: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  currentCity: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CityPicker);

/***/ })

})
//# sourceMappingURL=index.js.3b24b4321d42a15dfc79.hot-update.js.map