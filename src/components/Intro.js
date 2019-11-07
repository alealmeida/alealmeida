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
                tag: 'h3',
                children: 'Sou Ale Almeida,',
                key: 0,
                classe: 'darker'
            }, 
            {
                tag: 'h3',
                children: 'UX & Service Designer em São Paulo.',
                key: 1,
                classe: 'darker'
            }, {
                tag: 'p',
                children: ['Profissional',<label style={{textDecoration: 'line-through'}}> híbrido</label>, ' multidisciplinar.'],
                key: 2,
                classe: 'grey'
            }, {
                tag: 'p',
                children:  'Sou designer de produtos digitais e ajudo a conectar marcas e pessoas através de experiências únicas e incríveis.',
                key: 3,
                classe: 'grey'
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
                ease: 'easeInOutCubic',
                playScale: [
                    0.8, 2
                ],
                translateY: screen(40)
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
                <ScrollParallax component="header" always={true} animation={PROP.timeline}> 
                    
                    <QueueAnim
                        type={['bottom', 'top']}
                        forcedReplay
                        animConfig={[         
                            {
                                 y: [0,175],
                                                opacity:[1,0]
                            }
                        
                    ]}
                        interval={[170, 70]}
                            delay={[0,10]}
                            duration={[3000, 3000]}
                            ease={[ 'easeInOutCubic'
                        ]}
                            component="label"
                            > <label key='0'> Olá! </label>
                    </QueueAnim>
                    <QueueAnim
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
