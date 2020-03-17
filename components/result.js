import PropTypes, { func } from "prop-types";
import Award from "./award";
import Confetti from "react-dom-confetti";
import { useState } from "react";

function Result(props) {
	const config = {
		angle: 70,
		spread: 150,
		startVelocity: 60,
		elementCount: 150,
		dragFriction: 0.1,
		duration: 5000,
		stagger: 0,
		width: "10px",
		height: "10px",
		colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
	};
	const config2 = {
		angle: 110,
		spread: 150,
		startVelocity: 60,
		elementCount: 150,
		dragFriction: 0.1,
		duration: 5000,
		stagger: 0,
		width: "10px",
		height: "10px",
		colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
	};

	const [isFiredFirst, setFirst] = useState(false);
	const [isFiredSecond, setSecond] = useState(false);

	function fireConfetti() {
		setFirst(true);
		setTimeout(() => setSecond(true), 300);
	}

	function renderAward() {
		return (
			<div>
				<div className="result my-2 text-center p-5">
					<Award fireConfetti={fireConfetti} />
				</div>
			</div>
		);
	}

	return (
		<div>
			<div className="result text-center p-5">
				<h1 className="my-2">РЕЗУЛТАТ</h1>
				<strong className="my-5">{props.quizResult}</strong>
			</div>

			{props.hasAward ? renderAward() : null}

			<Confetti active={isFiredFirst} config={config} />
			<Confetti
				className="float-right"
				active={isFiredSecond}
				config={config2}
			/>
		</div>
	);
}

Result.propTypes = {
	quizResult: PropTypes.string.isRequired
};

export default Result;
