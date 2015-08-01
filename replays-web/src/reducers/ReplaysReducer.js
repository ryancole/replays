import Immutable from "immutable";
import ActionTypes from "../constants/ActionTypes";


// initial state is an empty map
// for eventual replay
const initialState = Immutable.OrderedMap();

export default function replays (state = initialState, action) {

  switch (action.type) {

    // set the specific replay id key
    // to the specified replay
    case ActionTypes.REPLAY_SET:
      return state.set(
        action.payload.id,
        action.payload
      );

    // merge a map of replays into the
    // existing map of replays
    case ActionTypes.REPLAY_MERGE:
      return state.merge(action.payload);

    // delete a key from the existing
    // map of replays
    case ActionTypes.REPLAY_DELETE:
      return state.delete(action.payload);

    // update properties of a specific
    // existing replay
    case ActionTypes.REPLAY_UPDATE:
      return state.update(action.payload.id, replay => {
        return replay.merge({
          public: action.payload.public
        });
      });

    case ActionTypes.REPLAY_CLEAR:
      return state.clear();

    case ActionTypes.REPLAY_CLEAR_PRIVATE:
      return state.filter(replay => replay.public === true);

    default:
      return state;

  }

}
