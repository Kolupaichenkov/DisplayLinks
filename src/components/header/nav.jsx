import React from 'react';

import Infinity from '../../images/nav-icon.png';

const Nav = () => {
    return(
    <div className="nav">
        <div className="nav__icon">
            <input className="nav__check" type="checkbox" id="showmenu"/>
                <label className="nav__showmenu" for="showmenu">
                    <span><img src={ Infinity } alt="Infinity icon" /> MENU</span>
                </label>
  	                <label className="nav__back" for="showmenu"></label>
        </div>
            <ul className="nav__menu"> 
                <li className="nav__menu__item"><a className="nav__menu__item__link--start">HOME</a></li>
                <li className="nav__menu__item"><a className="nav__menu__item__link">ABOUT ME</a></li>
                <li className="nav__menu__item"><a className="nav__menu__item__link">PORTFOLIO</a></li>
                <li className="nav__menu__item"><a className="nav__menu__item__link--end">CONTACT</a></li>
            </ul>
    </div>
    );
};

export default Nav;