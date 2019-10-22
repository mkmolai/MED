import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import Profile from './assets/Profile.jpg';
import {Link as Go} from 'react-router-dom';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const ProfileLink = props =>{
    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <CardActionArea component={Go} to='/myProfile'>
                <CardMedia className={classes.media} image={Profile}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="p">
                        View Profile
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Click on this card to go to your profile...
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ProfileLink;