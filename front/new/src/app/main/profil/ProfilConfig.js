import React from 'react';

export const ProfilConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/profil',
            component: React.lazy(() => import('./Profil'))
        }
    ]
};
