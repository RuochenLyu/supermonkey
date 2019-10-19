webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/course.js":
/*!******************************!*\
  !*** ./components/course.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/format */ "./utils/format.js");
/* harmony import */ var _styles_course_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/course.scss */ "./styles/course.scss");
/* harmony import */ var _styles_course_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_course_scss__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/ruochen/Documents/workspace/supermonkey/components/course.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var Image =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Image, _React$Component);

  function Image() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Image);

    // super(props);
    _this.handleError = _this.handleError.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Image, [{
    key: "handleError",
    value: function handleError(e) {
      this.setState({
        src: "/static/touch-icon.png"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var alt = this.props.alt;
      this.setState({
        src: props.src
      });
      return __jsx("img", {
        className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_8___default.a.avatar,
        src: this.state.src,
        alt: alt,
        referrerPolicy: "no-referrer",
        onError: this.handleError,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      });
    }
  }]);

  return Image;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var Course = function Course(props) {
  var data = props.data,
      course = props.course;
  var classinfoSmallMap = data.classinfoSmallMap,
      trainerSmallMap = data.trainerSmallMap;
  var classInfo = classinfoSmallMap[course.classId];
  var trainer = trainerSmallMap[course.trainerUserId];
  return __jsx("div", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_8___default.a.course,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_8___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("span", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_8___default.a.time,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["default"])(course.startTime, "HH:mm", true), "\u2010", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["default"])(course.endTime, "HH:mm", true)), __jsx("span", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_8___default.a.price,
    "data-cheap": course.price < 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\xA5", course.price / 100)), __jsx("h4", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_8___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, classInfo.className), __jsx("div", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_8___default.a.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(Image, {
    src: trainer.face,
    alt: trainer.trainerStageName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("div", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_8___default.a["info-main"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, trainer.trainerStageName), __jsx("div", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_8___default.a.tags,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, classInfo.tag.join(" · ")))));
};

Course.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  course: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Course);

/***/ })

})
//# sourceMappingURL=index.js.f933836701bdf949daaa.hot-update.js.map