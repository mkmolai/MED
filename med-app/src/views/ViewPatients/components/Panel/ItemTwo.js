import React from 'react';
import clsx from 'clsx';
import {TextField} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {Button, Grid, Typography,Input, InputLabel, Paper,Divider, Card,CardContent, CardHeader} from '@material-ui/core';
import PrintTwoToneIcon from '@material-ui/icons/PrintTwoTone';
import SaveIcon from '@material-ui/icons/Save';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      paddingLeft: 500,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }));

  function  ItemTwo() {

    const classes = useStyles();
    const [values, setValues] = React.useState({

      name: 'Remi Molai',
      age: '',
      multiline: 'Controlled',
    });

    const onClickPrintHandler = ()=>{
      window.print();
    }
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };
  
    return (
      <div>

      <form className={classes.container}>
      <Grid item xs md={9}>
        <Card style={{paddingLeft: 50}}>
        <CardHeader
          subheader="Hello, below we've placed the prescription form"
          title="Basic Information"
        />
        
        <Divider />
        <CardContent>

        <Grid item>
        
        <TextField
          id="Patient-name"
          label="Patient Name"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
        />
        <TextField
          id="standard-uncontrolled"
          label="Surname"
          defaultValue="foo"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="standard-required"
          label="ID"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
        />
        
        <TextField
          id="standard-dense"
          label="On Medication?"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Enter diagnosis here:"
          multiline
          rowsMax="4"
          placeholder="E.g cold or severe cough"
          onChange={handleChange('multiline')}
          className={classes.textField}
          margin="normal"
        />
          
        <TextField
          id="standard-number"
          label="Hospital Number"
          value={values.age}
          onChange={handleChange('age')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={values.currency}
          onChange={handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
         
        </TextField>
        
        <TextField
          id="standard-textarea"
          label="With placeholder multiline"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          className={classes.textField}
          value={values.currency}
          onChange={handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your country"
          margin="normal"
        >

        </TextField>
        <Divider/>
        <TextField
          id="standard-multiline-static"
          label="Prescription"
          multiline
          rows="4"
          placeholder="You can write your prescripton here:"
          className={classes.textField}
          margin="normal"
        />
        <Divider/>
        <TextField
          id="standard-multiline-static"
          label="Comments"
          multiline
          rows="4"
          placeholder="Any comments?"
          className={classes.textField}
          margin="normal"
        />
       
        </Grid>
        </CardContent>
        </Card>
        </Grid>

      </form>

      </div>
    );
  }
  
  export default ItemTwo;