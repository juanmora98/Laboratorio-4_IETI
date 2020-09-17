import React from 'react';
import {TaskCard} from './TaskCard'
import Grid from '@material-ui/core/Grid';
import './TaskCard.css';

export class CardList extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
    const CardList = this.props.items.map((cards, i) => {
        return (
            <TaskCard 
            key={i} 
            description={cards.description} 
            name={cards.responsible.name}             
            status={cards.status} 
            dueDate={cards.dueDate}
            />
        );
    });

    return (

        <div>
            <Grid container spacing={4} className="grid-container">
                {CardList}
            </Grid >
        </div>
    );


    }

}