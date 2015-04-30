import { Actions } from 'flummox';

class ReplayActions extends Actions {
  createReplay(replayContent) {
    return {
      content: replayContent,
      date: Date.now(),
    };
  }
}

export default ReplayActions;