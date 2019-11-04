import React, {useState} from 'react';
import { Button,/*Icon, ListItemIcon, ListItemText*/ Popover/*, MenuItem, Typography*/} from '@material-ui/core';
//import {useSelector, useDispatch} from 'react-redux';
import {
    Container, 
    Menu
  } from 'semantic-ui-react'
//import {Link} from 'react-router-dom';

function UserMenu(props)
{
    //const user = useSelector(({auth}) => auth.user);
    const fixed = false;
    const [userMenu, setUserMenu] = useState(null);

   /* const userMenuClick = event => {
        setUserMenu(event.currentTarget);
    };*/

    const userMenuClose = () => {
        setUserMenu(null);
    };

    return (
        <React.Fragment>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
        

            <Popover
                open={Boolean(userMenu)}
                anchorEl={userMenu}
                onClose={userMenuClose}
                anchorOrigin={{
                    vertical  : 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical  : 'top',
                    horizontal: 'center'
                }}
                classes={{
                    paper: "py-8"
                }}
            >
                
                
            </Popover>
        </React.Fragment>
    );
}

export default UserMenu;
