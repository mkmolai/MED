import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AddIcon from '@material-ui/icons/Add';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ItemOne from './ItemOne';
import ItemTwo from './ItemTwo';
import Patients from './Patients.jpg'
import Patients2 from './Patients2.jpg'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
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
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Panel() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div style={{ padding: 20}}>
            <Typography color="inherit" display="block" variant="h4" style={{ padding: 20, backgroundColor: ' gainsboro '}} >
              Patients Centre
            </Typography>
        <div>
            <div className="jumbotron"  style={{backgroundImage: `url(${Patients2})`, backgroundSize: "cover"}} > 
                <div className="container">
                  <h1>Jumbo</h1>
                  <p className="lead">This is the patients display</p>
                  <p><a className="btn btn-primary btn-lg" href="#">View List</a></p>
                </div>
            </div>
        </div>
      </div>

      <div className={classes.root}> 
    
      <AppBar color="inherit" position="static" >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab icon={<FormatListNumberedIcon />} aria-label="phone" {...a11yProps(0)} />
          <Tab icon={<AddIcon/>} aria-label="favorite" {...a11yProps(1)} />
          <Tab icon={<PersonPinIcon />} aria-label="person" {...a11yProps(2)} />
          <Tab icon={<FavoriteIcon/>} aria-label="help" {...a11yProps(3)} />
          <Tab icon={<ShoppingBasket />} aria-label="shopping" {...a11yProps(4)} />
          <Tab icon={<ThumbDown />} aria-label="up" {...a11yProps(5)} />
          <Tab icon={<ThumbUp />} aria-label="down" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
     
      <TabPanel value={value} index={0}>
        <ItemOne/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ItemTwo/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
    </div>
  );
}
