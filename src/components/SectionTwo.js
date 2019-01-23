import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import screen from './mixins';
const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;

const LoadSection = () => {
    const CONTENT = {
        h2: 'O  que  fazemos  de   melhor.',
        items: [
            {
                children: 'Somos uma equipe multidisciplinar composta de profissionais de atendimento, cria' +
                        'ção, planejamento, produção, operação e desenvolvimento web.',
                key: 1
            }, {
                children: 'Nosso ambiente de trabalho está inserido nos moldes da cultura de inovação, dos ' +
                        'quais a cocriação, metodologias ágeis, melhorias contínuas fazem parte do nosso ' +
                        'processo criativo.',
                key: 2
            }, {
                children: 'Planejamos e executamos campanhas integradas com a finalidade de desenvolver neg' +
                        'ócios, melhorando e unificando a experiência de marca.',
                key: 3
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
                opacity: 0.8,
                scale: 0.84,
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
                opacity: 0.03,
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
        ]
    }
    return (
        <ScrollElement component='section' id='page2'>
            <ScrollParallax
                always={true}
                component='header'
                animation={PROP.timeline_1}
                style={{
                opacity: 0
            }}>
                <h2>{CONTENT.h2}</h2>
            </ScrollParallax>
            <ScrollParallax component='article' animation={PROP.timeline_2}>{CONTENT
                    .items
                    .map((item) => (
                        <p key={item.key}>{item.children}</p>
                    ))}
            </ScrollParallax>

        </ScrollElement>
    );
};

class SectionTwo extends React.Component {

    render() {
        return (<LoadSection/>)
    }
}
export default SectionTwo;
