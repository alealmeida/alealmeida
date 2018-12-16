import ScrollAnim from 'rc-scroll-anim';
import Scroll from 'react-scroll';

// var Scroll = require('react-scroll'); import ReactDOM from 'react-dom';
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';
import Fade from '@material-ui/core/Fade';
import {withStyles} from '@material-ui/core/styles';
import QueueAnim from 'rc-queue-anim';
import Tween from 'rc-tween-one';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';
import content from './SectionsContent';
import {Paper} from '@material-ui/core';
import {relative} from 'path';
const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;
const ScrollOverPack = ScrollAnim.OverPack;
const EventListener = ScrollAnim.Event;

var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;
ScrollAnim
    .scrollScreen
    .init({loop: false, duration: 1700, ease: "linear", scrollInterval: 1000, he});
function find(id) {
    return content.find(p => p.id === id);
}
const styles = {
    appBar: {
        position: 'relative'
    },
    flex: {
        flex: 1
    }
};
function Transition(props) {
    return <Slide direction="down" {...props}/>;
}

function Sections() {
    return (
        <span >
            <Home/>
        </span>
    )
}
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            paused: true,
            show: true,
            open: false,
            reverse: false,
            buttonEnterReverse: false,
            buttonCloseReverse: false,
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
        };
    }
    onPlay = () => {
        this.setState({paused: false, reverse: false, buttonEnterReverse: true, buttonCloseReverse: false});
        setTimeout(() => {
            this.handleClickOpen()
            this.setState({open: true});
        }, 3400);
    }

    handleClickOpen = () => {
        this.setState({
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
        })
        setTimeout(() => {
            ScrollAnim
                .scrollScreen
                .unMount();
        }, 1000);
    };
    // componentDidMount() {     setTimeout(() => {         this.setState({show:
    // true});     }, 100);     window.addEventListener('resize',
    // this.handleWindowSizeChange.bind(this)); window.removeEventListener('resize',
    // this.handleWindowSizeChange.bind(this)); } handleWindowSizeChange = () => {
    // ScrollAnim         .scrollScreen   .init({loop: false, duration: 1200, ease:
    // "easeInOutQuart", scrollInterval: 800}); };
    handleClose = () => {
        this.setState({items: []});
        this.setState({paused: false, reverse: true, buttonCloseReverse: true, show: true});
        setTimeout(() => {
            this.setState({buttonEnterReverse: false, open: false, show: false});
            ScrollAnim
                .scrollScreen
                .init({loop: false, duration: 1200, ease: "easeInOutQuart", scrollInterval: 800});
        }, 3200);
    };
    render() {
        const classes = this.props;
        return (
            <div>
                <Link className="nav-list logo" onClick={this.handleClose}>
                    Alê Almeida
                </Link>
                {content.map(i => (
                    <ScrollOverPack
                        id={i.hash + i.id}
                        className={i.classe + i.id}
                        style={{
                        backgroundColor: i.bg
                    }}
                        playScale={0.1}>
                        <TweenOne
                            show={this.state.show}
                            className={"tween-one cabecalho"}
                            key={i.id}
                            animation={{
                            delay: 5,
                            duration: 100,
                            opacity: 1
                        }}
                            style={{
                            opacity: 0
                        }}>
                            <h1 style={{color: i.cor }}>{i.letra}</h1>
                            <label>{i.label}</label>
                            <h2>{i.h2}</h2>
                            <div className='descricao'>{i.descricao}</div>
                        </TweenOne>
                    </ScrollOverPack>
                        {/* <Tween
                                className="button"
                                resetStyle={true}
                                reverse={this.state.buttonEnterReverse}
                                reverseDelay={600}
                                scroll={this.state.reverse}
                                animation={[{
                                    delay: 1200,
                                    duration: 1600,
                                    x: 0,
                                    opacity: 1,
                                    ease: "easeOutExpo"
                                }
                            ]}
                                style={{
                                transform: 'translateX(-2em)',
                                opacity: 0,
                                top:0,
                                position: "fixed"
                            }}>

                                <Button
                                    onClick={this.onPlay}>
                                    <i class="material-icons ver_mais">
trending_flat
</i>
                                </Button>
                            </Tween> */}
                        // <Dialog
                        //     fullScreen
                        //     id={'anchor' + i.id}
                        //     className="pack-page"
                        //     elevation={8}
                        //     scroll={this.state.scroll}
                        //     open={this.state.open}
                        //     onClose={this.handleClose}
                        //     transitionDuration={{
                        //     enter: 0,
                        //     exit: 0
                        // }}
                        //     TransitionComponent={Transition}
                        //     style={{
                        //     backgroundColor: '#ffffff',
                        //     zIndex: 10,
                        //     position: relative,
                        //     height: '100%'
                        // }}>
                        //     <Button
                        //         to={"anchor" + i.id}
                        //         style={{
                        //         backgroundColor: 'transparent'
                        //     }}
                        //         color="inherit"
                        //         onClick={this.handleClose}>
                        //         <Tween
                        //             reverseDelay={800}
                        //             reverse={this.state.buttonCloseReverse}
                        //             animation={[{
                        //                 delay: 2000,
                        //                 duration: 600,
                        //                 rotate: -90,
                        //                 opacity: 1,
                        //                 x: 0,
                        //                 y: 0,
                        //                 ease: "easeInOutQuart"
                        //             }
                        //         ]}
                        //             style={{
                        //             transform: 'rotate(0deg) translateX(-0.5em)translateY(-0.1em)',
                        //             transformOrigin: '50%, 50%',
                        //             width: 'calc((100vw+100vh)/2/12)',
                        //             height: 'calc((100vw+100vh)/2/12)',
                        //             position: 'fixed',
                        //             opacity: 0,
                        //             zIndex: '9999',
                        //             textAlign: "center",
                        //             top: '4em',
                        //             right: '3em'
                        //         }}>
                        //             <CloseIcon
                        //                 style={{
                        //                 width: 'calc((100vw+100vh)/2/12)',
                        //                 height: 'calc((100vw+100vh)/2/12)'
                        //             }}/>
                        //         </Tween>
                        //     </Button>
                        //     <Tween
                        //         show={this.state.show}
                        //         className={"tween-one"}
                        //         reverse={this.state.reverse}
                        //         reverseDelay={400}
                        //         key="0"
                        //         animation={{
                        //         delay: 1200,
                        //         duration: 1500,
                        //         translateY: '-10vh',
                        //         ease: 'easeInOutExpo',
                        //         top: 0,
                        //         bezier: 2,
                        //         opacity: 1
                        //     }}
                        //         style={{
                        //         transform: 'translateY(0px)',
                        //         opacity: 1,
                        //         zIndex: 1,
                        //         height: '95vh',
                        //         width: '100vw',
                        //         top: 0,
                        //         left: 0,
                        //         backgroundColor: i.bg,
                        //         position: "absolute"
                        //     }}/>
                        //     <TweenOne
                        //         id={'anchor' + i.id}
                        //         show={this.state.show}
                        //         className={"tween-one cabecalho"}
                        //         reverse={this.state.reverse}
                        //         reverseDelay={400}
                        //         key="0"
                        //         animation={{
                        //         duration: 200,
                        //         translateY: 0,
                        //         bezier: 2,
                        //         opacity: 1
                        //     }}
                        //         style={{
                        //         transform: 'translateY(0px)',
                        //         opacity: 1,
                        //         zIndex: 1,
                        //         width: '80vw',
                        //         overflow: 'hidden'
                        //     }}>
                        //         <h1 style={{color: i.cor }}>{i.letra}</h1>
                        //         <label>{i.label}</label>
                        //         <h2>{i.h2}</h2>
                        //         <div className='descricao'>{i.descricao}</div>
                        //         <QueueAnim
                        //             type={['right', 'right']}
                        //             interval={[300, 800]}
                        //             delay={4000}
                        //             duration={[1000, 1000]}
                        //             ease={['easeOutBack', 'easeInOutCirc']}
                        //             leaveReverse
                        //             style={{}}>
                        //             {this
                        //                 .state
                        //                 .items
                        //                 .map((item) => <div key={item.key}>
                        //                     <section
                        //                         style={{
                        //                         width: '80vw',
                        //                         overflow: 'hidden'
                        //                     }}>
                        //                         <p>A scrollScreen demo</p>
                        //                         {/* {item.children} */}
                        //                     </section>
                        //                 </div>)}
                        //         </QueueAnim>

                        //     </TweenOne>

                        // </Dialog>
                ))}
                <Tween
                    paused={this.state.paused}
                    reverse={this.state.reverse}
                    reverseDelay={500}
                    animation={{
                    x: '0vw',
                    width: '500vw',
                    left: '110vw',
                    delay: 1200,
                    duration: 5000,
                    ease: 'easeInOutExpo',
                    opacity: 1
                }}
                    style={{
                    transform: 'translateX("0vw")',
                    backgroundColor: '#c73953',
                    height: '100vh',
                    top: '0',
                    left: '-150%',
                    position: "fixed",
                    width: '150vw',
                    zIndex: 9999999999999,
                    opacity: 1
                }}
                    key="t"/>
            </div>
        );
    }
}
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}
function Intro({match}) {

    return (

        <Element
            className="pack-page page0"
            id='page0'
            style={{
            backgroundColor: '#ffffff',
            zIndex: 1500
        }}>
            <QueueAnim
                key='queueAnim'
                type={['right', 'alpha']}
                className="intro"
                interval={[200, 700]}
                delay={800}
                duration={[800, 500]}
                playScale={0.1}>
                <div key='a'>Olá!</div>
                <div key='b'>Sou Alexandre Almeida,</div>
                <div key='c'>Senior Product Designer na
                    <a href="http://ogilvy.com.br">Ogilvy & Mather Brasil</a>,
                </div>
                <div key='d'></div>
                <div key='e'>São Paulo.</div>

            </QueueAnim>
        </Element>
    );
}
export default Sections;