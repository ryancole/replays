/**
 * Module dependencies
 */

import React from 'react';
import FluxComponent from 'flummox/component';


/**
 * Components
 */

import ReplayListing from './ReplayListing';
import ReplayUploadFormContainer from '../containers/ReplayUploadFormContainer';


/**
 * Component definition
 */

class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <FluxComponent connectToStores={'replays'}>
          <ReplayListing />
        </FluxComponent>
        <ReplayUploadFormContainer />
      </div>
    );
  }

}


/**
 * Module exports
 */

export default Dashboard;