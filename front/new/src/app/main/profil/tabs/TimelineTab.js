import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Icon,
    IconButton,
    Input,
    List,
    ListItem,
    ListItemText,
    Paper,
    Toolbar,
    Typography
} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';
import axios from 'axios';
import {Link} from 'react-router-dom';

function TimelineTab()
{
    const [data, setData] = useState(null);

    useEffect(() => {
        /*axios.get('http://localhost:3005/afficherPost').then(res => {
            setData(res.data);
        });*/
        axios({
            method: 'post',
            headers: {
              'Content-type': 'application/json',
              "charset":"UTF-8"
            },
            url: 'http://localhost:3005/afficherPost',
            data: window.localStorage.getItem('jwt_access_token')
        })
        .then(function (reponse) {
            setData(reponse[0].data); 
            //On traite la suite une fois la réponse obtenue 
            
        })
        .catch(function (erreur) {
            //On traite ici les erreurs éventuellement survenues
            
        });
    }, []);

    if ( !data )
    {
        return null;
    }

    return (
        <div className="md:flex max-w-2xl">

            <div className="flex flex-col flex-1 md:pr-32">

                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <div>
                        <Card className="w-full overflow-hidden">
                            <Input
                                className="p-16 w-full"
                                classes={{root: 'text-14'}}
                                placeholder="Write something.."
                                multiline
                                rows="6"
                                margin="none"
                                disableUnderline
                            />
                            <AppBar className="card-footer flex flex-row border-t-1" position="static" color="default" elevation={0}>
                                <div className="flex-1 items-center">
                                    <IconButton aria-label="Add photo">
                                        <Icon>photo</Icon>
                                    </IconButton>
                                    
                                </div>

                                <div className="p-8">
                                    <Button variant="contained" color="primary" size="small" aria-label="post">
                                        POST
                                    </Button>
                                </div>

                            </AppBar>
                        </Card>

                        <Divider className="my-32"/>
                    </div>

                    {data.map((post) => (
                            <Card key={post.Idpost} className="mb-32 overflow-hidden">
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="Recipe" src={post.avatar}/>
                                    }
                                    action={
                                        <IconButton aria-label="more">
                                            <Icon>more_vert</Icon>
                                        </IconButton>
                                    }
                                    title={(
                                        <span>
                                                <Typography className="inline font-medium mr-4" color="primary" paragraph={false}>
                                                    {post.name}
                                                </Typography>
                                            </span>
                                    )}
                                    subheader={post.time}
                                />

                                <CardContent className="py-0">
                                    {post.Post && (
                                        <Typography component="p" className="mb-16">
                                            {post.Post}
                                        </Typography>
                                    )}

                                 </CardContent>

                                <CardActions disableSpacing>
                                    <Button size="small" aria-label="Add to favorites">
                                        <Icon className="text-16 mr-8" color="action">favorite</Icon>

                                    </Button>
                                </CardActions>

                                <AppBar className="card-footer flex flex-column p-16" position="static" color="default" elevation={0}>

                                    
                                          

                                    <div className="flex flex-auto">
                                        <Avatar src="assets/images/avatars/profile.jpg"/>
                                        <div className="flex-1 pl-8">
                                            <Paper elevation={0} className="w-full mb-16">
                                                <Input
                                                    className="p-8 w-full border-1"
                                                    classes={{root: 'text-13'}}
                                                    placeholder="Add a comment.."
                                                    multiline
                                                    rows="6"
                                                    margin="none"
                                                    disableUnderline
                                                />
                                            </Paper>
                                            <Button className="normal-case" variant="contained" color="primary" size="small">Post Comment</Button>
                                        </div>
                                    </div>
                                </AppBar>
                            </Card>
                        )
                    )}
                </FuseAnimateGroup>

            </div>

            <div className="flex flex-col md:w-320">
                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <Card className="w-full">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pl-16 pr-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    Latest Activity
                                </Typography>
                                <Button color="inherit" size="small">See All</Button>
                            </Toolbar>
                        </AppBar>
                        <CardContent className="p-0">
                            <List>
                                {data.activities.map((activity) => (
                                    <ListItem key={activity.id} className="">
                                        <Avatar alt={activity.user.name} src={activity.user.avatar}/>
                                        <ListItemText
                                            className="flex-1"
                                            primary={(
                                                <div className="truncate">
                                                    <Typography className="inline font-medium" color="primary" paragraph={false}>
                                                        {activity.user.name}
                                                    </Typography>

                                                    <Typography className="inline ml-4" paragraph={false}>
                                                        {activity.message}
                                                    </Typography>
                                                </div>
                                            )}
                                            secondary={activity.time}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </FuseAnimateGroup>
            </div>
        </div>
    );
}

export default TimelineTab;
