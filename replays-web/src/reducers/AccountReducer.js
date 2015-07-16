import { ACCOUNT_SET } from '../constants/ActionTypes';


export default function account (state = null, action) {

  switch (action.type) {

    case ACCOUNT_SET:
      return action.account;

    default:
      return state;

  }

};
