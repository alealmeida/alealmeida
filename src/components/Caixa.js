import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { withRouter } from 'react-router';
import TweenOne from 'rc-tween-one';
import Footer from './Footer';
//images
import hero from './../assets/css/images/case_caixa_hero.png';
import img_001 from './../assets/css/images/case_caixa_img_001.png';
import img_002 from './../assets/css/images/case_caixa_img_002.png';
import img_003 from './../assets/css/images/case_caixa_img_003.png';
import img_005 from './../assets/css/images/case_caixa_img_005.jpg';
import img_006 from './../assets/css/images/case_caixa_img_006.png';
import img_full from './../assets/css/images/case_caixa_img_full.jpg';
import img_full_mob from './../assets/css/images/case_caixa_img_full_mob.png';
import Callback from './Callback';

const ScrollParallax = ScrollAnim.Parallax;
const ScrollOverPack = ScrollAnim.OverPack;

    const Cores = {
        cor: '#fff',
        cor_sec_1: '#1575DF',
        cor_sec_2: '#1A76C0',
        cor_destaque: '#ddd'
    }
    const CONTENT = {
        id: 'caixa',
        h3: <h3 class="white">Caixa</h3>,
        ano: '2015',
        bg: '#1D8CE8',
        bg_destaque: '#fff',
        categoria: "Redesign",
        tags: [<span>User Research<br /> Information Architeture <br /> User Interface </span>],
        url:'wwww.caixa.org.br',
        h4: `Portal Caixa.`,
        titulo_projeto: `Prático. Simples. Bonito.`,
        objetivo: `A Caixa não é só o maior banco do país. É, também, o principal agente das políticas públicas do governo federal brasileiro. O portal da Caixa vem a ser, portanto, o mais acessado entre todos do segmento no Brasil, com impacto para todo cidadão brasileiro adulto.`,
        titulo_desafio: `Desafio`,
        desafio: `Iniciamos o projeto com o mindset de unificar produto e serviço de todo o ecossistema da Caixa, pois a experiência dentro do ambiente digital pode ser ótima, mas se tivermos alguns problemas além do site, o todo será prejudicado. Priorizamos, então, a experiência da Caixa, tornando-a consistente em todas as plataformas.`,
        titulo_meupapel: `Meu papel no projeto`,
        meupapel: ['Durante os nove meses em que trabalhei nos portais da Caixa, atuei como ', <i>User Experience Designer</i>, ' nas etapas de Pesquisa e Arquitetura de Informação, como ',<i>User Interface Designer</i>,' em cocriação de ',<i>Visual Concept</i>,' e construção de Templates das Páginas de Produto e como ',<i>Front-end Developer</i>, ' no desenvolvimento dos Navegáveis do Protótipo e Biblioteca de Padrões.'],
        items: 
        [
            {
            bg: '#1D8CE8',
            classe: 'image full margin padding',
            conteudo:[<img className='img_part caixa_001' src={img_001} alt='' />]},
            
            ,
            {
                bg: '#fff',
                classe: 'content',
                titulo: [<h5 className="bxx_margin">Imersão</h5>, <h6 className="s_margin">Estudando o negócio</h6>],
                conteudo: [
                    <p>Falamos, por duas semanas, com os principais executivos da Caixa e, deles, ouvimos:</p>,
                    <blockquote cite="executivo da caixa" className="sx_margin">
                        É preciso manter os patrimônios já estabelecidos e conquistar novos territórios.
                    </blockquote>,
                    <p >Para atender a esta demanda, foi criado um plano de ação em 3 frentes:</p>,
                    <p>
                    ·&nbsp; Evoluir a tecnologia do Auto-atendimento;
                    </p> ,
                <p>
                    ·&nbsp; Oferecer melhores Serviços
                    </p> ,
                <p>
                    ·&nbsp; Expandir o relacionamento com quem já é cliente.
                    </p>,
                    <blockquote cite="executivo da caixa" className="s_margin">
                    Além de Crédito e Poupança, a Caixa não oferece muitos outros benefícios
                    </blockquote>
                    ]
            }
            ,
            {   
                bg: '#fff',
                classe: 'content',
                titulo: <h6 className="m_margin">Análise de dados</h6>,
                conteudo: [<p>Observamos os dados de acesso para direcionar nossos pontos de vista.</p>,<div className="m_margin" />
                     
                    ]
            }
            ,
            {   
                bg: 'rgb(7,95,165,0.22)',
                classe: 'image full margin padding',
                conteudo: [
                    <p className="m_margin">Visão macro dos acessos:
                    </p>,
                    <img className='caixa_003' src={img_002} alt='' />,
                    <p> Isso significa que:
                        </p>
                        ,
                        <img className='caixa_003' src={img_003} alt='' />
                    ]
                }
                ,
                
                {
                    bg: '#fff',
                    classe: 'content',
                    conteudo:[<p className="mx_margin"> Analisar os dados nos ajudou a encontrar os perfis de usuários para as entrevistas.
                        Decidimos, então, construir uma via “ampla” para a população e uma via “expressa” para o governo.
                </p>,],
 
},
{   
    bg: '#fff',
    classe: 'content',
    titulo: [<h5 className="b_margin">Descoberta</h5>, <h6 className="s_margin">Pesquisa com os usuários<span>Consultamos os usuários do portal atual em várias etapas do processo de redesign.</span></h6>],
    conteudo: [
            <p> Falamos com clientes PJ e com os usuários do Governo.</p>,
            <p className="sx_margin"> Nas primeiras conversas, descobrimos que <i>a Caixa é totalmente confiável e segura</i> mas, que por outro lado, <i>a experiência dentro da agência é ruim</i>.</p>,
            <p> A maior dor ao acessarem o portal é a de que <i>o site é lento e cai muito.</i></p>
            ]
    },
    {   
        bg: '#fff',
        classe: 'content',
    titulo: [<h6 className="mx_margin">Cardsorting</h6>],
    conteudo: [
    <p>Aplicamos sessões de Card Sorting para chegarmos ao modelo mental do usuário.</p>,<div className="m_margin" /> ]
        },
    {   
        bg: 'rgb(7,95,165,0.12)',
        classe: 'image full margin padding',
    conteudo: [<img className='caixa_005' src={img_005} alt='' /> ]
        },
        {   
            bg: '#fff',
            classe: 'content',
    titulo: [<h5 className="bx_margin">Prototipação</h5>,<h6 className="s_margin">Rabiscoframes</h6>],
            conteudo: [
            [<p>Começamos a montar os sketches, distribuindo as informações de categorização e taxonomia obtidas à partir do modelo mental do nosso usuário.</p>,<div className="m_margin" /> ],
                ]
            },
            {   
                bg: 'rgb(7,95,165,0.12)',
                classe: 'image full margin padding',
                conteudo: [
                        <img className='img_part caixa_006' src={img_006} alt='' />]
                },
            {   
                bg: '#fff',
                classe: 'content',
            titulo: [<h5 className="bx_margin">Interface</h5>],
            conteudo: [
                <p>Layout das páginas de produto dos cartões da Caixa.</p>,<div className="m_margin" />
                
            ],
                },
                {   
                    bg: 'rgb(7,95,165,0.12)',
                    classe: 'image full margin padding',
                    conteudo: [
                        <h6 className="b_margin"> Desktop </h6>,
                            <img className='img_part caixa_full' src={img_full} alt='' />,<div className="bx_margin" />]
                    },
                    {   
                        bg: 'rgb(7,95,165,0.12)',
                        classe: 'image full margin padding',
                        titulo:
                        <h6 className="s_margin"> Mobile </h6>,
                        conteudo: [
                                <img className='img_part caixa_full' src={img_full_mob} alt='' />,<div className="m_margin" />]
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
                        backgroundColor: CONTENT.bg_destaque
                    }}>
                        <ScrollParallax component='header' always={true} animation={PROP.timeline_2}>
                            <div class="side-content">
                                <label className='ano'>{CONTENT.ano}</label>
                                <label className='tags'>{CONTENT.tags}</label>
                                <label className='url'>{CONTENT.url}</label>
                            </div>
                            <div class="main-content">
                                <h4 class="dark">{CONTENT.h4}</h4>
                                <h5 class="dark">{CONTENT.titulo_projeto}</h5>
                                <p>{CONTENT.objetivo}</p>
                                <h6 class="dark">{CONTENT.titulo_desafio}</h6>
                                <p>{CONTENT.desafio}</p>
                                <h6 class="dark">{CONTENT.titulo_meupapel}</h6>
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
    export default withRouter(Caixa);
