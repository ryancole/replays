import React from 'react';
import FluxComponent from 'flummox/component';
import ReplayDetail from '../../components/ReplayDetail';
import SectionNavbar from '../../components/SectionNavbar';


class HomeReplayView extends React.Component {

  render () {
    if (!this.props.replay) {
      return null;
    }
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar label={this.props.replay.filename} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ReplayDetail replay={this.props.replay} />
          </div>
        </div>
      </div>
    );
  }

}

export default class HomeReplayViewWrapper extends React.Component {

  render () {
    return (
      <FluxComponent connectToStores={{
        replays: store => ({
          replay: store.get(parseInt(this.props.params.id))
        })
      }}>
        <HomeReplayView {...this.props} />
      </FluxComponent>
    );
  }

  componentDidMount () {
    setTimeout(() => {

      const store = this.props.flux.getStore("replays");

      if (store.has(this.props.params.id) == false) {

        const replays = this.props.flux.getActions("replays");

        replays.getById(
          this.props.activeSession,
          parseInt(this.props.params.id)
        );

      }

    });
  }

}
