/**
 * Module dependencies
 */

import React from 'react';
import { ModalTrigger } from 'react-bootstrap';


/**
 * Components
 */

import ReplayUploadModal from './ReplayUploadModal';


/**
 * Component definition
 */ 

class ReplayRecentNavbar extends React.Component {

  constructor () {
    super();
    this._handleModalClose = this._handleModalClose.bind(this);
  }

  render() {

    let modal = (
      <ReplayUploadModal
        onRequestHide={this._handleModalClose} />
    );

    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <ModalTrigger modal={modal}>
            <a>Upload</a>
          </ModalTrigger>
        </li>
      </ul>
    );
  }

  _handleModalClose () {
    console.log("uh wut");
  }

}


/**
 * Module exports
 */

export default ReplayRecentNavbar;
