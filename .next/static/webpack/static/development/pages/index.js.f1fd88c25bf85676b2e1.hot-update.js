webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/reset.scss */ "./styles/reset.scss");
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/layout.scss */ "./styles/layout.scss");
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/loading */ "./components/loading.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_city_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/city-picker */ "./components/city-picker.js");
/* harmony import */ var _components_box_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/box-list */ "./components/box-list.js");
/* harmony import */ var _components_schedule__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/schedule */ "./components/schedule.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../data */ "./data.js");








var _jsxFileName = "/Users/ruochen/Documents/workspace/supermonkey/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;












var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));
    _this.handleBoxIdChange = _this.handleBoxIdChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleCurrentCityChange = _this.handleCurrentCityChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.state = {
      loading: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "handleBoxIdChange",
    value: function handleBoxIdChange(boxId) {
      this.setState({
        boxId: boxId
      });
      localStorage.setItem("supermonkey/boxId", boxId);
    }
  }, {
    key: "handleCurrentCityChange",
    value: function handleCurrentCityChange(currentCity) {
      // this.setState({ currentCity });
      localStorage.setItem("supermonkey/currentCity", currentCity);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var boxId = localStorage.getItem("supermonkey/boxId");
      var currentCity = localStorage.getItem("supermonkey/currentCity") || "北京市";
      var cityMap = _data__WEBPACK_IMPORTED_MODULE_18__["default"].data.main.boxArea.cityMap;
      var boxList = cityMap[currentCity][0].boxList;

      if (boxList.every(function (item) {
        return item.boxId !== boxId;
      })) {
        boxId = boxList[0].boxId;
      }

      this.setState({
        loading: false,
        data: _data__WEBPACK_IMPORTED_MODULE_18__["default"].data,
        boxId: boxId,
        currentCity: currentCity
      });
      localStorage.setItem("supermonkey/boxId", boxId);
      localStorage.setItem("supermonkey/currentCity", currentCity);
    }
  }, {
    key: "fetch",
    value: function () {
      var _fetch2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(city) {
        var result, json;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  loading: true
                });
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()("https://busi.supermonkey.com.cn/wxClass/getClassSelectList3?city=".concat(encodeURI(city)));

              case 3:
                result = _context.sent;
                _context.next = 6;
                return result.json();

              case 6:
                json = _context.sent;
                console.log(json.data); // return { data: json.data }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetch(_x) {
        return _fetch2.apply(this, arguments);
      }

      return fetch;
    }()
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      if (loading) return __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      });
      var _this$state = this.state,
          data = _this$state.data,
          boxId = _this$state.boxId,
          currentCity = _this$state.currentCity;
      var cityList = data.main.boxArea.cityList;
      return __jsx("div", {
        className: _styles_layout_scss__WEBPACK_IMPORTED_MODULE_12___default.a.main,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "\u8D85\u7EA7\u7329\u7329\xB7\u8BFE\u7A0B\u8868",
        description: "\u8D85\u7EA7\u7329\u7329\u5065\u8EAB\u5728\u7EBF\u8BFE\u7A0B\u8868",
        url: "https://super.kshift.me",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), __jsx("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(_components_city_picker__WEBPACK_IMPORTED_MODULE_15__["default"], {
        cityList: cityList,
        currentCity: currentCity,
        onCurrentCityChange: this.handleCurrentCityChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), __jsx(_components_box_list__WEBPACK_IMPORTED_MODULE_16__["default"], {
        data: data,
        boxId: boxId,
        currentCity: currentCity,
        onBoxIdChange: this.handleBoxIdChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })), __jsx(_components_schedule__WEBPACK_IMPORTED_MODULE_17__["default"], {
        data: data,
        boxId: boxId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f1fd88c25bf85676b2e1.hot-update.js.map