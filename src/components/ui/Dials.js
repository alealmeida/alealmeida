import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Tween from 'rc-tween-one';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import DialogTransition from './DialogTransition';
import content from './SectionsContent';
import CallDialog from './Dialog';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import TweenOne from 'rc-tween-one';

const find = id => content.find(p => p.id === id);

function Transition(props) {
    return <Fade style={{
        width: '100vw'
    }} direction="down" {...props}/>;
}
class Dials extends React.Component {
    constructor({data, props}) {
        super(props);
        this.state = {
            open: false,
            reverse: true
        };
        this.i = find(data.params.i)
    }
    componentDidMount() {}
    handleClickOpen = () => {
        this.setState({open: true, reverse: false});
    };
    handleClose = () => {
        var dialog = document.getElementById('dialog');
        dialog.scrollTo(0, 0)
        this.setState({reverse: true});
        setTimeout(() => {
            this.setState({open: false});
        }, 2000);
    };
    render() {
        return (
            <div>
                <Button
                    className="ver_mais"
                    onClick={this.handleClickOpen}
                    style={{
                    left: 0,
                    zIndex: 8,
                    cursor: 'pointer',
                    top: 0,
                    position: 'fixed'
                }}>
                    <TweenOne
                        reverseDelay={0}
                        animation={[
                        {
                            delay: 1200,
                            opacity: 1,
                            duration: 500,
                            x: '-15'
                        }, {
                            delay: 1500,
                            opacity: 1,
                            duration: 500,
                            easy: 'easeInExpo',
                            x: 0
                        }
                    ]}
                        style={{
                        opacity: 0,
                        transform: 'translateX(-10)',
                        position: "absolute"
                    }}>
                        <i className="material-icons">trending_flat</i>
                    </TweenOne>
                </Button>

                <Dialog
                    id='dialog'
                    fullScreen
                    TransitionComponent={Transition}
                    elevation={8}
                    open={this.state.open}
                    transitionDuration={{
                    enter: 800,
                    exit: 800
                }}
                    style={{
                    zIndex: 99999,
                    height: '100%',
                    width: '100vw',
                    position: 'fixed'
                }}>
                    <CallDialog
                        m={{
                        p: {
                            id: this.i.id
                        }
                    }}
                        reverse={this.state.reverse}/>
                    <Tween
                        reverse={this.state.reverse}
                        reverseDelay={80}
                        animation={[
                        {
                            delay: 1400,
                            duration: 90,
                            opacity: 0
                        }, {
                            delay: 0,
                            duration: 1000,
                            opacity: 1,
                            ease: 'easeInOutExpo'
                        }
                    ]}
                        style={{
                        width: '10vw',
                        opacity: 0
                    }}>
                        <Button
                            className="cta"
                            style={{
                            backgroundColor: '#fff',
                            position: "fixed",
                            zIndex: 9999,
                            right: '1em',
                            top: '1em',
                            color: this.i.cor2,
                            borderRadius: '2%'
                        }}
                            onClick={this.handleClose}>
                            <i className="material-icons md-48">
                                close
                            </i>
                        </Button>
                    </Tween>
                    {DialogTransition({a: this.i, key: 'tweenOne3', reverse: this.state.reverse, reverseDelay: 0})}
                </Dialog>
            </div>

        )

    }
}
export default Dials;