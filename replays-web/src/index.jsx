import React from 'react';
import Router from 'react-router';
import FluxComponent from 'flummox/component';
import ReplaysFlux from './ReplaysFlux';
import ApplicationRoutes from './routes';

const flux = new ReplaysFlux();

Router.run(ApplicationRoutes, function (Handler) {
  React.render(
    <FluxComponent flux={flux}>
      <Handler />
    </FluxComponent>,
    document.getElementById('container')
  );
});
