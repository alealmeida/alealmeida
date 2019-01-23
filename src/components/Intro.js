import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import screen from './mixins';
import QueueAnim from 'rc-queue-anim';
const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;

const LoadIntro = () => {
    const QUEUEANIM = {
        items: [
            {
                children: 'Ajudamos a conectar marcas e',
                key: 1
            }, {
                children: 'pessoas através de soluções em',
                key: 2
            }, {
                children: 'produtos e serviços.',
                key: 3
            }
        ]
    };
    const PROP = {
        timeline:  [{
                opacity: 1,
                ease: 'linear',
                playScale: [
                    0, 0.5
                ],
                translateY: '0'
            }, {
                opacity: 1,
                ease: 'easeInOutSine',
                playScale: [
                    0.5, 1.5
                ],
                translateY: screen(4)
            }]
        ,
        ease: [
            'easeInOutBack', 'easeInQuad'
        ],
        interval: [
            300, 1300
        ],
        delay: [
            400, 200
        ],
        duration: [1600, 1300]
    }
    return (
            <ScrollElement component='section' id='intro'>
                <ScrollParallax component="header" always={true} animation={PROP.timeline}>
                    <QueueAnim
                        type={['bottom', 'top']}
                        component='h3'
                        forcedReplay
                        animConfig={[
                        [
                            {
                                y: ['15vh', 0]
                            }, {
                                y: ['15vh', 0]
                            }
                        ]
                    ]}
                        ease={PROP.ease}
                        interval={PROP.interval}
                        delay={PROP.delay}
                        duration={PROP.duration}>{QUEUEANIM
                            .items
                            .map((item) => (
                                <span key={item.key}>{item.children}</span>
                            ))}
                    </QueueAnim>
                </ScrollParallax>
            </ScrollElement>
    );
};

class Intro extends React.Component {
    
    render() { 
        return (
                        <LoadIntro
                            key={'intro' + 0}
                            />
        )
                           
    }
}
export default Intro;
