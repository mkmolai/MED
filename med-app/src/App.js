//Now
import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//Before
import logo from './logo.svg';
import './App.css';
import Index from'./components/Drawer/Index';
import Routes from './Routes';
import PropTypes from 'prop-types';
import Footer from './components/Footer/Footer';



function App() { 
  return (
    <div>
      <Fragment>
        <Router>
          <Routes/>
        </Router>
      </Fragment>
      
    
    </div>
  );
}

export default App;
