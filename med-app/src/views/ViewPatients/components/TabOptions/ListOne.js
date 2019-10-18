import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


 function ListOne(props) {

  const {rows} = props;


  return (
    <Paper>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>ID No.</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
            <TableRow>
              
              <TableCell >{rows.firstname}</TableCell>
              <TableCell >{rows.surname}</TableCell>
              <TableCell >{rows.dob}</TableCell>
              <TableCell >{rows.id}</TableCell>
              <TableCell >{rows.email}</TableCell>
              <TableCell >{rows.address}</TableCell>
              <TableCell >{''}</TableCell>
              
            </TableRow>
          
        </TableBody>
      </Table>
    </Paper>
  );
}
export default ListOne;