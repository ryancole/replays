import React from 'react';
import FluxComponent from 'flummox/component';
import NavbarUploadForm from './NavbarUploadForm';


export default class ReplayHomeNavbar extends React.Component {

  render() {
    return (
      <div className="navbar-right">
        <FluxComponent connectToStores={{
          sessions: store => ({
            activeSession: store.activeSession
          })
        }}>
          <NavbarUploadForm />
        </FluxComponent>
      </div>
    );
  }
  
}
