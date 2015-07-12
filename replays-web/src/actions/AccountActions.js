import 'whatwg-fetch';
import jwt from 'jsonwebtoken';
import Settings from '../../dank.config';
import { ACCOUNT_SET, SESSION_SET } from '../constants/ActionTypes';


export async function createAccount (username, password) {

  const payload = {
    method: 'post',
    body: {
      username: username,
      password: password
    }
  };

  // create the account
  let account = await fetch(`${Settings.API_ADDR}/account`, payload);

  if (account.id >= 0) {
    return;
  }

  // create the session
  let session = await fetch(`${Settings.API_ADDR}/session`, payload);

  // dispatch the session details
  dispatch({
    type: SESSION_SET,
    token: response.token,
    details: jwt.decode(response.token)
  });

};

export function getAccountBySession () {
  return (dispatch, getState) => {
    const { session } = getState();
    if (session.token != null) {
      fetch(`${Settings.API_ADDR}/account/${session.account.id}`, {
        headers: {
          "Authorization": `Bearer ${session.token}`
        }
      })
      .then(response => response.json())
      .then(response => dispatch({
        type: ACCOUNT_SET,
        account: response
      }));
    }
  };
};
