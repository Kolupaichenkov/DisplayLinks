import React from 'react';

import jason from '../../images/jason.png';

const Main = () => {
    return(
    <div className="main" id="main">
        <div className="main__wrapper">
            <img src={ jason } className="main__img" alt="Jason Wood" />
            <div className="main__content">
                <h1 className="main__h1">ABOUT ME</h1>
                    <p className="main__p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <p className="main__p">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                <h2 className="main__h2">Jason Wood</h2>
            </div>
        </div>
    </div>
    );
};

export default Main;