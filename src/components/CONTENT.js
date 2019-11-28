import React from 'react';
import img_pop from './../assets/css/images/case_pop.jpg';
import img_mars from './../assets/css/images/case_mms.png';
import imagetiny from './../assets/css/images/case_mms_tiny.png';
import img_caixa from './../assets/css/images/case_caixa.png';
import img_dkids from './../assets/css/images/case_dkids.png';
const Qanim = {
    ease: [
        'easeInOutExpo', 'easeOutExpo'
    ],
    interval:[
        250, 250
    ],
    delay: [
        2500, 1500
    ],
    duration: [2200, 2000]
}
const CONTENT = [{
    index: 3,
    id: 'caixa',
    to: '/caixa/',
    target: '_self',
    exact: true,
    cores: {
        cor_chamada: '#fff',
        bg_chamada: 'rgb(13,123,203,1)',
        cor_primaria: '#fff',
        cor_secundaria: '#2779B3',
        bg_primario: '#333344',
        bg_secundario: '#2779B3'
    },
    image: img_caixa,
    letra: 'C',
    h3: 'Caixa',
    h4: 'Caixa',
    p: `Nova interface.
Bonita. Limpa. Direta.`,
    timeline: [
        {
            opacity: 1,
            ease: 'linear',
            playScale: [
                -1, -1
            ],
            scale: .75,
            translateX: '0vw',
            translateY: '0vh'
        }, {
            ease: 'easeInOutQuint',
            playScale: [
                -1.4, 2.4
            ],
            scale: 0.8,
            translateX: '-3vw',
            translateY: '10vh'
        }
    ],
    tween: [
        {
            opacity: 1,
            duration: 1,
            delay: 0,
            y: '50vh',
            translateX: '140vw',
            scale: 0
        }, {
            opacity: 1,
            ease: 'easeInOutExpo',
            duration: 2400,
            delay: 0,
            translateX: '0vw',
            y: '-25vh',
            scale: 1
        }
    ]
}, {
        index: 1,
        id: 'pop',
        image: img_pop,
        to: '/pop/',
        cores: {
            cor_chamada: '#333344',
            bg_chamada: '#e1e2e4',
            cor_primaria: '#fff',
            cor_secundaria: '#2779B3',
            bg_primario: '#333344',
            bg_secundario: '#2779B3'
        },
        letra: 'C',
        exact: true,
        target: '_blank',
        h3: 'Credicard',
        cor: '#6013F1',
        bg: '#f0f1f4',
        h4: 'Pop',
        p: 'Lançamento da nova maquininha da Credicard.',
        timeline: [
            {
                opacity: 1,
                ease: 'easeInOutSine',
                playScale: [
                    -2, -1
                ],
                scale: 0.9,
                translateY: '16vh',
                x:'-5vw'
            }, {
                ease: 'easeInOutSine',
                playScale: [
                    -.5, 2.3
                ],
                scale: 0.8,
                translateY: '24vh',
                x:'-10vw'
            }
        ],
        tween: [
            {
                opacity: 1,
                duration: 0,
                delay: 0,
                y: '50vh',
                translateX: '30vw',
                scale: 0
            }, {
                opacity: 1,
                ease: 'easeInOutExpo',
                duration: 1400,
                delay: 0,
                translateX: '0vw',
                y: '-15vh',
                scale: 1
            }
        ]
    }, {
        index: 4,
        id: 'dkids',
        to: '/dkids/',
        target: '_self',
        exact: true,
        cores: {
            cor_chamada:  '#fff',
            bg_chamada: 'rgb(3,133,221,1)',
            cor_primaria: '#fff',
            cor_secundaria: '#2779B3',
            bg_primario: '#333344',
            bg_secundario: '#2779B3'
        },
        image: img_dkids,
        letra: 'D',
        h3: 'Discovery',
        h4: 'Dkids',
        p: `Uma solução interativa e uma experiência tão boa quanto a do canal da Discovery Kids na TV.`,
        timeline: [
            {
                opacity: 1,
                ease: 'linear',
                playScale: [
                    -1, -1
                ],
                scale: .7,
                translateX: '0vw',
                translateY: '-3vh'
            }, {
                ease: 'easeInOutSine',
                playScale: [
                    0.2, 1.2
                ],
                scale: 0.8,
                translateX: '2vw',
                translateY: '0vh'
            }
        ],
        tween: [
            {
                opacity: 1,
                duration: 0,
                delay: 0,
                y: '50vh',
                translateX: '30vw',
                scale: 0
            }, {
                opacity: 1,
                ease: 'easeInOutExpo',
                duration: 1400,
                delay: 0,
                translateX: '0vw',
                y: '-15vh',
                scale: 1
            }
        ]
    },
    {
        index: 2,
        id: 'mars',
        to: '/mars/',
        cores: {
            cor_chamada: '#E20007',
            bg_chamada: 'rgb(255,240,50,1)',
            cor_primaria: '#fff',
            cor_secundaria: '#333344',
            bg_primario: '#2779B3',
            bg_secundario: '#542A14'
        },
        image: img_mars,
        imagetiny: imagetiny,
        letra: 'm',
        h3: 'Mars',
        cor: '#E21509',
        bg: '#FEF100',
        h4: <span>m<small>&</small>m<small>'</small>s</span>,
        p: `Interface Promocional do Festival do Amendoin.`,
        timeline: [
            {
                opacity: 1,
                ease: 'linear',
                playScale: [
                    -5, -1
                ],
                translateY: '-10vh',
                // translateX: '15%',
                scale: 1.2
            }, {
                ease: 'easeInOutBack',
                playScale: [
                    -1.5, 2
                ],
                scale: 1.8,
                translateY: '6vh',
                translateX: '4.4%'
            }
        ],
        tween: [
            {
                opacity: 1,
                duration: 0,
                delay: 0,
                y: '0vh',
                translateX: '3vw',
                scale: 0
            }, {
                opacity: 1,
                ease: 'easeInOutCirc',
                duration: 2000,
                delay: 0,
                translateX: '0vw',
                y: '-2vh',
                scale: 1
            }
        ]
    }

]
export default CONTENT;
export {
    Qanim
  }