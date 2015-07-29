import React from "react";
import NavbarUploadForm from "./NavbarUploadForm";


export default class ReplayHomeNavbar extends React.Component {

  static get propTypes () {
    return {
      account: React.PropTypes.object.isRequired,
      activeSession: React.PropTypes.object,
      fetchAllReplays: React.PropTypes.func.isRequired
    };
  }

  render() {

    // an active session will not exist if
    // the current user is not signed in
    if (!this.props.activeSession) {
      return false;
    } else if (this.props.activeSession.id !== this.props.account.id) {
      return false;
    }

    // the current active user is signed in
    // and so we need to show the upload form
    return (
      <div className="navbar-right">
        <NavbarUploadForm
          activeSession={this.props.activeSession}
          fetchAllReplays={this.props.fetchAllReplays} />
      </div>
    );

  }

}
