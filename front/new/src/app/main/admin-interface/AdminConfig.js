import React from 'react';
import {authRoles} from 'app/auth';
export const AdminConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.onlyGuest,
    routes  : [
        {
            path     : '/admin-interface',
            component: React.lazy(() => import('./FileManagerApp'))
        }
    ]
};
