import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import screen from './mixins';
const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;


const LoadSection = () => {
    const CONTENT = {
        h2: 'Design',
        items: [ 
            {
                children: <span>Trabalho como UX & Service Designer na <a href='http://natura.com.br' target='_blank' className='magenta'> Natura</a>, empresa líder de mercado na América Latina em venda direta de cosméticos, onde trabalho melhorando a experiência das consultoras no uso das plataformas digitais da empresa.</span>,
                key: 3
            }, 
            {
                children: <span>Apaixonado por inovação e tecnologia, sou Desenvolvedor Web nas horas vagas, construindo interfaces responsivas em HTML 5, CSS e ReactJS. Tenho passagens pela <i>Ogilvy&Mather, Integer\Outpromo e HUGE Brazil</i>. </span>,
                key: 5
            }
        ]
    };
    const PROP = {
        timeline_1: [
            {
                ease: 'linear',
                playScale: [
                    -2, -2
                ],
                opacity: 0.9 ,
                blur:'1px',
                scale: 0.83,
                translateY: '0%',
                translateX: screen(-0.3)
            },{
                ease: 'linear',
                opacity: 1,
                blur:'0px', 
                playScale:[
                    0.5, 0.8
                ],
                color: '#000006',
                class: 'dark'
            }, {
                opacity: 1,
                ease: 'easeInOutElastic',
                playScale: [
                    -2, 2.6
                ],
                scale: 1.1,
                translateY:  '-5%',
                translateX: screen(0)
            }
        ],
        timeline_2: 
            [
                {
                    opacity: 0,
                    ease: 'linear',
                    playScale: [
                        -2, -2
                    ],
                    translateY: screen(-10)
                },{
                    opacity: 1,
                    ease: 'easeInOutCubic',
                    playScale: [
                        0.2, 0.6
                    ],
                    translateY: screen(-14)
                }, {
                    ease: 'linear',
                    playScale: [
                        0.8, 1.9
                    ],
                    translateY: screen(5)
                }
            ]
        
    }
    return (
        <ScrollElement component='section' id='page1'>
            <ScrollParallax
                component='header'
                always={true}
                animation={PROP.timeline_1}>
                <h2 className="grape">{CONTENT.h2}
                </h2>
            </ScrollParallax>
            <ScrollParallax
                component='article'
                
                always={true}
                animation={PROP.timeline_2}>{CONTENT
                    .items
                    .map((item) => (
                        <p key={item.key}>{item.children}</p>
                    ))}
            </ScrollParallax>
        </ScrollElement>
    );
};

class Section extends React.Component {

    render() {
        return (<LoadSection/>)
    }
}
export default Section;
