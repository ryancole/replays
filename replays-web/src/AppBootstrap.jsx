/**
 * Module dependencies
 */

import React from 'react';
import Router from 'react-router';
import FluxComponent from 'flummox/component';
import AppFlux from './AppFlux';
import AppRouter from './AppRouter';


/**
 * Instanciate the flux application
 */

const flux = new AppFlux();


/**
 * Render the application
 */

Router.run(AppRouter, (Handler, State) => {

  // url parameters
  const params = State.params;

  React.render(
    <FluxComponent
      flux={flux}
      params={params}
      connectToStores={{
        sessions: store => ({
          activeSession: store.activeSession,
          isAuthenticated: store.isAuthenticated
        })
      }}>
      <Handler />
    </FluxComponent>,
    document.getElementById("container")
  );

});
