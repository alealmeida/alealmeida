import React from 'react';
import TweenOne from 'rc-tween-one';
import ScrollAnim from 'rc-scroll-anim';
import Nav from './Nav';
import {Link} from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
import ArrowBack from './../components/Icons/ArrowBack';
const ScrollElement = ScrollAnim.Element;
const ScrollOverPack = ScrollAnim.OverPack;

const ScrollParallax = ScrollAnim.Parallax;

class Callback extends React.Component {
    constructor({
        props,
        to,
        component,
        style,
        index,
        cor1,
        cor2,
        hash,
        project,
        onClick,
        client
    }) {
        super(props)
        const position1 = 'fixed'
        const position2 = 'absolute'
        this.font = 30
        this.line = 10
        this.state = {
            css: {
                height: '100',
                position: 'fixed'
            },
            bg: {
                opacity: 0
            },
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
            ],
            fill: cor1,
            color: cor1,
            cssNoPosition: true,
            theposition: window.pageYOffset,
            width: "calc(1em + 12vmin)",
            font: `${this.font}`,
            line: this.line,
            height: '15vmin'
        };
        this.index = index
        this.to = to
        this.style = style
        this.component = component
        this.cor1 = cor1
        this.cor2 = cor2
        this.project = project
        this.client = client
        this.hash = hash
        this.onClick = onClick
        this.theposition = window.pageYOffset
    }
    componentDidMount = () => {
        window.addEventListener('load', this.setState({fill: this.cor2}));
        this.prev = window.scrollY;
        // window.addEventListener('scroll', e => this.handleNavigation(e));
    }

    // handleNavigation = (e) => {     const window = e.currentTarget;     if
    // (this.prev > window.scrollY) {         console.log("scrolling up");     }
    // else if (this.prev < window.scrollY) {         console.log("scrolling down");
    // }     this.prev = window.scrollY; };
    setCss = (e) => {
        const css = this.state.css;
        const bg = this.state.bg;
        const theposition = window.pageYOffset
        const heropos = document.querySelector('#hero');
        const barraheight = document
            .querySelector('.barra_topo')
            .getBoundingClientRect()
            .height;
        const initialtop = heropos.offsetTop

        const altura = window.innerHeight
        if (theposition < initialtop - barraheight * 2.5) {
            css.position = "fixed";
            css.top = '';
            css.color = this.cor1
            bg.top = -100
            bg = 'transparent'
        } else {
            css.position = "absolute"
            css.top = '';
            css.color = this.cor2
            bg.top = 0
            bg = 'white'
        }
        this.setState({css, bg, theposition});
    };
    setFill = (e) => {
        const theposition = window.pageYOffset
        const css = this.state.css;
        const altura = window.innerHeight
        const heropos = document.querySelector('#hero');
        const barraheight = document
            .querySelector('.barra_topo')
            .getBoundingClientRect()
            .height;
        const initialtop = heropos.offsetTop
        const y = 0
        console.log(
            'pos: ' + theposition + ' | altura: ' + altura + ' | inicio: ' + initialtop + ' | barra: ' +
            barraheight
        )
        this.setState({
            line: ((((theposition * 5 / altura) / 10)))+`em`,
            height: this.state.height,
            font: ((theposition / altura)/30)+`em`
        })

        if (theposition <= (initialtop - barraheight/2)|| theposition > altura + initialtop - barraheight * 2.8) {
            this.setState({
                css,
                fill: this.cor2,
                color: this.cor2,
            })

        } else {
            this.setState({
                css,
                fill: this.cor1,
                color: this.cor1,
            });
        }


        if (theposition < initialtop - barraheight * 1.5) {
            this.setState({
                top: (altura - (theposition + initialtop + barraheight *0.5) ),
                // font: ((theposition / altura)/100)+`em`
            })

        } else if ((theposition <= altura + barraheight)) {
            this.setState({
                css,
                width: "calc(1em + 12vmin)",
                top: -theposition + barraheight * 2.2
            });
        } else if ((theposition > altura + barraheight * 3)) {
            this.setState({
                width: "calc(1em + 12vmin)",
                bg: 'white',
                // top: theposition <= altura+barraheight*2 ?  theposition  <
                // initialtop-barraheight*2 ? 0: -theposition+initialtop+barraheight*2 :
                // (barraheight*3),
                top: 0,
                font: ((theposition / altura)/30)+`em`
            });
        } else {
            this.setState({
                css,
                width: "100%",
                bg: 'transparent',
                top: theposition - altura - initialtop + barraheight ,
                // font: (((theposition * 5 - y) / altura)),
                // font:(altura-theposition)/20
            });
        }
    };
    render() {
        const estado = this.state.items
        return (
            <ScrollOverPack id="Scroll-Pack">
                <div
                    style={{
                        background: this.state.bg,
                        top: this.state.top/2,
                        height: this.state.height
                    }}
                    className='barra_topo'>
                    <section className='titulo'>
                        <ScrollParallax
                            location="Scroll-Pack"
                            component="h3"
                            animation={[
                                {
                                    scale: 0.51,
                                    playScale: [
                                       1.1, 1.5
                                    ],
                                    y: '0.12em',
                                    x: '-60.5%',
                                    ease: 'easeInOutQuad',
                                    // fontSize: this.state.font
                                }, {
                                    scale: 0.4,
                                    playScale: [
                                        0.4, 1.2
                                    ],
                                    x: '-64.5%',
                                    ease: 'easeInOutQuad',
                                    y: '-0.15em',
                                }
                            ]} 
                            // style={{
                            //         lineHeight: `clamp(1.2em,(1.3em - ${this.state.line}),1.5em)`
                            //     }}
                            >
                                {this.client}
                            </ScrollParallax>
                        <ScrollParallax
                            location="Scroll-Pack"
                            component="h4"
                            // style={{
                            //     fontSize: `clamp(1.4em,(3em - ${this.state.font}),3em)`,
                            //     lineHeight: `clamp(1.2em,(1.3em - ${this.state.line}),1.5em)`
                            // }}
                            animation={[
                                {
                                    scale: 0.4,
                                    playScale: [
                                        1.12, 1.55
                                    ],
                                        y: '-0.8em',
                                        x: '-65%',
                                        ease: 'easeInOutQuad',
                                    // fontSize: this.state.font
                                }, {
                                    scale: 0.38,
                                    playScale: [
                                        0.4, 1.2
                                    ],
                                    ease: 'easeInOutQuad',
                                    y: '-1.4em',
                                    x: '-65.5%',
                                }
                            ]}
                            >
                                {this.project}
                            </ScrollParallax>
                        {/* <h4
                            style={{
                                fontSize: `clamp(1.4em,(3em - ${this.state.font}),3em)`,
                                lineHeight: `clamp(1.2em,(1.3em - ${this.state.line}),1.5em)`
                            }}></h4> */}
                </section>

            </div>
            <Link
                key={this.index + 'aa'}
                to={this.to}
                component={this.component}
                hash={this.hash}
                onClick={this.onClick}
                className='callback'
                style={{ height: this.state.height}}
                    >
                <ScrollParallax
                    id="comp"
                    component='label'
                    style={{
                        color: this.state.color,height: this.state.height
                    }}
                    cor={this.state.fill}
                    className='logo'
                    animation={[
                        {
                            ease: 'easeInOutCubic',
                            playScale: [
                                -1, -1.5
                            ],
                            opacity: 1,
                            onComplete: () => {
                                this.setFill()
                            }
                        }, {

                            ease: 'easeOutCubic',
                            playScale: [
                                1.6, 1.95
                            ],
                            translateX: '-2%',
                            top: 0,
                            onStart: () => {
                                this.setFill()
                            },
                            onComplete: () => {
                                this.setFill()
                            }
                        }
                    ]}>Ale Almeida</ScrollParallax>
                <ScrollParallax
                    component={ArrowBack}
                    cor={this.state.fill}
                    appear={true}
                    always={true}
                    height= {this.state.height}
                    css={this.state.css}
                    location="Scroll-Pack"
                    animation={[
                        {
                            ease: 'easeInOutQuad',
                            playScale: [
                                -1, -0.5
                            ],
                            opacity: 1,
                            y: 0,
                            x: '200%',
                            width: 'calc(1em + 9vmin)',
                            onComplete: () => {
                                this.setFill()
                            }
                        }, {
                            ease: 'easeInQuad',
                            playScale: [
                                1, 1.4
                            ],
                            top: 0,
                            y: 80,
                            x: '150%',
                            scale: 0.5
                        }, {
                            ease: 'easeOutExpo',
                            playScale: [
                                0, 0.5
                            ],
                            y: 0,
                            x: '-10%',
                            scale: 0.25,
                            onStart: () => {
                                this.setFill()
                            },
                            onComplete: () => {
                                this.setFill()
                            }
                        }

                    ]}/>
            </Link>
        </ScrollOverPack>
        );
    };
}

export default Callback;
