import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import { withRouter } from 'react-router';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Footer from './Footer';
//images
import hero from './../assets/css/images/case_dkids_hero.jpg';
import img_001 from './../assets/css/images/case_dkids_img_001.png';
import img_full from './../assets/css/images/case_dkids_img_full.png';
import Callback from './Callback';

const ScrollParallax = ScrollAnim.Parallax;
const ScrollOverPack = ScrollAnim.OverPack;
const Cores = {
    cor: '#00009C',
    cor_sec_1: '#6DC900',
    cor_sec_2: '#6DC900',
    cor_ter: '#00009F'
}
const CONTENT = {
    id: 'dkids',
    h3: <h3 style={{
        color: '#00009F'
    }}>discovery kids</h3>,
    ano: <span className='ano'>2015</span>,
    cor: '#E20007',
    cor_sec: '#FFF600',
    // cor_sec: '#542A14',
    bg: '#BBFF09',
    bg_sec: '#7BDF00',
    // bg_sec: '#FFE900',
    categoria: "Portal",
    tags: [<span>Information Architeture<br /> User Interface <br /> Web Development</span>],
    
    url: "www.discoverykids.com.br",
    h4: `Portal Discovery Kids`,
    titulo_projeto: `Redesign do Site`,
    objetivo: "Em 2015, o canal infantil e todos os outros da Discovery Channel LATAM, passaram por uma repaginada. O objetivo do novo portal da é, além de encantar as crianças, passar segurança aos pais e trazer para a internet uma experiência semelhante a da existente na Discovery Kids na TV. ",
    titulo_desafio: `Desafio`,
    desafio: `Trabalhar a usabilidade e o visual com foco na navegabilidade, guiando o usuário, de forma lúdica, até a página-destino. As crianças deverão ter o controle total da aplicação.`,
    titulo_meupapel: `Meu papel no projeto`,
    meupapel: ['Participei das pesquisas e das rodadas de Testes de Usabilidade. Responsável pelas micro interações, implementei protótipos de flta fidelidade em HTML, CSS e JS com a navegação em parallax. '],
    
    items: [
        
    {
        // bg: 'rgb(255,202,67,1)',

        bg: 'rgb(126,221,255,0.4)',
        classe: 'image full margin nopadding',
    conteudo: [
    <img className='img_part dkids_001' src={img_001} alt='' />]
    },
        {
            bg: '#fff',
            classe: 'content',
    titulo: [<h5 className="bx_margin">Descoberta</h5>,<h6 className="s_margin">Benchmark</h6>],
    conteudo: [<p>As pesquisas de Benchmark nos mostraram que o Portal da Discovery Kids demandaria duas etapas distintas:
    </p>,
    <p>Uma Landing Page, que consistirá em um Web App com um Conteúdo voltado para os pais e a sua navegação será composta de Chamadas para o conteúdo interno;
    </p>,
    <p>As páginas internas terão a Arquitetura de Informação toda pensada para o target do canal: as crianças. Esse conteúdo principal exibirá vídeos, fotos, jogos online, infos da programação televisiva e dos personagens em destaque.
    </p>,
    ]
    }, 
        {
        bg: '#fff',
        classe: 'content',
        titulo: [<h5 className="bx_margin">Validação</h5>,<h6 className="s_margin">Testes de usabilidade</h6>],
        conteudo: [<p>Realizamos Testes de Usabilidade com crianças de 2 a 8 anos que, por sua vez se mostraram, além de familiarizadas com o Device ( iPad ), curiosas para acessar todo o conteúdo interativo, navegando para os próximos vídeos e jogos.
    </p>,<p>Fizemos, então, uma nova rodada de testes, desta vez dando acesso, para as crianças, ao conteúdo que antes era para os pais e, em quase todos os casos, a navegação foi fluida e consistente em direção à conclusão da jornada sugerida.
    </p>,
    ]
    }, 
    {
        bg: '#fff',
        classe: 'content',
    titulo: [<h5 className="bx_margin">Interface</h5>],
        conteudo: '',
    },
    
{
    
    bg: 'rgb(7,95,165,0.12)',
    classe: 'image full margin padding',
conteudo: [<img className='img_part dkids_full' src={img_full} alt='' />]
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

export default withRouter(Mars);
