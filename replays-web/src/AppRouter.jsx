/**
 * Module dependencies
 */

import React from 'react';
import { Route, DefaultRoute } from 'react-router';


/**
 * Components
 */

import Dashboard from './components/Dashboard';
import ApplicationContainer from './containers/ApplicationContainer';
import AuthenticationSigninContainer from './containers/AuthenticationSigninContainer';
import AuthenticationSignupContainer from './containers/AuthenticationSignupContainer';


/**
 * Instanciate the application router
 */

const AppRouter = (
  <Route name="application" path="/" handler={ApplicationContainer}>
    <Route name="authentication">
      <Route name="signin" handler={AuthenticationSigninContainer} />
      <Route name="signup" handler={AuthenticationSignupContainer} />
    </Route>
    <DefaultRoute name="dashboard" handler={Dashboard} />
  </Route>
);

/**
 * Module exports
 */

export default AppRouter;
