import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ShopHeader from '../shop-header/shop-header';
import MainPage from '../pages/main-page';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';
import TestPage from '../pages/test-page';
import './app.sass';

const App = () => {
  return (
    <main role="main" className="app">
      <ShopHeader />
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />

        <Route
          path="/home"
          element={<HomePage />}
        />

        <Route
          path="/cart"
          element={<CartPage />}
        />

        <Route
          path="/test"
          element={<TestPage />}
        />
      </Routes>
    </ main>
  );
};

export default App;
