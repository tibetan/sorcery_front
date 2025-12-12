import './styles/reset.sass';
import './styles/global.sass';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/app';
import WatercolorBlots from "./components/watercolor-blots/watercolor-blots";
import CustomCursor from "./components/custom-cursor/custom-cursor";
import ErrorBoundary from './components/error-boundary/error-boundary';
import { setupStore } from './store';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from './styles/theme';

const root = createRoot(document.getElementById('root')!);
const store = setupStore();
root.render(
    <Provider store={store}>
        <ErrorBoundary>
            {/*<ThemeProvider theme={theme}>*/}
                {/*<CssBaseline />*/}
                <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                    <App />
                </Router>
            {/*<WatercolorBlots />*/}
            {/*<CustomCursor />*/}
            {/*</ThemeProvider>*/}
        </ErrorBoundary>
    </Provider>
);
