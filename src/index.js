import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

import './styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/common.sass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
