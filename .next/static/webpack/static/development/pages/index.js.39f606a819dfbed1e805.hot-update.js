webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api_quizQuestions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/quizQuestions */ "./api/quizQuestions.js");
/* harmony import */ var _components_quiz__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/quiz */ "./components/quiz.js");
/* harmony import */ var _components_result__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/result */ "./components/result.js");








var _jsxFileName = "C:\\Users\\applynx2\\Desktop\\react-app\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));
    _this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };
    _this.handleAnswerSelected = _this.handleAnswerSelected.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var shuffledAnswerOptions = _api_quizQuestions__WEBPACK_IMPORTED_MODULE_9__["default"].map(function (question) {
        return _this2.shuffleArray(question.answers);
      });
      this.setState({
        question: _api_quizQuestions__WEBPACK_IMPORTED_MODULE_9__["default"][0].question,
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
    key: "setUserAnswer",
    value: function setUserAnswer(answer) {
      this.setState(function (state) {
        return {
          answersCount: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, answer, (state.answersCount[answer] || 0) + 1),
          answer: answer
        };
      });
      console.log(answer);
      console.log(this.state.answersCount);
    }
  }, {
    key: "setNextQestion",
    value: function setNextQestion() {
      var counter = this.state.counter + 1;
      var questionId = this.state.questionId + 1;
      this.setState({
        counter: counter,
        questionId: questionId,
        question: _api_quizQuestions__WEBPACK_IMPORTED_MODULE_9__["default"][counter].question,
        answerOptions: _api_quizQuestions__WEBPACK_IMPORTED_MODULE_9__["default"][counter].answers,
        answer: ''
      });
    }
  }, {
    key: "setResults",
    value: function setResults(result) {
      if (result.length === 1) {
        this.setState({
          result: result[0]
        });
      } else {
        this.setState({
          result: 'Undetermined'
        });
      }
    }
  }, {
    key: "getResults",
    value: function getResults() {
      var answersCount = this.state.answersCount;

      var answerCountKeys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(answersCount);

      var answerCountValues = answerCountKeys.map(function (key) {
        return answersCount[key];
      });
      var maxAnswerCount = Math.max.apply(null, answerCountValues);
      return answerCountKeys.filter(function (key) {
        return answersCount[key] === maxAnswerCount;
      });
    }
  }, {
    key: "handleAnswerSelected",
    value: function handleAnswerSelected(event) {
      var _this3 = this;

      this.setUserAnswer(event.currentTarget.value);

      if (this.state.questionId < _api_quizQuestions__WEBPACK_IMPORTED_MODULE_9__["default"].length) {
        setTimeout(function () {
          return _this3.setNextQestion();
        }, 300);
      } else {
        setTimeout(function () {
          return _this3.setResults(_this3.getResults());
        }, 300);
      }
    }
  }, {
    key: "renderQuiz",
    value: function renderQuiz() {
      return __jsx(_components_quiz__WEBPACK_IMPORTED_MODULE_10__["default"], {
        answer: this.state.answer,
        answerOptions: this.state.answerOptions,
        questionId: this.state.questionId,
        question: this.state.question,
        questionTotal: _api_quizQuestions__WEBPACK_IMPORTED_MODULE_9__["default"].length,
        onAnswerSelected: this.handleAnswerSelected,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      });
    }
  }, {
    key: "renderResult",
    value: function renderResult() {
      return __jsx(_components_result__WEBPACK_IMPORTED_MODULE_11__["default"], {
        quizResult: this.state.result,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("div", {
        className: "App-Header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "React Quiz")), this.state.result ? this.renderResult() : this.renderQuiz());
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.39f606a819dfbed1e805.hot-update.js.map