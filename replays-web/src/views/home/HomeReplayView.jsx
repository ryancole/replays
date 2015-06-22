import React from 'react';
import FluxComponent from 'flummox/component';
import SectionNavbar from '../../components/SectionNavbar';
import ReplayDetail from '../../components/ReplayDetail';
import ReplayDetailNavbar from '../../components/ReplayDetailNavbar';


class HomeReplayView extends React.Component {

  render () {

    // TODO: loading spinner
    if (!this.props.replay) {
      return null;
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar
              label={this.props.replay.filename}>
              <ReplayDetailNavbar
                replay={this.props.replay}
                activeSession={this.props.activeSession} />
            </SectionNavbar>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ReplayDetail
              replay={this.props.replay} />
          </div>
        </div>
      </div>
    );

  }

}

export default class HomeReplayViewWrapper extends React.Component {

  constructor (props) {

    super(props);

    this.state = {
      id: parseInt(props.params.id)
    };

  }

  render () {
    return (
      <FluxComponent connectToStores={{
        replays: store => ({
          replay: store.get(this.state.id)
        })
      }}>
        <HomeReplayView {...this.props} />
      </FluxComponent>
    );
  }

  componentDidMount () {
    setTimeout(() => {

      const store = this.props.flux.getStore("replays");

      if (store.has(this.state.id) == false) {

        const replays = this.props.flux.getActions("replays");

        replays.getById(
          this.props.activeSession,
          this.state.id
        );

      }

    });
  }

}