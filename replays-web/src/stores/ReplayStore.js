import { Store } from 'flummox';

class ReplayStore extends Store {

  constructor(flux) {
    super();

    const replayActionIds = flux.getActionIds('replays');
    this.register(replayActionIds.createReplay, this.handleNewReplay);

    this.state = {
      replays: [{
        content: 'lulz',
        date: Date.now()
      }]
    };
  }

  handleNewReplay(replay) {
    this.setState({
      replays: this.state.replays.concat([replay]),
    });
  }

}

export default ReplayStore;