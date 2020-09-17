import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';


export class UserCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: 'Juan Felipe Mora', correo:'juanmora@gmail.com'}
    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar variant='circle' className="Avatar">
                                <AccountCircleRoundedIcon className='icon' />
                            </Avatar>
                        }

                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title={this.state.name}
                        subheader= {this.state.correo}
                    />
                </Card>

            </div>
        )
    }








}
