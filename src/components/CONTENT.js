import React from 'react';
import img_pop from './../assets/css/images/case_pop.png';
import img_mars from './../assets/css/images/case_mms.png';
import img_natura from './../assets/css/images/media_chamada_natura.gif';
import img_caixa from './../assets/css/images/case_caixa.png';
import img_dkids from './../assets/css/images/case_dkids.png';
const params = [{
        index: 1,
        id: 'natura',
        estilo: {
            cor: '#fff',
            bg: 'rgb(255,168,20,1)',

        },
        content: {
            h4: 'Natura',
            media: <img className = 'img_part caixa_016'
            src = {
                img_natura
            }
            alt = '' /> ,
            p: ['Um case de Social Selling para o Brasil.'],
        },
        animation: [{
            opacity: 1,
            ease: 'linear',
            playScale: [
                -1, -1
            ],
            scaleX: 1,
        }, {
            ease: 'easeOutQuint',
            playScale: [
                1.3, 3.4
            ],
            scaleY: .5,
            scaleX: 1.2,
            rotate: '14deg',
            skewY: '-2deg',
            skewX: '-12deg',
            y: '10vh',
        }],
        tween: [{
            opacity: 0,
            duration: 1000,
            ease: 'easeOutExpo',
            delay: 0,
            scaleY: .8,
            x: '-1vw',
            y: '-5vh',
            rotate: '-5deg',
            skewY: '1deg',
            skewX: '5deg',
        }, {
            opacity: 1,
            ease: 'easeOutQuart',
            duration: 1000,
            delay: 100,
            x: '0vw',
            y: '0vh',
            scale: 1,
            rotate: '0',
            skewY: '0',
            skewX: '0',
        }]
    },

    {
        index: 2,
        id: 'caixa',
        estilo: {
            cor: '#fff',
            // bg: 'rgb(240,240,244,1)',
            bg: 'rgb(0,107,193,1)',

        },
        content: {
            h4: 'Caixa',
            media: <img className = 'img_part caixa_016'
            src = {
                img_caixa
            }
            alt = '' /> ,
            p: ['Nova interface.', <br /> , 'Limpa.', <br /> , 'Bonita.', <br /> ,'Direta.'],
        },
        animation: [{
            opacity: 1,
            ease: 'linear',
            playScale: [
                -1, -1
            ],
            scale: 1,
            translateX: '0vw',
            translateY: '10vh'
        }, {
            ease: 'easeInOutQuint',
            playScale: [
                -1.4, 2.4
            ],
            scale: 1.1,
            translateX: '-2.2vw',
            translateY: '8vh'
        }],
        tween: [{
            opacity: 0,
            ease: 'easeOutExpo',
            duration: 1400,
            y: '0',
            delay: 0,
            translateX: '10vw',
            scale: 0.8
        }, {
            opacity: 1,
            ease: 'easeOutExpo',
            duration: 1400,
            delay: 100,
            translateX: '0vw',
            y: '0',
            scale: 1
        }]
    }, {
        index: 3,
        id: 'dkids',
        estilo: {
            cor: '#fff',
            bg: 'rgb(53,170,231,1)',

        },
        content: {
            h4: 'Dkids',
            media: <img className = 'img_part caixa_016'
            src = {
                img_dkids
            }
            alt = '' /> ,
            p: `Uma solução interativa e uma experiência tão boa quanto a do canal da Discovery Kids na TV.`,
        },
        animation: [{
            opacity: 1,
            ease: 'linear',
            playScale: [
                -1, -1
            ],
            scale: .7,
            translateX: '0vw',
            translateY: '0vh'
        }, {
            ease: 'easeInOutSine',
            playScale: [
                0.2, 1.2
            ],
            scale: 0.75,
            translateX: '-1vw',
            translateY: '1vh'
        }],
        tween: [{
            opacity: 0,
            ease: 'easeOutExpo',
            duration: 1400,
            delay: 0,
            y: '10vh',
            translateX: '5vw',
            scale: 0.7
        }, {
            opacity: 1,
            ease: 'easeOutExpo',
            duration: 1400,
            delay: 100,
            translateX: '0vw',
            y: '-15vh',
            scale: 1
        }]
    },
    {
        index: 4,
        id: 'mars',
        estilo: {
            cor: '#E20007',
            bg: 'rgb(255,240,60,1)',

        },
        content: {
            media: <img className = 'img_part'
            src = {
                img_mars
            }
            alt = '' /> ,
            h4: <span>m<small>&</small>m<small>'</small>s</span>,
            p: 'Interface Promocional do Festival do Amendoin.',
        },
        animation: [{
            opacity: 1,
            ease: 'linear',
            playScale: [
                -5, -1
            ],
            translateY: '2vh',
            translateX: '-4%',
            scale: 0.9
        }, {
            ease: 'easeInOutBack',
            playScale: [
                -1.5, 2
            ],
            scale: 1,
            translateY: '4vh',
            translateX: '1.4%'
        }],
        tween: [{
            opacity: 0,
            ease: 'easeOutExpo',
            duration: 1400,
            delay: 0,
            y: '-8vh',
            translateX: '-5vw',
            scale: 0.9
        }, {
            opacity: 1,
            ease: 'easeOutExpo',
            duration: 2400,
            delay: 10,
            translateX: '0vw',
            y: '-2vh',
            scale: 1
        }]
    },
    {
        index: 5,
        id: 'pop',
        estilo: {
            cor: '#fff',
            bg: 'rgb(138,56,245,1)',
        },
        content: {
            h4: 'Pop',
            media: <img className = 'img_part caixa_016'
            src = {
                img_pop
            }
            alt = '' /> ,
            p: 'Lançamento da nova maquininha da Credicard.',
        },
        animation: [{
            opacity: 1,
            ease: 'easeInOutSine',
            playScale: [
                -2, -1
            ],
            scale: 0.9,
            translateY: '16vh',
            x: '-11vw'
        }, {
            ease: 'easeInOutSine',
            playScale: [
                -.5, 2.3
            ],
            scale: 0.88,
            translateY: '24vh',
            x: '-10vw'
        }],
        tween: [{
            opacity: 0,
            ease: 'easeOutExpo',
            duration: 1400,
            delay: 0,
            y: '-10vh',
            translateX: '2vw',
            scale: 0.6
        }, {
            opacity: 1,
            ease: 'easeOutExpo',
            duration: 1400,
            delay: 100,
            y: '-15vh',
            translateX: '0vw',
            scale: 1
        }]
    }
]
// export default CONTENT;
export default params