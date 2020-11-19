import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { withRouter } from 'react-router';
import TweenOne from 'rc-tween-one';
import Footer from './Footer';
//images
import hero from './../assets/css/images/case_natura_hero.png';
import img_001 from './../assets/css/images/case_natura_img_001.png';
import img_002 from './../assets/css/images/case_natura_img_002.png';
import img_003 from './../assets/css/images/case_natura_img_003.png';
import img_003_2 from './../assets/css/images/case_natura_img_003_2.png';
import img_004 from './../assets/css/images/case_natura_img_004.png';
import img_005 from './../assets/css/images/case_natura_img_005.png';
import img_006 from './../assets/css/images/case_natura_img_006.png';
import Callback from './Callback';

const ScrollParallax = ScrollAnim.Parallax;
const ScrollOverPack = ScrollAnim.OverPack;

    const Cores = {
        cor: '#fff',
        cor_sec_1: 'rgb(20,20,22,1)',
        cor_sec_2: 'rgb(20,20,22,1)',
        cor_destaque: '#ddd'
    }
    const CONTENT = {
        id: 'natura',
        h3: 'Natura',
        ano: '2019',
        cor: '#fff',
        bg: 'rgb(244,171,52,1)',
        bg_destaque: '#fff',
        categoria: "Redesign",
        tags: [<span>User Research<br /> UX Design <br /> Service Design </span>],
        url:'wwww.natura.com.br',
        h4: `Minha Divulgação Natura`,
        titulo_projeto: `Um case de Social Selling`,
        objetivo: [
            <p>Líder de mercado no segmento de cosméticos na América Latina, a Natura é uma empresa que começou e até hoje tem como serviço principal a venda direta com o intermédio das consultoras.</p>,<p className="sx_margin">Nossas sprints têm duração de duas semanas e em todas elas realizamos pesquisas com as nossas consultoras.</p>,<p className="sx_margin">As pesquisas vão desde testes de usabilidade mediação de dinâmicas presenciais a pesquisas em profundidade por telefone ou até feedback via hangouts. </p>
            ],
            objetivo: ` O Minha Divulgação é uma funcionalidade para a consultora e tem como objetivo tranformá-la em canal de mídia relevante e aumentar a sua influência com os clientes da marca e, consequentemente, tornar a Natura referência de Social Selling no país,`,
        titulo_desafio: `A funcionalidade`,
        desafio: [
        <p>Trata-se de um repositório de conteúdo dentro do APP da Consultora para o compartilhamento de imagens, vídeos e gifs de ofertas nas redes sociais. Lá elas encontrarão campanhas, informações sobre produto. Estamos o tempo todo em busca de oportunidades para evoluir a ferramenta. </p>,<p className="sx_margin"> Somos a squad referência da Natura, pois trabalhamos em método ágil entregando um produto que chega até a consultora para ajudar na agilidade do seu dia-a-dia.</p>],
        titulo_meupapel: `Meu papel no projeto`,
        meupapel: ['Como Designer de Serviços o meu papel é entender e conectar todos os pontos de contato de um serviço, através dos olhos do cliente final. O foco, ao invés de um produto, são as relações humanas e como as interações impactam suas necessidades em um nível emocional.'],
        items: 
        [
            {
            bg: 'rgb(255,172,36,1)',
            classe: 'image full margin padding',
            conteudo:[<img className='img_part natura_001' src={img_001} alt='' />]
        },
            
            
            {
                bg: '#fff',
                classe: 'content',
                titulo: [<h5 className="bx_margin">Descoberta</h5>,<div className="m_margin" />, <h6 className="s_margin">Pesquisa Contínua</h6>],
                conteudo: [
                    <p>Falamos com as consultoras durante todo o processo de criação e melhorias da funcionalidade.</p>,<p className="sx_margin">Nossas sprints têm duração de duas semanas e em todas elas realizamos pesquisas com as nossas consultoras.</p>,<p className="sx_margin">As pesquisas vão desde testes de usabilidade mediação de dinâmicas presenciais a pesquisas em profundidade por telefone ou até feedback via hangouts. </p>
                    ]
            },
            {
                bg: '#fff',
                classe: 'content',
                titulo: [<h6 className="mx_margin">Pesquisas Qualitativas<span>A Consultora participa efetivamente da construção do produto.</span></h6>],
                conteudo: [
                    <p>Toda implementação feita no Minha Divulgação é validada antes por nossas consultoras.</p>,<div className="m_margin" />,
                    ]
            },
            
            {
                bg: 'rgb(16,18,25,1)',
                classe: 'image full margin padding',
                conteudo:[
                    <p className="m_margin white">Entrevistamos as nossas consultoras</p>,<div className="m_margin" />,<img className='img_part natura_003' src={img_003} alt='' />,<p className="b_margin white">Testamos os protótipos e monitoramos a execução das tarefas:</p>,<div className="m_margin" />, <img className='img_part natura_003_2' src={img_003_2} alt='' />,<div className="mx_margin" />]
            },
            {
                bg: '#fff',
                classe: 'content',
                titulo: [ <h5 className="bx_margin">Implementação</h5>,<div className="mx_margin" />,<h6 className="s_margin">Personas</h6>],
                conteudo: [ 
                    <p>A partir das descobertas, captamos padrões e desenhamos os perfis das consultoras Natura atuantes nas redes sociais.</p>,<div className="mx_margin" />]
            }
            ,{
                bg: 'rgb(16,18,25,1)',
                classe: 'image full margin padding',
                conteudo:[<img className='img_part natura_004' src={img_004} alt='' />]
            },
            {
                bg: '#fff',
                classe: 'content',
                titulo: [ <h6 className="bx_margin">Fluxo</h6>],
                conteudo: [ 
                    <p>Desenhamos o fluxo básico de navegação pela interface</p>]
            }
            ,{
                bg: '#fff',
                classe: 'image full margin padding',
                conteudo:[<img className='img_part natura_005' src={img_005} alt='' />]
            },
            {   
                bg: '#fff',
                classe: 'content',
                titulo: <h6 className="b_margin">A jornada do consumidor final</h6>,
                conteudo: [<p>Para gerarmos valor na ferramenta de trabalho da consultora, fomos entender o consumidor final.</p>,<p>Conversamos com alguns consumidores que consomem Natura direto com a Consultora e desenhamos uma pequena jornada para entendermos as etapas do processo de compra na venda direta por meio das redes sociais.</p>,<div className="m_margin" />
                     
                    ]
            }
            ,
            {   
                bg: 'rgb(16,18,25,0.05)',
                classe: 'image full margin padding',
                conteudo: [
                    <p className="m_margin darker">A venda direta nas redes sociais
                    </p>,<div className="m_margin" />,
                    <img className='natura_002' src={img_002} alt='' />
                    ]
                }

,
{   
    bg: '#fff',
    classe: 'content',
titulo: [<h5 className="bx_margin">Análise de Métricas</h5>,<div className="mx_margin" />,<h6 className="s_margin">Busca por oportunidades</h6>],
    conteudo: [<p>Acessamos e observamos os números da funcionalidade em busca de oportunidades para a evolução do Minha Divulgação.</p>,<div className="m_margin" />
         
        ]
}
,
{   
    bg: 'rgb(255,172,36,1)',
    classe: 'image full margin padding',
    conteudo: [
        <img className='natura_006 mx_margin' src={img_006} alt='' />
        ]
    }
]}
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
            500, 500
        ],
        duration: [1200, 1000]
    }
    class Natura extends React.Component {
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
            },1800)
            
            this.smoothScroll.scrollTo('#root')
        }
        smoothScroll = {
            scrollTo: (id, callback) => {
                var settings = {
                    duration:800,
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
                <div style={{width: '100%', height: '100%', background: 'white'}}>
            <TweenOne id={CONTENT.id} reverse={this.state.reverse} reverseDelay={200}  component='div' key={CONTENT.id}  className='interna cases' animation={[{opacity:0, duration: 1000, top: '5vh',delay: 0, left:'0' },{opacity:1, ease: 'easeInOutExpo',duration: 1500,top: 40, delay: 0, left:'0' }  ]} style={{opacity:0}}>
                                <Callback
                                    key={this.index}
                                    to={this.to}
                                    component={this.component}
                                    hash={'#'+CONTENT.id}
                                    cor1={Cores.cor}
                                    project={CONTENT.h4}
                                    client={CONTENT.h3}
                                    cor2={Cores.cor_sec_2} style={{opacity:1, transform: `translateY(100px)`}} onClick={this.onClick} />
                    
                    <ScrollOverPack component='section' id='hero'
                            style={{
                            backgroundColor: CONTENT.bg,
                            height: '100vh'
                        }}
                        playScale={['0%', '50%']}>
    
                        <QueueAnim
                            location={CONTENT.id}
                            component='header'
                            interval={PROP.interval}
                            delay={[300, 200]}
                            duration={PROP.duration}
                            type={['bottom', 'top']}
                            ease={['easeInOutExpo','easeInOutExpo']}
                            animConfig={[
                            [
                                {
                                    opacity: [
                                        1, 0
                                    ],
                                    scale: [
                                        1, 1.2
                                    ],
                                    y:`20vh`,
                                    
                                    x: [
                                        0 + 'vw',
                                        0 + 'vw'
                                    ]
                                }, {
                                    opacity: [
                                        1, 0
                                    ],
                                    scale: [
                                        1, 1.2
                                    ],
                                    y:
                                        `0vh`
                                    ,
                                    x: [
                                        0 + 'vw',
                                        0 + 'vw'
                                    ]
                                }
                            ]
                        ]}ease={PROP.ease} >
                            <img  key={this
                                    .state
                                    .items
                                    .map((i) => i.key+'000')} src={hero} alt='' />
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
                                <h5 className="dark">{CONTENT.titulo_projeto}</h5>
                                <p>{CONTENT.objetivo}</p>
                                <h6 className="dark">{CONTENT.titulo_desafio}</h6>
                                {CONTENT.desafio}
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
    export default withRouter(Natura);
