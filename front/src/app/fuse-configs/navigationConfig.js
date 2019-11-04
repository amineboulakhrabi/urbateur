import {authRoles} from 'app/auth';

const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            
            {
                'id'   : 'accueil',
                'title': 'Accueil',
                'type' : 'item',
                'icon' : 'home',
                'url'  : '/accueil'
            },
            {
                'id'   : 'profile',
                'title': 'Profil',
                'type' : 'item',
                'icon' : 'person',
                'url'  : '/profil'
            },
            {
                'id'   : 'mail',
                'title': 'Messagerie',
                'type' : 'item',
                'icon' : 'email',
                'url'  : '/apps/mail',
                'badge': {
                    'title': 25,
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'   : 'academy',
                'title': 'Bibliothèque',
                'type' : 'item',
                'icon' : 'school',
                'url'  : '/apps/academy'
            },
            {
                'id' : 'admin-interface',
                'title' : "Interface d'administrateur",
                'type' : 'item',
                'url' : '/admin-interface',
                auth   : authRoles.admin

            },
            {
                'id'      : 'pricing',
                'title'   : 'Mes BRIKES',
                'type'    : 'item',
                'icon'    : 'attach_money',
                'url'     : '/pages/pricing/style-1'
            },           
            {
                'id'   : 'file-manager',
                'title': 'File Manager',
                'type' : 'item',
                'icon' : 'folder',
                'url'  : '/apps/file-manager'
            },
            {
                'id'   : 'contacts',
                'title': 'Contacts',
                'type' : 'item',
                'icon' : 'account_box',
                'url'  : '/apps/contacts/all'
            },
            {
                'id'   : 'logout',
                'title': 'Se deconnecter',
                'type' : 'item',
                auth   : authRoles.user,
                'url'  : '/logout',
                'icon' : 'exit_to_app'
            }
           
        ]
    },
    {
        'type': 'divider',
        'id'  : 'divider-2'
    }
    
];

export default navigationConfig;

