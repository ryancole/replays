import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import HomeReplayView from './views/home/HomeReplayView';
import HomeReplaysView from './views/home/HomeReplaysView';

import ApplicationView from './views/application/ApplicationView';

import AuthenticationSigninView from './views/authentication/AuthenticationSigninView';
import AuthenticationSignupView from './views/authentication/AuthenticationSignupView';
import AuthenticationSignoutView from './views/authentication/AuthenticationSignoutView';


const Routes = (
  <Route name="application" path="/" handler={ApplicationView}>
    <Route name="signin" handler={AuthenticationSigninView} />
    <Route name="signup" handler={AuthenticationSignupView} />
    <Route name="signout" handler={AuthenticationSignoutView} />
    <Route path="home">
      <Route name="replay" path="replay/:id" handler={HomeReplayView} />
      <DefaultRoute name="replays" handler={HomeReplaysView} />
    </Route>
  </Route>
);

export default Routes;
