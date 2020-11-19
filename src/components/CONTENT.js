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
            h4: 'Natura, 2019',
            media: <img className = 'img_part caixa_016'
            src = {
                img_natura
            }
            alt = '' /> ,
            p: ['Um case de Social Selling do Brasil para o mundo.'],
            a: ['Ver case'],
        },
        animation:  {
            ease: 'easeOutCirc',
            playScale: [
                0.4, 1.4
            ],
            opacity: 1,
            y: '100',
        },
        tween: [{
            opacity: 1,
            duration: 80,
            ease: 'easeInOutCirc',
            delay: 0,
            scaleX: 0.7,
            scaleY: 0.91,
            x: '-1vw',
            y: '15vh',
        },
        {
            ease: 'easeInOutExpo',
            duration: 1000,
            delay: 200,
            x: '0vw',
            y: '0vh',
            scale: 1,
            opacity: 1,
        }],
        tween2: [{
            ease: 'linear',
            duration:5,
            delay: 0,
            scaleX: 1.3,
            scaleY: 0.8,
            opacity:0.6,
            y: -50,
            from: 'from'
        },{
            ease: 'easeInOutQuad',
            duration:800,
            delay: 0,
            opacity:1,
            y: -100,
            scaleX: 1.3,
            scaleY: 3,
            from: 'from'
        },{
            ease: 'easeInOutQuad',
            duration:700,
            delay: 700,
            opacity:0,
            y: 0,
            from: 'to'
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
            h4: 'Pop Credicard, 2018',
            media: <img className = 'img_part caixa_016'
            src = {
                img_pop
            }
            alt = '' /> ,
            p: 'Lançamento da nova maquininha da Credicard.',
            a: ['Ver Case'],
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
            duration: 200,
            ease: 'easeOutExpo',
            delay: 0,
            scale: 0.3,
            x: '-1vw',
            y: '-25vh',
        },
        {
            ease: 'easeOutExpo',
            duration: 1400,
            delay: 0,
            x: '0vw',
            y: '0vh',
            scale: 1,
            opacity: 1,
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
            h4: 'Caixa, 2016',
            media: <img className = 'img_part caixa_016'
            src = {
                img_caixa
            }
            alt = '' /> ,
            p: ['Nova interface.', <br /> , 'Limpa.',  ' Bonita.', ' Direta.'],
            a: ['Ver Case'],
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
            translateY: '-8vh'
        }],
        tween: [{
            opacity: 0,
            duration: 200,
            ease: 'easeOutExpo',
            delay: 0,
            scale: 0.7,
            x: '-1vw',
            y: '125vh',
        },
        {
            ease: 'easeOutExpo',
            duration: 2400,
            delay: 0,
            x: '0vw',
            y: '0vh',
            scale: 1,
            opacity: 1,
        }]
    }, {
        index: 3,
        id: 'dkids',
        estilo: {
            cor: '#fff',
            bg: 'rgb(53,170,231,1)',

        },
        content: {
            h4: 'Discovery Kids, 2015',
            media: <img className = 'img_part caixa_016'
            src = {
                img_dkids
            }
            alt = '' /> ,
            p: `Uma solução interativa e uma experiência tão boa quanto a do canal da Discovery Kids na TV.`,
            a: ['Ver Case'],
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
            translateY: '-8vh'
        }],
        tween: [{
            opacity: 0,
            duration: 200,
            ease: 'easeOutExpo',
            delay: 0,
            scale: 0.7,
            x: '-1vw',
            y: '125vh',
        },
        {
            ease: 'easeOutExpo',
            duration: 2400,
            delay: 0,
            x: '0vw',
            y: '0vh',
            scale: 1,
            opacity: 1,
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
            h4: "M&M's, 2018",
            // h4: <,>m<small>&</small>m<small>'</small>s</,>,
            p: 'Interface Promocional do Festival do Amendoin.',
            a: ['Ver Case'],
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
            translateY: '-8vh'
        }],
        tween: [{
            opacity: 0,
            duration: 200,
            ease: 'easeOutExpo',
            delay: 0,
            scale: 0.3,
            x: '-1vw',
            y: '-25vh',
        },
        {
            ease: 'easeOutExpo',
            duration: 1400,
            delay: 0,
            x: '0vw',
            y: '0vh',
            scale: 1,
            opacity: 1,
        }]
    },
]
// export default CONTENT;
export default params