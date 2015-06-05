/**
 * Module dependencies
 */

import React from 'react';
import connectToStores from 'flummox/connect';
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

  constructor () {

    super();

    // event pre binding
    this._handleUploadAttempt = this._handleUploadAttempt.bind(this);

    // initial state
    this.state = {
      phase: 0
    };

  }

  componentWillMount () {

    // get session actions
    let replays = this.props.flux.getActions('replays');

    // the amount to skip
    let skip = 0;

    // trigger get all action
    replays.getAllById(skip);

  }

  componentDidUpdate () {

    switch (this.state.phase) {

      case 1:
        this._beginAwsTransfer(
          this.state.file,
          this.state.signe
        );
        break;

    }

  }

  render() {

    // default to an upload form
    let navbar = (
      <ReplayHomeNavbar onUploadAttempt={this._handleUploadAttempt} />
    );

    // if uploading, show spinner
    if (this.state.phase == 1 || this.state.phase == 2) {
      navbar = (
        <div className="navbar-right">
          <p className="navbar-text">Uploading ...</p>
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

  async _handleUploadAttempt (file) {

    // fetch the signed upload request
    let signed = await UploadRequests.get(file);

    // update component state with new info
    this.setState({
      file: file,
      phase: 1,
      signed: signed
    });

  }

  async _beginAwsTransfer (file, signed) {

    // upload the file to aws
    

    // reset the state back to default
    this.setState({
      file: null,
      phase: 0,
      signed: null
    });

  }

}

// connect component to store
ReplayHomeContainer = connectToStores(ReplayHomeContainer, {
  replays: store => ({
    replays: store.replaysById
  })
});


/**
 * Module exports
 */

export default ReplayHomeContainer;
