/**
 * Module dependencies
 */

import React from 'react';
import reqwest from 'reqwest';


/**
 * Components
 */

import ReplayForm from './ReplayForm';
import ReplayList from './ReplayList';


/**
 * Component definition
 */

class ReplayListing extends React.Component {

  constructor () {

    super();

    // pre-bind handlers
    this._handleReplaySubmit = this._handleReplaySubmit.bind(this);

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
        <ReplayForm onReplaySubmit={this._handleReplaySubmit} />
      </div>
    );
  }

  _handleReplaySubmit (replay) {
    this.props.flux.getActions('replays').create(replay);
  }

}


/**
 * Module exports
 */

export default ReplayListing;