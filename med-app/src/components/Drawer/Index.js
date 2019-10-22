import React from 'react';
import clsx from 'clsx'; 
import {Link as Go} from 'react-router-dom';
import {MenuList, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MoreIcon from '@material-ui/icons/MoreVertTwoTone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { mainListItems, secondaryListItems, tertiaryListItems} from './ListItems';
import Orders from './Orders';
import Year from './Year';
import Profile from './Profile';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));



//My function is starting from here 
export default function MedDrawer(props) {

  const {children} = props;

  const classes = useStyles();

  
  const [open, setOpen] = React.useState(true);


  const handleDrawerOpen = () => {
    setOpen(true);
  };


  const handleDrawerClose = () => {
    setOpen(false);
  };

  


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const menuId = 'primary-search-account-menu';
  const [anchorEl, setAnchorEl] = React.useState(null);

const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  //--------------------------------------------------------------------------------------
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color="secondary" position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography align="center" display="block" component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
           <LocalHospitalIcon fontSize="large"/> MEDdoc.
          </Typography>

          <div className={classes.sectionDesktop}>
          <IconButton edge="end" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MoreIcon />
            </Badge>
          </IconButton>

          <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              style={{ paddingRight: 40 }}
            >
              <AccountCircle />
            </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          </div>



        </Toolbar>
      </AppBar>





      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        
        <List>{mainListItems}</List>
        <List>{secondaryListItems}</List>
        <List>{tertiaryListItems}</List>
        <Divider />
        
      </Drawer> 




{/* ----------------------------This is where the pages should be dropped--------------------------------------- */}


      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        
        {children}
      </main>
    </div>
  );
}





// {/* <Container maxWidth="lg" className={classes.container}>
//           <Grid container spacing={3}>
//             {/* Chart */}
//             <Grid item xs={12} md={8} lg={9}>
//               <Paper className={fixedHeightPaper}>
                
//               </Paper>
//             </Grid>



//             {/* Recent Deposits */}
//             <Grid item xs={12} md={4} lg={3}>
//               <Paper className={fixedHeightPaper}>
//                <Year/>
//               </Paper>
//             </Grid>


//             {/* Recent Orders */}
//             <Grid item xs={12}>
//               <Paper className={classes.paper}>
//                 <Orders/>
//               </Paper>
//             </Grid>

            
//           </Grid>
//         </Container>
//         <Copyright /> */}