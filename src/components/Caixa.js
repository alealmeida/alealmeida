import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { withRouter } from 'react-router';
import TweenOne from 'rc-tween-one';
//images
import hero from '../assets/css/images/case_caixa_hero.png';
import img_001 from '../assets/css/images/case_caixa_img_001.png';
import img_002 from '../assets/css/images/case_caixa_img_002.png';
import img_003 from '../assets/css/images/case_caixa_img_003.png';
import img_004 from '../assets/css/images/case_caixa_img_004.jpg';
import img_005 from '../assets/css/images/case_caixa_img_005.jpg';
import img_006 from '../assets/css/images/case_caixa_img_006.png';
import img_full from '../assets/css/images/case_caixa_img_full.jpg';
import img_full_mob from '../assets/css/images/case_caixa_img_full_mob.png';
import Callback from '../main/Callback';

const ScrollParallax = ScrollAnim.Parallax;
const ScrollOverPack = ScrollAnim.OverPack;

    const Cores = {
        cor: '#fff',
        cor_sec_1: '#1575DF',
        cor_sec_2: '#1A76C0',
        cor_ter: '#fff'
    }
    const CONTENT = {
        id: 'caixa',
        h3: <h3 style={{
            color: Cores.cor
        }}>Caixa</h3>,
        ano: <span className='ano'>2015</span>,
        bg: '#1575DF',
        bg_sec: '#025FC5',
        categoria: "Portal",
        tags: <span>Pesquisa · ID · UI</span>,
        url:'caixa.org.br',
        h4: `Novo site.
            Prático. Simples. Bonito.`,
        objetivo: `A Caixa não é só o maior banco do país. É, também, o principal agente das políticas públicas do governo federal brasileiro. O portal da Caixa vem a ser, portanto, o mais acessado entre todos do segmento no Brasil, com impacto para todo cidadão brasileiro adulto.`,
        items: 
        [
            {
                bg: '#fff',
                titulo: <h5>Desafio</h5>,
            texto: [<p>Iniciamos o projeto com o mindset de unificar produto e serviço de todo o ecossistema da Caixa, pois a experiência dentro do ambiente digital pode ser ótima, mas se tivermos alguns problemas além do site, o todo será prejudicado. Priorizamos, então, a experiência da Caixa, tornando-a consistente em todas as plataformas.</p>,
                <br/>,<br/>    
            ],
            },{
                bg: '#1978C8',
                texto:[
                <br/>,<br/>, <img className='img_part caixa_001' src={img_001} alt='' />]},
                    {
                bg: '#fff',
                titulo: <h6>Meu papel</h6>,
                texto:[
                <p>
                    Durante os nove meses em que trabalhei nos portais da Caixa, atuei como <i>User Experience Designer</i> nas etapas de Pesquisa e Arquitetura de Informação, como <i>User Interface Designer</i> em cocriação de <i>Visual Concept</i> e construção de Templates das Páginas de Produto e como <i>Front-end Developer</i> no desenvolvimento dos Navegáveis do Protótipo e Biblioteca de Padrões.
                    </p> ,
                // <p>
                //     ·&nbsp; Construção do inventário de conteúdo do portal anterior
                //     </p> ,
                // <p>
                //     ·&nbsp; Captação dos Requisitos de Negócio com os <i>Stakeholders</i>
                //     </p> ,
                // <p>·&nbsp; <i>Card Sorting </i>com os usuários do banco
                // </p> ,
                // <p>
                //     ·&nbsp; <i>Visual Concept</i> e construção de <i>Assets</i>
                //     </p> ,
                // <p>
                //     ·&nbsp; Criação do visual design das páginas de produto
                //     </p> ,
                // <p>
                //     ·&nbsp; Protótipo navegável e responsivo em HTML, CSS, JS e Bootstrap
                //     </p> ,
                // <p>
                //     ·&nbsp; Testes de Usabilidade e Testes A/B
                //     </p>
            ]
            }
            ,
            {
                bg: '#fff',
            titulo: [<h5>Imersão</h5>, <h6>No negócio</h6>],
                texto: [<p>Falamos, por duas semanas, com os principais executivos da Caixa e, deles, ouvimos:</p>,
                    <blockquote cite="executivo da caixa">
                    É preciso manter os patrimônios já estabelecidos e conquistar novos territórios.
                    </blockquote>,
                    <br />, <br />, <br />,
                    <p>Para atender a esta demanda, foi criado um plano de ação em 3 frentes:</p>,
                    <p>
                    ·&nbsp; Evoluir a tecnologia do Auto-atendimento;
                    </p> ,
                <p>
                    ·&nbsp; Oferecer melhores Serviços
                    </p> ,
                <p>
                    ·&nbsp; Expandir o relacionamento com quem já é cliente.
                    </p>,
                    <blockquote cite="executivo da caixa">
                    Além de Crédito e Poupança, a Caixa não oferece muitos outros benefícios
                    </blockquote>
                    ]
            }
            ,
            {   
                bg: '#fff',
                titulo: <h6>Nos dados</h6>,
                texto: [<p>Observamos os dados de acesso para direcionar nossos pontos de vista.</p>,
                     
                    ]
            }
            ,
            {   
                bg: '#F1F1F3',
                texto: [
                    <p>Visão macro dos acessos:
                    </p>,
                    <img src={img_002} alt='' />,
                    <p> Isso significa que:
                        </p>
                        ,
                        <img src={img_003} alt='' />
                    ]
                }
                ,
                
                {
                    bg: '#fff',
                    texto:[<p> <br/>As Análises de Métricas nos ajudaram a encontrar os perfis de usuários para as entrevistas.
                        Decidimos, então, construir uma via “ampla” para a população e uma via “expressa” para o governo.
                </p>,],
 
},
{   
    bg: '#fff',
titulo: [<h5>Pesquisas</h5>,<h6>Na outra ponta</h6>],
    texto: [
            <p>Fomos ao encontro dos usuários em determinados momentos do projeto, com objetivos específicos. </p>,
            <img src={img_004} alt='' />,
            <br />,
            <p> Nas primeiras conversas, descobrimos que</p>,
            <blockquote cite="executivo da caixa">
            A Caixa é totalmente confiável e segura.
            </blockquote>, <br />, <br />, 
            <p>mas que, por outro lado</p>,
            <blockquote cite="executivo da caixa">
            A experiência dentro da agência é ruim.
            </blockquote>,
            <blockquote cite="executivo da caixa">
            O site é lento e cai muito.
            </blockquote>],
    },
    {   
        bg: '#fff',
    titulo: [<h6>Com dinâmicas</h6>],
        texto: [
                <p>Aplicamos sessões de Card Sorting para chegarmos ao modelo mental do usuário.</p>,
                <img src={img_005} alt='' /> ]
        },
        {   
            bg: '#fff',
        titulo: [<h5>Prototipação</h5>,<h6>Do rabisco</h6>],
            texto: [
                    <p>Começamos a montar os <i>Sketches</i>, distribuindo as informações à partir da categorização obtida no Modelo Mental.</p>,
                ]
            },
            {   
                bg: '#e3e4e5',
                texto: [
                        <img className='img_part caixa_006' src={img_006} alt='' />,]
                },
            {   
                bg: '#fff',
            titulo: [<br/>,<br/>, <h5>Interface</h5>],
            texto: [
                <p>Layout das páginas de produto dos cartões da Caixa.</p>,<br/>
                
            ],
                },
                {   
                    bg: '#222223',
                    titulo:
                    <h6><small style={{color: '#fff'}}>Desktop</small></h6>,
                    texto: [
                            <img className='img_part caixa_full' src={img_full} alt='' />]
                    },
                    {   
                        bg: '#222223',
                        titulo:
                        <h6><small style={{color: '#fff'}}>Tablet e Smartphone</small></h6>,
                        texto: [
                                <img className='img_part caixa_full' src={img_full_mob} alt='' />,]
                        },
]
}
    const PROP = {
        timeline_1: [
            {
                ease: 'linear',
                playScale: [
                    -1, 0
                ],
                opacity: 0
            }, {
                opacity: 1,
                ease: 'linear',
                playScale: [0.5, 0.6]
            }, {
                opacity: 0,
                ease: 'linear',
                playScale: [1.4, 1.8]
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
    class Caixa extends React.Component {
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
        }
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
                            <label className='url'>{CONTENT.url}</label>
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
    
    export default withRouter(Caixa);
