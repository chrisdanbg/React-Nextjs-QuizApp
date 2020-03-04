import PropTypes, { func } from 'prop-types';

function Result(props) {
    return(
        <div className="result">
            You prefer <strong>{props.quizResult}</strong>!
        </div>
    );
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;