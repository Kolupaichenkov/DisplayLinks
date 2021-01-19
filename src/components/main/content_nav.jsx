import React from 'react';

const Content_nav = () => {
    return(
    <div className="main_nav">
        <div className="content_nav">
            <ul className="content_nav__menu">
                <li className="content_nav__menu__item"><a className="content_nav__menu__item__link--start">HOME</a></li>
                <li className="content_nav__menu__item"><a className="content_nav__menu__item__link">ABOUT ME</a></li>
                <li className="content_nav__menu__item"><a className="content_nav__menu__item__link">PORTFOLIO</a></li>
                <li className="content_nav__menu__item"><a className="content_nav__menu__item__link--end">CONTACT</a></li>
            </ul>
        </div>
    </div>
    );
};

export default Content_nav;