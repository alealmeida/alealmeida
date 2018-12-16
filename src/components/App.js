import React from 'react';
import Menu from './ui/Menu';
import Intro from './ui/Intro';
import Sections from './ui/Sections';
import ScrollAnim from 'rc-scroll-anim';

class App extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            ScrollAnim
                .scrollScreen
                .init({loop: false, duration: 0, ease: "easeInOutCirc", scrollInterval: 6000});
        }, 200);
    }
    componentDidMount() {
        window.addEventListener('load', this.refreshPage.bind(this));
    }
    refreshPage = () => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 10);
    }
    render() {
        return (
            <div className="container">
                <Menu/>
                <Intro/>
                <Sections/>
            </div>
        );
    }
}

export default App;