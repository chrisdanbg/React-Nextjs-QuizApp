
import { Component } from "react";
import Quiz from '../components/quiz';
import Result from '../components/result';
import firebase from '../components/firebase';
import Auth from '../components/auth';

import Link from 'next/link'

let quizQuestions = [];
class Index extends Component {
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
        console.log(firebase.auth.currentUser)

        let getData = firebase.firestore().collection('questions').get()
        .then(snapshot => { 
            snapshot.forEach((doc) => {
                quizQuestions.push(doc.data());
            })
            const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
        
            this.setState({
                question: quizQuestions[0].question,
                answerOptions: shuffledAnswerOptions[0]
            })
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
    }

    shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    setUserAnswer(answer) {
        this.setState((state) => ({
            answersCount: {
                ...state.answersCount,
                [answer]:  (state.answersCount[answer] || 0) + 1 
            },
            answer: answer
        }))
    }

    setNextQestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer: ''
        });
    }

    setResults(result) {
        if (result.length === 1) {
            this.setState({result: result[0]});
        } else {
            this.setState({result: 'Undetermined'});
        }
    }

    getResults() {
        const answersCount = this.state.answersCount;
        const answerCountKeys = Object.keys(answersCount)
        const answerCountValues = answerCountKeys.map((key) => answersCount[key]);

        const maxAnswerCount = Math.max.apply(null, answerCountValues);

        return answerCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
    }

    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
        if (this.state.questionId < quizQuestions.length) {
            setTimeout(() => this.setNextQestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300)
        }
    }

    renderQuiz() {
        return (
            <Quiz
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={quizQuestions.length}
                onAnswerSelected={this.handleAnswerSelected}
            />
        )
    }

    renderResult() {
        return(
            <Result quizResult={this.state.result}/>
        );
    }

    render() {
       return( 
            <div className="App">
                <div className="App-Header">
                    <h2>React Quiz</h2>                       
                </div>
            { this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>
        );
    }
}

export default Index;