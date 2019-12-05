import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Intro from '../components/Intro';
import TweenOne from 'rc-tween-one';
import Pop from '../components/Pop';
import Mars from '../components/Mars';
import Caixa from '../components/Caixa';
import Natura from '../components/Natura';
import Dkids from '../components/Dkids';
import SectionOne from '../components/SectionOne';
import params from '../components/CONTENT';
import SectionCases from '../components/SectionCases';
import Footer from '../components/Footer';
import { createBrowserHistory } from 'history';

const p = id => params.find(n => n.id === id)
const routes = [
    {
        index: 0,
        path: "/",
        exact: true,
        main: props => <LoadSite to='/' component={props.main} />,
    },{
        index: 1,
        path: '/'+params[0].id,
        main: props => <Natura to={'/#/natura'} component={props.main} />,
        id: 'natura'
    }, {
        index: 2,
        path: '/'+params[1].id,
        main: props => <Caixa to={'/#/caixa'} component={props.main} />,
        id: 'caixa'
    },  {
        index: 3,
        path: '/'+params[2].id,
        main: props => <Dkids to={'/#/dkids'} component={props.main} />,
        id: 'dkids'
    },{
        index: 4,
        path: '/'+params[3].id,
        main: props => <Mars to={'/#/mars'} component={props.main} />,
        id: 'mars'
    }, {
        index: 5,
        path: '/'+params[4].id,
        main: props => <Pop to={'/#/pop'} component={props.main} />,
        id: 'pop'
    }
];
const LoadSite = () => {
    return (
        <TweenOne
            id={params.id}
            key={params.id}
            className='main'
            animation={[{ opacity: 0 }, { duration: 20, opacity: 1 }]}
            style={{ opacity: 0 }}
        >
            <Intro /><SectionOne /> {routes.map((i) => i.index ? (
                <SectionCases
                    data={{ param: { id: i.id } }}
                    to={routes[i.index].path} />) : '')}
            <Footer />
        </TweenOne>
    );
};
class Site extends React.Component {
    constructor() {
        super();
        this.state = {
            w: window.innerWidth,
            h: window.innerHeight,
        };
    }

    // make sure to remove the listener
    // when the component is not mounted anymore


    handleWindowSizeChange = () => {
        this.setState({
            w: window.innerWidth,
            h: window.innerHeight
        });
    };

    componentWillMount = () => {
        window.addEventListener('resize', this.handleWindowSizeChange);
        window.addEventListener('load', this.history.bind(this));
        window.removeEventListener('load', this.history.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    history = () => {
        var history = createBrowserHistory();
        history.listen(location => {
            setTimeout(() => {
                var pathArray = window
                    .location
                    .hash
                    .split('/');
                var secondLevel = pathArray[1];
                var hasHash = secondLevel.split('#');
                var hash = hasHash[1]
                var id = !hash
                    ? document.querySelector('#root')
                    : document.querySelector('#' + hash)
                return !hash
                    ? window.scrollTo(0, 0)
                    : (this.removeHash(), id.scrollIntoView({ behavior: "instant" }));
            }, 0);
        });
    }
    removeHash = () => {
        const loc = window.location
        const hist = window.history
        if (hist && 'pushState' in hist) {
            hist.replaceState('/#', document.title, loc.pathname + loc.search)
        } else {
            const scrollV = document.body.scrollTop
            loc.hash = '';
            document.body.scrollTop = scrollV
        }
    }
    render() {
        const { w, h } = this.state;
        const portrait = (w <= h);
        // the rest is the same...
        return (
            <HashRouter history={this.history}>
                <React.Fragment><div className={portrait ? "vertical container" : 'horizontal container'}>
                    {routes.map((route, index) => (<Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        target='_self' />))}</div></React.Fragment>
            </HashRouter>
        )
    }
}
export default Site;
