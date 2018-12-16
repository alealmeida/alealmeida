import React from 'react';
import TweenOne from 'rc-tween-one';

function Transition({n, key, reverse}) {
    const styles = {
        width: '100%',
        height: '1000vh',
        position: 'fixed',
        backgroundColor: n.cor1,
        opacity: 1,
        top: '0vh',
        zIndex: 9
    }
    const animation = {
        from: {
            delay: 20,
            duration: 500,
            opacity: 1,
            top: '100vh',
            height: '0vh',
            ease: "easeInSine",
            backgroundColor: n.cor1,
            type: 'from'
        },
        to: {
            delay: 2000,
            duration: 1500,
            opacity: 1,
            top: '-100vh',
            ease: "easeInOutExpo",
            height: '100vh',
            backgroundColor: n.cor2,
            type: 'to'
        }

    };
    return (<TweenOne key={key} animation={[animation.from, animation.to]} style={styles}/>)
}

export default Transition;