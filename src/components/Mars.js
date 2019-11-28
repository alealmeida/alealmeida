import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import { withRouter } from 'react-router';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Footer from './Footer';
//images
import hero from './../assets/css/images/case_mms_hero.png';
import img_001 from './../assets/css/images/case_mms_img_001.png';
import img_002 from './../assets/css/images/case_mms_img_002.jpg';
import img_003 from './../assets/css/images/case_mms_img_003.png';
import img_004 from './../assets/css/images/case_mms_img_004.jpg';
import Callback from './Callback';

const ScrollParallax = ScrollAnim.Parallax;
const ScrollOverPack = ScrollAnim.OverPack;
const Cores = {
    cor: '#E20007',
    cor_sec_1: '#CE0006',
    cor_sec_2: '#EA272C',
    cor_ter: '#FFF977'
}
const CONTENT = {
    id: 'mars',
    h3: <h3 style={{
        color: '#E20009'
    }}>m<sub>&</sub>m<sub>'</sub>s</h3>,
    ano: <span className='ano'>2017</span>,
    cor: '#E20007',
    cor_sec: '#FFF600',
    // cor_sec: '#542A14',
    bg: 'rgb(255,240,50,1)',
    bg_sec: '#E91432',
    // bg_sec: '#FFE900',
    categoria: "Hotsite promocional",
    tags: [<span>User Research<br /> Information Architeture <br /> User Interface </span>],
    h4: `Festival do Amendoim.`,
    titulo_projeto: `Desenho fo hotsite promocional da MM's`,
    objetivo: "O m&m’s de amendoim, o novo queridinho das festas juninas, apresenta seu 1º Festival de Prêmios. Essa foi a frase usada na nova campanha da m&m's para as festas juninas, projeto do qual desenhei a interface do hotsite para cadastro e participação dos consumidores na promoção de m&m's",
    titulo_desafio: `Desafio`,
    desafio: ["O ",<i>Guide Line</i>," de m&m's era baseado no formato minimalista e estimulava que explorássemos inserções das suas personagens ao longo da página. Disponibilizamos, então, as personagens de forma que pudessem interagir com a ",<i>Single Page</i>," nas várias resoluções de devices."],
    titulo_meupapel: `Meu papel no projeto`,
    meupapel: ["Trabalhei o fluxo do hotsite, desde os requisitos funcionais até as regras na mecânica da promoção. Criei o conceito visual e atuei no design de interfaces.Realizei testes de usabilidade em dispositivos móveis e testes a/b.",],
    items: [
        {
        bg: '#D80E2A',
        classe: 'image full margin padding',
        conteudo:[<img className='img_part mms_001' src={img_001} alt='' />]
    },
    {
   bg: '#fff',
   classe: 'content',
    titulo: [<h5 className="bx_margin">Interface</h5>],
    conteudo: [
    <p>Crição do conceito visual de acordo com o <i>Look and Feel</i> estabelecido no <i>Branding Book</i> da Mars e todo o User Interface Design.</p>,<div className="m_margin" />]
},
    {
    bg: '#FFDE00',
    classe: 'image full margin padding',
    conteudo:[
<img className='img_part mms_002' src={img_002} alt='' />,]
},
{
bg: '#D80E2A',
classe: 'image full margin padding',
conteudo:[
<img className='img_part mms_003' src={img_003} alt='' />]
},
{
// bg: 'rgb(255,247,161,1)',
bg: 'rgb(70,125,165,0.08)',
classe: 'image full margin padding',
conteudo:[
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
            <TweenOne id={CONTENT.id} reverse={this.state.reverse} reverseDelay={600}  component='div' key={CONTENT.id}  className='interna cases' animation={[{opacity:0, duration: 0, delay: 0, left:'0' },{opacity:1, ease: 'easeInOutExpo',duration: 2000, delay: 0, left:'0' }  ]} style={{opacity:0}}>
                                <Callback
                                    key={this.index}
                                    to={this.to}
                                    component={this.component}
                                    hash={'#'+CONTENT.id}
                                    cor1={Cores.cor}
                                    project={CONTENT.h4}
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
                            delay={[1000, 1000]}
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
                        backgroundColor: CONTENT.bg_destaque
                    }}>
                        <ScrollParallax component='header' always={true} animation={PROP.timeline_2}>
                            <div className="side-content">
                                <label className='ano'>{CONTENT.ano}</label>
                                <label className='tags'>{CONTENT.tags}</label>
                                <label className='url'>{CONTENT.url}</label>
                            </div>
                            <div className="main-content">
                                <h4 className="dark">{CONTENT.h4}</h4>
                                <h5 className="dark">{CONTENT.titulo_projeto}</h5>
                                <p>{CONTENT.objetivo}</p>
                                <h6 className="dark">{CONTENT.titulo_desafio}</h6>
                                <p>{CONTENT.desafio}</p>
                                <h6 className="dark">{CONTENT.titulo_meupapel}</h6>
                                <p>{CONTENT.meupapel}</p>
                            </div>
                        </ScrollParallax>
                        <ScrollParallax
                            always={true}
                            component='article'
                            animation={{
                            opacity: 1,
                            playScale: [-1, -0.2]
                        }}>
    
                        </ScrollParallax>
                    </section>
                    {CONTENT
                        .items
                        .map((i) => (
                            <ScrollParallax always={true} component='section' style={{backgroundColor: i.bg}} className={i.classe}>
                                <header>
                                    {i.titulo}
                                </header>
                                <article>
                                    {i.conteudo}
                                </article>
                            </ScrollParallax>
                        ))}

                        <Footer/>
                        </TweenOne>
                        </div>
            );
        };
    }

export default withRouter(Mars);
