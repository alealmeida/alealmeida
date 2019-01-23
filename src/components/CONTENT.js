import React from 'react';
import img_pop from '../assets/css/images/case_pop.jpg';
import img_mars from '../assets/css/images/case_mms.png';
import imagetiny from '../assets/css/images/case_mms_tiny.png';
import img_caixa from '../assets/css/images/case_caixa.png';
import img_dkids from '../assets/css/images/case_dkids.png';
const CONTENT = [
    {
        index: 2,
        id: 'mars',
        to: '/mars/',
        cores: {
            cor_chamada: '#E20007',
            bg_chamada: '#FEF100',
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
        p: `Interface  Promocional do
Festival  do  Amendoin.`,
        timeline: [
            {
                opacity: 1,
                ease: 'linear',
                playScale: [
                    -5, -5
                ],
                translateY: '0',
                // translateX: '15%',
                scale: 1.8
            }, {
                opacity: 1,
                ease: 'easeOutCubic',
                playScale: [
                    0.7, 1.5
                ],
                translateX: '-1%'
            }, {
                ease: 'easeInOutBack',
                playScale: [
                    -1.7, 2.2
                ],
                scale: 0.90,
                translateY: '102vh',
                translateX: '.4%'
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
                ease: 'easeInOutBack',
                duration: 2000,
                delay: 0,
                translateX: '0vw',
                y: '-2vh',
                scale: 1
            }
        ]
    }, {
        index: 1,
        id: 'pop',
        image: img_pop,
        to: '/pop/',
        cores: {
            cor_chamada: '#732CD4',
            bg_chamada: '#fff',
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
        p: `Lançamento da nova
maquininha da Credicard.`,
        timeline: [
            {
                opacity: 1,
                ease: 'linear',
                playScale: [
                    -1, -1
                ],
                scale: .21,
                translateX: '10vw',
                translateY: '-56vh'
            }, {
                ease: 'easeInOutSine',
                playScale: [
                    0.1, 1
                ],
                scale: 0.9,
                translateX: '-2vw',
                translateY: '56vh'
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
            cor_chamada: '#003CB9',
            bg_chamada: '#BBFF09',
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
                scale: .34,
                translateX: '3vw',
                translateY: '-16vh'
            }, {
                ease: 'easeInOutSine',
                playScale: [
                    0.2, 1.2
                ],
                scale: 0.68,
                translateX: '-6vw',
                translateY: '30vh'
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
        index: 3,
        id: 'caixa',
        to: '/caixa/',
        target: '_self',
        exact: true,
        cores: {
            cor_chamada: '#1A76C0',
            bg_chamada: '#fff',
            cor_primaria: '#fff',
            cor_secundaria: '#2779B3',
            bg_primario: '#333344',
            bg_secundario: '#2779B3'
        },
        image: img_caixa,
        letra: 'C',
        h3: 'Caixa',
        h4: 'Redesign',
        p: `Nova interface.
Bonita. Limpa. Direta.`,
        timeline: [
            {
                opacity: 1,
                ease: 'linear',
                playScale: [
                    -1, -1
                ],
                scale: .35,
                translateX: '14vw',
                translateY: '-116vh'
            }, {
                ease: 'easeInOutQuint',
                playScale: [
                    -1.4, 2.4
                ],
                scale: 0.8,
                translateX: '-5vw',
                translateY: '56vh'
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
    }

]

export default CONTENT;