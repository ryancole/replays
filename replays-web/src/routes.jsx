import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import Dashboard from './components/Dashboard';
import Application from './components/Application';

const routes = (
  <Route name="application" path="/" handler={Application}>
    <DefaultRoute name="dashboard" handler={Dashboard} />
  </Route>
);

export default routes;