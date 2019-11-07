import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import screen from './mixins';
const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;

const LoadSection = () => {
    const CONTENT = {
        h3: 'Obrigado pela visita!',
        descricao: 'Você pode entrar em contato por'
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
            }, {
                opacity: 1,
                ease: 'easeInOutElastic',
                playScale: [
                    -1.3, 3
                ],
                scale: 1,
                translateY: screen(-3),
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
        <div id='footer'>
            <ScrollParallax component='header' always={true} >
                <h3>{CONTENT.h3}</h3>
            </ScrollParallax>
            <ScrollParallax component='article' always={true}>
                <p> Você pode entrar em contato comigo pelo email <a href='mailto:ale.142@icloud.com' target={'_blank'} className='white'> ale.142@icloud.com</a> ou acessar o <a href='https://www.linkedin.com/in/almeidaale/' target={'_blank'} className='white'>meu Linkedin</a> e <a href='https://instagram.com/142.ale' target={'_blank'} className='white'> Instagram</a>. 
                </p>
            </ScrollParallax>
        </div>
    );
};

class Footer extends React.Component {

    render() {
        return (<LoadSection/>)
    }
}
export default Footer;
