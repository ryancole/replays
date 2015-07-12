import { SESSION_SET, SESSION_CLEAR } from '../constants/ActionTypes';


export default function session (state = null, action) {

  switch (action.type) {

    case SESSION_SET:
      return {
        token: action.token,
        details: action.details
      };

    case SESSION_CLEAR:
      return null;

    default:
      return state;

  }

};
