import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import screen from './mixins';
const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;

const LoadSection = () => {
    const CONTENT = {
        h3: 'Sinta-se à vontade para falar com a gente.',
        descricao: 'Ficaremos felizes em ajudar.'
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
                <p>
                    <b>São Paulo
                    </b>
                    R. Luis Correia de Melo, 92, Cj 2301
                    <br/>
                    Chácara Santo Antônio, São Paulo, SP
                    <br/>
                    04726-220
                    <br/>
                    +55 11 2649.9729
                </p>
                <p className='right'>
                    <b>©</b>
                    On/Off<br/>2019</p>

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
