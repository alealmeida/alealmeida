import ScrollAnim from 'rc-scroll-anim';
// import ReactDOM from 'react-dom';
import React from 'react';
import QueueAnim from 'rc-queue-anim';
const Element = ScrollAnim.Element;

const duration = [1000, 1000];
const Intro = () => (
        <Element
            className="pack-page page0"
            id='page0'
            style={{
            backgroundColor: '#ffffff',
            zIndex: 99999
        }}>
            <QueueAnim
                key='queueAnim'
                type={['right', 'alpha']}
                className="intro"
                interval={[150, 800]}
                delay={1000}
                duration={duration}
                playScale={0.1}>
                <div key='a'>Olá!</div>
                <div key='b'>Sou  Alê  Almeida,</div>
                <div key='c'>UX  Designer,</div>
                <div key='d'>São  Paulo.</div>

            </QueueAnim>
        </Element>
   
)
export default Intro;