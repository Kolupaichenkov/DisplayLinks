import React from 'react';

const Scroll = () => {
    return(
    <div className="wrapper_content_scroll">
        <div className="content_scroll" id="content_scroll">
            <span className="content_scroll__text">SCROLL DOWN TO SEE MORE</span>
                <a href="#header" className="content_scroll__link">
                    <div className="content_scroll__img" />
                </a>
        </div>
    </div>
    );
};

export default Scroll;