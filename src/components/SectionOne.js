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
                children: <span>Product Designer trabalhando atualmente na <a href='http://veloe.com.br' target='_blank' className='magenta'>Veloe</a>, integro um time de sete designers entre UX e UI e sou responsável por executar, definir processos de design e organizar demandas, a fim de garantir excelência nas entregas do time para todas as squads atuantes na empresa.</span>,
                key: 1
            }, 
            {
                children: <span>Co-criamos e redesenhamos o Portal da Veloe, alimentando o Design System recém-lançado. Atuamos nas atualizações de versões iOS e Android do APP, criando e melhorando features.</span>,
                key: 2
            }, 
            {
                children: <span>Passagens anteriores pela <a href='http://veloe.com.br' target='_blank' className='magenta'>Integer\Outpromo</a> e <a href='http://veloe.com.br' target='_blank' className='magenta'>HUGE Rio</a>. </span>,
                key: 3
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
                    opacity: 1,
                    ease: 'easeOutQuart',
                    playScale: [
                        -0.3, 0.8
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
        <section id='page1'>
            <ScrollParallax
                component='article'
                
                always={true}
                animation={PROP.timeline_2}>{CONTENT
                    .items
                    .map((item) => (
                        <p key={item.key}>{item.children}</p>
                    ))}
            </ScrollParallax>
        </section>
    );
};

class Section extends React.Component {

    render() {
        return (<LoadSection/>)
    }
}
export default Section;
