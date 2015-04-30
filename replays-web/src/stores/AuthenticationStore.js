import { Store } from 'flummox';

class AuthenticationStore extends Store {

  constructor (flux) {
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

}

export default AuthenticationStore;