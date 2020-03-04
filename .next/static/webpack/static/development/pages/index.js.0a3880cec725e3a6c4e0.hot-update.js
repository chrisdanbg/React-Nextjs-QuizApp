webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/answerOption.js":
/*!************************************!*\
  !*** ./components/answerOption.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\applynx2\\Desktop\\react-app\\components\\answerOption.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function AnswerOption(props) {
  return __jsx("li", {
    className: "answerOption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("input", {
    type: "radio",
    className: "radioCustomBUtton",
    name: "radioGroup",
    checked: props.answerType === props.answer,
    id: props.answerType,
    value: props.answerType,
    disabled: props.answer,
    onChange: props.onAnswerSelected,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("label", {
    className: "radioCustomLabel",
    htmlFor: props.answerType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.answerContent, props.answer));
}

AnswerOption.propTypes = {
  answerType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  answerContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  answer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AnswerOption);

/***/ })

})
//# sourceMappingURL=index.js.0a3880cec725e3a6c4e0.hot-update.js.map