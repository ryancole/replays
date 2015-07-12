import { ACCOUNT_SET } from '../constants/ActionTypes';


export default function session (state = {}, action) {

  switch (action.type) {

    case ACCOUNT_SET:
      return action.account;

    default:
      return state;

  }

};
