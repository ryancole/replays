import { OrderedMap } from 'immutable';
import { REPLAY_MERGE, REPLAY_DELETE, REPLAY_UPDATE } from '../constants/ActionTypes';


const initialState = OrderedMap();

export default function replays (state = initialState, action) {

  switch (action.type) {

    case REPLAY_MERGE:
      return Object.assign(state, action.replays);

    default:
      return state;

  }

};
