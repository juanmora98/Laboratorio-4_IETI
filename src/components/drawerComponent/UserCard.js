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
        this.state = {name: 'Juan Felipe Mora', correo:'mora@mail.com'}
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
                        title={localStorage.getItem("name") === null? this.state.name : localStorage.getItem("name")}
                        subheader= {localStorage.getItem("correo") === null? this.state.correo : localStorage.getItem("correo")}
                    />
                </Card>

            </div>
        )
    }








}
