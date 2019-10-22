import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Container, Box} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import {Title, NoticesUpdates, BookedAppointments, Patients, ProfileLink, MedicalRecords} from './components';
import Desk from './assets/Desk.jpg';
import {Link as Go} from 'react-router-dom';
import blueGrey from '@material-ui/core/colors/blueGrey';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));


function Dashboard() {
  const classes = useStyles();
 
  return (
    <div style={{backgroundColor: blueGrey}}>
      <Grid container style={{padding: 40}}>
        <Grid item xs={12}>
          <Paper>
             <Title/>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3} style={{ paddingLeft: 40 }}>
          <Paper className={classes.paper}>
          <NoticesUpdates/>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Patients/>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <BookedAppointments/>
          </Paper>
        </Grid>

        <Grid item xs={3} style={{ paddingRight: 40 }}>
          <Paper className={classes.paper}>
            <ProfileLink/>
          </Paper>
        </Grid>

        <Grid item xs={8}>
          <Paper className={classes.paper}>Table goes here</Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>

      </Grid>

        <Divider className={classes.divider} />

        <Typography variant="h5" component="h4" color="inherit" gutterBottom style={{ padding: 20 }}>
          Quick Links:
        </Typography>

      <Grid item xs={3} style={{ paddingLeft: 40 }}>
          <Paper className={classes.paper}>
            <MedicalRecords/>
            </Paper>
        </Grid>

         <Box color="text.secondary">
          Here is my box
        </Box>

        <Grid item xs={8}>
          <Paper className={classes.paper}>I want to have something else come here</Paper>
        </Grid>
        
    </div>
  );
}
export default Dashboard;
