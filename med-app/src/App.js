//Now
import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//Before
import logo from './logo.svg';
import './App.css';
import Index from'./components/Drawer/Index';
import Routes from './Routes';


import PropTypes from 'prop-types';

// class App extends Component {
//   state={

//   }
//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }
// }


// export default App;


function App() { 
  return (
    <div>
      <Router>
        <Routes/>
      </Router>
      
    
    </div>
  );
}

export default App;
