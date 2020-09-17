import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class TaskCard extends React.Component { 

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card className="card">
                <CardContent>
                    <Typography>
                        {this.props.description}
                    </Typography>
                    <Typography>
                        {this.props.name}
                    </Typography>
                    <Typography>
                        {this.props.status}
                    </Typography>
                    <Typography>
                        {new Date(this.props.dueDate).toLocaleDateString()}
                    </Typography>                    
                </CardContent>
            </Card>
      );
    }

}
