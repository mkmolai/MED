import React from 'react';
import {Button, Typography, Paper, Grid} from '@material-ui/core';
import AppointmentsTable from './components/AppointmentsTable';
import Surgeries from './components/Surgeries';
import Desk from './components/Desk.jpg';

function Agenda(){




    return(
        <div style={{ backgroundImage: `url(${Desk})`}}>
          <Typography color="inherit" display="block" variant="h4" style={{ padding: 20 }} >
          Agenda Page 
          </Typography>
            
          <Grid container style={{padding: 40}}>
          <Paper >
            <Typography color="inherit" display="block" variant="h5" style={{ padding: 10 }}>
               Today's Appointments
            </Typography>
          </Paper>
      </Grid>
            <Grid 
                  direction="row"
                  justify="center"
                  alignItems="center">
            <Button style={{width: 300,height:70, display:"block", color:"black"}}
                color="primary"
                variant="raised"
                onClick=''>
              </Button>
              <AppointmentsTable/>
               </Grid>
               <Grid container style={{padding: 40}}>
        
        <Paper >
          <Typography color="inherit" display="block" variant="h5" style={{ padding: 10 }}>
             Surgeries
          </Typography>
        </Paper>
      
    </Grid>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
              </Grid>
            <Surgeries/>

            <Typography color="inherit" display="block" variant="h5" style={{ padding: 0 }} >
              Consultations
            </Typography>

        </div>

    );

};

export default Agenda;