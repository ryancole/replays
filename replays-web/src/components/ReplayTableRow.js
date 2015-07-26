import React from "react";
import moment from "moment";
import { Link } from "react-router";


export default class ReplayTableRow extends React.Component {

  static get propTypes () {
    return {
      replay: React.PropTypes.object.isRequired,
      onDelete: React.PropTypes.func.isRequired
    };
  }

  constructor () {

    super();

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleToggleSharingClick = this.handleToggleSharingClick.bind(this);

  }

  render () {

    const replay = this.props.replay;
    const dateCreated = moment(replay.dateCreated);

    let shareIcon = (
      <span className="glyphicon glyphicon glyphicon-eye-open"></span>
    );

    if (replay.public === true) {
      shareIcon = (
        <span className="glyphicon glyphicon glyphicon-eye-close"></span>
      );
    }

    return (
      <tr className="replayTableRow">
        <td>
          <Link to={`/replay/${replay.id}`}>
            {replay.filename}
          </Link>
        </td>
        <td>
          {dateCreated.format("LLL")}
        </td>
        <td>
          <div className="btn-group pull-right">
            <button type="button" className="btn btn-xs btn-default" onClick={this.handleToggleSharingClick}>
              {shareIcon}
            </button>
            <button type="button" className="btn btn-xs btn-danger" onClick={this.handleDeleteClick}>
              <span className="glyphicon glyphicon-remove-circle"></span>
            </button>
          </div>
        </td>
      </tr>
    );

  }

  handleDeleteClick () {
    this.props.onDelete(this.props.replay);
  }

  handleToggleSharingClick () {
    this.props.onToggleSharing(this.props.replay);
  }

}
