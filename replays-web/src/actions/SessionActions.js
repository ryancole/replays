import "whatwg-fetch";
import jwt from "jsonwebtoken";
import Session from "../entities/Session";
import Settings from "../../dank.config";
import { SESSION_SET, SESSION_CLEAR } from "../constants/ActionTypes";


// clear the current session
export function clearSession () {
  return {
    type: SESSION_CLEAR
  };
}

// fetch a new session token for the given
// username and password
export function fetchNewSession (username, password) {
  return dispatch => {
    fetch(`${Settings.API_ADDR}/session`, {
      method: "post",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(response => {

      // decode the token payload
      const payload = jwt.decode(response.token);

      // convert response data into
      // immutable record
      const session = new Session({
        token: response.token,
        ...payload
      });

      dispatch({
        type: SESSION_SET,
        payload: session
      });

    });
  };
}
