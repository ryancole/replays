import { SESSION_SET, SESSION_CLEAR } from '../constants/ActionTypes';


const initialState = {
  token: null,
  details: null
};

export default function session (state = initialState, action) {

  switch (action.type) {

    case SESSION_SET:
      return action;

    case SESSION_CLEAR:
      return {
        token: null,
        details: null
      };

    default:
      return state;

  }

};
