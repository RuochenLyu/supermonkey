webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/course.js":
/*!******************************!*\
  !*** ./components/course.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/format */ "./utils/format.js");
/* harmony import */ var _styles_course_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/course.scss */ "./styles/course.scss");
/* harmony import */ var _styles_course_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_course_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ruochen/Documents/workspace/supermonkey/components/course.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Image = function Image(props) {
  var src = props.src,
      alt = props.alt;
  return __jsx("img", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_3___default.a.avatar,
    src: src,
    alt: alt,
    referrerPolicy: "no-referrer" // onError={() => console.log(this)}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
};

var Course = function Course(props) {
  var data = props.data,
      course = props.course;
  var classinfoSmallMap = data.classinfoSmallMap,
      trainerSmallMap = data.trainerSmallMap;
  var classInfo = classinfoSmallMap[course.classId];
  var trainer = trainerSmallMap[course.trainerUserId];
  return __jsx("div", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_3___default.a.course,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("span", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_3___default.a.time,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, Object(_utils_format__WEBPACK_IMPORTED_MODULE_2__["default"])(course.startTime, "HH:mm", true), "\u2010", Object(_utils_format__WEBPACK_IMPORTED_MODULE_2__["default"])(course.endTime, "HH:mm", true)), __jsx("span", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_3___default.a.price,
    "data-cheap": course.price < 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "\xA5", course.price / 100)), __jsx("h4", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, classInfo.className), __jsx("div", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_3___default.a.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(Image, {
    src: trainer.face,
    alt: trainer.trainerStageName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("div", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_3___default.a["info-main"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, trainer.trainerStageName), __jsx("div", {
    className: _styles_course_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tags,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, classInfo.tag.join(" · ")))));
};

Course.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  course: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Course);

/***/ })

})
//# sourceMappingURL=index.js.ac40bac26a037182d9f3.hot-update.js.map