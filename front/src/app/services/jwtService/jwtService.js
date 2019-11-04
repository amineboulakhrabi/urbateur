import axios from 'axios';
import jwtDecode from 'jwt-decode';
import FuseUtils from '@fuse/FuseUtils';

class jwtService extends FuseUtils.EventEmitter {

    init()
    {
        this.setInterceptors();
        this.handleAuthentication();
    }

    setInterceptors = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            return new Promise((resolve, reject) => {
                if ( err.response.status === 401 && err.config && !err.config.__isRetryRequest )
                {
                    // if you ever get an unauthorized response, logout the user
                    this.emit('onAutoLogout', 'Invalid access_token');
                    this.setSession(null);
                }
                throw err;
            });
        });
    }

    handleAuthentication = () => {

        let access_token = this.getAccessToken();

        if ( !access_token )
        {
            this.emit('onNoAccessToken');

            return;
        }

        if ( this.isAuthTokenValid(access_token) )
        {
            this.setSession(access_token);
            this.emit('onAutoLogin', true);
        }
        else
        {
            this.setSession(null);
            this.emit('onAutoLogout', 'access_token expired');
        }
    };

   




    createUser = (data) => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                headers: {
                  'Content-type': 'application/json',
                  "charset":"UTF-8"
                },
                url: 'http://localhost:3005/signup',
                data: JSON.stringify(data)
            })
            .then(function (reponse) {
                
                localStorage.setItem('jwt_access_token', reponse.data.token);
                //On traite la suite une fois la réponse obtenue 
                
            })
            .catch(function (erreur) {
                //On traite ici les erreurs éventuellement survenues
                
            });
             
        });
    };

    signInWithEmailAndPassword = (email, password) => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                headers: {
                  'Content-type': 'application/json',
                  "charset":"UTF-8"
                },
                url: 'http://localhost:3005/signin',
                data: JSON.stringify({
                    email,
                    password
                })
            })
            .then(response => {
                console.log(response);
                if(response.data.user)
                {
                    this.setSession(response.data.access_token);
                    resolve(response.data.user);
                }
                else
                {
                    reject("Error");
                }
            })
            
        });
    };

    signInWithToken = () => {
        return new Promise((resolve, reject) => {
           /* axios.get('/api/auth/access-token', {
                data: {
                    access_token: this.getAccessToken()
                }
            })
                .then(response => {
                    if ( response.data.user )
                    {
                        this.setSession(response.data.access_token);
                        resolve(response.data.user);
                    }
                    else
                    {
                        this.logout();
                        reject('Failed to login with token.');
                    }
                })
                .catch(error => {
                    this.logout();
                    reject('Failed to login with token.');
                });*/
                axios({
                    method: 'post',
                    headers: {
                      'Content-type': 'application/json',
                      "charset":"UTF-8"
                    },
                    url: 'http://localhost:3005/signInWithToken',
                    data: {
                        access_token:this.getAccessToken()
                    }
                }).then(response => {
                    if ( response.data.user )
                    {
                        this.setSession(response.data.access_token);
                        resolve(response.data.user);
                    }
                    else
                    {
                        this.logout();
                        reject('Failed to login with token.');
                    }
                })
                .catch(error => {
                    this.logout();
                    reject('Failed to login with token.');
                });
            });
    };

    updateUserData = (user) => {
        return axios.post('/api/auth/user/update', {
            user: user
        });
    };
     
    setAccessToken = access_token => {
        localStorage.setItem('jwt_access_token', access_token);
        localStorage.setItem("mytime", Date.now());
    };

    setSession = access_token => {
        if ( access_token )
        {
            this.setAccessToken(access_token);
          //  localStorage.setItem('jwt_access_token', access_token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        }
        else
        {
            //localStorage.removeItem('jwt_access_token');
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    logout = () => {
        //this.setSession(null);
        localStorage.removeItem('jwt_access_token');
    };

    /*isAuthTokenValid = access_token => {
        if ( !access_token )
        {
            return false;
        }
        const decoded = jwtDecode(access_token);
        const currentTime = Date.now() / 1000;
        if ( decoded.exp < currentTime )
        {
            console.warn('access token expired');
            return false;
        }
        else
        {
            return true;
        }
    };*/

    isAuthTokenValid = access_token => {
        if ( !access_token )
        {
            return false;
        }
        const decoded = jwtDecode(access_token);
        const currentTime = Date.now() / 1000;
        if ( decoded.exp < currentTime )
        {
            console.warn('access token expired');
            return false;
        }
        else
        {
            return true;
        }
    };

    getAccessToken = () => {
        //localStorage.setItem("mytime", Date.now());
        return window.localStorage.getItem('jwt_access_token');
     };

    registerEtudiant =(data)=>{
        const accesstoken = window.localStorage.getItem('jwt_access_token');
        console.log(accesstoken);
        const decoded = jwtDecode(accesstoken);
        data.uuid = decoded.access_token;


        axios({
            method: 'post',
            headers: {
              'Content-type': 'application/json',
              "charset":"UTF-8"
            },
            url: 'http://localhost:3005/registeretudiant',
            data: JSON.stringify({data})
            
        })
        .then(function (reponse) {
            console.log(data);
          //  window.localStorage.getItem('jwt_access_token');
        })
        .catch(function (erreur) {
            //On traite ici les erreurs éventuellement survenues
            console.log(erreur);
        });
    }

    registerEntreprise =(data)=>{
        const accesstoken = window.localStorage.getItem('jwt_access_token');
        const decoded = jwtDecode(accesstoken);
        data.uuid = decoded.access_token;
        axios({
            method: 'post',
            headers: {
              'Content-type': 'application/json',
              "charset":"UTF-8"
            },
            url: 'http://localhost:3005/registerentreprise',
            data: JSON.stringify({data})
        })
        .then(function (reponse) {
            console.log(reponse);
        })
        .catch(function (erreur) {
            //On traite ici les erreurs éventuellement survenues
            console.log(erreur);
        });
     }
     registerArchitecte =(data)=>{
        const accesstoken = window.localStorage.getItem('jwt_access_token');
        const decoded = jwtDecode(accesstoken);
        data.uuid = decoded.access_token;
        axios({
            method: 'post',
            headers: {
              'Content-type': 'application/json',
              "charset":"UTF-8"
            },
            url: 'http://localhost:3005/registerarchitecte',
            data: JSON.stringify({data})
        })
        .then(function (reponse) {
            console.log(reponse);
        })
        .catch(function (erreur) {
            //On traite ici les erreurs éventuellement survenues
            console.log(erreur);
        });
     }
     registerArtisant =(data)=>{
        const accesstoken = window.localStorage.getItem('jwt_access_token');
        const decoded = jwtDecode(accesstoken);
        data.uuid = decoded.access_token;
        axios({
            method: 'post',
            headers: {
              'Content-type': 'application/json',
              "charset":"UTF-8"
            },
            url: 'http://localhost:3005/registerartisant',
            data: JSON.stringify({data})
        })
        .then(function (reponse) {
            console.log(reponse);
        })
        .catch(function (erreur) {
            //On traite ici les erreurs éventuellement survenues
            console.log(erreur);
        });
     }
   
 




}

const instance = new jwtService();

export default instance;
