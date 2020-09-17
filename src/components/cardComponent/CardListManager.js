import React from 'react';
import {CardList} from "./CardList";
import moment from "moment";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from "@material-ui/core/FormControl";
import Grid from '@material-ui/core/Grid';
import { NativeSelect } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './TaskCard.css';
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";


export class CardListManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            responsible: {name: '', email: ''},
            status: '',
            dueDate: new Date("2020-09-17T21:11:54")
        };

        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

        this.handleNameChange = this.handleNameChange.bind(this);

        this.handleStatusChange = this.handleStatusChange.bind(this);

        this.handleDateChange = this.handleDateChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleNameChange(e) {
        this.setState({
            responsible: {name: e.target.value}
        });
    }


    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.description.length || !this.state.responsible.name.length || !this.state.status.length){
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

    render() {

        return (
            <div className="Todo">

                <div className="todo-form">
                    <h3>Task Manager</h3>

                    <FormControl margin="normal" required>
                        <TextField
                            id="text"
                            label="Description"
                            autoComplete="descripción"
                            variant="outlined"
                            onChange={this.handleDescriptionChange}
                            value={this.state.description}
                        />
                    </FormControl>
                    <br/>
                    <br/>
                    <FormControl margin="normal" required>
                    <TextField
                        id="Responsable"
                        type="text"
                        variant="outlined"
                        label="Responsable"
                        onChange={this.handleNameChange}
                        value={this.state.responsible.name}
                    />
                    </FormControl>

                    <Grid 
                        container 
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '10vh'}}>
                    <InputLabel>Status :</InputLabel>
                    <NativeSelect 
                        value={this.state.status}
                        onChange={this.handleStatusChange}
                        >
                        <option value=""> </option>
                        <option value={"Ready"}>Ready</option>
                        <option value={"In Progress"}>In Progress</option>
                        <option value={"Done"}>Done</option>
                    </NativeSelect>
                    </Grid>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="dueDate"
                            label="dueDate"
                            format="MM/dd/yyyy"
                            value={this.state.dueDate}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                            "aria-label": "change date"
                            }}
                        />
                    </MuiPickersUtilsProvider>

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
                <br/>
                <br/>

            </div>
        );
    }

}