import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import StartLogo from "./startPanel/startLogo";
import StartButton from "./startPanel/startButton";
import { useSpring, animated, config } from "react-spring";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function StartGame(props) {
	const [open, set] = useState(false);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const animatedStyle = useSpring({
		from: { opacity: 0, transform: "translateY(200px)" },
		to: {
			opacity: 1,
			transform: open ? "translateY(-1000px)" : "translateY(0)"
		},
		config: config.gentle
	});

	function handleGameStarted() {
		set(open => !open);
		setTimeout(() => props.onGameStarted(), 500);
	}

	return (
		<animated.div style={animatedStyle}>
			<Container>
				<StartLogo image={logo}></StartLogo>
				<div className="text-center mt-3">
					<StartButton
						onGameStarted={handleGameStarted}
						text="Start"
					></StartButton>
					<StartButton onShowModal={handleShow} text="Rules"></StartButton>
				</div>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Правила</Modal.Title>
					</Modal.Header>
					<Modal.Body className="my-3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
						tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
						ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
						Commodo odio aenean sed adipiscing diam donec adipiscing tristique.
						Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at
						imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis.
						Egestas integer eget aliquet nibh praesent. In hac habitasse platea
						dictumst quisque sagittis purus. Pulvinar elementum integer enim
						neque volutpat ac.
					</Modal.Body>
				</Modal>
			</Container>
		</animated.div>
	);
}

export default StartGame;
