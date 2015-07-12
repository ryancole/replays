import { SESSION_SET, SESSION_CLEAR } from '../constants/ActionTypes';


export default function session (state = {}, action) {

  switch (action.type) {

    case SESSION_SET:
      return action;

    case SESSION_CLEAR:
      return null;

    default:
      return state;

  }

};
