import React from 'react';

import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';

import './app.sass';

const App:React.FC = () => {
    return (
        <div className="app">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
