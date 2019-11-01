import React from 'react';
import {Link as Go} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Table, Grid, Button} from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import ItemTwo from './ItemTwo';

 function ItemOne(props) {

  const {rows} = props;


  return (
      
    <Grid style={{ padding: 30 }}>
      <Button variant="contained" color="secondar" Go={ItemTwo}>
        Add New
      </Button>
      
      
      <Button variant="contained" color="secondary" >
        Tools
      </Button>
    <Paper >
    
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Blood Group</TableCell>
            <TableCell>D.O.B</TableCell>
            <TableCell>ID No.</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
            <TableRow>
              
              <TableCell padding="checkbox">
              <Checkbox/> 
              </TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
              
              
            </TableRow>
          
        </TableBody>
      </Table>
    </Paper>
    </Grid>

   
  );
}
export default ItemOne;