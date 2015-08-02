import Immutable from "immutable";
import { ACCOUNT_CLEAR, ACCOUNT_SET } from "../constants/ActionTypes";


// initial state is an empty map
// for eventual accounts
const initialState = Immutable.Map();

export default function accounts (state = initialState, action) {

  switch (action.type) {

    // merge a map of accounts into the
    // existing map of accounts
    case ACCOUNT_SET:
      return state.set(
        action.payload.username.toLowerCase(),
        action.payload
      );

    // clear the store of all existing
    // account data
    case ACCOUNT_CLEAR:
      return state.clear();

    default:
      return state;

  }

}
