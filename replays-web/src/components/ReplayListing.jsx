/**
 * Module dependencies
 */

import React from 'react';


/**
 * Components
 */

import ReplayList from './ReplayList';


/**
 * Component definition
 */

class ReplayListing extends React.Component {

  constructor () {

    super();

    // initial component state
    this.state = {
      replays: []
    };

  }

  componentWillMount () {
    this.setState({
      replays: this.props.replays
    });
  }

  componentDidMount () {
    this.props.flux.getActions('replays').getAll();
  }

  componentWillReceiveProps (props) {
    this.setState({
      replays: props.replays
    });
  }

  render () {
    return (
      <div className="replayListing">
        <h1>Replays</h1>
        <ReplayList data={this.state.replays} />
      </div>
    );
  }

}


/**
 * Module exports
 */

export default ReplayListing;