import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function createDate(day,month,year){
    return {day, month, year};
}
const displayDate = createDate(8,10,2019);

const useStyles = makeStyles({
    yearContext:{
        flex:1,
    },
});

export default function Deposits(){
    const classes = useStyles();
    
    return(
        <React.Fragment>
            <Title>
                
            </Title>
            <Typography component="p" variant="h2">
                {displayDate.year}
            </Typography>
            <Typography color="textSecondary" className={classes.yearContext}>
                Today is the 8th October, 2019
            </Typography>
            <div>
                <Link color="primary" href="javascript:;">
                    View Calendar
                </Link>
            </div>
        </React.Fragment>
    );
}