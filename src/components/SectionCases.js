import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import { withRouter } from 'react-router';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import CONTENT from './CONTENT';
import Qanim from './CONTENT';
import { Link } from 'react-router-dom';
const ScrollParallax = ScrollAnim.Parallax;
const ScrollOverPack = ScrollAnim.OverPack;

const find = id => CONTENT.find(p => p.id === id);

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
    ease: [
        'easeInOutExpo', 'easeOutExpo'
    ],
    delay: [
        1500, 1500
    ],
    duration: [1200, 2000]
}
class SectionCases extends React.Component {
    constructor({ props, to, target, data, ref }) {
        super({ props, data })
        this.target = target
        this.to = to
        
        this.class = 'cases';
        this.classAtivo = 'cases_clicado';
        this.i = find(data.params.id);
        this.state = {
            reverse: false,
            items: [
                {
                    key: '11'
                },
            ],
            class:  this.class
        }
    }
    onClick = (e) => {
        e.preventDefault()
        this.setState({
            reverse: true,
            items: [],
            class: (this.class +" "+ this.classAtivo)

        });
        setTimeout(() => {
            this.props.history.push(this.to)
        }, 2500)
    }
    render() {
        return (


            <ScrollOverPack
                ref={this.myRef}
                style={{
                    backgroundColor: this.i.cores.bg_chamada
                }}
                id={this.i.id}
                component='section'
                className={this.state.class}
                appear={true} always={true}
                playScale={[0, 3.2]}>
                <div className='bg' style={{
                    backgroundColor: this.i.cores.bg_chamada
                }}></div>
                <Link
                            to={this.to}
                            onClick={this.onClick}
                            className='callcase' />
                    <QueueAnim
                        component='header'
                        type={['bottom', 'top']} interval={[150, 100]} delay={[600, 100]}
                        duration={[600, 800]}
                        ease={['easeOutCirc', 'easeInOutCirc']} leaveReverse reverse={this.state.reverse} animConfig={[{ opacity: [1, 0], y: [0, 80] }, { opacity: [1, 0], y: [0, 80] }]}>
                        {
                            this.state.items.map((item) =>
                                [
                                    <h4 key={(item.key + this.i.index)} style={{ opacity: 0, color: this.i.cores.cor_chamada }} >{this.i.h4}</h4>,
                                    <p key={(item.key + this.i.index + '1')} style={{ opacity: 0, color: this.i.cores.cor_chamada }} >{this.i.p}</p>
                                ]
                            )
                        }

                    </QueueAnim>
                <ScrollParallax
                    location={this.i.id}
                    component='article'
                    always={true}
                    animation={this.i.timeline}>
                    <TweenOne
                        reverse={this.state.reverse}
                        id={CONTENT.id}
                        component='div'
                        key={CONTENT.id}
                        className='interna cases'
                        reverseDelay={0}
                        animation={this.i.tween}
                        style={{
                            opacity: 0
                        }}><img className='img_part caixa_016' src={this.i.image} alt='' />
                    </TweenOne>
                </ScrollParallax>
            </ScrollOverPack>
        );
    }
}

export default withRouter(SectionCases);
