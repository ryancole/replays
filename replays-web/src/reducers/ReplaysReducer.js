import { OrderedMap } from "immutable";
import { REPLAY_MERGE, REPLAY_DELETE, REPLAY_UPDATE } from "../constants/ActionTypes";


const initialState = OrderedMap();

export default function replays (state = initialState, action) {

  switch (action.type) {

    case REPLAY_MERGE:
      const newReplays = action.replays.reduce((prev, curr) => {
        return prev.set(curr.id, curr);
      }, OrderedMap());
      return state.merge(newReplays);

    case REPLAY_DELETE:
      return state.delete(action.id);

    case REPLAY_UPDATE:
      return state;

    default:
      return state;

  }

}
