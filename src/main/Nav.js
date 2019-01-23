import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Logo from './Logo'
const Nav = () => {
    return (
        <nav>
            <div className='nav-wap'>
                <Router>
                    <Link to='/' className='nav-list'>
                        <Logo />
                    </Link>
                </Router>
            </div>
        </nav>
    );
};

export default Nav;
