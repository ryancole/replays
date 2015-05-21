/**
 * Module dependencies
 */

import React from 'react';
import { Route, DefaultRoute } from 'react-router';


/**
 * Components
 */

import Dashboard from './components/Dashboard';
import Application from './components/Application';
import AccountSignin from './components/AccountSignin';
import AccountSignup from './components/AccountSignup';


/**
 * Instanciate the application router
 */

const AppRouter = (
  <Route name="application" path="/" handler={Application}>
    <Route name="accounts">
      <Route name="signin" handler={AccountSignin} />
      <Route name="signup" handler={AccountSignup} />
    </Route>
    <DefaultRoute name="dashboard" handler={Dashboard} />
  </Route>
);

/**
 * Module exports
 */

export default AppRouter;