/**
 * Module dependencies
 */

import React from 'react';
import { Route } from 'react-router';


/**
 * Components
 */

import AccountView from './views/AccountView';
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
    <Route name="account" path=":username" handler={AccountView} />
  </Route>
);

/**
 * Module exports
 */

export default AppRouter;
