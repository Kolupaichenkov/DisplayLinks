import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/header';

import Content from './components/main/content_nav';
import Main from './components/main/content';
import Scroll from './components/main/content_scroll';

import './index.css';

const App = () => {
    return(
    <div className="wrapper">
        <Header />
        <Content />
        <Main />
        <Scroll />
    </div>    
    );
};

ReactDOM.render(<App />,
    document.getElementById('root'));