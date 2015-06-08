/**
 * Module dependencies
 */

import React from 'react';
import connectToStores from 'flummox/connect';
import Replays from '../repository/ReplayRepository';
import UploadRequests from '../repository/UploadRequestRepository';


/**
 * Components
 */

import ReplayTable from '../components/ReplayTable';
import SectionNavbar from '../components/SectionNavbar';
import ReplayHomeNavbar from '../components/ReplayHomeNavbar';


/**
 * Component definition
 */ 

class ReplayHomeContainer extends React.Component {

  static get contextTypes () {
    return {
      router: React.PropTypes.func
    };
  }

  constructor (props) {

    super();
    
    // event pre binding
    this._handleResetPhase = this._handleResetPhase.bind(this);
    this._handleUploadAttempt = this._handleUploadAttempt.bind(this);

    // initial state
    this.state = {
      file: null,
      phase: 0,
      signed: null
    };

  }

  componentWillMount () {

    // transition away if not signed in
    if (this.props.isAuthenticated == false) {
      this.context.router.transitionTo("signin");
    }

    // fetch your own replays
    this._fetchReplays();
    
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

  render() {

    // default to an upload form
    let navbar = (
      <ReplayHomeNavbar onUploadAttempt={this._handleUploadAttempt} />
    );

    // if uploading, show spinner
    if (this.state.phase == 1) {
      navbar = (
        <div className="navbar-right">
          <p className="navbar-text">Uploading ...</p>
        </div>
      );
    }
    else if (this.state.phase == 2) {
      navbar = (
        <div className="navbar-right">
          <p className="navbar-text">Success!</p>
        </div>
      );
    }
    else if (this.state.phase == 3) {
      navbar = (
        <div className="navbar-right">
          <p className="navbar-text">Failure!</p>
        </div>
      );
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar label="Personal Replays">
              {navbar}
            </SectionNavbar>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ReplayTable replays={this.props.replays} />
          </div>
        </div>
      </div>
    );
  }

  _fetchReplays () {

    // get session actions
    let replays = this.props.flux.getActions('replays');

    // trigger get all action
    replays.getForHomeView(this.props.activeSession.token);

  }

  _handleResetPhase () {

    setTimeout(() => {

      this.setState({
        file: null,
        phase: 0,
        signed: null
      }, () => {
        
        this._fetchReplays();

      });

    }, 3000);

  }

  async _handleUploadAttempt (file) {

    if (this.props.isAuthenticated == false) {
      return;
    }

    // fetch the signed upload request
    let signed = await UploadRequests.get(
      this.props.activeSession.token,
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
    let result = await Replays.upload(file, signed);

    if (result.ok == true) {

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

// connect component to store
ReplayHomeContainer = connectToStores(ReplayHomeContainer, {
  replays: store => ({
    replays: store.forHomeView
  }),
  sessions: store => ({
    activeSession: store.activeSession,
    isAuthenticated: store.isAuthenticated
  })
});


/**
 * Module exports
 */

export default ReplayHomeContainer;
