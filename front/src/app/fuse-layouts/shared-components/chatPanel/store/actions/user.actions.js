import axios from 'axios';
export const GET_USER_DATA = '[CHAT PANEL] GET USER DATA';

export function getUserData()
{
    const request = axios.get('/api/chat/user');

    return (dispatch) =>
        request.then((response) => {
        //response.data.id=user.uuid;
        //response.data.name=user.nom+' '+user.prenom;
        //response.data.avatar=user.phototURL;
        console.log(response);
            dispatch({
                type   : GET_USER_DATA,
                payload: response.data
            })
        }
        );
}
