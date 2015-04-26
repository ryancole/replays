import React from 'react';
import Router from 'react-router';
import FluxComponent from 'flummox/component';
import ReplaysFlux from './ReplaysFlux';
import routes from './routes';

// instanciate flux application
const flux = new ReplaysFlux();

// initialize the route handler
Router.run(routes, function (Handler) {
  React.render(
    <FluxComponent flux={flux}>
      <Handler />
    </FluxComponent>,
    document.getElementById('container')
  );
});
