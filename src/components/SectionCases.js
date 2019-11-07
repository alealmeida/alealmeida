import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import {withRouter} from 'react-router';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import CONTENT from './CONTENT';
import {Link} from 'react-router-dom';
import Arrow from './Icons/Arrow'
import ProgressiveImage from 'react-progressive-image';
const ScrollParallax = ScrollAnim.Parallax;
const ScrollOverPack = ScrollAnim.OverPack;

const find = id => CONTENT.find(p => p.id === id);
class SectionCases extends React.Component {
    constructor({props, to, target, data, ref}) {
        super({props, data})
        this.target = target
        this.to = to

        this.state = {
            reverse: false,
            items: [
                {
                    key: 1
                }, {
                    key: 2
                }, {
                    key: 3
                }, {
                    key: 4
                }, {
                    key: 5
                }, {
                    key: 6
                }
            ]
        }
        this.i = find(data.params.id);
        this.onClick = this
            .onClick
            .bind(this);
    }
    onMouseEnter = (e) => {
        e.preventDefault()
        var parent = document.getElementById(this.to.split('/')[1]);
        parent.className = 'cases over'
    }
    onMouseOut = (e) => {
        e.preventDefault()
        var parent = document.getElementById(this.to.split('/')[1]);
        parent.className = 'cases out'
    }
    onClick = (e) => {
        e.preventDefault()
        this.setState({reverse: true, items: []});
        setTimeout(() => {
            this
                .props
                .history
                .push(this.to)
        }, 1500)
    }
    render() {
        const estado = this.state.items
        return (
            <TweenOne
            id={CONTENT.id}
            ref={this.myRef}
            reverse={this.state.reverse}
            reverseDelay={10}
            component='div'
            key={CONTENT.id}
            className={'main '+this.i.id}
            animation={[
            {
                opacity: 1,
                duration: 0,
                delay: 0,
                zIndex: 999999
            }, {
                opacity: 1,
                ease: 'easeInOutExpo',
                duration: 1800,
                delay: 0
            }
        ]}
            style={{
            opacity: 0
        }}>
                <section
                    style={{
                    backgroundColor: this.i.cores.bg_chamada
                }}
                    id={this.i.id}
                    className='cases'>

                    <ScrollOverPack
                        appear={true}
                        always={true}
                        component='header'
                        playScale={[-.1, 2.2]}>
                            {/* <QueueAnim
                        interval={[120, 100]}
                        delay={[0, 0]}
                        duration={[100, 600]}
                        ease={['easeOutQuint']}
                        type={['bottom', 'top']}
                        animConfig={[
                        [
                            {
                                opacity: [
                                    1, 0
                                ],
                                y: [0, 10]
                            }, {
                                opacity: [
                                    1, 0
                                ],
                                y: [0, 10]
                            }
                        ]
                    ]}>

                        <Link
                        key={0}
                            to='/'
                            className='logo'
                            style={{
                            color: this.i.cores.cor_chamada,
                            opacity: 0,
                            position: 'fixed'
                        }}>

                            Ale
                            <br/>
                            Almeida
                            <span>
                                Product Design, Creative Direction
                            </span>

                        </Link>
                    </QueueAnim> */}
                        <QueueAnim
                            interval={[220, 100]}
                            delay={[1200, 0]}
                            duration={[1200, 300]}
                            ease={['easeInOutQuint']}
                            
                           leaveReverse={this.state.reverse}
                            type={['bottom', 'top']}
                            animConfig={[
                            
                                {
                                    opacity: [
                                        1, 0
                                    ],
                                    y: [0, 60]
                                }
                            
                        ]}>
                            {/* <label
                                key={estado.map((i) => i.key = 1)} 
                                style={{
                                color: this.i.cores.cor_chamada, 
                                opacity: 0
                            }}>{this.i.letra}
                            </label>
                            <h3
                                key={estado.map((i) => i.key = 2)}
                                style={{
                                opacity: 0
                            }}>{this.i.h3}</h3> */}
                            <h4
                                key={estado.map((i) => i.key = 1)}
                                style={{
                                opacity: 0
                            }}>{this.i.h4}</h4>
                            <p
                                key={estado.map((i) => i.key = 2)}
                                style={{
                                opacity: 0
                            }}>{this.i.p}</p>
                            <figure
                                key={estado.map((i) => i.key = 3)}
                                style={{
                                opacity: 0
                            }}><Arrow cor={this.i.cores.cor_chamada}/></figure>
                            <Link
                                to={this.to}
                                onClick={this.onClick}
                                onMouseEnter={this.onMouseEnter}
                                onMouseOut={this.onMouseOut}
                                className='callcase'/>

                        </QueueAnim>
                        

                    </ScrollOverPack><ScrollParallax
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
                                opacity: 1
                            }}><ProgressiveImage
                            src={this.i.image}
                            placeholder={this.i.imagetiny}
                          >
                            {(src, loading) => (<img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt="" />)}
                          </ProgressiveImage>
                            </TweenOne>
                        </ScrollParallax>
                </section>
            </TweenOne>
        );
    }
}

export default withRouter(SectionCases);
