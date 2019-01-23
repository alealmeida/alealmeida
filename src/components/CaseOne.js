import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import { withRouter } from 'react-router';
import QueueAnim from 'rc-queue-anim';
import Nav from '../main/Nav';
import TweenOne from 'rc-tween-one';
// import Scroll from './../main/Site';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';
import ArrowBack from './Icons/ArrowBack';
import screen from './mixins';
//images
import hero from '../assets/css/images/case_pop_hero.png';
import img_001 from '../assets/css/images/case_pop_img_001.png';
import img_002 from '../assets/css/images/case_pop_img_002.jpg';
import img_003 from '../assets/css/images/case_pop_img_003.jpg';
import img_full from '../assets/css/images/case_pop_img_full.jpg';
import Callback from '../main/Callback';

const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;
const ScrollOverPack = ScrollAnim.OverPack;
const Cores = {
    cor: '#fff',
    cor_sec_1: '#fff',
    cor_sec_2: '#732CD4',
    cor_ter: '#fff'
}
const CONTENT = {
    id: 'case1',
    h3: <h3 style={{
        color: Cores.cor
    }}>Pop</h3>,
    ano: <span>2018</span>,
    cor: '#E20007',
    cor_sec: '#E20007',
    // cor_sec: '#542A14',
    bg: '#6613F1',
    bg_sec: '#6613F1',
    // bg_sec: '#00FEF1',
    categoria: "Página de produto",
    url: "www.deumpop.com.br",
    tags: "Pesquisa · AI · UI",
    h4: `Site de lançamento da Pop,
    a nova maquininha da Credicard.`,
    objetivo: "Usando 'Dê um pop nas suas vendas' como frase de chamada, a Credicard acabou de lançar a Pop, a maquininha de mão com chip, wifi e sem aluguel.",
    items: [
    //     {
    //     bg: '#fff',
    //     titulo: <h5>Desafio</h5>,
    // texto: [<p>O <i>Guide Line</i> de m&m's era baseado no formato minimalista e estimulava que explorássemos inserções das suas personagens ao longo da página.
    // Disponibilizamos, então, as personagens de forma que pudessem interagir com a <i>Single Page</i> nas várias resoluções de devices.
    // <br/>
    // A tipografia também esteve presente na arquitetura de informação, pois a família de fontes da marca tem escalas de peso na hierarquia de conteúdo.</p>,],
    // },
        {
        bg: '#fff',
        titulo: <h6>Meu papel</h6>,
    texto: [<p>Desenhei todo o fluxo de navegação do site, desde o momento de trazer o usuário para a Landing Page à partir das mídias sociais, passando pela captação de leads com o passo zero dentro da página de produtos, até o momento final da solicitação da Pop dentro do site e acompanhamento do pedido e entrega do produto. <br />Crição do conceito visual de acordo com o <i>Look and Feel</i> estabelecido no <i>Guide</i> da Credicard e todo o User Interface Design.
        
    </p>,]
    }, {
        bg: '#fff',
        titulo: <h5>Visual Concept</h5>,
    },
        {
        bg: '#00FEF1',
    texto: [
    <img className='img_part pop_001' src={img_001}/>]
    },
    {
    bg: '#f2f3f4',
texto: [
<img className='img_part pop_002' src={img_002}/>]
},
{
bg: '#6200B3',
texto: [
<img className='img_part pop_003' src={img_003}/>]
},{
    bg: '#000004',
    texto: [
    <img className='img_part pop_004' src={img_full}/>]
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
        1500, 200
    ],
    duration: [1200, 1000]
}
class CaseOne extends React.Component {
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
            },3000)
            
        }
    
    render() {
        return (
            <div style={{width: '100%', height: '100%', background: CONTENT.bg}}>
            <TweenOne id={CONTENT.id} reverse={this.state.reverse} reverseDelay={1000}  component='div' key={CONTENT.id}  className='interna cases' animation={[{opacity:0, duration: 0, delay: 0, left:'0' },{opacity:1, ease: 'easeInOutExpo',duration: 2000, delay: 0, left:'0' }  ]} style={{opacity:0}}>
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
                                    .map((i) => i.key = 2)} src={hero}/>
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

export default withRouter(CaseOne);
