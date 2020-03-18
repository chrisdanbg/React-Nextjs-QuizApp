import { useSpring, animated } from 'react-spring'
import blue from '../assets/blue.png';
import red from '../assets/red.png';
import yellow from '../assets/yellow.png';
import logo from '../assets/logo.png'
function ParallaxBackground (props) {
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const trans1 = (x, y) => `translate3d(${x / 20 + 55}px,${y / 20 + 15}px,0)`
    const trans2 = (x, y) => `translate3d(${x / 35 + 35}px,${y / 35 - 150}px,0)`
    const trans3 = (x, y) => `translate3d(${x / 8 - 35}px,${y / 8 - 20}px,0)`
    
    const [springAnim, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

    return(
        <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div style={{
                transform: springAnim.xy.interpolate(trans1),
                position: 'fixed',
                top: '0',
                left: '0',
                minWidth: '100%',
                minHeight: '100%',
                backgroundImage: `url(${blue})`,
                backgroundPosition: 'cover',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat' 
                }} >
            </animated.div>
            <animated.div style={{
                transform: springAnim.xy.interpolate(trans2),
                position: 'fixed',
                 top: '0',
                 left: '0',
                 minWidth: '100%',
                 minHeight: '100%',
                 backgroundImage: `url(${red})`,
                 backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat' 
                }} >
            </animated.div>
            <animated.div style={{
                transform: springAnim.xy.interpolate(trans3),
                position: 'fixed',
                top: '0',
                left: '0',
                minWidth: '100%',
                minHeight: '100%',
                backgroundImage: `url(${yellow})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat' 
                }} >
            </animated.div> 
            {props.children}
            <style jsx>{`
            body, html {
                height: 100%;
            }

					.card1 {
                        position: absolute;
                        border-radius: 5px;
                        background-size: cover;
                        background-position: center center;
                        background-repeat: no-repeat;
                        will-change: transform;
                        min-width: 60ch;
                        min-height: 60ch;
                        width: 45vw;
                        height: 45vw;
                        max-width: 100ch;
                        max-height: 100ch;
                        background-color:black;
					}
                    .card2{
                        min-width: 60ch;
                        min-height: 60ch;
                        width: 45vw;
                        height: 45vw;
                        max-width: 100ch;
                        max-height: 100ch;
                        background-color:red;
                    }
				`}</style>
        </div>
    )
}

export default ParallaxBackground