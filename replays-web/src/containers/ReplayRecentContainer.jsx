/**
 * Module dependencies
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import connectToStores from 'flummox/connect';


/**
 * Components
 */

import ReplayTable from '../components/ReplayTable';
import SectionNavbar from '../components/SectionNavbar';
import ReplayRecentNavbar from '../components/ReplayRecentNavbar';


/**
 * Component definition
 */ 

class ReplayRecentContainer extends React.Component {

  componentWillMount () {

    // get session actions
    let replays = this.props.flux.getActions('replays');

    // the amount to skip
    let skip = 0;

    // trigger get all action
    replays.getAllById(skip);

  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <SectionNavbar label="Recent Replays">
              <ReplayRecentNavbar />
            </SectionNavbar>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <ReplayTable replays={this.props.replays} />
          </Col>
        </Row>
      </div>
    );
  }

}

// connect component to store
ReplayRecentContainer = connectToStores(ReplayRecentContainer, {
  replays: store => ({
    replays: store.replaysById
  })
});


/**
 * Module exports
 */

export default ReplayRecentContainer;
