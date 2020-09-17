import React from 'react';
import {TaskCard} from './TaskCard'
import Grid from '@material-ui/core/Grid';
import './TaskCard.css';
import "../cardComponent/CardList.css";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

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

        <div className="root">
        <GridList cellHeight={160} className="gridList" cols={3}>
          {CardList}
        </GridList>
      </div>
    );


    }

}