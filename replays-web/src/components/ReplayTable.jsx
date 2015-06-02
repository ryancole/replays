/**
 * Module dependencies
 */

import React from 'react';


/**
 * Components
 */

import ReplayTableRow from './ReplayTableRow';


/**
 * Component definition
 */

class ReplayTable extends React.Component {

  render () {

    var replayNodes = this.props.replays.map(function (replay, index) {
      return (
        <ReplayTableRow
          key={replay._id}
          replay={replay} />
      );
    });

    return (
      <table className="table table-striped table-hover replayTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Uploaded</th>
          </tr>
        </thead>
        <tbody>
          {replayNodes}
        </tbody>
      </table>
    );

  }

}


/**
 * Module exports
 */

export default ReplayTable;
