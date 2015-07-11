import { REPLAY_MERGE, REPLAY_DELETE, REPLAY_UPDATE } from '../constants/ActionTypes';


export default function replays (state = {}, action) {

  switch (action.type) {

    case REPLAY_MERGE:
      const replays = actions.replays.reduce((prev, curr) => {
        return prev.set(curr.id, curr);
      });
      return Object.assign(state, replays);

    case REPLAY_DELETE:
      return state;

    case REPLAY_UPDATE:
      return state;

    default:
      return state;

  }

};
