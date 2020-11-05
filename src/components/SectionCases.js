import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import { withRouter } from 'react-router';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import params from './CONTENT';
// import { Link } from 'react-router-dom';
const ScrollParallax = ScrollAnim.Parallax;
const ScrollOverPack = ScrollAnim.OverPack;
const ScrollElement = ScrollAnim.Element;
const Link = ScrollAnim.Link;

// const found = array1.find(element => element > 10);

const PROP = {
    timeline_1: [
        {
            ease: 'linear',
            playScale: [
                -1, 0
            ],
            opacity: 0
        }, {
            opacity: 1,
            ease: 'linear',
            playScale: [0.5, 0.6]
        }, {
            opacity: 0,
            ease: 'linear',
            playScale: [1.4, 1.8]
        }
    ],
    ease: [
        'easeInOutExpo', 'easeOutExpo'
    ],
    delay: [
        1500, 1500
    ],
    duration: [1200, 2000]
}
class SectionCases extends React.Component {
    constructor({ props, to, target, data, i, p }) {
        super({ props, data,i, p})
        this.state = {
            reverse: false,
            items: [
                {
                    key: '11'
                },
            ],
            class: 'cases',
            classAtivo: 'cases_clicado', 
            tw: {},
            hash: window.location.hash,
            h: '10vh'
             
        }
        this.target = target
        this.to = to.split('/')[1]
        this.class = this.state.class
        this.classAtivo = this.state.classAtivo
        this.data = data

    }
    componentDidMount(){
        this.setState({
            tw: this.i.tween
        });
        
        setTimeout(() => {
            var Hash = this.state.hash.split('/');
           this.state.hash === '#/' ? 
        
        this.smoothScroll.scrollTo(`#root`):this.smoothScroll.scrollTo(`#${Hash[2]}`)
        }, 10)
    }
    onClick = (e) => {
        e.preventDefault()
        this.setState({
            reverse: true,
            items: [],
            class: (this.class + " " + this.classAtivo),
            tw: this.i.tween2

        });
        setTimeout(() => {
            this.props.history.push(this.to)
        }, 2500)
    }
    smoothScroll = {
        scrollTo: (id, callback) => {
            var settings = {
                duration: 10,
                easing: {
                    inoutQuint: function (x, t, b, c, d) {
                        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                    }
                }
            };
            var percentage;
            var startTime;
            var node = document.querySelector(id);
            var nodeTop = node.offsetTop;
            var nodeHeight = node.offsetHeight;
            var body = document.body;
            var html = document.documentElement;
            var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            var windowHeight = window.innerHeight
            var offset = window.pageYOffset;
            var delta = nodeTop - offset - (windowHeight/8);
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
  
                if (percentage > 1 ) {
                    clearTimeout(this.timer);
  
                    if (callback) {
                        callback();
                    }
                } else {
                    yScroll = settings
                        .easing
                        .inoutQuint(node, elapsed, offset, targetY, settings.duration);
                        console.log(yScroll)
                    window.scrollTo(node, yScroll);
                    this.timer = setTimeout(step, 0);
                }
            }
  
            this.timer = setTimeout(step, 0);
        }
    }
    render() {
        const find = id => params.find(n => n.id == id)
        this.i = find(this.data.param.id)
        const to = this.to,
        target = this.target,
        ident = this.i.id,
        index = this.i.index,
        estilo = this.i.estilo,
        content = this.i.content,
        animation = this.i.animation,
        tween = this.i.tween,
        image = this.i.content.image
        return (
            <ScrollOverPack 
                ref={this.myRef}
                id={ident}
                component='section'
                className={this.state.class}
                playScale={[-0.3, 4]}>
               <article>
                    <TweenOne
                        // reverse={this.state.reverse}
                        component='div'
                        key={ident}
                        reverseDelay={0}
                        animation={this.state.tw}
                        style={{
                            opacity: 1
                        }}>
                        <ScrollParallax
                                // always={false}
                                location={ident}
                                key={ident+'12'}
                                className='bg'
                                style={{
                                    backgroundColor: estilo.bg, transform: 'translateY(-150px)'
                                }}
                                animation={{
                        playScale: [0,3.5],
                                        opacity: 1,
                                        y: '250',
                                        ease: 'easeInSine'
                        // onStart: () => { this.setCss('start'); },
                        // onComplete: () => { this.setCss('start'); },
                         }}/>
                         <ScrollParallax
                             // always={false}
                             key={ident+'13'}
                             style={{transform: 'translateY(0px) scale(0.95)'
                             }}
                             animation={{
                     playScale: [1, 2.5],
                                     opacity: 1,
                                     y: '150',
                                     ease: 'easeOutSine',
                                     scale:1
                     // onStart: () => { this.setCss('start'); },
                     // onComplete: () => { this.setCss('start'); },
                      }}>{content.media}</ScrollParallax>
                    </TweenOne>
                    </article>
                <QueueAnim
                component='header'
                type={['bottom', 'top']} interval={[150, 100]} delay={[600, 100]}
                duration={[600, 800]}
                ease={['easeOutCirc', 'easeInOutCirc']} leaveReverse reverse={this.state.reverse} animConfig={[{ opacity: [1, 0], y: [0, 80] }, { opacity: [1, 0], y: [0, 80] }]}>
                {
                    this.state.items.map(() =>
                        [
                            <h4 key={(index + '0')} style={{ opacity: 0}} >{content.h4}</h4>,
                <p key={(index + '1')} style={{ opacity: 0}} >{content.p}</p>,
                <Link
                    to={to}
                    // targetId={target}
                    component="a"
                    key={(index + '2')}
                    onClick={this.onClick}
                    className='callcase' >{content.a}</Link>
                        ]
                    )
                }

               
            </QueueAnim>
            </ScrollOverPack>
        );
    }
}

export default withRouter(SectionCases);
