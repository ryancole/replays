import React from "react";
import Replays from "../repositories/ReplayRepository";


export default class NavbarUploadForm extends React.Component {

  static get propTypes () {
    return {
      activeSession: React.PropTypes.object.isRequired,
      fetchAllReplays: React.PropTypes.func.isRequired
    };
  }

  constructor () {

    super();

    // event handler binding
    this.handleSubmit = this.handleSubmit.bind(this);

    // initial state
    this.state = {
      file: null,
      phase: 0,
      signed: null
    };

  }

  render () {

    if (this.state.phase === 1) {
      return (
        <div className="navbar-right">
          <p className="navbar-text">Uploading ...</p>
        </div>
      );
    }
    else if (this.state.phase === 2) {
      return (
        <div className="navbar-right">
          <p className="navbar-text">Success!</p>
        </div>
      );
    }
    else if (this.state.phase === 3) {
      return (
        <div className="navbar-right">
          <p className="navbar-text">Failure!</p>
        </div>
      );
    }

    return (
      <form className="navbar-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input className="form-control" type="file" ref="filename" />
        </div>
        <button className="btn btn-default" type="submit">
          Upload
        </button>
      </form>
    );

  }

  componentDidUpdate () {

    switch (this.state.phase) {

      case 1:
        this.beginAwsTransfer(
          this.state.file,
          this.state.signed
        );
        break;

      case 2:
      case 3:
      this.handleResetPhase();
        break;

    }

  }

  handleSubmit (event) {

    event.preventDefault();

    // extract list of selected files
    let files = React.findDOMNode(this.refs.filename).files;

    if (files.length === 0) {
      return;
    }

    // trigger the upload attempt
    this.handleUploadAttempt(files[0]);

  }

  handleResetPhase () {

    setTimeout(() => {

      this.setState({
        file: null,
        phase: 0,
        signed: null
      });

      this.props.fetchAllReplays();

    }, 3000);

  }

  async handleUploadAttempt (file) {

    // fetch the signed upload request
    let signed = await Replays.getUploadDestination(
      this.props.activeSession,
      file
    );

    // update component state with new info
    this.setState({
      file: file,
      phase: 1,
      signed: signed
    });

  }

  async beginAwsTransfer (file, signed) {

    // upload the file to aws
    let result = await Replays.putToDestination(
      file,
      signed
    );

    if (result.ok === true) {

      // success state
      this.setState({
        phase: 2
      });

    } else {

      // fail state
      this.setState({
        phase: 3
      });

    }

  }

}
