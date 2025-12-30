import React from 'react';

import Header from '../widgets/header/header';
import MainLayout from '@/app/main-layout/main-layout';
import Footer from '../widgets/footer/footer';

import './app.sass';

const App:React.FC = () => {
    return (
        <div className="app">
            <Header />
            <MainLayout />
            <Footer />
        </div>
    );
};

export default App;
