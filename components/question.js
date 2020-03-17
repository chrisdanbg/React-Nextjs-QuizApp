import PropTypes from "prop-types";

function Question(props) {
	return (
		<div className="text-center">
			<img className="image" src={props.image}></img>
			<h2 className="question my-4">{props.content}</h2>
			<style jsx>{`
				h2 {
					color: #fda7df;
				}
				.image {
					max-width: 350px;
					border: 1px solid #eee;
					border-radius: 25px;
					box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
				}
				.question {
					font-size: 55px;
				}
			`}</style>
		</div>
	);
}

Question.propTypes = {
	content: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
};

export default Question;
