import React, {useState} from 'react'
import {Card, CardContent, Tab, Tabs, Typography} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimate} from '@fuse';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import EntrepriseProfilTab from './tabs/EntrepriseProfilTab';
import ArtisantProfilTab from './tabs/ArtisantProfilTab';
import EtudiantProfilTab from './tabs/EtudiantProfilTab';
import ArchitecteProfilTab from './tabs/ArchitecteProfilTab';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + darken(theme.palette.primary.dark, 0.5) + ' 100%)',
        color     : theme.palette.primary.contrastText
    }
}));

function ProfilRegister()
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

                        <Typography variant="h6" className="md:w-full mb-32">CREATION DE PROFIL</Typography>
                        <span className="font-medium">Êtes-vous ?</span>
                        <Tabs
                            value={selectedTab}
                            onChange={handleTabChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            
                        >
                            <Tab
                                icon={<img className="h-40" src="assets/images/logos/student.png" alt="etudiant"/>}
                                className="min-w-0"
                                label="ETUDIANT"
                            />
                            <Tab
                                icon={<img className="h-40" src="assets/images/logos/architecte.png" alt="architecte"/>}
                                className="min-w-0"
                                label="ARCHITECTE"
                            />
                            <Tab
                                icon={<img className="h-40" src="assets/images/logos/entreprise.png" alt="entreprise"/>}
                                className="min-w-0"
                                label="ENTREPRISE"
                            />
                            <Tab
                                icon={<img className="h-40" src="assets/images/logos/craft.png" alt="auth0"/>}
                                className="min-w-0"
                                label="ARTISANT"
                            />
                        </Tabs>

                        {selectedTab === 0 && <EtudiantProfilTab/>}
                        {selectedTab === 1 && <ArchitecteProfilTab/>}
                        {selectedTab === 2 && <EntrepriseProfilTab/>}
                        {selectedTab === 3 && <ArtisantProfilTab/>}

                        <div className="flex flex-col items-center justify-center pt-32 pb-24">
                            <span className="font-medium">Already have an account?</span>
                            <Link className="font-medium" to="/login">Login</Link>
                            <Link className="font-medium mt-8" to="/">Back to Dashboard</Link>
                        </div>

                        <div className="flex flex-col items-center">
                        </div>
                    </CardContent>
                </Card>
            </FuseAnimate>
            </div>
        </div>
    )
}

export default ProfilRegister;
