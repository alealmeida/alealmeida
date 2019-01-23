import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import screen from './mixins';
const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;

const LoadSection = () => {
    const CONTENT = {
        h3: 'Desenvolvemos  negócios  melhorando  experiências',
        items: [
            {
                children: {
                    header: {
                        h4: 'Marketing  Promocional',
                        caption: 'Planejamento, Criação, Produção e Operação.'
                    },
                    artigo: [
                        {
                            k: 4,
                            conteudo: 'Promoções com Sorteio e Premiação Instantânea'
                        }, {
                            k: 5,
                            conteudo: 'Ativações e Eventos'
                        }, {
                            k: 6,
                            conteudo: 'Ações e Materiais de PDV'
                        }, {
                            k: 7,
                            conteudo: 'Campanhas de Incentivo'
                        }, {
                            k: 8,
                            conteudo: 'Endomarketing'
                        }, {
                            k: 9,
                            conteudo: 'Sampling e Money Back'
                        }
                    ]
                },
                key: 1
            }, {
                children: {
                    header: {
                        h4: 'Marketing  Digital',
                        caption: 'Planejamento, Conceito Visual, Criação de Interfaces e Desenvolvimento Web.'
                    },
                    artigo: [
                        {
                            k: 11,
                            conteudo: 'Portais e Sites Responsivos'
                        }, {
                            k: 12,
                            conteudo: 'Landing Pages'
                        }, {
                            k: 13,
                            conteudo: 'Páginas de Produto'
                        }, {
                            k: 14,
                            conteudo: 'SEO'
                        }, {
                            k: 15,
                            conteudo: 'Email Marketing'
                        }, {
                            k: 16,
                            conteudo: 'Displays Estáticos e Dinâmicos'
                        }
                    ]
                },
                key: 10
            }, {
                children: {
                    header: {
                        h4: 'Design  de Produto',
                        caption: 'UX/UI Design.'
                    },
                    artigo: [
                        {
                            k: 18,
                            conteudo: 'Estratégia'
                        }, {
                            k: 19,
                            conteudo: 'Imersão e Descoberta'
                        }, {
                            k: 20,
                            conteudo: 'Ideação'
                        }, {
                            k: 21,
                            conteudo: 'Prototipação'
                        }, {
                            k: 22,
                            conteudo: 'Design System'
                        }, {
                            k: 23,
                            conteudo: 'Testes'
                        }
                    ]
                },
                key: 17
            }
        ]
    }
    const PROP = {
        timeline_1: [
            {
                ease: 'easeOutBack',
                playScale: [
                    -1, -1
                ],
                opacity: 0.9,
                scale: 0.85,
                translateY: screen(23),
                translateX: screen(-2)
            }, {
                opacity: 1,
                ease: 'easeInOutElastic',
                playScale: [
                    -1.8, 3
                ],
                scale: 1,
                translateY: screen(6),
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
                opacity: 0,
                ease: 'linear',
                playScale: [
                    -1, -1
                ],
                translateY: '5%'
            }, {
                opacity: 1,
                ease: 'linear',
                playScale: [0.1, 0.4]
            }, {
                ease: 'linear',
                playScale: [
                    -0.6, 1.2
                ],
                translateY: '0%'
            }
        ]
    }
    return (
        <ScrollElement component='section' id='page3'>
            <ScrollParallax always={true} component='header' animation={PROP.timeline_1}>
                <h3>{CONTENT.h3}</h3>
            </ScrollParallax>
            <ScrollParallax component='article' animation={PROP.timeline_2}>
                <QueueAnim
                    type={['right', 'left']}
                    always={true}
                    component='ul'
                    animConfig={[
                    [
                        {
                            opacity: [
                                1, 0
                            ],
                            x: [0, 50]
                        }, {
                            opacity: [
                                1, 0
                            ],
                            x: [0, 50]
                        }
                    ]
                ]}
                    ease={['easeInOutBack', 'easeInQuad']}
                    interval={[500, 800]}
                    delay={[0, 0]}
                    duration={[3000, 3600]}>
                    {CONTENT
                        .items
                        .map((item) => (
                            <QueueAnim
                                component='li'
                                key={item.key}
                                type={['right', 'left']}
                                animConfig={[
                                [
                                    {
                                        opacity: [
                                            1, 0
                                        ],
                                        x: [0, 80]
                                    }, {
                                        opacity: [
                                            1, 0
                                        ],
                                        x: [0, 80]
                                    }
                                ]
                            ]}
                                ease={['easeInOutBack', 'easeInQuad']}
                                interval={[150, 250]}
                                delay={[800, 20]}
                                duration={[1400, 1000]}>
                                <h4>
                                    {item.children.header.h4}</h4>
                                <span>{item.children.header.caption}</span>
                                {item
                                    .children
                                    .artigo
                                    .map((c) => (
                                        <p key={c.k}>{c.conteudo}</p>
                                    ))}</QueueAnim>
                        ))}
                </QueueAnim>
            </ScrollParallax>

        </ScrollElement>
    );
};

class SectionThree extends React.Component {

    render() {
        return (<LoadSection/>)
    }
}
export default SectionThree;
