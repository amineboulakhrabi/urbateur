//import firebaseService from 'app/services/firebaseService';
import history from '@history';
//import * as UserActions from './user.actions';
//import * as Actions from 'app/store/actions';
import jwtService from 'app/services/jwtService';

export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';


export const submitRegister = ({password, email}) => 
{
    return function(dispatch, getState){

        jwtService.createUser({password,email});
        // export const fetchPosts = () => { 
        //  return async function(dispatch,getState){
        //       const response = await jsonPlaceholder.get('/posts');   
        // dispatch({type : 'FETCH_POSTS', payload: response})
        // }    ;
        //};
        history.push({
            pathname: '/etape2'
        });
    dispatch({type : REGISTER_SUCCESS})
    }
}
    /*(dispatch) => {

        
        
            .then((user) => {
                    //dispatch(UserActions.setUserData(user));
                    return dispatch({
                        type: REGISTER_SUCCESS
                    });
                }
            )
            catch(error => {
                return dispatch({
                    type   : REGISTER_ERROR,
                    payload: error
                });
            });
        }
    }
*/



