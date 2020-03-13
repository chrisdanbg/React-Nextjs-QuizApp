import PropTypes from 'prop-types';

function QuestionCount(props) {
    return (
        <div className="questionCount text-center mb-3">
            Въпрос <span>{props.counter}</span> от <span>{props.total}</span>
        </div>
    );
}

QuestionCount.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default QuestionCount;