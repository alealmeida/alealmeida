import React from 'react';
import TweenOne from 'rc-tween-one';

function Twn({n, key}) {
    const styles = {
        opacity: 0,
        transform: 'translateY(0)',
        backgroundColor: '#fff',
        top: '0vh'
    }
    const animation = {
        from: {
            delay: 1000,
            duration: 600,
            opacity: 0,
            x: 0,
            top: 0,
            ease: "linear",
            backgroundColor: n.cor2
        },
        to: {
            delay: 1000,
            duration: 300,
            opacity: 1,
            x: 0,
            y: '0',
            top: 0,
            ease: "easeOutCirc",
            backgroundColor: '#fff'
        }

    };
    return (
            <TweenOne
                key={key}
                reverseDelay={2000}
                component={'section'}
                animation={[
                {
                    ...animation.from
                }, {
                    ...animation.to
                }
            ]}
                style={styles}
                className={"tween-one cabecalho"}>
                
                <h1 style={{
                    color: n.cor2
                }}>{n.letra}
                </h1>
                <label>{n.label}</label>
                <h2>{n.h2}</h2>
                <div className='descricao'>{n.descricao}</div>
            </TweenOne>
    )
}
 
  export default Twn ;
