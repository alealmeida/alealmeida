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
        onClick
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
            width: "calc(1em + 12vmin)"
        };
        this.index = index
        this.to = to
        this.style = style
        this.component = component
        this.cor1 = cor1
        this.cor2 = cor2
        this.project = project
        this.hash = hash
        this.onClick = onClick
        this.theposition= window.pageYOffset
    }
    componentDidMount = () =>{
        window.addEventListener('load', this.setState({
            fill: this.cor1
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
        
        if (theposition >= 110) {
            css.position = "fixed";
            css.top = '';
            css.color = this.cor2
            bg.opacity = 0
        } else {
            css.position = "absolute"
            css.top = '';
            css.color = this.cor2
            bg.opacity = 1
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
        if (theposition >= altura - 130) {
            this.setState({
                css,
                fill: this.cor2,
                color: this.cor2,
                width: "calc(1em + 12vmin)"
            });
        } else {
            this.setState({
                css,
                fill: this.cor1,
                color: this.cor1,
                width: "100%"
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
       animation={[{          
        ease: 'easeInOutCubic',
        playScale: [
            -1,-1
        ],
        scale: 1.6,
        width: '118%'
    },{          
           ease: 'easeInOutCubic',
           playScale: [
               2.1,2.38
           ],
           opacity: 1,
           scale: 1,
           top:0,
           width: '100%'
       }
   
]}
className='barra_topo'> <h4>{this.project}</h4>
       </ScrollParallax>
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
                            style={{color: this.cor1}}
                            key='1' 
                            className='logo'
                appear={true} always={true} 
                animation={[{       
                    ease: 'easeInOutCubic',
                    playScale: [
                        -1, -.5
                    ],
                    opacity: 1,
                    fontSize: 'calc(0.4em + 1.3vmin)',
                },{

                    ease: 'easeOutCubic',
                    playScale: [
                        1.6, 1.95
                    ],
                    translateX: '-2%',
                    top: 0,
                },{       
                    ease: 'easeInOutCubic',
                    playScale: [
                        .05, .13
                    ],
                    opacity: 1,
                    fontSize: 'calc(0.4em + 0.9vmin)',
                },{       
                ease: 'easeInOutCubic',
                playScale: [
                    -.1, .0
                ],
                opacity: 1,color: this.cor2
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
                    </ScrollParallax>
            </ScrollElement>
        );
    };
}

export default Callback;
