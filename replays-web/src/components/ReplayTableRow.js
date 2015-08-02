import React from "react";
import moment from "moment";
import { Link } from "react-router";


export default class ReplayTableRow extends React.Component {

  static get propTypes () {
    return {
      replay: React.PropTypes.object.isRequired,
      onDelete: React.PropTypes.func,
      activeSession: React.PropTypes.object
    };
  }

  constructor () {
    super();
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  render () {

    // the replay for this table row
    const replay = this.props.replay;

    // the formatted date
    const dateCreated = moment(replay.dateCreated).format("LLL");

    return (
      <tr className="replayTableRow">
        <td>
          <Link to={`/${replay.accountUsername}/${replay.id}`}>
            {replay.filename}
          </Link>
        </td>
        <td>
          {dateCreated}
        </td>
        {this.renderActionButtons()}
      </tr>
    );

  }

  renderActionButtons () {

    if (!this.props.activeSession) {
      return undefined;
    } else if (this.props.activeSession.username !== this.props.replay.accountUsername) {
      return undefined;
    }

    return (
      <td>
        <div className="btn-group pull-right">
          <button type="button" className="btn btn-xs btn-danger" onClick={this.handleDeleteClick}>
            <span className="glyphicon glyphicon-remove-circle"></span>
          </button>
        </div>
      </td>
    );

  }

  handleDeleteClick () {
    this.props.onDelete(this.props.replay);
  }

}
