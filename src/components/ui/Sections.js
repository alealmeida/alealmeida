import ScrollAnim from 'rc-scroll-anim';

import ReactDOM from 'react-dom';
// var Scroll = require('react-scroll');
import scroll from 'react-scroll';
import React from 'react';
// import Button from '@material-ui/core/Button'; import Dialog from
// '@material-ui/core/Dialog'; import IconButton from
// '@material-ui/core/IconButton'; import CloseIcon from
// '@material-ui/icons/Close';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Tween from 'rc-tween-one';
import content from './SectionsContent';
import Intro from './Intro';
import zIndex from '@material-ui/core/styles/zIndex';
const ScrollOverPack = ScrollAnim.OverPack;
const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;
const EventListener = ScrollAnim.Event;


const find = id => content.find(p => p.id === id);
 
ScrollAnim
.scrollScreen
.init({loop: false, duration: 500, ease: "easeInOutCirc", scrollInterval: 6000});

function Sections() {
    return (<Home/>)
}
class Conteudo extends React.Component {
    constructor({data, props}) {
        super({data, props});
        this.state = {
            show: false,
            reverse: false,
            reverseDelay: 0,
        };
        this.n = find(data.params.id);
    }
   

    handlePlay() {
        this.setState({
            reverse: true,
            show: true,
            reverseDelay: 0
        });

    }
   
    render() {
        return (
            <ScrollOverPack
            always={true}
            appear={true}
                componentProps={{ tweenOne2:  {reverse :true }, tweenOne:  {reverse :true } }}
                className={this.n.classe + this.n.id}
                id={this.n.hash + this.n.id}
                >
                <Tween
                key='tweenOne2'
                reverseDelay={4000}
                    component={'section'}
                    animation={[{
                        delay: 1000,
                        duration: 600,
                        opacity: 0,
                        x: 0,
                        top: 0,
                        ease: "linear",
                        backgroundColor: this.n.cor2
                },{
                    delay: 1000,
                    duration: 300,
                    opacity: 1,
                    x: 0,
                    y: '0',
                    top: 0,
                    ease: "easeOutCirc",
                    backgroundColor: '#fff'
            }]}
                    style={{
                            opacity: 0,
                            transform: 'translateY(0)',
                            backgroundColor: '#fff',
                            top: '0vh'
                    }}
                    className={"tween-one cabecalho"}
                   >
                   
                    <h1 style={{
                        color: this.n.cor2
                    }}>{this.n.letra}</h1>
                    <label>{this.n.label}</label>
                    <h2>{this.n.h2}</h2>
                    <div className='descricao'>{this.n.descricao}</div>
               </Tween>
               <TweenOne key="tweenOne"
                    animation={[{
                        delay: 0,
                        duration: 2000,
                        opacity: 1,
                        top: '100vh',
                        height: '0vh',
                        ease: "easeInExpo",
                        backgroundColor: this.n.cor1,
                        y: '0',
                        type: 'from'
                    },{

                        delay: 2900,
                        duration: 2500,
                        opacity: 1,
                        top: '-100vh',
                        ease: "easeInOutExpo",
                        height: '100vh',
                        backgroundColor: this.n.cor2,
                        y: '0',
                        type: 'to'
                    }]}
                    style={{
                    width: '100%',
                    height: '600vh',
                    position: 'fixed',
                    transform: 'translateY(0vh)',
                    backgroundColor: this.n.cor1,
                    opacity: 1,
                    top: '0vh',
                    zIndex: 9
                }} />
            </ScrollOverPack>
        )
    }
}

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         paused: true,
    //         // show: false,
    //         open: false,
    //         // reverse: false,
    //         buttonEnterReverse: false,
    //         buttonCloseReverse: false
    //     };
    // }
    // onPlay = () => {
    //     this.setState({paused: false, reverse: false, buttonEnterReverse: true, buttonCloseReverse: false});
    //     setTimeout(() => {
    //         this.handleClickOpen()
    //         this.setState({open: true});
    //     }, 3400);
    // }

    // handleClickOpen = () => {
    //     this.setState({
    //         items: [
    //             {
    //                 key: 1
    //             }, {
    //                 key: 2
    //             }, {
    //                 key: 3
    //             }, {
    //                 key: 4
    //             }, {
    //                 key: 5
    //             }, {
    //                 key: 6
    //             }
    //         ]
    //     })
    //     setTimeout(() => {
    //         ScrollAnim
    //             .scrollScreen
    //             .unMount();
    //     }, 1000);
    // };

    // // componentDidMount() {     window.addEventListener('resize',
    // // this.handleWindowSizeChange.bind(this));
    // // window.removeEventListener('resize', this.handleWindowSizeChange.bind(this));
    // // }
    // handleWindowSizeChange = () => {
    //     ScrollAnim
    //         .scrollScreen
    //         .init({loop: false, duration: 1200, ease: "easeInOutQuart", scrollInterval: 800});
    // };
    // handleClose = () => {
    //     this.setState({items: []});
    //     this.setState({paused: false, reverse: true, buttonCloseReverse: true, show: true});
    //     setTimeout(() => {
    //         this.setState({buttonEnterReverse: false, open: false, show: false});
    //         ScrollAnim
    //             .scrollScreen
    //             .init({loop: false, duration: 1200, ease: "easeInOutQuart", scrollInterval: 800});
    //     }, 3200);
    // };
    render() {
        return (
            <div>
                 <ScrollOverPack
            always={true}
            // appear={true}
                className='pack-page page0'
                id='page0'
                >
            <QueueAnim
                key='queueAnim'
                type={['right', 'left']}
                // animConfig={[{ opacity:[1, 0] }, { opacity:[0, 1] }]}
                className="intro"
                interval={[200, 800]}
                delay={[600, 500]}
                duration={[1000, 1500]}
                                forcedReplay={true}
                leaveReverse={true}
            >
                <div key='a'>Olá!</div>
                <div key='b'>Sou  Alê  Almeida,</div>
                <div key='c'>UX  Designer,</div>
                <div key='d'>São  Paulo.</div>

            </QueueAnim>
        </ScrollOverPack>
                {content.map((i, index) => (
                <Conteudo
                    data={{
                    params: {
                        id: i.id
                    }, index: i.index + 1
                }}/>
                ))}
            </div>
        );
    }
}

export default Sections;