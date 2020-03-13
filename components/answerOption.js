import PropTypes from 'prop-types'


function AnswerOption(props) {
    return (
        <li className="answerOption my-2">
            <input
                type="radio"
                className="radioCustomBUtton"
                name = "radioGroup"
                checked = {props.answerType === props.answer}
                id = {props.answerType}
                value = {props.answerType}
                disabled = {props.answer}
                onChange = {props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={props.answerType}>
                {props.answerContent}
            </label>
            <style jsx>{`
            input[type="radio"] {
                display:none;
            }

            .answerOption {
                color: black;
                background-color: #fff;
                border: 1px solid #eee;
                border-radius: 15px;
                box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
            }

            .answerOption:hover {
                background-color: #74b9ff;
                color:white;
            }

            .radioCustomButton,
            .radioCustomLabel {
                display: inline-block;
                vertical-align: middle;
                cursor: pointer;
            }

            .radioCustomLabel {
                position: relative;
                width: 100%;
                margin: 0;
                padding: 15px 15px;
                font-size: 16px;
                line-height: 1.5;
            }
            `}</style>
        </li>
    );
}

AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default AnswerOption;