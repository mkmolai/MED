import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Link as Go} from 'react-router-dom';
import {Card, CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import Stethoscope from './assets/Stethoscope.jpg';
const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const BookedAppointments = props =>{
    const classes = useStyles();

    return(
        <Card className={classes.card} >
            <CardActionArea component={Go} to='/viewToday'>
                <CardMedia className={classes.media} image={Stethoscope} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="p">
                        Today's Appointments
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        In this card you will find all the latest news and public notices regarding the medical field...
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BookedAppointments;