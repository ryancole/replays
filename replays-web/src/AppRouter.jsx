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
import AuthenticationSignin from './components/AuthenticationSignin';
import AuthenticationSignup from './components/AuthenticationSignup';
import AccountDetailContainer from './containers/AccountDetailContainer';


/**
 * Instanciate the application router
 */

const AppRouter = (
  <Route name="application" path="/" handler={Application}>
    <Route name="authentication">
      <Route name="signin" handler={AuthenticationSignin} />
      <Route name="signup" handler={AuthenticationSignup} />
    </Route>
    <Route name="account">
      <Route name="detail" path=":username" handler={AccountDetailContainer} />
    </Route>
    <DefaultRoute name="dashboard" handler={Dashboard} />
  </Route>
);

/**
 * Module exports
 */

export default AppRouter;
