import React from 'react';
//import {makeStyles} from 'styles';
import {Grid, Paper, Typography} from '@material-ui/core';
import Hospital from './components/Hospital.jpg'

const About = (props) =>{

    return(
        <div style={{ padding: 20 }}>
      <Grid container >
        <Grid item xs={12}>
          <Paper>
            <Typography color="inherit" display="block" variant="h4" style={{ padding: 20, backgroundColor: ' gainsboro '}} >
              Welcome to Jammy's Surgeon
            </Typography>
            <Typography color="inherit"  component="p" style={{ padding: 10, backgroundColor: ' gainsboro '}} >
              You're welcome to our app, engineered specifically to suite your every need.
            </Typography>
           </Paper>
           <div>
            <div className="jumbotron"  style={{backgroundImage: `url(${Hospital})`, backgroundSize: "cover"}} > 
              <div className="container">
                <h1>Jammy's Surgeon</h1>
                <p className="lead">Surgeon campus</p>
                <p><a className="btn btn-primary btn-lg" href="#">Location</a></p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>

    );
};

export default About;