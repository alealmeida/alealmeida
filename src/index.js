import ScrollAnim from 'rc-scroll-anim';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.css';
import Sections from './components/ui/Sections';
import Intro from './components/ui/Intro';
import content from './components/ui/SectionsContent';
const Link = ScrollAnim.Link;
const EventListener = ScrollAnim.Event;

class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        EventListener.addEventListener('resize.userResize', this.barAnimate.bind(this));
        window.addEventListener('resize', this.handleWindowSizeChange.bind(this));
        window.removeEventListener('resize', this.handleWindowSizeChange.bind(this));
        
        window.addEventListener('load', this.onLoad.bind(this));
    }
    onFocus = (e) => {
        this.dom = e.target;
        this.barAnimate();
        var idOn = document.getElementById(e.to)
        // if(e.target.index)
        idOn.className = "pack-page " + e.to + " active"
    }
    onLoad = () => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

    }
    onBlur = (e) => {
        var idOn = document.getElementById(e.to);
        idOn.className = "pack-page " + e.to;
    }
    barAnimate = () => {
        if (!this.dom) {
            return;
        }
        const bar = this.bar;
        bar.style.left = `$ {this
            .dom
            .getBoundingClientRect()
.left}px`;
    }
    handleWindowSizeChange = () => {
        ScrollAnim
            .scrollScreen
            .init({loop: false, duration: 1200, ease: "easeInOutQuart", scrollInterval: 800});

    };
    render() {
        return (
            <div className="container">

                <div className="nav">
                    <div className="nav-wap">
                        <Link
                            className="nav-list logo"
                            to={"page0"}
                            toShowHeight
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}>
                            Alê Almeida
                        </Link>
                        {content.map(i => (
                            <Link
                                className="nav-list"
                                to={"page" + i.id}
                                toShowHeight
                                onFocus={this.onFocus}
                                onBlur={this.onBlur}>
                                Example2
                            </Link>
                        ))}
                        <div ref= {(c) => { this.bar = c; } } className="nav-bar"/>
                    </div>
                </div>
                {/* <Intro/> */}
                <Sections/>
            </div>
        );
    }
}

ReactDOM.render([< Demo />], document.getElementById('root'));
