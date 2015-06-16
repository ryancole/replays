import React from 'react';
import { Link } from 'react-router';


export default class ApplicationNavbar extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <ul className="nav">
              <li>
                <Link to="application">
                  Newest
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {this._getSignedInLinks()}
      </div>
    );
  }

  _getSignedInLinks () {
    if (this.props.isAuthenticated == false) {
      return;
    }
    return (
      <div className="row">
        <div className="col-sm-12">
          <ul className="nav">
            <li>
              <Link to="account" params={{
                username: this.props.activeSession.username
              }}>
                Mine
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}
