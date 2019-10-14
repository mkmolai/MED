import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { AccountProfile, AccountDetails } from './components';


const UserProfile = () => {
  

  return (
    <div padding="4">
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
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
