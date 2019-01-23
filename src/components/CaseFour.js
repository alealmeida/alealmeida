import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import Nav from '../main/Nav'
import image from '../assets/css/images/case_mms.png';
import SvgIcon from '@material-ui/core/SvgIcon';
import Arrow from './Icons/Arrow';
import screen from './mixins';
const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;
const ScrollOverPack = ScrollAnim.OverPack;

const LoadSection = () => {
    const CONTENT = {
        letra: 'M',
        h2: 'Mars',
        cor: '#E21509',
        bg: '#FFE20C',
        h4: "MM's",
        p: "Interface promocional do Festival do Amendoin.",
        items: [
            {
                classe: 'perfil_1',
                perfil: 'Nova Interface',
                cargo: 'Sócia Diretora de Atendimento',
                email: 'bianca@agenciaonoff.com',
                destaque: 'Com experiência de 15 anos na área de atendimento, passei por grandes agências c' +
                        'omo Integer Outpromo, Accuracy, Bullet e Marketing House, sempre pensando no cli' +
                        'ente em primeiro lugar com a excelência da entrega de um job completo.',
                coluna_1: 'Atendi a grandes clientes como P&G, Reckitt Benckiser, Nissin, Mondelez, Mars, D' +
                        'iageo, Philips, Adidas, Camil, Akzo Nobel, Raízen, Comgás, Ypê, Bridgestone, Gru' +
                        'po DPSP e FedEx, trabalhando desde o briefing até sua conclusão junto às equipes' +
                        ' de criação, planejamento, produção e operações.',
                coluna_2: 'Forte expertise em promoções com sorteio e premiação instantânea, campanhas de i' +
                        'ncentivo, ações de endomarketing, sampling, money back, concurso cultural, lança' +
                        'mento de produto, ações de relacionamento, convenções e eventos, ações e materia' +
                        'is de PDV, gerenciando da criação do conceito à execução e entrega.',
                key: 1
            }, {
                classe: 'perfil_2',
                perfil: 'Alexandre  Almeida',
                cargo: 'Sócio Diretor de Criação',
                email: 'ale@agenciaonoff.com',
                destaque: 'Sou especialista em produtos digitais, com 15 anos de experiência atuando na con' +
                        'strução de interfaces para grandes marcas e com passagem por agências como HUGE,' +
                        ' Ogilvy & Mather, Wunderman, Integer Outpromo.',
                coluna_1: 'Realizei trabalhos para clientes como Coca-Cola, Discovery Channel, Caixa, P&G, ' +
                        'Reckitt Benckiser, Mars, Diageo, Oi, Vivo, Bradesco Seguros, Itaú, Banco Safra, ' +
                        'Extra, Ponto Frio, Porto Seguro e Ministério da Cultura. Nesse período aprendi, ' +
                        'com os processos de Design, a simplificar produtos a partir de modelos complexos' +
                        ' através de metodologias e conceitos de inovação.',
                coluna_2: 'Forte expertise em estratégia e concepção de produtos, passando por todas as eta' +
                        'pas do processo da sua construção: pesquisas de imersão e descoberta, para ident' +
                        'ificar os objetivos do negócio; em seguida é feita a ideação, para encontrar as ' +
                        'necessidades do cliente; a partir daí, chega a etapa de criação do conceito e de' +
                        'senvolvimento da interface. Acompanho toda a execução até sua entrega.',
                key: 2
            }
        ]
    };
    const PROP = {
        timeline_1: [
            {
                ease: 'linear',
                playScale: [
                    -1, 0
                ],
                opacity: 1
            }, {
                opacity: 1,
                ease: 'linear',
                playScale: [0.5, 0.6]
            }
        ],timeline_2: [
            {
                opacity: 1,
                ease: 'linear',
                playScale: [
                    -4, -4
                ],
                translateY: '40%',
                // translateX: '15%',
                scale:1.6,
                blur: '260px'
            }, {
                opacity: 1,
                ease: 'easeOutCubic',
                playScale: [0.7, 1.5],
                blur: '0px',
                translateY: '80%',
                translateX: '-1%'
            }, {
                ease: 'easeInOutElastic',
                playScale: [
                    -3.4, 2.8
                ],
                scale: 1,
                translateX: '-3%'
            }
        ]
    }
    return (
        <ScrollOverPack
            appear={true}
            always={true}
            repeat={true}
            component='section'
            id='case2'
            className='cases'
            playScale={[0.4, 2.5]}
            style={{
            backgroundColor: CONTENT.bg
        }}>

            <ScrollParallax location="case2" replay={true} always={true} component='header'>
                <Nav
                    key='0'
                    style={{
                    color: CONTENT.cor
                }}/>
                <QueueAnim
                    interval={[200, 800]}
                    delay={[0, 0]}
                    duration={[2000, 2600]}
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
                            y: [0, 150]
                        }, {
                            opacity: [
                                1, 0
                            ],
                            y: [0, 150]
                        }
                    ]
                ]}>aside
                a.back(href="/index.html")
                    i(class="material-icons") arrow_back
                    i Voltar
                .boxes
                    a.on(href="") UI
            section#hero
                h2 Mars
                p.description Site Promocional
                    span.agency Integer 2017
                figure
                    img(src="img/mars/img-hero-mms.png")
            header
                h4 Resumo
                ul.horizontal_list
                    li
    
                        h6 Equipe
                        p Alê
                    li
                        h6 Plataformas
                        .devices
                            i(class="material-icons desk") laptop
                            i(class="material-icons laptop") tablet
                    li  
                        h6 Atuei nas fases de
                        p AI, UI
                    li
                        h6 WebSite
                        p www.mars.com
            section.container#one.ligado
                
                article
                    h4 Objetivo do Projeto
                    p 
                    
                    h4 O que fiz
                    ul.list
                        li Trabalhei o fluxo do hotsite, desde os requisitos funcionais até as especificidades na regra da promoção;
                        li Criei o conceito visual e atuei no design de interfaces;
                        li Realizei testes de usabilidade em dispositivos móveis e testes a/b.
                h3 UI
                article
                    h4 Design de Interfaces
    
                    ul.list
                        li Criação do conceito visual.
                        li Atuação como Designer de Interfaces;
    
                    h4 Racional
                    p O guide de MM's exigia uma linha minimalista e estimulava que explorássemos as inserções das personagens na interface ao longo da página.
                    p O racional foi usar, na one page, as personagens interagindo com as resoluções dos devices e divisões de sessão.
                    p O uso da tipografia foi essencial para arquitetura de informação, pois as fontes usadas tem peso diferenciada na hierarquia do conteúdo.
                figure
                    img(src="img/mars/img-case-mms.jpg", class='xlarge')  
        
                    
            script(type="text/javascript", src='/js/main.js')
                    <label key='1'
                        style={{
                        color: CONTENT.cor
                    }}>{CONTENT.letra}</label>
                    <h3 key='2'>{CONTENT.h3}</h3>
                    <ScrollParallax key='3'
                        always={true}
                        component='h4'
                        animation={{opacity:1,playScale:[0,0.2] }}>{CONTENT.h4}</ScrollParallax>
                    <ScrollParallax key='4'
                        always={true}
                        component='p'
                        animation={{opacity:1,playScale:[0,0.2] }}>{CONTENT.p}</ScrollParallax>
                    <ScrollParallax key='5'
                        always={true}
                        component='figure'
                        animation={{opacity:1,playScale:[0,0.2] }}><Arrow /></ScrollParallax>
                </QueueAnim>
            </ScrollParallax><ScrollParallax
                component='article'
                always={true}
                animation={PROP.timeline_2}>
                
                <img src={image} />
            </ScrollParallax>
            {/* {CONTENT
                .items
                .map((item) => (
                    <ScrollParallax always={true} component='article' className={item.classe}>
                        <header>
                            <h4>{item.perfil}</h4>
                            <span>
                                {item.cargo}
                                <a href={item.email}>{item.email}</a>
                            </span>
                            <p className='destaque'>{item.destaque}</p>
                        </header>
                        <div className='job_description'>
                            <p>{item.coluna_1}</p>
                            <p>{item.coluna_2}</p>
                        </div>
                    </ScrollParallax>
                ))} */}
        </ScrollOverPack>
    );
};

class CaseFour extends React.Component {
    render() {
        return (<LoadSection/>)
    }
}
export default CaseFour;
