import React from 'react';
import './Login.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { Avatar, Typography, FormControl, InputLabel, OutlinedInput, Button, Grid} from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Input from '@material-ui/core/Input';


export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {mail: '' , password: ''};
        this.email = '';
        this.handleMail = this.handleMail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem('User', this.state.mail);
        localStorage.setItem('Password', this.state.password);
        window.location.href = "/user";
    }

    handleMail(e) {
        this.setState({
            mail: e.target.value
        });
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    componentDidMount() {
        if(localStorage.getItem('User') && localStorage.getItem('Password')){
            this.setState({
                mail: localStorage.getItem('User'),
                password: localStorage.getItem('Password')
            });
        }
    }

    


    render(){
        return(
            <React.Fragment>
                <CssBaseline />
                <Grid container direction="row" justify="center" alignItems="stretch">
                    <Grid item sm={12} md={6}>
                        <Paper>
                            <br />
                            <br />
                            <Typography align='center' variant='h3'>
                                Task Planner
                            </Typography>
                            <br/>
                            <Grid container justify="center" alignItems="center">
                                <Avatar variant='circle' className="Avatar">
                                    <AccountCircleRoundedIcon className='icon' />
                                </Avatar>
                            </Grid>
                            <br />
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Correo electronico</InputLabel>
                                <Input 
                                    id="mail" 
                                    name="mail" 
                                    autoComplete="mail" 
                                    value={this.state.mail} 
                                    onChange={this.handleMail}
                                    autoFocus
                                />
                            </FormControl>
                            <br/>
                            <br />
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Contraseña</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password}
                                    onChange={this.handlePassword}
                                />
                            </FormControl>
                            <br />
                            <br />
                            <Button
                            type= "submit"
                            ariant="contained" 
                            className="button" 
                            onClick= {this.handleSubmit}
                            >
                                Login
                            </Button>
                            <br />
                            <br />
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }


    

}
