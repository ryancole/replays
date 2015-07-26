import "whatwg-fetch";
import jwt from "jsonwebtoken";
import Settings from "../../dank.config";
import { Account, Session } from "../entities";
import { ACCOUNT_SET, ACCOUNT_CLEAR, SESSION_SET } from "../constants/ActionTypes";


// clear the existing account data
export function clearAccount () {
  return {
    type: ACCOUNT_CLEAR
  };
}

// query to create a new account and provide
// a new session token in response
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
      payload: new Session({
        token: session.token,
        ...jwt.decode(session.token)
      })
    });

  };
}

// query for account details pertaining
// to the current active user
export function getAccountBySession () {
  return (dispatch, getState) => {

    const { session } = getState();

    // this action requires an valid
    // existing session
    if (session.token.length === 0) {
      return;
    }

    fetch(`${Settings.API_ADDR}/account/${session.account.id}`, {
      headers: {
        "Authorization": `Bearer ${session.token}`
      }
    })
    .then(response => response.json())
    .then(response => {

      // convert response data into
      // immutable record
      const account = new Account({
        id: response.id,
        username: response.username,
        dateCreated: response.date_created
      });

      dispatch({
        type: ACCOUNT_SET,
        payload: account
      });

    });

  };
}
