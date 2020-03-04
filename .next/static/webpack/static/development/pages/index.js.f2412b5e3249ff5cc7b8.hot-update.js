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
  }, props.answerContent));
}

AnswerOption.propTypes = {
  answerType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  answerContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  answer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AnswerOption);

/***/ }),

/***/ "./components/questionCount.js":
/*!*************************************!*\
  !*** ./components/questionCount.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\applynx2\\Desktop\\react-app\\components\\questionCount.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function QuestionCount(props) {
  return __jsx("div", {
    className: "questionCount",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Question ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.counter), " of ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.total));
}

QuestionCount.propTypes = {
  counter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (QuestionCount);

/***/ }),

/***/ "./components/quiz.js":
/*!****************************!*\
  !*** ./components/quiz.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _questionCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionCount */ "./components/questionCount.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question */ "./components/question.js");
/* harmony import */ var _answerOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./answerOption */ "./components/answerOption.js");
var _jsxFileName = "C:\\Users\\applynx2\\Desktop\\react-app\\components\\quiz.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Quiz(props) {
  function renderAnswerOptions(key) {
    return __jsx(_answerOption__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: key.content,
      answerContent: key.content,
      answerType: key.type,
      answer: props.answer,
      questionId: props.questionId,
      onAnswerSelected: props.onAnswerSelected,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }

  return __jsx("div", {
    className: "quiz",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_questionCount__WEBPACK_IMPORTED_MODULE_2__["default"], {
    counter: props.questionId,
    total: props.questionTotal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_question__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: props.question,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("ul", {
    className: "answerOptions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.answerOptions.map(renderAnswerOptions)));
}

Quiz.propTypes = {
  answer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  answerOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  counter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  question: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  questionId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  questionTotal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onAnswerSelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Quiz);

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
/* harmony import */ var _components_quiz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/quiz */ "./components/quiz.js");





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
      var _this2 = this;

      var shuffledAnswerOptions = _api_quizQuestions__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (question) {
        return _this2.shuffleArray(question.answers);
      });
      this.setState({
        question: _api_quizQuestions__WEBPACK_IMPORTED_MODULE_6__["default"][0].question,
        answerOptions: shuffledAnswerOptions[0]
      });
    }
  }, {
    key: "shuffleArray",
    value: function shuffleArray(array) {
      var currentIndex = array.length,
          temporaryValue,
          randomIndex; // While there remain elements to shuffle...

      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1; // And swap it with the current element.

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("div", {
        className: "App-Header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "React Quiz")), __jsx(_components_quiz__WEBPACK_IMPORTED_MODULE_8__["default"], {
        answer: this.state.answer,
        answerOptions: this.state.answerOptions,
        questionId: this.state.questionId,
        question: this.state.question,
        questionTotal: _api_quizQuestions__WEBPACK_IMPORTED_MODULE_6__["default"].length,
        onAnswerSelected: this.handleAnswerSelected,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
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
//# sourceMappingURL=index.js.f2412b5e3249ff5cc7b8.hot-update.js.map