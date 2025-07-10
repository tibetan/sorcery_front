import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from '../pages/main-page';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';
import TestPage from '../pages/test-page';

import './router.sass';

const AppRoutes = () => (
  <div className="router">
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  </div>
);

export default AppRoutes;
