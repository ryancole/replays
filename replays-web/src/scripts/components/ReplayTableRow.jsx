import React from 'react';
import { Link } from 'react-router';


export default class ReplayTableRow extends React.Component {

  constructor () {

    super();

    this._handleDeleteClick = this._handleDeleteClick.bind(this);
    this._handleToggleSharingClick = this._handleToggleSharingClick.bind(this);

  }

  render () {

    const replay = this.props.replay;

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
          <Link to="replay" params={{
            id: replay.id
          }}>
            {replay.filename}
          </Link>
        </td>
        <td>
          {replay.date_created}
        </td>
        <td>
          <div className="btn-group">
            <button type="button" className="btn btn-default" onClick={this._handleToggleSharingClick}>
              {shareIcon}
            </button>
            <button type="button" className="btn btn-danger" onClick={this._handleDeleteClick}>
              <span className="glyphicon glyphicon-remove-circle"></span>
            </button>
          </div>
        </td>
      </tr>
    );

  }

  _handleDeleteClick (event) {
    this.props.onDelete(this.props.replay);
  }

  _handleToggleSharingClick (event) {
    this.props.onToggleSharing(this.props.replay);
  }

}