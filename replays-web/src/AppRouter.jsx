/**
 * Module dependencies
 */

import React from 'react';
import { Route, DefaultRoute } from 'react-router';


/**
 * Components
 */

import ApplicationContainer from './containers/ApplicationContainer';
import ReplayHomeContainer from './containers/ReplayHomeContainer';
import ReplayDetailContainer from './containers/ReplayDetailContainer';
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
    <Route name="replay">
      <Route name="replay-home" handler={ReplayHomeContainer} />
      <Route name="replay-detail" path=":id" handler={ReplayDetailContainer} />
    </Route>
    <DefaultRoute name="dashboard" handler={ReplayHomeContainer} />
  </Route>
);

/**
 * Module exports
 */

export default AppRouter;
