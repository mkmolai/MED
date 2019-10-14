import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

function createData (id,data,name,shipTo,paymentMethod,amount){
    return {id, data, name, shipTo, paymentMethod, amount};
    
}

const rows =[
    createData(0,'16 Mar, 2019','Élvis Presley','Tupelo, MS','VISA ...3719',312.44),
    createData(1,'16 Mar, 2019','Tom Presley','Tupelo, MS','VISA ...3719',312.44),
    createData(2,'16 Mar, 2019','John Presley','Tupelo, MS','VISA ...3719',312.44),
    createData(3,'16 Mar, 2019','Ben Presley','Tupelo, MS','VISA ...3719',312.44),
];

const useStyles = makeStyles(theme=>({
    seeMore:{
        marginTop:theme.spacing(3),
    },
}));

export default function Orders(){
    const classes = useStyles();
    return(
        <React.Fragment>
            <Title>List of Hospitals</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Ship To</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
            
            <TableBody>
                {rows.map(row=>(
                    <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.shipTo}</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </React.Fragment>
        
    );
}
