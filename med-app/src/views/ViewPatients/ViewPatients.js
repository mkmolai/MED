import React, {Component} from 'react';
import {Typography} from '@material-ui/core';
import {TabOptions} from './components';
import {fields} from './data';

class ViewPatients extends Component{
    state = {
        fields,
        fields:{}
    }

    handleFormCreate = fields =>{
        this.setState(({fields})=>({
            fields:{
                ...fields,
                fields
            }
        }))
    } 


    render(){

        const {fields} = this.state
        
    return(
        <div>
        <Typography color="inherit" display="block" variant="h4" style={{ padding: 20 }} >
              Patient Centre 
        </Typography>
        <TabOptions fields={fields}
        onFormCreate={this.handleFormCreate}/>
        </div>

    );
} }

export default ViewPatients;