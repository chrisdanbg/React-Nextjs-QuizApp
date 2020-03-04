module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/answerOption.js":
/*!************************************!*\
  !*** ./components/answerOption.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
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

/***/ "./components/question.js":
/*!********************************!*\
  !*** ./components/question.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\applynx2\\Desktop\\react-app\\components\\question.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Question(props) {
  return __jsx("h2", {
    className: "question",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.content);
}

Question.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ }),

/***/ "./components/questionCount.js":
/*!*************************************!*\
  !*** ./components/questionCount.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
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

/***/ "./components/result.js":
/*!******************************!*\
  !*** ./components/result.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\applynx2\\Desktop\\react-app\\components\\result.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Result(props) {
  return __jsx("div", {
    className: "result",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "You prefer ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.quizResult), "!");
}

Result.propTypes = {
  quizResult: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_quizQuestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/quizQuestions */ "./api/quizQuestions.js");
/* harmony import */ var _components_quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/quiz */ "./components/quiz.js");
/* harmony import */ var _components_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/result */ "./components/result.js");
var _jsxFileName = "C:\\Users\\applynx2\\Desktop\\react-app\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = _api_quizQuestions__WEBPACK_IMPORTED_MODULE_1__["default"].map(question => this.shuffleArray(question.answers));
    this.setState({
      question: _api_quizQuestions__WEBPACK_IMPORTED_MODULE_1__["default"][0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
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

  setUserAnswer(answer) {
    this.setState(state => ({
      answersCount: _objectSpread({}, state.answersCount, {
        [answer]: (state.answersCount[answer] || 0) + 1
      }),
      answer: answer
    }));
    console.log(answer);
    console.log(this.state.answersCount);
  }

  setNextQestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: _api_quizQuestions__WEBPACK_IMPORTED_MODULE_1__["default"][counter].question,
      answerOptions: _api_quizQuestions__WEBPACK_IMPORTED_MODULE_1__["default"][counter].answers,
      answer: ''
    });
  }

  setResults(result) {
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

  getResults() {
    const answersCount = this.state.answersCount;
    const answerCountKeys = Object.keys(answersCount);
    const answerCountValues = answerCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answerCountValues);
    return answerCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < _api_quizQuestions__WEBPACK_IMPORTED_MODULE_1__["default"].length) {
      setTimeout(() => this.setNextQestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  renderQuiz() {
    return __jsx(_components_quiz__WEBPACK_IMPORTED_MODULE_2__["default"], {
      answer: this.state.answer,
      answerOptions: this.state.answerOptions,
      questionId: this.state.questionId,
      question: this.state.question,
      questionTotal: _api_quizQuestions__WEBPACK_IMPORTED_MODULE_1__["default"].length,
      onAnswerSelected: this.handleAnswerSelected,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    });
  }

  renderResult() {
    return __jsx(_components_result__WEBPACK_IMPORTED_MODULE_3__["default"], {
      quizResult: this.state.result,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    });
  }

  render() {
    return __jsx("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx("div", {
      className: "App-Header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "React Quiz")), this.state.result ? this.renderResult() : this.renderQuiz());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\applynx2\Desktop\react-app\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map