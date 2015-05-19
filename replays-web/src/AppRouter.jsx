/**
 * Module dependencies
 */

import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import Dashboard from './components/Dashboard';
import Application from './components/Application';

/**
 * Instanciate the application router
 */

const AppRouter = (
  <Route name="application" path="/" handler={Application}>
    <DefaultRoute name="dashboard" handler={Dashboard} />
  </Route>
);

/**
 * Module exports
 */

export default AppRouter;