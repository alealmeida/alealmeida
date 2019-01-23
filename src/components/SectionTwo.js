import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import screen from './mixins';
const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;

const LoadSection = () => {
    const CONTENT = {
        h2: 'Experiência',
        p: 
        {
            children: <span>Nesse período, tive o privilégio realizar melhorias significativas para os clientes e usuários das marcas: 
                <br /> <br />
                <b>Coca-Cola</b>
                <b>Discovery Channel LATAM</b>
                <b>Caixa </b>
                <b> Procter & Gamble</b>
                <b>Reckitt Benckiser</b>
                <b>Mars &nbsp;  &nbsp;  DIAGEO</b>
                <b>Vivo &nbsp;  &nbsp;  Oi</b>
                <b>Bradesco Seguros</b>
                <b>Credicard &nbsp;  &nbsp;  Itaú </b>
                <b>Banco Safra</b>
                <b>Extra &nbsp;  &nbsp;  Ponto Frio</b>
                <b>Globo.com &nbsp;  &nbsp; SporTV</b>
                <b>Porto Seguro</b></span>,
            
        },
        items: [
            {
                children: 'Mars',
                key: 1
            }, {
                children: 'Pop Credicard',
                key: 2
            }, {
                children: 'Caixa',
                key: 3
            }
            , {
                children: 'Discovery Channel',
                key: 3
            }
            , {
                children: 'Vivo',
                key: 3
            }
            , {
                children: 'Reckitt Benkiser',
                key: 3
            }
        ],
        h3: 'Cases',
    };
    const PROP = {
        timeline_1: [
            {
                ease: 'linear',
                playScale: [
                    -2, -2
                ],
                opacity: 0.8,
                scale: 0.9,
                translateY: screen(15),
                translateX: screen(-0.5)
            }, {
                opacity: 1,
                ease: 'easeInOutElastic',
                playScale: [
                    -1.2, 2.8
                ],
                scale: 1,
                translateY: screen(5),
                translateX: screen(0)
            }, {
                ease: 'easeInQuint',
                opacity: 1,
                playScale: [
                    -0.1, 1.2
                ],
                translateY: '0%'
            }
        ],
        timeline_2: [
            {
                opacity: 1,
                ease: 'linear',
                playScale: [
                    -1, -1
                ],
                translateY: screen(10)
            }, {
                opacity: 1,
                ease: 'linear',
                playScale: [0.1, 0.6]
            }, {
                ease: 'linear',
                playScale: [
                    -0.3, 1
                ],
                translateY: screen(0)
            }
        ],
        timeline_3: [
            {
                opacity: 0,
                ease: 'linear',
                playScale: [
                    -1, -1
                ],
                translateY: screen(-10)
            }, {
                opacity: 1,
                ease: 'linear',
                playScale: [1.3, 1.6]
            },
        ]
    }
    return (
        <ScrollElement component='section' id='page2'>
            <ScrollParallax
                always={true}
                component='header'
                animation={PROP.timeline_1}>
                <h2>{CONTENT.h2}</h2>
            </ScrollParallax>
            <ScrollParallax component='article' animation={PROP.timeline_2}>
                <p>{CONTENT.p.children}</p>
                <h3>{CONTENT.h3}</h3>
            </ScrollParallax>
            <ScrollParallax component='div' animation={PROP.timeline_3} className='section_bg' />
        </ScrollElement>
    );
};

class SectionTwo extends React.Component {

    render() {
        return (<LoadSection/>)
    }
}
export default SectionTwo;
