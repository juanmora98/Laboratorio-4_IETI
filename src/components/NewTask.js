import React from 'react';
import { DrawerMenu } from './drawerComponent/DrawerMenu';
import { CardListManager } from './cardComponent/CardListManager';

export class NewTask extends React.Component {

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
            <div>
                <DrawerMenu/>
                <CardListManager/>
            </div>
            
        );

    }


}