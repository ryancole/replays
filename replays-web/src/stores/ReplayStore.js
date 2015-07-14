import { OrderedMap } from 'immutable';
import { REPLAY_MERGE, REPLAY_DELETE, REPLAY_UPDATE } from '../constants/ActionTypes';


const initialState = OrderedMap();

export default function replays (state = initialState, action) {

  switch (action.type) {

    case REPLAY_MERGE:
      const replays = action.replays.reduce((prev, curr) => {
        return prev.set(curr.id, curr);
      }, OrderedMap());
      return state.merge(replays);

    case REPLAY_DELETE:
      return state;

    case REPLAY_UPDATE:
      return state;

    default:
      return state;

  }

};
