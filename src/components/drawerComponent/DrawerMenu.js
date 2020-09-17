import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import EditIcon from '@material-ui/icons/Edit';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import './DrawerMenu.css';
import { AppBar, Toolbar } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { UserCard } from './UserCard';
import Button from '@material-ui/core/Button';

export class DrawerMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown') {
            return;
        }
        this.setState({open: open})
    };

    logout = (event) => {
        localStorage.clear();
        window.location.href = "/";
    }

    UserView = (event) =>{
        window.location.href = "/user"
    }

    TaskView = (event) => {
        window.location.href = "/NewTask"
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" className='colorBar'>
                    <Toolbar>
                        <IconButton edge="start" aria-label="menu" onClick={this.toggleDrawer(true)}>
                            <MenuIcon className='menuIcon' />
                        </IconButton>
                        <Drawer open={this.state.open} onClose={this.toggleDrawer(false)}>
                            <UserCard/>
                            <Divider />
                            <List>
                                <ListItem
                                    button
                                    key="Home"
                                    onClick={this.UserView}
                                >
                                    <ListItemIcon>
                                        <HomeIcon htmlColor="black" className='HomeIcon'/>
                                    </ListItemIcon>
                                    <Box color="black" p={0} display='block'>
                                        <ListItemText  primary="Home" />
                                    </Box>                
                                </ListItem>

                                <ListItem
                                    button
                                    key="New Task"
                                    onClick={this.TaskView}
                                >
                                    <ListItemIcon>
                                        <PlaylistAddIcon htmlColor="black" className='PlaylistAddIcon'/>
                                    </ListItemIcon>
                                    <Box color="black" p={0} display='block'>
                                        <ListItemText primary="New Task" />
                                    </Box>
                                    
                                </ListItem>

                                <ListItem
                                    button
                                    key="Registration"
                                    onClick={this.UserView}
                                >
                                    <ListItemIcon>
                                        <EditIcon htmlColor="black" className='EditIcon'/>
                                    </ListItemIcon>
                                    <Box color="black" p={0} display='block'>
                                        <ListItemText primary="Registration" />
                                    </Box>
                                </ListItem>
                            </List>
                            <Button onClick={this.logout}>Logout</Button>
                        </Drawer>
                    </Toolbar>
                </AppBar>
                    
            </React.Fragment>
        );
    }

}