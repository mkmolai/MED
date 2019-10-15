import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';

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
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image="/static/images/cards/contemplative-reptile.jpg" title="Notice Board"/>
                <CardContent>
                    <Typography>
                        ViewAppointments
                    </Typography>
                    <Typography>
                        In this card you will find all the latest news and public notices regarding the medical field...
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BookedAppointments;