import React from 'react';
import TweenOne from 'rc-tween-one';
import ScrollAnim from 'rc-scroll-anim';
import Nav from './Nav';
import { Link} from 'react-router-dom';
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
        this.state = {
            css:  {
                height: '100',
                position: 'fixed',
                
            },
            bg: {
                opacity:0
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
            cssNoPosition: true,
            theposition: window.pageYOffset,
            width: "calc(1em + 12vmin)",
            font: '12vmin'
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
        this.theposition= window.pageYOffset
    }
    componentDidMount = () =>{
        window.addEventListener('load', this.setState({
            fill: this.cor2
        }));
        this.prev = window.scrollY;
        // window.addEventListener('scroll', e => this.handleNavigation(e));
      }
    
    
    // handleNavigation = (e) => {
    //     const window = e.currentTarget;
    
    //     if (this.prev > window.scrollY) {
    //         console.log("scrolling up");
    //     } else if (this.prev < window.scrollY) {
    //         console.log("scrolling down");
    //     }
    //     this.prev = window.scrollY;
    // };
    setCss = (e) => {
        const css = this.state.css;
        const bg = this.state.bg;
        const theposition= window.pageYOffset
        
        const altura= window.innerHeight
        if (theposition >= 110 || (theposition < altura /6 + 130  ) ) {
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
        this.setState({
                css,bg,
                theposition
            });
    };
    setFill = (e) => {
        const theposition= window.pageYOffset
        const css = this.state.css;
        const altura= window.innerHeight
        const heropos = document.querySelector('#hero');
        const barraheight = document.querySelector('.barra_topo').getBoundingClientRect().height;
        const initialtop = heropos.getBoundingClientRect().top
        const fs = document.querySelector('.titulo h3').style.fontSize = '12vmin'
        var n = -1+'px'
        console.log(this.state.font)
        if ((theposition >= altura) || (theposition  <= initialtop +barraheight) ) {
            this.setState({
                css,
                fill: this.cor2,
                color: this.cor2,
                width: "calc(1em + 12vmin)",
                bg: 'white',
                top: theposition <= altura + barraheight ?  theposition  < altura-barraheight ? 0:-barraheight+theposition-altura: 0,
                font: theposition > 100 ? this.state.font - theposition/20 :  'auto' 
            });
        } else {
            this.setState({
                css,
                fill: this.cor1,
                color: this.cor1,
                width: "100%",
                bg: 'transparent',
                top: initialtop-barraheight ,
                // font:(altura-theposition)/20
            });
        }
    };
    render() {
        const estado = this.state.items
        return (
            <ScrollElement id="Scroll-Pack">
                <ScrollParallax
                    key='1' component='div'
                    location="Scroll-Pack"
                    appear={true} always={true} 
                    animation={[{
                                
                                    ease: 'linear',
                                    playScale: [
                                        -1, 0.5
                                    ],
                                    opacity: 1 ,
                                    top: '47vh',
                                },{
                                    ease: 'easeInOutQuint',
                                    playScale:[
                                        1, 1.8
                                    ],
                                    top: '0vh',
                                    opacity: 1 ,
                                    // onStart: () => { this.setCss('start'); },
                                    // onComplete: () => { this.setCss('start'); },
                                }
                            
                      ]}
                   > <ScrollParallax
                   key='3' 
                   location="Scroll-Pack"
       appear={true} always={true} 
       style={{background: this.state.bg, top: this.state.top}}
       animation={[{          
        ease: 'easeInOutCubic',
        playScale: [
            -1,-1
        ],
        width: '118%',
        opacity: 1,
    },{          
           ease: 'easeInOutCubic',
           playScale: [
               1.1,2.38
           ],
           opacity: 1,
           width: '100%',
       }
   
]}
className='barra_topo'> 
       <section key={this
                                    .state
                                    .items
                                    .map((i) => i.key = 1)} className='titulo'
                                    >
                            {this.client}
                            <h4 style={{fontSize: this.state.font}}>{this.project}</h4>
                            </section>
                        <Link
                            key={this.index}
                            to={this.to}
                            component={this.component}
                            hash={this.hash}
                            onClick={this.onClick}
                            className='callback'
                            
                            ><ScrollParallax id="comp"
                            component='label'
                            location="Scroll-Pack"
                            style={{color: this.state.color}}
                            key='1' 
                            cor={this.state.fill}
                            className='logo'
                appear={true} always={true} 
                animation={[{       
                    ease: 'easeInOutCubic',
                    playScale: [
                        -1, -.5
                    ],
                    opacity: 1,
                    onComplete: () => { this.setFill()},
                },{

                    ease: 'easeOutCubic',
                    playScale: [
                        1.6, 1.95
                    ],
                    translateX: '-2%',
                    top: 0,
                    onStart: () => { this.setFill()},
                    onComplete: () => { this.setFill()},
                },{       
                    ease: 'easeInOutCubic',
                    playScale: [
                        .05, .13
                    ],
                    opacity: 1,
                },{       
                ease: 'easeInOutCubic',
                playScale: [
                    -.1, .0
                ],
                opacity: 1
            }
      ]}
                        >Ale Almeida</ScrollParallax>
                            <ScrollParallax
                                component={ArrowBack}
                                cor={this.state.fill}
                                key='2' 
                                location="Scroll-Pack"
                    appear={true} always={true} css={this.state.css}
                    animation={[{          
                        ease: 'easeInOutCubic',
                        playScale: [
                            -1,0
                        ],
                        opacity: 1,
                        translateX: '0vw',
                        width: 'calc(1em + 10vmin)',
                        onComplete: () => { this.setFill()},
                    },{          
                        ease: 'easeOutQuart',
                        playScale: [
                            1.25,2.2
                        ],
                        top: 0,
                        translateX: '4vmin',
                        width: 'calc(1em + 1vmin)',
                        onStart: () => { this.setFill()},
                        onComplete: () => { this.setFill()},
                    }
                
          ]}
                            />
                        </Link>
                    </ScrollParallax></ScrollParallax>
            </ScrollElement>
        );
    };
}

export default Callback;
