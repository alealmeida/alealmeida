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
        const position1 = 'fixed'
        const position2 = 'absolute'
        this.state = {
            css:  {
                height: '100'
            },
            css2: {
                color: cor1,
            },
            fill: cor1,
            cssNoPosition: true,
            theposition: window.pageYOffset
        };
        this.index = index
        this.to = to
        this.style = style
        this.component = component
        this.cor1 = cor1
        this.cor2 = cor2
        this.position1 = position1
        this.position2 = position2
        this.hash = hash
        this.onClick = onClick
        this.theposition= window.pageYOffset
    }
    componentDidMount = () =>{
        window.addEventListener('load', this.setState({
            fill: this.cor1
        }));
      }
    
    
    setCss = (e) => {
        const css = this.state.css;
        const theposition= window.pageYOffset
        if (theposition >= 110) {
            css.position = 'fixed';
            css.top = '';
        } else {
            css.position = 'absolute';
            css.top = '';
        }
        this.setState({
                css,
                theposition
            });
    };
    setFill = (e) => {
        const theposition= window.pageYOffset
        if (theposition >= 200) {
            this.setState({
                fill: this.cor2
            });
        } else {
            this.setState({
                fill: this.cor1
            });
        }
    };
    render() {
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
                                    onComplete: () => { this.setCss('start'); },
                                },{
                                    ease: 'easeInOutQuint',
                                    playScale:[
                                        1, 1.8
                                    ],
                                    top: '0vh',
                                    opacity: 1 ,
                                    onStart: () => { this.setCss('start'); },
                                    onComplete: () => { this.setCss('start'); },
                                }
                            
                      ]}
                    style={this.state.css}
                   >
                        <Link
                            key={this.index}
                            to={this.to}
                            component={this.component}
                            hash={this.hash}
                            onClick={this.onClick}
                            className='callback'
                            
                            >
                            <ScrollParallax
                                component={ArrowBack}
                                cor={this.state.fill}
                                key='2' 
                                location="Scroll-Pack"
                    appear={true} always={true} 
                    animation={[{          
                        ease: 'easeInOutCubic',
                        playScale: [
                            1, 1.48
                        ],
                        opacity: 1,
                        translateX: -30,
                        scale: 0.7,
                        onStart: () => {  this.setState({
                            fill: this.cor1,
                        }); },
                        onComplete: () => {  this.setState({
                            fill: this.cor2,
                        }); },
                    },{
                        ease: 'easeInOutCubic',
                        playScale:[
                            2, 3
                        ],
                        opacity: 1 ,
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
