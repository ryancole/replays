import React from 'react';
import FluxComponent from 'flummox/component';
import ReplayTable from '../../components/ReplayTable';
import SectionNavbar from '../../components/SectionNavbar';
import ReplayHomeNavbar from '../../components/ReplayHomeNavbar';


class HomeReplayView extends React.Component {

  render () {
    return (
      <h1>rofl</h1>
    );
  }

}

export default class HomeReplayViewWrapper extends React.Component {

  render () {
    return (
      <FluxComponent>
        <HomeReplayView {...this.props} />
      </FluxComponent>
    );
  }

}
