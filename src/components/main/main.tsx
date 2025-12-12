import React from 'react';
import AppRoutes from '../app/router';

import './main.sass';

const Main: React.FC = () => {
    return (
        <main role="main" className="main">
            <AppRoutes />
        </main>
    );
};

export default Main;
