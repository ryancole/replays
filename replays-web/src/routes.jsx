import React from 'react';
import {Route, DefaultRoute} from 'react-router';

// components
import Dashboard from './components/Dashboard';
import Application from './components/Application';

export default (
  <Route name="application" path="/" handler={Application}>
    <DefaultRoute name="dashboard" handler={Dashboard} />
  </Route>
);