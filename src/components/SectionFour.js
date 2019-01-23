import React from 'react';
import PropTypes from 'prop-types'
import ScrollAnim from 'rc-scroll-anim';
import {withRouter} from 'react-router';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import CONTENT from './CONTENT';
import {Link} from 'react-router-dom';
import Arrow from './Icons/Arrow'
import ProgressiveImage from 'react-progressive-image';
const ScrollElement = ScrollAnim.Element;
const ScrollParallax = ScrollAnim.Parallax;
const ScrollOverPack = ScrollAnim.OverPack;

const find = id => CONTENT.find(p => p.id === id);

class SectionFour extends React.Component {
    constructor({props, to, target, data}) {
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
        return (
            <ScrollElement
                id='home'
                style={{
                width: '100vw',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <section
                    style={{
                    backgroundColor: this.i.bg
                }}
                    id={this.i.id}
                    className='cases'>

                    <ScrollOverPack
                        appear={true}
                        always={true}
                        component='header'
                        playScale={[0, 1]}>
                        <QueueAnim
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
                                key={this
                                .state
                                .items
                                .map(key => 0)}
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
                        </QueueAnim>
                        <QueueAnim
                            interval={[120, 100]}
                            delay={[0, 0]}
                            duration={[1300, 300]}
                            ease={['easeOutQuint']}
                            leaveReverse
                            type={['bottom', 'top']}
                            animConfig={[
                            [
                                {
                                    opacity: [
                                        1, 0
                                    ],
                                    y: [0, 60]
                                }, {
                                    opacity: [
                                        1, 0
                                    ],
                                    y: [0, 60]
                                }
                            ]
                        ]}>

                            <label
                                key={this
                                .state
                                .items
                                .map(key => 1)}
                                style={{
                                color: this.i.cores.cor_chamada
                            }}>{this.i.letra}
                            </label>
                            <h3
                                key={this
                                .state
                                .items
                                .map((i) => i.key = 2)}>{this.i.h3}</h3>
                            <h4
                                key={this
                                .state
                                .items
                                .map((item) => item.key = 3)}>{this.i.h4}</h4>
                            <p
                                key={this
                                .state
                                .items
                                .map((item) => item.key = 4)}>{this.i.p}</p>
                            <figure
                                key={this
                                .state
                                .items
                                .map((item) => item.key = 5)}><Arrow cor={this.i.cores.cor_chamada}/></figure>
                            <Link
                                key={this
                                .state
                                .items
                                .map((item) => item.key = 6)}
                                to={this.to}
                                onClick={this.onClick}
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
                                opacity: 0
                            }}><ProgressiveImage
                            src={this.i.image}
                            placeholder={this.i.imagetiny}
                          >
                            {(src, loading) => (<img style={{ opacity: loading ? 0.1 : 1 }} src={src} alt="an image" />)}
                          </ProgressiveImage>
                            </TweenOne>
                        </ScrollParallax>
                </section>
            </ScrollElement>
        );
    }
}

export default withRouter(SectionFour);
