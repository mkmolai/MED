import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import {Title, NoticesUpdates} from './components';

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
    <div>
      <Title/>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <NoticesUpdates/>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>Patients</Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>View Appointments</Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>View Profile</Paper>
        </Grid>

        <Grid item xs={8}>
          <Paper className={classes.paper}>Table goes here</Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>

      </Grid>
      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>
        Quick Links:
      </Typography>
      <Grid item xs={3}>
          <Paper className={classes.paper}>Medical Records</Paper>
        </Grid>
    </div>
  );
}
export default Dashboard;