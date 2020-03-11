import PropTypes from 'prop-types';

function Question(props) {
    return(
        <div>
            <img src={props.image}></img>
            <h2 className="question">{props.content}</h2>
        </div>
    )
}

Question.propTypes ={
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}


export default Question
