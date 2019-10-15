import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardContent,CardActions,Typography,Button} from '@material-ui/core';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Patients() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Daily mission...
        </Typography>
        <Typography variant="h5" component="h2">
          Saving
          {bull}
          Lives
          {bull}
          Everyday
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          _________________
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Patients List</Button>
      </CardActions>
    </Card>
  );
}

export default Patients;
