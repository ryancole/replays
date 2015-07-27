import React from "react";
import { history } from "react-router/lib/BrowserHistory";
import { Route, Router } from "react-router";
import { reduxRouteComponent } from "redux-react-router";

import { reducer, createStore } from "./reducers";

import ApplicationView from "./views/application/ApplicationView";

import ReplayIndexView from "./views/replay/ReplayIndexView";
import ReplayDetailView from "./views/replay/ReplayDetailView";

import AuthenticationSigninView from "./views/authentication/AuthenticationSigninView";
import AuthenticationSignupView from "./views/authentication/AuthenticationSignupView";
import AuthenticationSignoutView from "./views/authentication/AuthenticationSignoutView";


// initialize the single redux store
const store = createStore(reducer);

export default (
  <Router history={history}>
    <Route component={reduxRouteComponent(store)}>
      <Route path="/" component={ApplicationView}>
        <Route path="auth">
          <Route path="signin" component={AuthenticationSigninView} />
          <Route path="signup" component={AuthenticationSignupView} />
          <Route path="signout" component={AuthenticationSignoutView} />
        </Route>
        <Route path=":username" component={ReplayIndexView} />
        <Route path=":username/:id" component={ReplayDetailView} />
      </Route>
    </Route>
  </Router>
);
