import logo from '../assets/logo.png'
import Container from 'react-bootstrap/Container'
import StartLogo from './startPanel/startLogo';
import StartButton from './startPanel/startButton';
import {useSpring, animated, config } from 'react-spring'
import { useState } from "react";

function StartGame(props) {
    const [open, set] = useState(false)


    const animatedStyle = useSpring({
        from: { opacity: 0, transform: 'translateY(200px)' },
        to: { opacity: 1, transform:  open ? 'translateY(-1000px)' : 'translateY(0)' },
        config: config.gentle
    })

    function handleGameStarted() {
        set(open => !open);
        setTimeout(() => props.onGameStarted(), 500)
    }


    return(
        <animated.div style={animatedStyle}>
            <Container>
                <StartLogo image={logo}></StartLogo>
                <div className="text-center mt-3">
                    <StartButton onGameStarted={handleGameStarted} text="Start"></StartButton>
                    <StartButton text="Rules"></StartButton>
                </div>
            </Container>
        </animated.div>
    )
}

export default StartGame;