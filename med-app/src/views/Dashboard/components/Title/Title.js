import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';

const Title = props => {
     
    
    return(
    <div style={{ padding: 20 }}>
      <Grid container >
        <Grid item xs={12}>
          
            <Typography color="inherit" display="block" variant="h4" style={{ padding: 20 }} >
              Dashboard 
            </Typography>
            
           
        </Grid>
      </Grid>
    </div>
    );


}
export default Title;