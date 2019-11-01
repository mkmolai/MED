import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/InfoDeets.js';
import {Button, Typography, Paper,Divider, Grid, Card, CardHeader, CardMedia, CardActionArea} from '@material-ui/core';
import Patient from './Patient.jpg'
import VisitsTable from './VisitsTable'

const useStyles = makeStyles({
    card: {
      maxWidth: 500,
    },
    media: {
      height: 250,
    },
  });

  const useStyles2 = makeStyles(styles);

function File(){
    const classes = useStyles();
    const style = useStyles2();

    return(
    
    <div>
        <Grid style={{padding:30}}
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            >
        <Grid container>
            
            <Grid item xs={4} 
                  style={{padding:20}}>
                <Paper style={{padding:20}}>
                    <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image={Patient}/>
                    </CardActionArea>
                    </Card>

                    <div style={{padding:20}}>
                    <Card className={classes.card}>
                    <CardActionArea>
                    <CardHeader title="About Patient"/>
                    <Divider/>
                    <div style={{padding: 10}}>
                        <h6 className={style.heading}>Name:</h6>
                        <Divider/>
                        <h6 style={{padding: 10}}>Blood Type:</h6>
                        <h6 style={{padding: 10}}>Occupation:</h6>
                        <Divider/>
                        <h6 style={{padding: 10}}>Email:</h6>
                        <h6 style={{padding: 10}}>Phone:</h6>
                        <Divider/>
                        <h6 style={{padding: 10}}>Address:</h6>
                    </div>
                        <CardMedia className={classes.media}/>
                    </CardActionArea>
                </Card>
                </div>
            
             </Paper>
            </Grid>


            
            <Grid item xs={8}>
                <Paper style={{padding:20}}>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <Divider/>
                    <Typography variant="h5" >
                        General Report
                   </Typography>
                    <Divider/>
                    <div  style={{padding:10}}>
                    <Typography variant="h7">
                        Past Visit History
                   </Typography>
                    </div>
                    <VisitsTable/>
                   
                    <Divider/>
                    <Typography variant="h5" >
                        ECG Report 
                   </Typography>

                   <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia className={classes.media}/>
                    </CardActionArea>
                    </Card>
                </Paper>
            </Grid>


        </Grid>
        </Grid>
    </div>

    );
}

export default File;
