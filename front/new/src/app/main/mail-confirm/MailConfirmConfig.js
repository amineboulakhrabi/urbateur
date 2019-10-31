import React from 'react';

export const MailConfirmConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/mail-confirm',
            component: React.lazy(() => import('./MailConfirm'))
        }
    ]
};
