import React from 'react';
import './User.css';
import { DrawerMenu } from '../drawerComponent/DrawerMenu';
import { CardListManager } from '../cardComponent/CardListManager';

export class User extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(!localStorage.getItem('User') && !localStorage.getItem('Password')){
          window.location.href = "/"
        }
    }
    
    render(){

        return(
            <header>
                <div>
                    <DrawerMenu/>
                    <CardListManager/>
                </div>
            </header>
            
        );

    }


}
