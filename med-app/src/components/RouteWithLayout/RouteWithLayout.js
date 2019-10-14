import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = props => {
    const { layout: Layout,
            component: Component,
             ...rest }
              = props;
  
    return (
    <Route  {...rest}>
        <Layout>
          <Component/>
        </Layout>
     </Route>
    
     
    );
  };

  export default RouteWithLayout;