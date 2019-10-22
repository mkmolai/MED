import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, CardActionArea, Typography, CardMedia} from '@material-ui/core';
import Records from './assets/Records.png';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
    
function MedicalRecords(){

    const classes = useStyles();

    return(
        <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media} image={Records}/>
            <CardContent >
                <Typography gutterBottom variant="h5" component="p">
                    Medical Records
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Click on this card to view all medical records...
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>

    );
 
}

export default MedicalRecords;
