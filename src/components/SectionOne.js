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
                children: 'Natural de Fortaleza no Ceará vivendo em São Paulo há três anos.',
                key: 1
            },
            {
                children: <span>Profissional <label style={{textDecoration: 'line-through', color: 'rgb(94, 94, 94)'}}>híbrido</label> multidisciplinar, sou Designer especialista em produtos digitais. Ajudo a conectar marcas e pessoas através de experiências únicas e memoráveis.</span>,
                key: 2
            },  
            {
                children: <span>Como Product Designer, atuei em todas as etapas do processo de construção de produtos, na interseção entre estratégia, concepção e implementação, transformando sistemas à partir de modelos complexos em interfaces bonitas e fáceis de usar.</span>,
                key: 3
            }
            , 
            {
                children: <span>Atualmente, sou <i>Design Lead </i> na <a href='https://brazil.integer.com' className='magenta'> Integer\Outpromo</a>, com passagens anteriores pelas agências <b>Ogilvy&Mather</b>, <b>Wunderman</b>, <b>Red Ventures</b> e <b>HUGE</b>.</span>,
                key: 4
            }
            , 
            {
                children: <span>Apaixonado por inovação e tecnologia, nas horas vagas atuo no front-end, desenvolvendo interações e prototipando interfaces responsivas com HTML 5, CSS e ReactJS.</span>,
                key: 5
            }
            , 
            {
                children: [<span>▷ <a href='https://instagram.com/142.ale' target={'_blank'} className='white'> Instagram</a></span>,<span>▷ <a href='https://www.linkedin.com/in/almeidaale/' target={'_blank'} className='white'> Linkedin</a></span>,<span>▷ <a href='mailto:ale.142@icloud.com' target={'_blank'} className='white'> ale.142@icloud.com</a></span>,],
                                key: 6
                            },
        ]
    };
    const PROP = {
        timeline_1: [
            {
                ease: 'linear',
                playScale: [
                    -2, -2
                ],
                opacity: 0.8 ,
                blur:'1px',
                scale: 0.83,
                color: '#FF053E',
                translateY: '0%',
                translateX: screen(-0.3)
            },{
                ease: 'linear',
                opacity: 1,
                blur:'0px', 
                playScale:[
                    0.6, 0.7
                ],
                color: '#000006'
            }, {
                opacity: 1,
                ease: 'easeInOutElastic',
                playScale: [
                    -2, 3.2
                ],
                scale: 1,
                translateY:  '-5%',
                translateX: screen(0)
            }
        ],
        timeline_2: 
            [
                {
                    opacity: 0.03,
                    ease: 'linear',
                    playScale: [
                        -1, -1
                    ],
                    translateY: screen(-4)
                },{
                    opacity: 1,
                    ease: 'linear',
                    playScale: [
                        0.1, 0.3
                    ]
                }, {
                    ease: 'linear',
                    playScale: [
                        -0.6, 1.2
                    ],
                    translateY: screen(-10)
                }
            ]
        
    }
    return (
        <ScrollElement component='section' id='page1'>
            <ScrollParallax
                component='header'
                always={true}
                animation={PROP.timeline_1}>
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
