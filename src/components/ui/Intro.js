import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import intro from './IntroContent';
import TweenOne from 'rc-tween-one';
const ScrollOverPack = ScrollAnim.OverPack;

const find = id => intro.find(p => p.id === id);

const Intro = ({data}) => {
    let n = find(data.params.id);
    const animation = {
        from: {
            delay: 1000,
            duration: 600,
            opacity: 1,
            x: 0,
            top: 0,
            ease: "linear",
            backgroundColor: n.cor1
        },
        to: {
            delay: 100,
            duration: 1200,
            opacity: 1,
            x: 0,
            y: '0',
            top: 0,
            ease: "easeOutCirc",
            backgroundColor: n.cor2
        }

    };
    return (
        <ScrollOverPack
            always={true}
            className={n.classe}
            id={n.hash}>
        <TweenOne
                // key={key}
                reverseDelay={500}
                component={'section'}
                animation={[
                {
                    ...animation.from
                }, {
                    ...animation.to
                }
            ]}
                
            style={{
                backgroundColor: n.cor1
            }}
                className={"tween-one"}>
                
                <h1 style={{
                    color: n.cor1
                }}>{n.letra}
                </h1>
            <QueueAnim
                key='queueAnim'
                type={['right', 'left']}
                className={n.classe_child}
                component='h2'
                style={{
                color: n.cor_texto
            }}
                interval={[200, 800]}
                delay={[2600, 500]}
                duration={[1000, 1500]}
                forcedReplay={true}>
                <div key='a'>{n.h2[0]}</div>
                <div key='b'>{n.h2[1]}</div>
                <div key='c'>{n.h2[2]}</div>
            </QueueAnim></TweenOne>
        </ScrollOverPack>
    )
}
class LoadIntro extends React.Component {
    componentDidMount() {}
    render() {

        return (<Intro
            key={'intro' + 0}
            data={{
            params: {
                id: 0
            }
        }}/>);
    }
}
export default LoadIntro;