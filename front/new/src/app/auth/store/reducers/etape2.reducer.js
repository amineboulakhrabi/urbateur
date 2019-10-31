import * as Actions from '../actions';

const initialState = {
    success: false,
    
};

const etape2 = function (state = initialState, action) {
    switch ( action.type )
    {
        
        case Actions.REGISTER_ETUDIANT_SUCCESS:
        {
            return {
                ...initialState,
                success: true
            };
        }
        default:
        {
            return state
        }
    }
};

export default etape2;