/**
 * Module dependencies
 */

import React from 'react';


/**
 * Components
 */

import ReplayUploadFormModal from './ReplayUploadFormModal';


/**
 * Component definition
 */ 

class ReplayRecentNavbar extends React.Component {

  render() {

    let modal = (
      <ReplayUploadFormModal />
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

}


/**
 * Module exports
 */

export default ReplayRecentNavbar;
