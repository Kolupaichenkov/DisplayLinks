import React from 'react';

import Nav from './nav';
import Scroll from './scroll';

const Header = () => {
    return(
    <div className="header" id="header">
        <Nav />
        <Scroll />
    </div>
    );
};

export default Header;
