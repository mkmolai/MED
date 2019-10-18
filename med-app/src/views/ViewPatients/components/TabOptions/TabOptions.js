import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PatientForm from './PatientForm';
import ListOne from './ListOne';
import ListTwo from './ListTwo';

const rows = {
  firstname: 'Ekaterina',
    surname: 'Tankova',
    dob:'26/03/97',
    id: 123,
    email:'magt@SpeechGramma.com',
    address: 'Harare',

};



function TabPanel(props) {

 const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabOptions() {

  const [rows,setRows] = React.useState({

    firstname: 'Ekaterin',
    surname: 'Tankova',
    dob:'26/03/97',
    id: 123,
    email:'magt@SpeechGramma.com',
    address: 'Harare',

  });
  
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="New Arrivals in the Longest Text of Nonfiction"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" variant="h3"label="Registered Patients" {...a11yProps('two')} />
          <Tab value="three" label="Patients Records" {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        <PatientForm onSubmit = {(data)=>{setRows(currentRows =>[...currentRows,{
          ...data
        }])
      }}/>
      </TabPanel>
      <TabPanel value={value} index="two">
        <ListOne rows={rows}/>  
      </TabPanel>
      <TabPanel value={value} index="three">
        <ListTwo/>
      </TabPanel>
    </div>
  );
}
export default TabOptions;
