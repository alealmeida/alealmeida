import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import screen from './mixins';
const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;

const LoadSection = () => {
    const CONTENT = {
        h3: 'Obrigado!',
        descricao: 'Fique a vontade para entrar em contato.'
    };
    const PROP = {
        timeline_1: [
            {
                ease: 'easeOutBack',
                playScale: [
                    -1, -1
                ],
                opacity: 0.8,
                scale: 0.85,
                translateY: screen(0),
                translateX: screen(-2)
            }, {
                opacity: 1,
                ease: 'easeInOutElastic',
                playScale: [
                    -1.3, 3
                ],
                scale: 1,
                translateY: screen(-3),
                translateX: screen(0)
            }, {
                ease: 'easeInQuint',
                opacity: 1,
                playScale: [
                    -0.1, 1.2
                ],
                translateY: screen(6)
            }
        ],
        timeline_2: [
            {
                opacity: 1,
                ease: 'easeInSine',
                playScale: [
                    -2, -1
                ],
                translateY: screen(0)
            }, {
                opacity: 1,
                ease: 'linear',
                playScale: [0.1, 0.3]
            }, {
                ease: 'linear',
                playScale: [
                    -0.2, 0.8
                ],
                translateY: screen(-10)
            }
        ]

    }
    return (
        <ScrollElement component='section' id='footer'>
            <ScrollParallax component='header' always={true} animation={PROP.timeline_1}>
                <h3>{CONTENT.h3}</h3>
                <h5>{CONTENT.descricao}</h5>
            </ScrollParallax>
            <ScrollParallax component='article' always={true} animation={PROP.timeline_2}>
                <p> <a href='https://instagram.com/142.ale' target={'_blank'} className='white'> Instagram</a>, <a href='https://www.linkedin.com/in/almeidaale/' target={'_blank'} className='white'> Linkedin</a>,<a href='mailto:ale.142@icloud.com' target={'_blank'} className='white'> ale.142@icloud.com</a>. 
                </p>
                <p className='right'>
                    <b>©</b><br/>
                    2019<br/>Ale Almeida</p>

            </ScrollParallax>
        </ScrollElement>
    );
};

class Footer extends React.Component {

    render() {
        return (<LoadSection/>)
    }
}
export default Footer;
