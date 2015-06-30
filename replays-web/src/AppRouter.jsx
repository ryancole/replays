/**
 * Module dependencies
 */

import React from 'react';
import { Route, DefaultRoute } from 'react-router';


/**
 * Components
 */

import HomeView from './views/home/HomeView';
import HomeReplayView from './views/home/HomeReplayView';
import HomeReplaysView from './views/home/HomeReplaysView';

import ApplicationView from './views/application/ApplicationView';

import AuthenticationView from './views/authentication/AuthenticationView';
import AuthenticationSigninView from './views/authentication/AuthenticationSigninView';
import AuthenticationSignupView from './views/authentication/AuthenticationSignupView';


/**
 * Instanciate the application router
 */

const AppRouter = (
  <Route name="application" path="/" handler={ApplicationView}>
    <Route name="authentication" handler={AuthenticationView}>
      <Route name="signup" handler={AuthenticationSignupView} />
      <DefaultRoute name="signin" handler={AuthenticationSigninView} />
    </Route>
    <Route path="home" handler={HomeView}>
      <Route name="replay" path="replay/:id" handler={HomeReplayView} />
      <DefaultRoute name="replays" handler={HomeReplaysView} />
    </Route>
  </Route>
);


/**
 * Module exports
 */

export default AppRouter;
