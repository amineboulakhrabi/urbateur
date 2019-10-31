import React from 'react';

export const ForgotPasswordConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/motdepasse-oublie',
            component: React.lazy(() => import('./ForgotPassword'))
        }
    ]
};
