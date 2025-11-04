import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './styles/theme';
import { setupStore } from './store';
import ErrorBoundary from './components/error-boundary/error-boundary';
import { ApiServiceProvider } from './components/api-service-context/api-service-context';
import { ApiService } from './services/api';

import App from './components/app/app';

const store = setupStore();

const root = createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <ErrorBoundary>
        {/* TODO удалить после полного перехода на RTK Query */}
      <ApiServiceProvider value={ApiService}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </ApiServiceProvider>
    </ErrorBoundary>
  </Provider>
);
