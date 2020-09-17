import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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

    logout(){
        localStorage.clear();
        window.location.href = "/";
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
                            <Button onClick={this.logout}>Logout</Button>
                        </Drawer>
                    </Toolbar>
                </AppBar>
                    
            </React.Fragment>
        );
    }

}