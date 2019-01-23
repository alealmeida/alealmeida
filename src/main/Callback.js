import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import Nav from './Nav';
import { Link} from 'react-router-dom';
import ArrowBack from './../components/Icons/ArrowBack';
const ScrollElement = ScrollAnim.Element;

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
        onClick
    }) {
        super(props)
        this.state = {
            css: {
                height: '200vh'
            },
            css2: {
                color: cor1
            },
            fill: cor1,
            cssNoPosition: true
        };
        this.index = index
        this.to = to
        this.style = style
        this.component = component
        this.cor1 = cor1
        this.cor2 = cor2
        this.hash = hash
        this.onClick = onClick
    }
    // componentWillMount = () => {
    //     window.addEventListener('load', this.scrolltoo.bind(this))
    // }
    // scrolltoo = (e) => {
    //     setTimeout(() => {
    //         window.scrollTo(0, 0)
    //     }, 10)
    // }
    setCss = (e) => {
        const css = this.state.css;
        console.log(e);
        if (this.state.cssNoPosition) {
            css.position = 'fixed';
            css.top = '0';
        } else {
            css.position = 'absolute';
            css.top = '0';
            css.zIndex = 999;
        }
        this.setState({
            css,
            cssNoPosition: !this.state.cssNoPosition
        });
    };
    setCss2 = (e) => {
        const css2 = this.state.css2;
        console.log(e);
        if (this.state.cssNoPosition) {
            css2.color = this.cor1
        } else {
            css2.color = this.cor2
        }
        this.setState({
            css2,
            cssNoPosition: !this.state.cssNoPosition
        });
    };
    setFill = (e) => {
        if (this.state.cssNoPosition) {
            this.setState({
                fill: this.cor2,
                cssNoPosition: !this.state.cssNoPosition
            });
        } else {
            this.setState({
                fill: this.cor1,
                cssNoPosition: !this.state.cssNoPosition
            });
        }
    };
    render() {
        return (
            <ScrollElement id="Scroll-Pack">
                <ScrollParallax
                    always={true}
                    key='0'
                    animation={{
                    playScale: [
                        1, 4
                    ],
                    onStart: () => {
                        this.setCss('start');
                    }
                }}
                    style={this.state.css}>
                    <ScrollParallax
                        animation={[
                        {
                            playScale: [
                                0, 0.15
                            ],
                            translateY: '0'
                        }, {
                            ease: 'easeInOutBack',
                            playScale: [
                                0.8, 2.5
                            ],
                            translateY: '0'
                        }, {
                            ease: 'easeOutExpo',
                            playScale: [
                                -0.2, 2
                            ],
                            translateY: '0vh'
                        }
                    ]}
                        always={true}
                        location="Scroll-Pack"
                        component='Nav'
                        style={{
                        transform: 'translateY(20vh")'
                    }}>
                        <ScrollParallax
                            appear={true}
                            always={true}
                            location="Scroll-Pack"
                            animation={{
                            playScale: [
                                2, 2.3
                            ],
                            onStart: () => {
                                this.setCss2('start');
                            },
                            onCompleteBack: () => {
                                this.setCss2('back complete');
                            }
                        }}
                            style={this.state.css2}
                            component={Nav}/>
                        <Link
                            key={this.index}
                            to={this.to}
                            component={this.component}
                            hash={this.hash}
                            onClick={this.onClick}
                            className='callback'
                            >
                            <ScrollParallax
                                appear={true}
                                always={true}
                                component={ArrowBack}
                                cor={this.state.fill}
                                location="Scroll-Pack"
                                animation={[{
                                    playScale: [
                                        2.1, 2.5
                                    ],
                                    onStart: () => {
                                        this.setFill('start');
                                    },
                                    onCompleteBack: () => {
                                        this.setFill('back complete');
                                    }
                                }
                            ]}/>
                        </Link>
                    </ScrollParallax>
                </ScrollParallax>
            </ScrollElement>
        );
    };
}

export default Callback;
