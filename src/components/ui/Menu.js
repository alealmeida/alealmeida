import ScrollAnim from 'rc-scroll-anim';
import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';

import routes from './MenuContent';
const Link = ScrollAnim.Link;
const EventListener = ScrollAnim.Event;
ScrollAnim.scrollScreen.init({ loop: false, duration: 1200, ease: "easeInOutQuart", scrollInterval: 800 });

function Menu() {
  return (
    <Links />
  )
}
class Links extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  
  componentDidMount() {
    EventListener.addEventListener('resize.userResize', this.barAnimate.bind(this));
    setTimeout(() => {
      this.setState({ show: true });
    }, 1500);
    window.addEventListener('resize',  this.handleWindowSizeChange.bind(this));
    window.removeEventListener('resize', this.handleWindowSizeChange.bind(this));

  }
  
  barAnimate = () => {
    if (!this.dom) {
      return;
    }
    const bar = this.bar;
    bar.style.left = `${this.dom.getBoundingClientRect().left}px`;
  }
  onFocus = (e) => {
    this.dom = e.target;
    this.barAnimate();

    var idOn = document.getElementById(e.to)
    
    console.log(idOn)// if(e.target.index)
     
        idOn.className =  "pack-page " + e.to + " active"
  }
  onBlur = (e) => {
    var idOn = document.getElementById(e.to);
    idOn.className =  "pack-page " + e.to;
  }

  handleWindowSizeChange = () => {
    ScrollAnim.scrollScreen.init({ loop: false, duration: 1200, ease: "easeInOutQuart", scrollInterval: 800 });
  };
  
  render() {
    return (
      <Router>

        <div className="nav">
          <div className="nav-wap">
            {routes.map((route) => (
              <Link className={route.classe} to={route.to} showHeightActive={['0%', '100%']} 
              onFocus={this.onFocus} onBlur={this.onBlur}
              >
              {route.texto}
            </Link>
            ))}
            <div ref={(c) => { this.bar = c; }} className="nav-bar" />
          </div>
        </div>
      </Router>
    );
  }
}

export default Menu;