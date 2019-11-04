import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import {AccueilConfig} from 'app/main/accueil/AccueilConfig';
import {appsConfigs} from 'app/main/apps/appsConfigs';
import {AdminConfig} from 'app/main/admin-interface/AdminConfig';
import {pagesConfigs} from 'app/main/pages/pagesConfigs';
import {authRoleExamplesConfigs} from 'app/main/auth/authRoleExamplesConfigs';
import {UserInterfaceConfig} from 'app/main/user-interface/UserInterfaceConfig';
import {LoginConfig} from 'app/main/login/LoginConfig';
import {RegisterConfig} from 'app/main/register/RegisterConfig';
import {LogoutConfig} from 'app/main/logout/LogoutConfig';
import { ForgotPasswordConfig } from 'app/main/motdepasse-oublie/ForgotPasswordConfig';
import {MailConfirmConfig} from 'app/main/mail-confirm/MailConfirmConfig';
import {ProfilRegisterConfig} from 'app/main/etape2/ProfilRegisterConfig';
import {ProfilConfig} from 'app/main/profil/ProfilConfig';
const routeConfigs = [
    ...appsConfigs,
    ...pagesConfigs,
    ...authRoleExamplesConfigs,
    UserInterfaceConfig,
    AdminConfig,
    ProfilConfig,
    AccueilConfig,
    ProfilRegisterConfig,
    LogoutConfig,
    LoginConfig,
    RegisterConfig,
    MailConfirmConfig,
    ForgotPasswordConfig,
    LogoutConfig,
];

const routes = [
    //if you want to make whole app auth protected by default change defaultAuth for example:
    // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
    // The individual route configs which has auth option won't be overridden.
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
    {
        path     : '/',
        exact    : true,
        component: () => <Redirect to="/profil"/>
    },
    {
        component: () => <Redirect to="/pages/errors/error-404"/>
    }
];

export default routes;
