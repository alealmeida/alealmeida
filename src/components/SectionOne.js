import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import screen from './mixins';
const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;


const LoadSection = () => {
    const CONTENT = {
        h2: 'Design.',
        items: [ 
            {
                children: <span>Como UX & Service Designer na <a href='http://natura.com.br' target='_blank' className='magenta'> Natura</a>, trabalho ajudando a melhorar a experiência da consultora com as plataformas digitais que usam no dia-a-dia, tornando-as simples e fáceis de usar, trazendo agilidade para as vendas.</span>,
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
                scale: 0.5,
                ease: 'linear',
                playScale: [
                    -2, -1.5
                ],
                opacity: 0,
                // blur:'20px',
                translateY: '10vh',
                translateX: '-10.3vw',
                // color: '#FF2B6A'
                color: '#222226',
            },{
                ease: 'easeInOutQuart',
                opacity: 1, 
                playScale:[
                    -0.3, 0.4
                ],
                scale: 0.43,
                translateX: '-13.3vw',
                // color: '#FF2B6A'
            }, {
                opacity: 1,
                ease: 'easeOutCubic',
                playScale: [
                    0.1, 2.5
                ],
                scale: 1.2,
                color: '#222226',
                translateY: '-10vh',
                translateX: '-2.3vw',
                // translateX: screen(-5.3),
            }
        ],
        timeline_2: 
            [
                {
                    opacity: 0,
                    ease: 'linear',
                    playScale: [
                        -2, -1
                    ],
                    translateY: '0',
                },{
                    opacity: 1,
                    ease: 'easeOutQuart',
                    playScale: [
                        0.3, 0.8
                    ],
                    translateY: '-2vh',
                }, {
                    ease: 'linear',
                    opacity: 1,
                    playScale: [
                        0.8, 1.9
                    ],
                    translateY: '-4vh',
                }
            ]
        
    }
    return (
        <ScrollElement component='section' id='page1'>
            <ScrollParallax
                component='header'
                always={true}
                animation={PROP.timeline_1} style={{opacity: 0}}>
                <h2>{CONTENT.h2}
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
