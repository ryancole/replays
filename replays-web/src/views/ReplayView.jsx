/**
 * Module dependencies
 */

import React from 'react';
import FluxComponent from 'flummox/component';


/**
 * Components
 */

import SectionNavbar from '../components/SectionNavbar';


class ReplayView extends React.Component {

  render () {

    return (
      <h1>rofl</h1>
    );

  }

}

class ReplayViewWrapper extends React.Component {

  render () {
    return (
      <div>
        <FluxComponent connectToStores={{
          replays: store => ({
            replay: store.getById(this.props.params.id)
          })
        }}>
          <ReplayView />
        </FluxComponent>
      </div>
    );
  }

}


/**
 * Module exports
 */

export default ReplayViewWrapper;
