import React, {useState} from 'react'
import {Card, CardContent, Typography, Tabs, Tab} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimate} from '@fuse';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import JWTLoginTab from './tabs/JWTLoginTab';
//import FirebaseLoginTab from './tabs/FirebaseLoginTab';
//import Auth0LoginTab from './tabs/Auth0LoginTab';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + darken(theme.palette.primary.dark, 0.5) + ' 100%)',
        color     : theme.palette.primary.contrastText
    }
}));

function Login()
{
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);

    function handleTabChange(event, value)
    {
        setSelectedTab(value);
    }

    return (
        <div className={clsx(classes.root, "flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0")}>

        <div className="flex flex-col items-center justify-center w-full">

            <FuseAnimate animation={{translateX: [0, '100%']}}>

                <Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>

                    <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">

                        <Typography variant="h6" className="text-center md:w-full mb-48">CONNEXION</Typography>

                        <Tabs
                            value={selectedTab}
                            onChange={handleTabChange}
                            variant="fullWidth"
                            className="w-full mb-32"
                        >
                            <Tab
                                icon={<img className="h-40 p-4 bg-black rounded-12" src="assets/images/logos/jwt.svg" alt="firebase"/>}
                                className="min-w-0"
                                label="JWT"
                            />
                            <Tab
                                icon={<img className="h-40" src="assets/images/logos/firebase.svg" alt="firebase"/>}
                                className="min-w-0"
                                label="Firebase"
                            />
                            <Tab
                                icon={<img className="h-40" src="assets/images/logos/auth0.svg" alt="auth0"/>}
                                className="min-w-0"
                                label="Auth0"
                            />
                        </Tabs>
                            <JWTLoginTab/>
                     {/*   {selectedTab === 0 && <JWTLoginTab/>}
                        {selectedTab === 1 && <FirebaseLoginTab/>}
                        {selectedTab === 2 && <Auth0LoginTab/>} */}

                        <div className="flex flex-col items-center justify-center pt-32">
                            <span className="font-medium">Vous n'avez pas un compte ?</span>
                            <Link className="font-medium" to="/register">M'inscrire</Link>
                            <Link className="font-medium mt-8" to="/">Revenir à l'accueil</Link>
                        </div>

                    </CardContent>
                </Card>
            </FuseAnimate>
            </div>
        </div>
    )
}

export default Login;
