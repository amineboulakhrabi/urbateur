//import Homepage from './Homepage';
import Accueil from './Accueil';
//import {authRoles} from 'app/auth';
export const AccueilConfig = {
    settings: {
        layout: {
            config: {
                navbar        : {
                    display: false
                },
                toolbar       : {
                    display: false
                },
                footer        : {
                    display: false
                },
                leftSidePanel : {
                    display: false
                },
                rightSidePanel: {
                    display: false
                }
            }
        }
    },
    auth : ['', 'architect','artisan','etudiant','entreprise','admin'],
    routes  : [
        {
            path     : '/accueil',
            component: Accueil
        }
    ]
};

