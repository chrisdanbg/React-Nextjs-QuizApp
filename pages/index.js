
import { Component } from "react";
import Quiz from '../components/quiz';
import Result from '../components/result';
import firebase from '../components/firebase';
import StartGame from "../components/startGame";
import { Row, Col } from "react-bootstrap";

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
            result: '',
            correctAnswers: 0,
            isStarted: false,
        };

        this.startGame = this.startGame.bind(this);
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }
    componentDidMount() {
        firebase.firestore().collection('questions').get()
        .then(snapshot => { 
            snapshot.forEach((doc) => {
                quizQuestions.push(doc.data());
            })
            const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
            this.setState({
                question: quizQuestions[0].question,
                image: quizQuestions[0].image,
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
        if (answer === 'correct') {
            const counter = this.state.correctAnswers + 1

            this.setState({
                correctAnswers: counter
            });
        }
    }

    setNextQestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            image: quizQuestions[counter].image,
            answerOptions: quizQuestions[counter].answers,
            answer: ''
        });
    }

    setResults(result) {
        this.setState({result: `You have answered ${result} questions correctlly`});
    }

    getResults() {
       return this.state.correctAnswers;
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
                    image={this.state.image}
                />
        )
    }

    renderStartPanel() {
        return(
            <StartGame onGameStarted={this.startGame}/>
        )
    }

    renderResult() {
        return(
            <Result quizResult={this.state.result}/>
        );
    }

    startGame() {
        this.setState({isStarted: true});
    }

    render() {
       return( 
           <div className="full-screen">
             <Row className="h-100">
                <Col className="my-auto">
                {this.state.isStarted ? this.renderQuiz() : this.renderStartPanel()}
                </Col>
            </Row>
                <style jsx>{`
                    body {
                        position: relative;
                    }
                    .full-screen {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                `}</style>
           </div>
        );
    }
}

export default Index;