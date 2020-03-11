webpackHotUpdate("static\\development\\pages\\admin\\create.js",{

/***/ "./pages/admin/create.js":
/*!*******************************!*\
  !*** ./pages/admin/create.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/auth */ "./components/auth.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/firebase */ "./components/firebase.js");







var _jsxFileName = "C:\\Users\\Kristiyan\\Desktop\\React-Nextjs-QuizApp\\pages\\admin\\create.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






function Create() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    title: '',
    correctAnswer: '',
    otherAnswer1: '',
    otherAnswer2: '',
    otherAnswer3: ''
  }),
      question = _useState[0],
      setQuestion = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      isSubmited = _useState2[0],
      setSubmited = _useState2[1];

  var handleChange = function handleChange(e) {
    return setQuestion(_objectSpread({}, question, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value)));
  };

  var handleSubmit = function handleSubmit(e) {
    if (!handleValidation()) {
      return;
    }

    _components_firebase__WEBPACK_IMPORTED_MODULE_10__["default"].firestore().collection('questions').doc('dsa').set(question);
    setSubmited(true);
  };

  var handleValidation = function handleValidation() {
    var formIsValid = true;

    if (!question["title"] || !question["correctAnswer"] || !question["otherAnswer1"] || !question["otherAnswer2"] || !question["otherAnswer3"]) {
      formIsValid = false;
    }

    return formIsValid;
  };

  var renderNewQuestionForm = function renderNewQuestionForm() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Create Question Page"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
      name: "title",
      onChange: handleChange,
      className: "my-2",
      placeholder: "Question title",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
      name: "correctAnswer",
      onChange: handleChange,
      className: "my-2",
      placeholder: "Correct answer",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
      name: "otherAnswer1",
      onChange: handleChange,
      className: "my-2",
      placeholder: "Other answer 1",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
      name: "otherAnswer2",
      onChange: handleChange,
      className: "my-2",
      placeholder: "Other answer 2",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
      name: "otherAnswer3",
      onChange: handleChange,
      className: "my-2",
      placeholder: "Other answer 3",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      onClick: handleSubmit,
      className: "my-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Submit"), " ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }));
  };

  var renderSubmitedConfirm = function renderSubmitedConfirm() {
    return __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "SUBMITED");
  };

  return __jsx(_components_auth__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, !isSubmited ? renderNewQuestionForm() : renderSubmitedConfirm()));
}

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ })

})
//# sourceMappingURL=create.js.3f2645467aa48d1e4316.hot-update.js.map