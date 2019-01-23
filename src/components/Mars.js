import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import { withRouter } from 'react-router';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
//images
import hero from '../assets/css/images/case_mms_hero.png';
import img_001 from '../assets/css/images/case_mms_img_001.png';
import img_002 from '../assets/css/images/case_mms_img_002.jpg';
import img_003 from '../assets/css/images/case_mms_img_003.png';
import img_004 from '../assets/css/images/case_mms_img_004.jpg';
import Callback from '../main/Callback';

const ScrollParallax = ScrollAnim.Parallax;
const ScrollOverPack = ScrollAnim.OverPack;
const Cores = {
    cor: '#E20007',
    cor_sec_1: '#CE0006',
    cor_sec_2: '#EA272C',
    cor_ter: '#FFF977'
}
const CONTENT = {
    id: 'case2',
    h3: <h3 style={{
        color: '#E20009'
    }}>m<sub>&</sub>m<sub>'</sub>s</h3>,
    ano: <span className='ano'>2017</span>,
    cor: '#E20007',
    cor_sec: '#FFF600',
    // cor_sec: '#542A14',
    bg: '#FFF600',
    bg_sec: '#E91432',
    // bg_sec: '#FFE900',
    categoria: "Hotsite promocional",
    tags: <span>AI · UI</span>,
    h4: `Desenho do hotsite do
    Festival do Amendoim`,
    objetivo: "O m&m’s de amendoim, o novo queridinho das festas juninas, apresenta seu 1º Festival de Prêmios. Foi com essa frase de chamada que lançamos a nova campanha da m&m's para as festas juninas, projeto do qual desenhei a interface do hotsite para cadastro e participação dos consumidores na promoção de m&m's",
    items: [
        {
        bg: '#fff',
        titulo: <h5>Desafio</h5>,
    texto: [<p>O <i>Guide Line</i> de m&m's era baseado no formato minimalista e estimulava que explorássemos inserções das suas personagens ao longo da página.
    Disponibilizamos, então, as personagens de forma que pudessem interagir com a <i>Single Page</i> nas várias resoluções de devices.
    <br/>
    A tipografia também esteve presente na arquitetura de informação, pois a família de fontes da marca tem escalas de peso na hierarquia de conteúdo.</p>,],
    },
        {
        bg: '#fff',
        titulo: <h6>Meu papel</h6>,
    texto: [<p>Trabalhei o fluxo do hotsite, desde os requisitos funcionais até as regras na mecânica da promoção.
      Criei o conceito visual e atuei no design de interfaces.
        Realizei testes de usabilidade em dispositivos móveis e testes a/b.
    </p>,]
    }, {
        bg: '#fff',
        titulo: <h5>Visual Concept</h5>,
    },
        {
        bg: '#D80E2A',
    texto: [
    <img className='img_part mms_001' src={img_001} alt='' />]
    },
    {
    bg: '#FFDE00',
texto: [
<img className='img_part mms_002' src={img_002} alt='' />]
},
{
bg: '#000004',
texto: [
<img className='img_part mms_003' src={img_003} alt='' />]
},
{
bg: '#181819',
texto: [<br/>,<br/>,
<img className='img_part mms_004' src={img_004} alt='' />]
},
    ]
};
const PROP = {
    timeline_1: [
        {
            opacity: 1,
            ease: 'linear',
            playScale: [
                0, 1
            ],
            translateY: '0',
            onStart: () => {
                this.setCss('start');
            },
            onCompleteBack: () => {
                this.setCss('back complete');
            },
            onComplete: () => {
                this.onComplete('complete');
            },
            onStartBack: () => {
                this.onComplete('back start');
            }
        }, {
            opacity: 0,
            ease: 'easeInOutCubic',
            playScale: [
                1, 2.2
            ],
            translateY: '30'
        }
    ],
    timeline_2: [
        {
            opacity: 1,
            ease: 'linear',
            playScale: [
                -4, -4
            ],
            translateY: '0'
        }, {
            opacity: 1,
            ease: 'easeOutCubic',
            playScale: [
                0.7, 1.5
            ],
            translateY: '10%'
        }
    ],
    ease: [
        'easeInOutExpo', 'easeOutExpo'
    ],
    interval: 200,
    delay: [
        1500, 1500
    ],
    duration: [1200, 1000]
}
class Mars extends React.Component {
    constructor({props, to, component, index}) {
        super(props)
        this.index = index
        this.to = to
        this.component = component
        this.state ={
            reverse: false,
            items: [
                {
                    key: 1
                }, {
                    key: 2
                }
            ]
        }
    }
        onClick = (e) =>{
            e.preventDefault()
            this.setState({
                reverse: true, items: []
              });
            setTimeout(() => {
                this.props.history.push(this.to)
            },3500)
            
            this.smoothScroll.scrollTo()
        }
        smoothScroll = {
            scrollTo: (id, callback) => {
                var settings = {
                    duration: 2000,
                    easing: {
                        inoutQuint: function (x, t, b, c, d) {
                            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                        }
                    }
                };
                var percentage;
                var startTime;
                var node = document.querySelector('#root');
                var nodeTop = node.offsetTop;
                var nodeHeight = node.offsetHeight;
                var body = document.body;
                var html = document.documentElement;
                var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                var windowHeight = window.innerHeight
                var offset = window.pageYOffset;
                var delta = nodeTop - offset;
                var bottomScrollableY = height - windowHeight;
                var targetY = (bottomScrollableY < delta)
                    ? bottomScrollableY - (height - nodeTop - nodeHeight + offset)
                    : delta;
      
                startTime = Date.now();
                percentage = 0;
      
                if (this.timer) {
                    clearInterval(this.timer);
                }
      
                const step = () => {
                    var yScroll;
                    var elapsed = Date.now() - startTime;
      
                    if (elapsed > settings.duration) {
                        clearTimeout(this.timer);
                    }
      
                    percentage = elapsed / settings.duration;
      
                    if (percentage > 1 || offset < 3) {
                        clearTimeout(this.timer);
      
                        if (callback) {
                            callback();
                        }
                    } else {
                        yScroll = settings
                            .easing
                            .inoutQuint(node, elapsed, offset, targetY, settings.duration);
                        window.scrollTo(node, yScroll);
                        this.timer = setTimeout(step, 10);
                    }
                }
      
                this.timer = setTimeout(step, 10);
            }
      
        };
    render() {
        return (
            <div style={{width: '100%', height: '100%', background: CONTENT.bg}}>
            <TweenOne id={CONTENT.id} reverse={this.state.reverse} reverseDelay={2000}  component='div' key={CONTENT.id}  className='interna cases' animation={[{opacity:0, duration: 0, delay: 0,  left:'0' },{opacity:1, ease: 'easeInOutExpo',duration: 2000, delay: 0, left:'0' }  ]} style={{opacity:0}}>
                                <Callback
                                    key={this.index}
                                    to={this.to}
                                    component={this.component}
                                    hash={'#'+CONTENT.id}
                                    cor1={Cores.cor}
                                    cor2={Cores.cor_sec_2} style={{opacity:1}} onClick={this.onClick} />
                    <ScrollOverPack appear={true} always={true} component='section' id='hero'
                            style={{
                            backgroundColor: CONTENT.bg,
                            height: '100vh'
                        }}>
    
                        <QueueAnim
                            location={CONTENT.id}
                            component='header'
                            interval={PROP.interval}
                            delay={PROP.delay}
                            duration={PROP.duration}
                            forcedReplay
                            leaveReverse
                            reverse={true}
                            type={['bottom', 'top']}
                            animConfig={[
                            [
                                {
                                    opacity: [
                                        1, 0
                                    ],
                                    scale: [
                                        1, 1.8
                                    ],
                                    y: [
                                        0,0
                                    ],
                                    x: [
                                        0 + 'vw',
                                        0 + 'vw'
                                    ]
                                }, {
                                    opacity: [
                                        1, 0
                                    ],
                                    scale: [
                                        1, 1.8
                                    ],
                                    y: [
                                        0, 0
                                    ],
                                    x: [
                                        0 + 'vw',
                                        0 + 'vw'
                                    ]
                                }
                            ]
                        ]}ease={PROP.ease} >
                            <div  key={this
                                    .state
                                    .items
                                    .map((i) => i.key = 1)} className='titulo'>{CONTENT.h3}</div>
                            <img  key={this
                                    .state
                                    .items
                                    .map((i) => i.key = 2)} src={hero} alt='' />
                        </QueueAnim>
                    </ScrollOverPack>
                    <section
                        className='destaque'
                        style={{
                        color: Cores.cor_ter,
                        backgroundColor: CONTENT.bg_sec
                    }}>
                        <ScrollParallax component='header' always={true} animation={PROP.timeline_2}>
                            <label>{CONTENT.ano}</label>
                            <label>{CONTENT.categoria}</label>
                            <label>{CONTENT.tags}</label>
                            <label style={{fontSize: '1em',textTransform: 'lowercase', marginTop:'1em'}}>{CONTENT.url}</label>
                            <h4>{CONTENT.h4}</h4>
                        </ScrollParallax>
                        <ScrollParallax
                            always={true}
                            component='article'
                            animation={{
                            opacity: 1,
                            playScale: [-1, -0.2]
                        }}>
                            <p>{CONTENT.objetivo}</p>
    
                        </ScrollParallax>
                    </section>
                
                    {CONTENT
                        .items
                        .map((i) => (
                            <ScrollParallax always={true} component='section' style={{backgroundColor: i.bg}} className='content'>
                                <header>
                                    {i.titulo}
                                </header>
                                <article>
                                    {i.texto}
                                </article>
                            </ScrollParallax>
                        ))}
                        </TweenOne>
                        </div>
        );
    };
}

export default withRouter(Mars);
