webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/schedule.js":
/*!********************************!*\
  !*** ./components/schedule.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/format */ "./utils/format.js");
/* harmony import */ var _utils_isToday__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/isToday */ "./utils/isToday.js");
/* harmony import */ var _course__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course */ "./components/course.js");
/* harmony import */ var _styles_schedule_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/schedule.scss */ "./styles/schedule.scss");
/* harmony import */ var _styles_schedule_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_schedule_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/ruochen/Documents/workspace/supermonkey/components/schedule.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Schedule = function Schedule(props) {
  var data = props.data,
      boxId = props.boxId;
  var scheduleList = data.main.scheduleList;
  var listItems = scheduleList.map(function (item) {
    var list = item.boxClassSchedulesList.find(function (x) {
      return x.boxId === boxId;
    });
    var courses = list.classScheduleList.map(function (id) {
      return __jsx(_course__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: id,
        data: data,
        course: data.scheduleSmallMap[id],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
    });

    if (list.classScheduleListEmptyReason) {
      courses = __jsx("div", {
        className: _styles_schedule_scss__WEBPACK_IMPORTED_MODULE_5___default.a.init,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, list.classScheduleListEmptyReason);
    }

    var today = Object(_utils_isToday__WEBPACK_IMPORTED_MODULE_3__["default"])(item.date) ? __jsx("span", {
      className: _styles_schedule_scss__WEBPACK_IMPORTED_MODULE_5___default.a.today,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "\u4ECA\u5929") : __jsx("span", {
      className: _styles_schedule_scss__WEBPACK_IMPORTED_MODULE_5___default.a.desc,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, Object(_utils_format__WEBPACK_IMPORTED_MODULE_2__["default"])(item.date, "E"));
    return __jsx("div", {
      key: item.date,
      className: _styles_schedule_scss__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      className: _styles_schedule_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, Object(_utils_format__WEBPACK_IMPORTED_MODULE_2__["default"])(item.date)), today), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, courses));
  });
  return __jsx("main", {
    className: _styles_schedule_scss__WEBPACK_IMPORTED_MODULE_5___default.a.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("header", {
    className: _styles_schedule_scss__WEBPACK_IMPORTED_MODULE_5___default.a["main-header"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), listItems);
};

Schedule.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  boxId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ })

})
//# sourceMappingURL=index.js.159745757b0669e0f2b1.hot-update.js.map