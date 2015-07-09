import React from 'react';
import Replays from '../repository/ReplayRepository';


export default class NavbarUploadForm extends React.Component {

  constructor () {

    super();

    // event handler binding
    this._handleSubmit = this._handleSubmit.bind(this);

    // initial state
    this.state = {
      file: null,
      phase: 0,
      signed: null
    };

  }

  render () {

    if (this.state.phase == 1) {
      return (
        <div className="navbar-right">
          <p className="navbar-text">Uploading ...</p>
        </div>
      );
    }
    else if (this.state.phase == 2) {
      return (
        <div className="navbar-right">
          <p className="navbar-text">Success!</p>
        </div>
      );
    }
    else if (this.state.phase == 3) {
      return (
        <div className="navbar-right">
          <p className="navbar-text">Failure!</p>
        </div>
      );
    }

    return (
      <form className="navbar-form" onSubmit={this._handleSubmit}>
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
        this._beginAwsTransfer(
          this.state.file,
          this.state.signed
        );
        break;

      case 2:
      case 3:
      this._handleResetPhase();
        break;

    }

  }

  _handleSubmit (event) {

    event.preventDefault();

    // extract list of selected files
    let files = React.findDOMNode(this.refs.filename).files;

    if (files.length == 0) {
      return;
    }

    // trigger the upload attempt
    this._handleUploadAttempt(files[0]);

  }

  _handleResetPhase () {

    setTimeout(() => {

      this.setState({
        file: null,
        phase: 0,
        signed: null
      });

      const actions = this.props.flux.getActions("replays");
      
      actions.getAll(this.props.activeSession);

    });

  }

  async _handleUploadAttempt (file) {

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

  async _beginAwsTransfer (file, signed) {

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
