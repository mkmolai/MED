import React from 'react';
import {Typography} from '@material-ui/core';
import {TabOptions} from './components';

const ViewPatients = props =>{
    return(
        <div>
        <Typography color="inherit" display="block" variant="h4" style={{ padding: 20 }} >
              Patient Centre 
        </Typography>
        <TabOptions/>
        </div>

    );
}

export default ViewPatients;