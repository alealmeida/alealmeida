import React from 'react';
import Nav from './Nav'
import Intro from '../components/Intro'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import Footer from '../components/Footer'

const LoadSite = () => {
    return (
        <div className="container">
            <Nav/>
            <div className="main">
                <Intro/>
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
                <Footer/>
            </div>
        </div>
    );
};
class Site extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: null,
            stop: () => {
                clearTimeout(this.timer);
            },
        }
    }
    componentDidMount = () => {
        window.addEventListener('load', this.runScroll.bind(this));
    }
    runScroll = () => {
        setTimeout(() => {
            this.smoothScroll.scrollTo('top');
        }, 100);
    }
    smoothScroll =  {
        scrollTo: (id, callback) => {
            var settings = {
                duration: 3000,
                easing: {
                    outQuint: function (x, t, b, c, d) {
                        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                    }
                }
            };
            var percentage;
            var startTime;
            var node = document.querySelector('#intro');
            var nodeTop = node.offsetTop;
            var nodeHeight = node.offsetHeight;
            var body = document.body;
            var html = document.documentElement;
            var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            var windowHeight = window.innerHeight
            var offset = window.pageYOffset;
            var delta = nodeTop - offset;
            var bottomScrollableY = height - windowHeight;
            var targetY = (bottomScrollableY < delta)
                ? bottomScrollableY - (height - nodeTop - nodeHeight + offset)
                : delta;
    
            startTime = Date.now();
            percentage = 0;
    
            if (this.timer) {
                clearInterval(this.timer);
            }
    
            const step = () => {
                var yScroll;
                var elapsed = Date.now() - startTime;
    
                if (elapsed > settings.duration) {
                    clearTimeout(this.timer);
                }
    
                percentage = elapsed / settings.duration;
    
                if (percentage > 1 || offset < 3) {
                    clearTimeout(this.timer);
    
                    if (callback) {
                        callback();
                    }
                } else {
                    yScroll = settings
                        .easing
                        .outQuint(0, elapsed, offset, targetY, settings.duration);
                    window.scrollTo(0, yScroll);
                    this.timer = setTimeout(step, 10);
                }
            }
    
            this.timer = setTimeout(step, 10);
        }
    };
    render() {
        return (<LoadSite/>)
    }
}
export default Site;
