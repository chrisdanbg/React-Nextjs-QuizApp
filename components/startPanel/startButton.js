import {useSpring, animated, config} from 'react-spring'


function StartButton(props) {

    const animatedStyle = useSpring({
        from: { opacity: 0, transform: 'translateY(200px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: config.gentle
    })

    const handleClick = () => {
        if (props.onGameStarted) {
            props.onGameStarted()
        } else if (props.onShowModal) {
            props.onShowModal()
        }
    }

    return(
        <animated.div style={animatedStyle}>
        <button onClick={handleClick} className="btn my-3">{props.text}</button>
            <style jsx>{`
                .btn {
                    color:white;
                    display: inline-block;
                    background-color: #FDA7DF;
                    width: 350px;
                    height: 60px;
                    margin: 0 10px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.2);
                    opacity: 0.99;
                    font-weight: bold;
                    font-size: 18px;
                    text-transform: uppercase;
                }
            `}</style>
        </animated.div>
    )
}

export default StartButton