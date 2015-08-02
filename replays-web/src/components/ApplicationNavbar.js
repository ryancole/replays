import React from "react";
import { Link } from "react-router";

export default class ApplicationNavbar extends React.Component {

  static get propTypes () {
    return {
      activeSession: React.PropTypes.object
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          {this.renderAuthenticatedLinks()}
          <ul className="nav">
            <li>
              <Link to="/">
                Public Replays
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  renderAuthenticatedLinks () {

    if (!this.props.activeSession) {
      return undefined;
    }

    return (
      <ul className="nav">
        <li>
          <Link to={`/${this.props.activeSession.username}`}>
            My Replays
          </Link>
        </li>
      </ul>
    );

  }

}
