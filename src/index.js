import ScrollAnim from 'rc-scroll-anim';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route} from 'react-router-dom';

import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import './assets/styles/main.css';
import routes from './components/ui/MenuContent';
import Sections from './components/ui/Sections';
import content from './components/ui/SectionsContent';


const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;
const ScrollOverPack = ScrollAnim.OverPack;
const EventListener = ScrollAnim.Event;
const ScrollParallax = ScrollAnim.Parallax;
ScrollAnim.scrollScreen.init({ loop: false, duration: 1200, ease: "easeInOutQuart", scrollInterval: 600 });




class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      css: { backgroundColor: '#174270', height: 920 },
      cssNoPosition: true,
    };
  }
  onComplete = (e) => {
    console.log(e);
  };

  setCss = (e) => {
    const css = this.state.css;
    console.log(e);
    if (this.state.cssNoPosition) {
      css.position = 'fixed';
      css.top = 0;
    } else {
      css.position = '';
      css.top = '';
    }
    this.setState({
      css,
      cssNoPosition: !this.state.cssNoPosition,
    });
  };
  componentDidMount() {
    EventListener.addEventListener('resize.userResize', this.barAnimate.bind(this));
    setTimeout(() => {
      this.setState({ show: true });
    }, 1500);
    window.addEventListener('resize',  this.handleWindowSizeChange.bind(this));
    window.removeEventListener('resize', this.handleWindowSizeChange.bind(this));

  }
  onFocus = (e) => {
    this.dom = e.target;
    
    
    this.barAnimate();
    var idOn = document.getElementById(e.to)
    // if(e.target.index)
     
        idOn.className =  "pack-page " + e.to + " active"
  }
  onBlur = (e) => {
    var idOn = document.getElementById(e.to);
    idOn.className =  "pack-page " + e.to;
  }
  barAnimate = () => {
    if (!this.dom) {
      return;
    }
    const bar = this.bar;
    bar.style.left = `${this.dom.getBoundingClientRect().left}px`;
  }

  handleWindowSizeChange = () => {
    ScrollAnim.scrollScreen.init({ loop: false, duration: 1200, ease: "easeInOutQuart", scrollInterval: 800 });
  };
  
  render() {
    
    return (
      
      <div className="container">
        
          <div className="nav">
            <div className="nav-wap">
            <Link className="nav-list logo" to="page0" showHeightActive={['50%', '10%']}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            Alê Almeida
          </Link>
          <Link className="nav-list" to="page1" showHeightActive={['10%', '60%']} toShowHeight
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            Example2
          </Link>
          <Link className="nav-list" to="page2" showHeightActive={['60%', '50%']} toShowHeight
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            Example3
          </Link>
          <Link className="nav-list" to="page3" offsetTop={100}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            Example4
          </Link>

          <Link className="nav-list" to="page4" offsetTop={100}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            Example4
          </Link>

          <Link className="nav-list" to="page5" offsetTop={100}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            Example4
          </Link>
          <div ref={(c) => { this.bar = c; }} className="nav-bar" />
        </div>
          </div>
        {/* <Intro /> */}
        <Sections />
      </div>
            
    );
    
  }

}

ReactDOM.render([<Demo />], document.getElementById('root'));

ReactDOM.render([<ScrollParallax animation={{x:100}}>Parallax</ScrollParallax>], document.getElementById('modal'));

// import * as React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import './assets/styles/main.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
