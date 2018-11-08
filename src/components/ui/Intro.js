
import ScrollAnim from 'rc-scroll-anim';
import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';

import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

import intro_content from './IntroContent';




const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;
const ScrollOverPack = ScrollAnim.OverPack;
const EventListener = ScrollAnim.Event;


function Intro() {
    return (
      <Content  />
    )
  }
  class Content extends React.Component {
    render() {
      return (
        <Element id={'page0'} index={'0'} className={"pack-page page0"}>
            <QueueAnim key='queueAnim' type={['right','alpha']} className="intro" interval={[200, 700]} delay={800}
                duration={[800, 500]}
                always={false}>
                <div key='a'>Olá!</div>
                <div key='b'>Sou Alexandre Almeida,</div>
                <div key='c'>Senior Product Designer na <a href="http://ogilvy.com.br">Ogilvy & Mather Brasil</a>,</div>
                <div key='d'></div>
                <div key='e'>São Paulo.</div>
            </QueueAnim>
        </Element>
      )
  }
}

export default Intro;