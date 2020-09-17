import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import "date-fns";
import { DrawerMenu } from '../drawerComponent/DrawerMenu';

export class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            correo: '',
            contrasenia: '',
            contraseniaC: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);

        this.handleCorreoChange = this.handleCorreoChange.bind(this);

        this.handleContraseniaChange = this.handleContraseniaChange.bind(this);

        this.handleContraseniaCChange = this.handleContraseniaCChange.bind(this);

    }

    

    handleNameChange(e) {
        this.setState({
            responsible: {name: e.target.value}
        });
    }

    handleCorreoChange(e) {
        this.setState({
            description: e.target.value
        });
    }


    handleContraseniaChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    handleContraseniaCChange(e) {
        this.setState({
            status: e.target.value
        });
    }


    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.description.length || !this.state.responsible.name.length || !this.state.status.length){
            alert("Llene todos los espacios");
            return;
        }
        if(localStorage.getItem("targetas") === null){
            var targetas = [this.state];
            localStorage.setItem("targetas", JSON.stringify(targetas));
        }
        else{
            let targetas = JSON.parse(localStorage.getItem("targetas"));
            targetas.push(this.state);
            localStorage.setItem("targetas", JSON.stringify(targetas));
        }
        window.location.href = "/user";
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
                <div className="todo-form">
                    <h3>Task Manager</h3>

                    <FormControl margin="normal" required>
                        <TextField
                            id="name"
                            label="name"
                            autoComplete="name"
                            variant="outlined"
                            onChange={this.handleNameChange}
                            value={this.state.name}
                        />
                    </FormControl>
                    <br/>
                    <br/>
                    <FormControl margin="normal" required>
                    <TextField
                        id="correo"
                        type="correo"
                        variant="outlined"
                        label="correo"
                        onChange={this.handleCorreoChange}
                        value={this.state.correo}
                    />
                    </FormControl>
                    <FormControl margin="normal" required>
                        <TextField
                            id="contrasenia"
                            label="contrasenia"
                            autoComplete="contrasenia"
                            variant="outlined"
                            onChange={this.handleContraseniaCChange}
                            value={this.state.contrasenia}
                        />
                    </FormControl>
                    <br/>
                    <br/>
                    <FormControl margin="normal" required>
                    <TextField
                        id="contraseniaC"
                        type="contraseniaC"
                        variant="outlined"
                        label="contraseniaC"
                        onChange={this.handleContraseniaChange}
                        value={this.state.contraseniaC}
                    />
                    </FormControl>
                    <br/>
                    <br/>
                    <Button type="submit"
                            variant="contained"
                            color="primary"
                            className="submit"
                            onClick={this.handleSubmit}>
                        Add
                    </Button>
                </div>
            </div>
            
        );

    }


}