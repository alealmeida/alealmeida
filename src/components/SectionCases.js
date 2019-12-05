import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import { withRouter } from 'react-router';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import params from './CONTENT';
import { Link } from 'react-router-dom';
const ScrollParallax = ScrollAnim.Parallax;
const ScrollOverPack = ScrollAnim.OverPack;

// const found = array1.find(element => element > 10);

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
    constructor({ props, to, target, data, i, p }) {
        super({ props, data,i, p})
        this.state = {
            reverse: false,
            items: [
                {
                    key: '11'
                },
            ],
            class: 'cases',
            classAtivo: 'cases_clicado'
        }
        this.target = target
        this.to = to
        this.class = this.state.class
        this.classAtivo = this.state.classAtivo
        this.data = data
    }
    onClick = (e) => {
        e.preventDefault()
        this.setState({
            reverse: true,
            items: [],
            class: (this.class + " " + this.classAtivo)

        });
        setTimeout(() => {
            this.props.history.push(this.to)
        }, 2500)
    }
    render() {
        const find = id => params.find(n => n.id == id)
        this.i = find(this.data.param.id)
        const to = this.to,
        target = this.target,
        ident = this.i.id,
        index = this.i.index,
        estilo = this.i.estilo,
        content = this.i.content,
        animation = this.i.animation,
        tween = this.i.tween,
        image = this.i.content.image
        return (
            <ScrollOverPack 
                ref={this.myRef}
                style={{
                    backgroundColor: estilo.bg
                }}
                id={ident}
                component='section'
                className={this.state.class}
                appear={true} always={true}
                playScale={[0, 3.2]}>
                <div className='bg' style={{
                    backgroundColor: estilo.bg
                }}></div>
                <Link
                    to={to}
                    target={target}
                    onClick={this.onClick}
                    className='callcase' />
                <QueueAnim
                    component='header'
                    type={['bottom', 'top']} interval={[150, 100]} delay={[600, 100]}
                    duration={[600, 800]}
                    ease={['easeOutCirc', 'easeInOutCirc']} leaveReverse reverse={this.state.reverse} animConfig={[{ opacity: [1, 0], y: [0, 80] }, { opacity: [1, 0], y: [0, 80] }]}>
                    {
                        this.state.items.map(() =>
                            [
                                <h4 key={(index + '0')} style={{ opacity: 0, color: estilo.cor }} >{content.h4}</h4>,
                    <p key={(index + '1')} style={{ opacity: 0, color: estilo.cor}} >{content.p}</p>
                            ]
                        )
                    }

                </QueueAnim>
                <ScrollParallax
                    location={ident}
                    component='article'
                    always={true}
                    animation={animation}>
                    <TweenOne
                        reverse={this.state.reverse}
                        id={ident}
                        component='div'
                        key={ident}
                        className='cases'
                        reverseDelay={0}
                        animation={tween}
                        style={{
                            opacity: 0
                        }}>{content.media}
                    </TweenOne>
                </ScrollParallax>
            </ScrollOverPack>
        );
    }
}

export default withRouter(SectionCases);
