import { ACCOUNT_SET, ACCOUNT_CLEAR } from "../constants/ActionTypes";

export default function account (state = null, action) {

  switch (action.type) {

    case ACCOUNT_SET:
      return action.payload;

    case ACCOUNT_CLEAR:
      return null;

    default:
      return state;

  }

}
