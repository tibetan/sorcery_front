import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { setupStore } from './store';
import ErrorBoundary from './components/error-boundary/error-boundary';
import { BookstoreServiceProvider } from './components/bookstore-service-context/bookstore-service-context';
import BookstoreService from './services/bookstore-service';
import App from './components/app/app';

const store = setupStore();
const bookstoreService = new BookstoreService();

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>
);
