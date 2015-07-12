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

function checkLocalStorage () {

  // fetch previous active session
  let session = localStorage.getItem("dank");

  if (session != null) {
    try {

      // attempt to parse session body
      session = JSON.parse(session);

      // check for expired session
      if (session.details.exp < Math.floor(Date.now() / 1000)) {

        // we need to return null
        session = null;

        // clear whatever was in storage
        localStorage.removeItem("dank");

      }

    } catch (err) {

      // we need to return null
      session = null;

      // clear whatever was in storage
      localStorage.removeItem("dank");

    }
  }

  // null if not available
  return session;

};
