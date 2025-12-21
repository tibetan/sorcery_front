import './app/styles/reset.sass';
import './app/styles/global.sass';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/app';
import WatercolorBlots from "@/shared/ui/watercolor-blots";
import CustomCursor from "@/shared/ui/custom-cursor";
import Index from './app/providers/error-boundary';

import { store } from './app/providers/store';

// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from './styles/theme';

const root = createRoot(document.getElementById('root')!);
root.render(
    <Provider store={store}>
        <Index>
            {/*<ThemeProvider theme={theme}>*/}
                {/*<CssBaseline />*/}
                <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                    <App />
                </Router>
            {/*<WatercolorBlots />*/}
            {/*<CustomCursor />*/}
            {/*</ThemeProvider>*/}
        </Index>
    </Provider>
);
