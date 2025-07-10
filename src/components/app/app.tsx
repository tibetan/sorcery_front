import React from 'react';

import ShopHeader from '../shop-header/shop-header';
import AppRoutes from './router';
import Footer from '../footer/footer';

import './app.sass';

const App = () => {
  return (
    <main role="main" className="app">
      <ShopHeader />
      <AppRoutes />
      <Footer />
    </main>
  );
};

export default App;
