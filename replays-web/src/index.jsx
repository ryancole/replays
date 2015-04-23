import React from 'react';
import FluxComponent from 'flummox/component';

import ReplaysFlux from './ReplaysFlux';
import ApplicationRoutes from './routes';

// initialize flux application
const flux = new ReplaysFlux;

React.render(
  <FluxComponent flux={flux}>
    <ApplicationRoutes />
  </FluxComponent>,
  document.getElementById('container')
);
