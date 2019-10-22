import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Typography} from '@material-ui/core';
import { AccountProfile, AccountDetails } from './components';
import Desk from './assets/Desk.jpg';


const UserProfile = () => {
  

  return (
    <div  style={{ backgroundImage: `url(${Desk})`}}>
     <Grid container style={{padding: 40}}>
        <Grid item xs={12}>
          <Paper >
            <Typography color="inherit" display="block" variant="h5" style={{ padding: 10 }}>
               Profile Page
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid 
        container
        spacing={4}
        container
        style={{ paddingRight: 20 }}
        direction="column"
        justify="flex-start"
        alignItems="flex-end"
      >

          <Grid item
          lg={5}
          md={6}
          xl={4}
          xs={6}
        >
          <AccountProfile />
        </Grid>
       
        
        <Grid
          item
          lg={6}
          md={6}
          xl={8}
          xs={12}
        >
          <AccountDetails />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserProfile;
