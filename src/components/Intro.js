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
                children: 'Sou Ale Almeida,',
                key: 1,
                classe: 'white'
            }, {
                children: 'Product Designer,',
                key: 2,
                classe: 'red'
            }, {
                children: 'em São Paulo',
                key: 3,
                classe: 'red'
            }
        ]
    };
    const PROP = {
        timeline:  [{
                opacity: 1,
                ease: 'linear',
                playScale: [
                    0, 1
                ],
                translateY: '0'
            }, {
                opacity: 1,
                ease: 'easeInOutSine',
                playScale: [
                    1, 2.5
                ],
                translateY: screen(-4)
            }]
        ,
        ease: [
            'easeInOutElastic', 'easeInOutElastic'
        ],
        interval: 
            220,
        delay: [
            800, 2400
        ],
        duration: [3800, 2200]
    }
    return (
            <ScrollElement component='section' id='intro'>
                <ScrollParallax component="header" always={true} animation={PROP.timeline}>
                    <label>
                        Olá.
                    </label>
                    <QueueAnim
                        type={['right', 'left']}
                        component='h3'
                        forcedReplay
                        animConfig={[
                        
                             {
                                x: ['-15vw','15vw'],
                                opacity:[1,0]
                            }
                        
                    ]}
                        ease={PROP.ease}
                        interval={PROP.interval}
                        delay={PROP.delay}
                        duration={PROP.duration}>{QUEUEANIM
                            .items
                            .map((item) => (
                                <span key={item.key} className={item.classe}>{item.children}</span>
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
