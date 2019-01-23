import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import screen from './mixins';
const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;

const LoadSection = () => {
    const CONTENT = {
        h2: `Uma  agência       nova  feita  de       gente  experiente.`,
        items: [
            {
                classe: 'perfil_1',
                perfil: 'Bianca  Aguiar',
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
                ease: 'easeOutBack',
                playScale: [
                    -1, -1
                ],
                opacity: 1,
                scale: 0.88,
                translateY: screen(10),
                translateX: screen(-0.4)
            }, {
                opacity: 1,
                ease: 'easeInOutElastic',
                playScale: [
                    -1.8, 3
                ],
                scale: 1,
                translateY: screen(0),
                translateX: screen(0)
            }
        ]
    }
    return (
        <ScrollElement component='section' id='page4'>
            <ScrollParallax always={true} component='header' animation={PROP.timeline_1}>
                <h2>{CONTENT.h2}</h2>
            </ScrollParallax>
            {CONTENT
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
                ))}
        </ScrollElement>
    );
};

class SectionFour extends React.Component {
    render() {
        return (<LoadSection/>)
    }
}
export default SectionFour;
