import * as Actions from '../actions';

const initialState = {
    role: [],
    data: {
        'displayName': 'John Doe',
        'photoURL'   : 'assets/images/avatars/Velazquez.jpg',
        'email'      : 'johndoe@withinpixels.com',
        shortcuts    : [
            'calendar',
            'mail',
            'contacts',
            'todo'
        ]
    }
};

const initialStateEtudiant = {
    role: ['etudiant'],
    data: {
        'uuid' : '',
        'nom' : '',
        'prenom' : '',
        'dateNaissance' : '',
        'image':'',
        'ecole' : '',
        'pays' : '',
        'displayName': '',
        'photoURL'   : 'assets/images/avatars/Velazquez.jpg',
        'email'      : 'johndoe@withinpixels.com',
        shortcuts    : [
            'calendar',
            'mail',
            'contacts',
            'todo'
        ]
    }
};

const initialStateEntreprise = {
    role: ['entreprise'],
    data : {
        'uuid' : '',
        'ice' : '',
        'adresse' : '',
        'pays' : '',
        'ville' : '',
        'activite' : '',
        'dateNaissance':'',
        'image' : '',
        'displayName': '',
        'photoURL'   : 'assets/images/avatars/Velazquez.jpg',
        'email'      : 'johndoe@withinpixels.com'
    }
}

const initialStateArtisant = {
    role: ['artisan'],
    data : {
        'uuid' : '',
        'nom' : '',
        'prenom' : '',
        'dateNaissance' : '',
        'pays' : '',
        'activite' : '',
        'displayName': 'John Doe',
        'photoURL'   : 'assets/images/avatars/Velazquez.jpg',
        'email'      : 'johndoe@withinpixels.com',
    }
}

const initialStateArchitecte = {
    role: ['architecte'],
    data : {
        'uuid' : '',
        'nom' : '',
        'prenom' : '',
        'dateNaissance' : '',
        'pays' : '',
        'specialite' : '',
        'displayName': 'John Doe',
        'photoURL'   : 'assets/images/avatars/Velazquez.jpg',
        'email'      : 'johndoe@withinpixels.com',
    }
}
//const user = function (state = initialState, action) {


const user = function (state = initialState, action) {

    if(action.role === 'etudiant'){
        state = initialStateEtudiant;
    } else if (action.role === 'architecte'){
        state = initialStateArchitecte;
    } else if (action.role === 'artisan'){
        state = initialStateArtisant;
    } else if (action.role === 'entreprise'){
        state = initialStateEntreprise;
    } 



    switch ( action.type )
    {
        case Actions.SET_USER_DATA:
        {
            return {
                ...state,
                ...action.payload
            };
        }
        case Actions.REMOVE_USER_DATA:
        {
            return {
                ...initialState
            };
        }
        case Actions.USER_LOGGED_OUT:
        {
            return initialState;
        }
        default:
        {
            return state
        }
    }
};

export default user;
