import React from 'react';
//import {makeStyles} from 'styles';
import {Grid, Paper, Typography} from '@material-ui/core';

const About = (props) =>{

    return(
        <div style={{ padding: 20 }}>
      <Grid container >
        <Grid item xs={12}>
          <Paper>
            <Typography color="inherit" display="block" variant="h3" style={{ padding: 20 }} >
              Welcome to the MEDaPP
            </Typography>
            <Typography color="primary"  component="p" style={{ padding: 10}} >
              You're welcome to our app, engineered specifically to suite your every need.
            </Typography>
           </Paper>
        </Grid>
      </Grid>
    </div>

    );
};

export default About;