import React, {useState} from 'react';
import {Avatar, Button, Tab, Tabs, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FusePageSimple, FuseAnimate} from '@fuse';
import {useSelector} from 'react-redux';
import TimelineTab from './tabs/TimelineTab';
import PhotosVideosTab from './tabs/PhotosVideosTab';
import AboutTab from './tabs/AboutTab';

const useStyles = makeStyles(theme => ({
    layoutHeader: {
        height                        : 320,
        minHeight                     : 320,
        [theme.breakpoints.down('md')]: {
            height   : 240,
            minHeight: 240
        }
    }
}));

function Profil()
{
    const user = useSelector(({auth}) => auth.user);
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);

    function handleTabChange(event, value)
    {
        setSelectedTab(value);
    }

    return (
        <FusePageSimple
            classes={{
                header : classes.layoutHeader,
                toolbar: "px-16 sm:px-24"
            }}
            header={
                <div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
                    <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
                        <FuseAnimate animation="transition.expandIn" delay={300}>
                            <Avatar className="w-96 h-96" src={user.data.photoURL}/>
                        </FuseAnimate>
                        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                            <Typography className="md:ml-24" variant="h4" color="inherit">
                              {user.data.nom+ ' '+user.data.prenom}
                                </Typography>
                        </FuseAnimate>
                    </div>

                    <div className="flex items-center justify-end">
                        <Button className="mr-8 normal-case" variant="contained" color="secondary" aria-label="Follow">Follow</Button>
                        <Button className="normal-case" variant="contained" color="primary" aria-label="Send Message">Send Message</Button>
                    </div>
                </div>
            }
            contentToolbar={
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="off"
                    classes={{
                        root: "h-64 w-full border-b-1"
                    }}
                >
                    <Tab
                        classes={{
                            root: "h-64"
                        }}
                        label="Timeline"/>
                    <Tab
                        classes={{
                            root: "h-64"
                        }} label="About"/>
                    <Tab
                        classes={{
                            root: "h-64"
                        }} label="Photos & Videos"/>
                    <Tab 
                        classes={{
                            root:"h-64"
                        }} label="Mes Amis" />
                </Tabs>
            }
            content={
                <div className="p-16 sm:p-24">
                    {selectedTab === 0 &&
                    (
                        <TimelineTab/>
                    )}
                    {selectedTab === 1 && (
                        <AboutTab/>
                    )}
                    {selectedTab === 2 && (
                        <PhotosVideosTab/>
                    )}
                    {selectedTab === 3 && (
                        <div></div>
                    )}
                </div>
            }
        />
    )
}

export default Profil;
