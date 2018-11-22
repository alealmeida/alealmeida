import ScrollAnim from 'rc-scroll-anim';
// import ReactDOM from 'react-dom';
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
import TweenOne from 'rc-tween-one';
import content from './SectionsContent';
const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;
const ScrollOverPack = ScrollAnim.OverPack;

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
    return (<Fade in={true} { ...props }/>)
}

function Intro() {
    return (
        <span >
            <IntroContent />
        </span>
    )
}
function IntroContent({match}) {

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
                interval={[150, 800]}
                delay={1000}
                duration={[1000, 1000]}
                playScale={0.1}>
                <div key='a'>Olá!</div>
                <div key='b'>Sou  Alê  Almeida,</div>
                <div key='c'>UX  Designer,</div>
                <div key='d'>São  Paulo.</div>

            </QueueAnim>
        </Element>
    );
}
export default Intro;