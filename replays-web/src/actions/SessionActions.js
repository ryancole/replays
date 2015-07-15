import 'whatwg-fetch';
import jwt from 'jsonwebtoken';
import Settings from '../../dank.config';
import { SESSION_SET, SESSION_CLEAR } from '../constants/ActionTypes';


export function clearSession () {
  return {
    type: SESSION_CLEAR
  };
};

export function fetchNewSession (username, password) {
  return dispatch => {
    fetch(`${Settings.API_ADDR}/session`, {
      method: 'post',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => dispatch({
      type: SESSION_SET,
      token: response.token,
      details: jwt.decode(response.token)
    }));
  };
};

export function fetchExistingSession () {
  const session = checkLocalStorage();
  if (session === null) {
    return clearSession();
  }
  return {
    ...session,
    type: SESSION_SET
  };
};