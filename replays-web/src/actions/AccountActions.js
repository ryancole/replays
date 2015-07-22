import "whatwg-fetch";
import jwt from "jsonwebtoken";
import Settings from "../../dank.config";
import { ACCOUNT_SET, SESSION_SET } from "../constants/ActionTypes";


export function createAccount (username, password) {
  return async dispatch => {

    const payload = {
      method: "post",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };

    // create the account
    let account = await fetch(`${Settings.API_ADDR}/account`, payload).then(res => res.json());

    if (account.id <= 0) {
      return;
    }

    // create the session
    let session = await fetch(`${Settings.API_ADDR}/session`, payload).then(res => res.json());

    // dispatch the session details
    dispatch({
      type: SESSION_SET,
      token: session.token,
      details: jwt.decode(session.token)
    });

  };
}

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
}
