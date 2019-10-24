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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/format */ "./utils/format.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* harmony import */ var _styles_course_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/course.scss */ "./styles/course.scss");
/* harmony import */ var _styles_course_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_course_scss__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/ruochen/Documents/workspace/supermonkey/components/course.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var BookingStatus = {
  0: "预约",
  1: "紧张",
  2: "满员",
  3: "结束"
};

var Course =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Course, _React$Component);

  function Course(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Course);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Course).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Course, [{
    key: "handleClick",
    value: function handleClick() {
      var classId = this.props.course.classId;
      this.props.onCourseClick(classId);
      console.log(classId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          course = _this$props.course;
      var classinfoSmallMap = data.classinfoSmallMap,
          trainerSmallMap = data.trainerSmallMap;
      var classInfo = classinfoSmallMap[course.classId];
      var trainer = trainerSmallMap[course.trainerUserId];
      var status = data.main.priceMap[course.scheduleId].bookingCountStatus;
      return __jsx("div", {
        className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_10___default.a.course,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("div", {
        className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_10___default.a.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("span", {
        className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_10___default.a.time,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, Object(_utils_format__WEBPACK_IMPORTED_MODULE_8__["default"])(course.startTime, "HH:mm", true), "\u2010", Object(_utils_format__WEBPACK_IMPORTED_MODULE_8__["default"])(course.endTime, "HH:mm", true)), __jsx("span", {
        className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_10___default.a.price,
        "data-cheap": course.price < 1000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "\xA5", course.price / 100)), __jsx("h4", {
        className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_10___default.a.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, classInfo.className), __jsx("div", {
        className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_10___default.a.info,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx(_image__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_10___default.a.avatar,
        src: trainer.face,
        alt: trainer.trainerStageName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __jsx("div", {
        className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_10___default.a["info-main"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, trainer.trainerStageName), __jsx("div", {
        className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_10___default.a.tags,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, classInfo.tag.slice(0, 3).join(" · "))), __jsx("div", {
        className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_10___default.a.status,
        "data-status": status,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, BookingStatus[status])));
    }
  }]);

  return Course;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Course.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  course: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Course);

/***/ })

})
//# sourceMappingURL=index.js.1fb9726610cc4368b51d.hot-update.js.map