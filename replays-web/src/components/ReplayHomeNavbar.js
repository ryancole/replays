import React from "react";
import NavbarUploadForm from "./NavbarUploadForm";


export default class ReplayHomeNavbar extends React.Component {

  static get propTypes () {
    return {
      activeSession: React.PropTypes.object.isRequired,
      fetchAllReplays: React.PropTypes.func.isRequired
    };
  }

  render() {
    return (
      <div className="navbar-right">
        <NavbarUploadForm
          activeSession={this.props.activeSession}
          fetchAllReplays={this.props.fetchAllReplays} />
      </div>
    );
  }

}
