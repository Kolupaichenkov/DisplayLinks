import React from 'react';

const Scroll = () => {
    return(
    <div className="scroll" id="scroll">
        <span className="scroll__text">SCROLL DOWN TO SEE MORE</span>
            <a href="#main" className="scroll__link">
                <div className="scroll__img" />
            </a>
    </div>
    );
};

export default Scroll;