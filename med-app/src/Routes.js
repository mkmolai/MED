import React from 'react';
import { Switch, Redirect,Route } from 'react-router-dom';
 import {RouteWithLayout} from './components';

import Index from'./components/Drawer/Index';
import {UserProfile} from './views';
import {SignIn} from './views';
import {Dashboard} from './views';
import {About} from './views';
import {Prescription} from './views';
import {ViewPatients} from './views';
import {ToDos} from './views';
import {File} from './views';

  const Routes = () => { 
    return (
     
      <Switch>
        <Redirect 
          exact
          from="/"
          to="/dashboard"
        />

      <RouteWithLayout
        component={About}
        exact
        layout={Index}
        path="/about"
      />
     
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={Index}
        path="/dashboard"
      />

      <RouteWithLayout
        component={Prescription}
        exact
        layout={Index}
        path="/prescriptions"
      />

      <RouteWithLayout
        component={ToDos}
        exact
        layout={Index}
        path="/viewToday"
      />

      <RouteWithLayout
        component={ViewPatients}
        exact
        layout={Index}
        path="/viewPatients"
      />

      <RouteWithLayout
        component={SignIn}
        exact
        layout={Index}
        path="/signIn"
      />
      <RouteWithLayout
        component={UserProfile}
        exact
        layout={Index}
        path="/myProfile"
      />
       <RouteWithLayout
        component={File}
        exact
        layout={Index}
        path="/patientRecord"
      />
      </Switch>
    );
  };
  
  export default Routes;