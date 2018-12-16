import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import content from './SectionsContent';
const Link = ScrollAnim.Link;

const Menu = () => {
    return <LoadMenu/>
}

class LoadMenu extends React.Component {
    onFocus = (e) => {
        this.dom = e.target;
        e.target.className = 'active';
        document
            .getElementById(e.to)
            .setAttribute('class', 'pack-page ' + e.to + ' active');
    }

    onBlur = (e) => {
        document
            .getElementById(e.to)
            .setAttribute('class', 'pack-page ' + e.to);
    }
    render() {
        return (
            <nav className='nav'>
                <div className='nav-wap'>
                    {content.map(i => (
                        <Link
                            key={'link'+i.id}
                            className="nav-list"
                            to={i.hash}
                            toShowHeight
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            m={{
                            p: {
                                u: i.id
                            }
                        }}>
                            {'Example' + i.id}
                        </Link>
                    ))
}
                </div>
            </nav>
        )

    }
}
export default Menu;