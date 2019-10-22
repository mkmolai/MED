import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import Desk from './assets/Desk.jpg';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const NoticesUpdates = props =>{
    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image={Desk}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="p">
                        News and Notices
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        In this card you will find all the latest news and public notices regarding the medical field...
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default NoticesUpdates;