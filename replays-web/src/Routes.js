import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import HomeView from './views/home/HomeView';
import HomeReplayView from './views/home/HomeReplayView';
import HomeReplaysView from './views/home/HomeReplaysView';

import ApplicationView from './views/application/ApplicationView';

import AuthenticationSigninView from './views/authentication/AuthenticationSigninView';
import AuthenticationSignupView from './views/authentication/AuthenticationSignupView';


const Routes = (
  <Route name="application" path="/" handler={ApplicationView}>
    <Route name="signin" handler={AuthenticationSigninView} />
    <Route name="signup" handler={AuthenticationSignupView} />
    <Route path="home" handler={HomeView}>
      <Route name="replay" path="replay/:id" handler={HomeReplayView} />
      <DefaultRoute name="replays" handler={HomeReplaysView} />
    </Route>
  </Route>
);

export default Routes;
