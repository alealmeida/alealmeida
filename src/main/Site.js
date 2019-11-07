import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Intro from '../components/Intro';
import TweenOne from 'rc-tween-one';
import Pop from '../components/Pop';
import Mars from '../components/Mars';
import Caixa from '../components/Caixa';
import Dkids from '../components/Dkids';
import SectionOne from '../components/SectionOne';
import CONTENT from '../components/CONTENT';
import SectionCases from '../components/SectionCases';
import Footer from '../components/Footer';
import {createBrowserHistory} from 'history';


const routes = [
    {
        index: 0,
        path: "/",
        exact: true,
        target: '_self',
        main: () => <LoadSite to={routes[0].path} component={routes[0].main}/>,
        hashs: '#intro'
    }, {
        index: 1,
        exact: true,
        path: "/pop",
        target: '_blank',
        main: () => <Pop to={routes[0].path + routes[1].hashs} component={routes[0].main}/>,
        hashs: '#pop'
    }, {
        index: 2,
        path: "/mars",
        target: '_self',
        main: () => <Mars to={routes[0].path + routes[2].hashs} component={routes[0].main}/>,
        hashs: '#mars'
    }, {
        index: 3,
        path: "/caixa",
    main: () => <Caixa to={routes[0].path + routes[3].hashs} component={routes[0].main}/>,
        hashs: '#caixa'
    }, {
        index: 4,
        path: "/dkids",
        main: () => <Dkids to={routes[0].path + routes[4].hashs} component={routes[0].main}/>,
        hashs: '#dkids'
    }
];
const LoadSite = () => {
    return (
        <TweenOne
            id={CONTENT.id}
            component='div'
            key={CONTENT.id}
            className='main'
            animation={[{opacity:0}, {duration: 20,opacity:1}]}
            style={{opacity:0}}
            >
            <Intro/><SectionOne/> {CONTENT.map((i) => (<SectionCases
                data={{
                params: {
                    id: i.id
                }
            }}
                to={routes[i.index].path}/>))}
            <Footer/>
        </TweenOne>
    );
};
class Site extends React.Component {
    componentWillMount = () => {
        window.addEventListener('load', this.history.bind(this));
        window.removeEventListener('load', this.history.bind(this));
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
                    : (this.removeHash(), id.scrollIntoView({behavior: "instant" }));
            }, 0.1);
        });
    }
    removeHash = () => {
        const loc = window.location
        const hist = window.history
        if (hist && 'pushState' in hist) {
            hist.replaceState('/#', document.title, loc.pathname + loc.search)
        } else {
            const scrollV = document.body.scrollTop
            const scrollH = document.body.scrollLeft
            loc.hash = '';
            document.body.scrollTop = scrollV
            document.body.scrollLeft = scrollH
        }
    }
    render() {
        return (
            <HashRouter history={this.history}>
                <div className="container">
                    {routes.map((route, index) => (<Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        target={route.target}/>))}</div>
            </HashRouter>
        )
    }
}
export default Site;
