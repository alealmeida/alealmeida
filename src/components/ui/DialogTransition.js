import React from 'react';
import TweenOne from 'rc-tween-one';


function DialogTransition({a, key, reverse}) {
   
    const styles = {
        width: '100vw',
        height: '90vh',
        position: 'absolute',
        backgroundColor: '#fff',
        opacity: .8,
        top: 0,
        left: 0,
        overflow: 'hidden',
        borderRadius: '100%',
        transform: 'translateX(calc(-100vw + (100vw+100vh)/2*1.27 )) translateY(-45vh) scale(0.0001, 0.9)'
    }
    const dialAnimation = {
        from: 
            {
                delay: 0,
                        duration: 800,
                        opacity: 0,
                        top: '0',
                        left:'0',
                        ease: "easeInQuint",
                        backgroundColor: a.cor2,
                        type: 'from',
                        scaleX: 0, scaleY:0,
                        x: '0',
                        y: '-200'
            }
        ,
        to: 
            {
                delay: 0,
                width: '100vw',
                        duration: 1400,
                        opacity: 1,
                        top: '0',
                        ease: "easeInOutExpo",
                        backgroundColor: a.cor2,
                        type: 'to',
                        borderRadius: '30%',
                        scaleX: 3.5, scaleY: 1,
                        x: 0,
                        y: 0
            }
        
    };
    return (
        <div style={{width: '100vw', height: '100vh', overflow: 'hidden', position: 'absolute'}}>
        <TweenOne 
        reverseDelay={800}
        key={key}
        component='section'
        reverse={reverse}
                animation={
                [dialAnimation.from, dialAnimation.to]
            }
                style={styles}/></div>
    )
}

export default DialogTransition;