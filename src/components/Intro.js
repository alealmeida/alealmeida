import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import screen from './mixins';
const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;

const LoadIntro = () => {
    const QUEUEANIM = {
        items: [
            {
                tag: 'h2',
                children: 'Alexandre Almeida,',
                key: 0,
                classe: 'darker'
            }, 
            {
                tag: 'h3',
                children: ['Product Designer @ São Paulo.'],
                key: 1,
                classe: 'darker'
            }
        ],
        
    };
    const PROP = {
        timeline:  [{
                opacity: 1,
                ease: 'linear',
                playScale: [
                    -2, -1.5
                ],
                translateY: 0
            }, {
                opacity: 0,
                ease: 'easeInCubic',
                playScale: [
                    0.8, 2
                ],
                translateY: screen(5)
            }]
        ,
        ease: [ 'easeInOutElastic','easeInOutElastic'
        ],
        interval: 
        [70, 70],
        delay: [
            500, 1400
        ],
        anim: [         
            {
                 x: [0,335],
                                opacity:[1,0]
            }
        
    ],
        duration: [2600, 2200],
        type: ['right', 'left']
    }
    return (
            <ScrollElement component='section' id='intro'>
                    
                    <QueueAnim
                        component="header" 
                        type={PROP.type}
                        forcedReplay
                        animConfig={PROP.anim}
                        interval={PROP.interval}
                            delay={PROP.delay}
                            duration={PROP.duration}
                            ease={PROP.ease}
                        //    leaveReverse={this.state.reverse}
                            // style={{opacity: 0}}
                            >
                        {QUEUEANIM
                            .items
                            .map((item) => (
                                <item.tag key={item.key} className={item.classe}>{item.children}</item.tag>
                            ))}
                    </QueueAnim>
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
