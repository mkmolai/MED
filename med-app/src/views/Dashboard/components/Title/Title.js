import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';

const Title = props => {
     
    
    return(
    <div style={{ padding: 20, backgroundColor: ' gainsboro ' }}>
      <Grid container >
        <Grid item xs={12} >
          
            <Typography color="inherit" display="block" variant="h5" style={{ padding: 0 }}>
              Dashboard 
            </Typography>
            
           
        </Grid>
      </Grid>
    </div>
    );


}
export default Title;