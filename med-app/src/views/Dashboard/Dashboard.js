import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Container, Box} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import LocalOffer from "@material-ui/icons/LocalOffer"; 
import Accessibility from "@material-ui/icons/Accessibility";
import Update from "@material-ui/icons/Update";
import Warning from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import {Title, NoticesUpdates, BookedAppointments, Patients, ProfileLink, MedicalRecords} from './components';
import Desk from './assets/Desk.jpg';
import {Link as Go} from 'react-router-dom';
import blueGrey from '@material-ui/core/colors/blueGrey';
//dashboard components

import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardIcon from "../../components/Card/CardIcon";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";





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

    {/* New addition is coming here -------------------------------------------------------------------------------------------*/}
    <Grid 
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      spacing={4}
      
    >
      <Grid item xs={12} sm={6} md={3} style={{paddingLeft: 50}}>
      <Card>

        <CardHeader color="warning" stats icon>
          <CardIcon color="warning">
            <Icon><FileCopyOutlinedIcon/></Icon>
            
          </CardIcon>
          <p className={classes.cardCategory}>Used Space</p>
          <h3 className={classes.cardTitle}>
            49/50 <small>GB</small>
          </h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            
              <Warning />
            
            <a href="#pablo" onClick={e => e.preventDefault()}>
              Get more space
            </a>
          </div>
        </CardFooter>
        </Card>
      </Grid>
    

    <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon><InfoIcon/></Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </Grid>


        <Grid item xs={12} sm={6} md={3} style={{paddingRight: 50}}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </Grid>
        </Grid>
{/* The rest of the dashboard -------------------------------------------------------------------------------------------------*/}



      

      <Grid container spacing={3}>
        <Grid item xs={3} style={{ paddingLeft: 60 }}>
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

        <Grid item xs={3} style={{ paddingRight: 60 }}>
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

        <Grid container style={{padding: 40}}>
        <Grid item xs={12}>
          <Paper >
            <Typography color="inherit" display="block" variant="h5" style={{ padding: 10 }}>
               Document Quick Links
            </Typography>
          </Paper>
        </Grid>
      </Grid>

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
