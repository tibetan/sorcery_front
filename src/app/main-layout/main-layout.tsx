import React from 'react';
import AppRoutes from '../router/router';

import './main-layout.sass';

const MainLayout: React.FC = () => {
    return (
        <main role="main" className="main">
            <AppRoutes />
        </main>
    );
};

export default MainLayout;
