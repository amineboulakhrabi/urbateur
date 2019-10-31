import {combineReducers} from 'redux';
import user from './user.reducer';
import login from './login.reducer';
import register from './register.reducer';
import etape2 from './etape2.reducer';

const authReducers = combineReducers({
    user,
    login,
    register,
    etape2
});

export default authReducers;