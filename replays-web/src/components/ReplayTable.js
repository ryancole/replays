import React from "react";
import ReplayTableRow from "./ReplayTableRow";


export default class ReplayTable extends React.Component {

  static get propTypes () {
    return {
      onDelete: React.PropTypes.func.isRequired
    };
  }

  render () {

    // table rows
    const rows = this.buildTableRows(this.props.replays);

    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th colSpan="2">Uploaded</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );

  }

  buildTableRows (replays) {

    // build the table rows
    let nodes = replays.map(replay => {
      return (
        <ReplayTableRow
          key={replay.id}
          replay={replay}
          onDelete={this.props.onDelete}
          onToggleSharing={this.props.onToggleSharing} />
      );
    });

    // show a no rows message if empty
    if (nodes.length === 0) {
      nodes = (
        <tr>
          <td colSpan="2" className="text-muted text-center">
            There are no replays to show
          </td>
        </tr>
      );
    }

    return nodes;

  }

}
