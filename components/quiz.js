import PropTypes from 'prop-types';
import QuestionCount from './questionCount';
import Question from './question';
import AnswerOption from './answerOption';
import {useSpring, animated, config} from 'react-spring'

function Quiz(props) {
    const animatedStyle = useSpring({
        from: { opacity: 0, transform: 'translateY(200px)' },
        to: { opacity: 1, transform: props.isAnswered ? 'translateX(-1500px)' : 'translateX(0)' },
        config: config.gentle
    })


    function renderAnswerOptions(key) {
        return(
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }


    return(
        <animated.div style={animatedStyle} className="quiz">
            <QuestionCount
                counter={props.questionId}
                total={props.questionTotal}
            />
            <Question content={props.question} image={props.image}/>
            <ul className="answerOptions">
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
            <style jsx>{`
                ul {
                    list-style-type: none;
                    padding: 0;
                }
            `}</style>
        </animated.div>
    );
}

Quiz.propTypes = {
    image: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
     answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;