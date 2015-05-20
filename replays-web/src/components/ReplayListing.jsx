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
    this.state = {
      replays: []
    };
    this._handleReplaySubmit = this._handleReplaySubmit.bind(this);
  }

  componentDidMount () {
    this._loadReplaysFromServer();
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

  _loadReplaysFromServer () {
    reqwest({
      url: 'http://localhost:8080/api/replay',
      crossOrigin: true,
      success: response => {
        this.setState({
          replays: response
        });
      }
    });
  }

  _handleReplaySubmit (replay) {
    reqwest({
      url: 'http://localhost:8080/api/replay',
      data: replay,
      method: 'post',
      crossOrigin: true,
      success: response => {
        this.setState({
          replays: response
        });
      }
    });
  }

}


/**
 * Module exports
 */

export default ReplayListing;