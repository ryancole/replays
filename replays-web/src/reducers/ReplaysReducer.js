import Immutable from "immutable";
import { REPLAY_CLEAR, REPLAY_MERGE, REPLAY_DELETE, REPLAY_UPDATE } from "../constants/ActionTypes";


// initial state is an empty map
// for eventual replay
const initialState = Immutable.OrderedMap();

export default function replays (state = initialState, action) {

  switch (action.type) {

    // merge a map of replays into the
    // existing map of replays
    case REPLAY_MERGE:
      return state.merge(action.payload);

    // delete a key from the existing
    // map of replays
    case REPLAY_DELETE:
      return state.delete(action.payload);

    // update properties of a specific
    // existing replay
    case REPLAY_UPDATE:
      return state.update(action.payload.id, replay => {
        return replay.merge({
          public: action.payload.public
        });
      });

    case REPLAY_CLEAR:
      return state.clear();

    default:
      return state;

  }

}
