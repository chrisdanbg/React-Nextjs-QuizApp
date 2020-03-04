webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./api/quizQuestions.js":
/*!******************************!*\
  !*** ./api/quizQuestions.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var quizQuestions = [{
  question: "What franchise would you rather play a game from?",
  answers: [{
    type: "Microsoft",
    content: "Halo"
  }, {
    type: "Nintendo",
    content: "Pokemon"
  }, {
    type: "Sony",
    content: "Uncharted"
  }]
}, {
  question: "Which console would you prefer to play with friends?",
  answers: [{
    type: "Microsoft",
    content: "X-Box"
  }, {
    type: "Nintendo",
    content: "Nintendo 64"
  }, {
    type: "Sony",
    content: "Playstation 1"
  }]
}, {
  question: "Which of these racing franchises would you prefer to play a game from?",
  answers: [{
    type: "Microsoft",
    content: "Forza"
  }, {
    type: "Nintendo",
    content: "Mario Kart"
  }, {
    type: "Sony",
    content: "Gran Turismo"
  }]
}, {
  question: "Which of these games do you think is best?",
  answers: [{
    type: "Microsoft",
    content: "BioShock"
  }, {
    type: "Nintendo",
    content: "The Legend of Zelda: Ocarina of Time"
  }, {
    type: "Sony",
    content: "Final Fantasy VII"
  }]
}, {
  question: "What console would you prefer to own?",
  answers: [{
    type: "Microsoft",
    content: "X-Box One"
  }, {
    type: "Nintendo",
    content: "Wii U"
  }, {
    type: "Sony",
    content: "Playstation 4"
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (quizQuestions);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_quizQuestions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/quizQuestions */ "./api/quizQuestions.js");
/* harmony import */ var _components_question__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/question */ "./components/question.js");





var _jsxFileName = "C:\\Users\\applynx2\\Desktop\\react-app\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));
    _this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var shuffledAnswerOptions = _api_quizQuestions__WEBPACK_IMPORTED_MODULE_6__["default"];
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("div", {
        className: "App-Header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "React Quiz")), __jsx(_components_question__WEBPACK_IMPORTED_MODULE_7__["default"], {
        content: "Is this working",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.6aa8d57aa246c52dfc5a.hot-update.js.map