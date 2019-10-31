//import * as UserActions from './user.actions';
import jwtService from 'app/services/jwtService';
import history from '@history';
export const REGISTER_ETUDIANT_ERROR = 'REGISTER_ERROR';
export const REGISTER_ETUDIANT_SUCCESS = 'REGISTER_ETUDIANT_SUCCESS';
export const REGISTER_ENTREPRISE_SUCCESS = 'REGISTER_ENTREPRISE_SUCCESS';
export const REGISTER_ARTISANT_SUCCESS = 'REGISTER_ARTISANT_SUCCESS';
export const REGISTER_ARCHITECTE_SUCCESS = 'REGISTER_ARCHITECTE_SUCCESS';

export const submitRegisterEtudiant = ({ nom, prenom, dateNaissance, ecole, pays}) => 
{
    return function(dispatch,getState)
    {
        jwtService.registerEtudiant({
            nom,
            prenom,
            dateNaissance,
            ecole,
            pays
        });
        history.push({
            pathname: '/'
        });
        dispatch({type : REGISTER_ETUDIANT_SUCCESS});
    }
}

export const submitRegisterArtisant = ({ nom, prenom, dateNaissance, pays, activite}) => 
{
    return function(dispatch,getState)
    {
        jwtService.registerArtisant({
            nom,
            prenom,
            dateNaissance,
            pays,
            activite
        });
        history.push({
            pathname: '/'
        });
        dispatch({type : REGISTER_ARTISANT_SUCCESS});
    }
}

export const submitRegisterEntreprise = ({ ice, adresse, pays, ville,activite, dateCreation}) => 
{
    return function(dispatch,getState)
    {
        jwtService.registerEntreprise({
            ice,
            adresse,
            pays,
            ville,
            activite,
            dateCreation
        });
        history.push({
            pathname: '/'
        });
        dispatch({type : REGISTER_ENTREPRISE_SUCCESS});
    }
}


export const submitRegisterArchitecte = ({ nom, prenom, dateNaissance, pays,specialite}) => 
{
    return function(dispatch,getState)
    {
        jwtService.registerArchitecte({
            nom,
            prenom,
            dateNaissance,
            pays,
            specialite
        });
        history.push({
            pathname: '/'
        });
        dispatch({type : REGISTER_ARCHITECTE_SUCCESS});
    }
}

        
        
        
        
        /*.then((user) => {
                   // dispatch(UserActions.setUserData(user));
                    return dispatch({
                        type: REGISTER_ETUDIANT_SUCCESS
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : REGISTER_ETUDIANT_ERROR,
                    payload: error
                });
            });
}*/

