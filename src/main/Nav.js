import React from 'react';
import { Link} from 'react-router-dom';
const Nav = ({style,opacity}) => {
    return (
            <div className='nav-wap'>
                    <Link to='/' className='logo' style={style}>
                        Ale <br /> Almeida  <span> Product Design, Creative Direction </span>
                    </Link>
            </div>
    );
};

export default Nav;
