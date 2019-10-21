import React, {Component, Fragment} from 'react';
import {Typography, TextField, Button, Divider} from '@material-ui/core';

export default class Form extends Component{
    state = {
        open: false,
        fields: {
            firstname:'Remi',
            surname:'',
            gender:'',
            dob:'',
            natid:'',
            email:'',
            address:'',
        }
    }

    handleChange = name =>({target: {value}}) =>{
        this.setState({
            fields:{
                ...this.state.fields,
            [name]:value
            }
    })
    }

    handleSubmit = ()=>{
        const {fields} = this.state;
        this.props.onCreate(fields);
    
    }

    render(){
        const {open, fields} = this.state;
 
    return(
        <Fragment>
        <Typography>
            Working...
        </Typography>

        <form>
            <TextField
            label="First Name"
            value={fields.firstname}
            onChange={this.handleChange('firstname')}
            margin="normal"/>
            
            <br/>
            <TextField
            label="Surname"
            value=""
            onChange={this.handleChange('surname')}
            margin="normal"/>
            

            <TextField
            label="Gender"
            value=""
            onChange={this.handleChange('gender')}
            margin="normal"/>
            
            <TextField
            label="D.O.B"
            value=""
            onChange={this.handleChange('dob')}
            margin="normal"/>

            <TextField
            label="National I.D"
            value=""
            onChange={this.handleChange('natid')}
            margin="normal"/>

             <TextField
            label="Email"
            value=""
            onChange={this.handleChange('email')}
            margin="normal"/>

             <TextField
            label="Address"
            value=""
            onChange={this.handleChange('address')}
            margin="normal"/>


        </form>
        <Button
            color="primary"
            variant="raised"
            onClick={this.handleSubmit}>
            Create
        </Button>
     

        </Fragment>

    );
}
}
