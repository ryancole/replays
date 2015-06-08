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
 * Instanciate the router
 */

const router = Router.create({
  routes: AppRouter,
  transitionContext: {
    flux: flux
  }
});


/**
 * Render the application
 */

router.run((Handler, State) => {

  React.render(
    <FluxComponent flux={flux}>
      <Handler params={State.params} />
    </FluxComponent>,
    document.getElementById("container")
  );

});
