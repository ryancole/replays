import "whatwg-fetch";
import jwt from "jsonwebtoken";
import Settings from "../../dank.config";
import * as Accounts from "../repositories/AccountRepository";
import { Account, Session } from "../entities";
import { ACCOUNT_SET, ACCOUNT_CLEAR, SESSION_SET } from "../constants/ActionTypes";


// clear the store of all account data
export function clearAccounts () {
  return {
    type: ACCOUNT_CLEAR
  };
}

// query for a single account with the
// specified username
export function fetchAccountByUsername (username) {
  return (dispatch, getState) => {

    // get possible active session
    const { session } = getState();

    // fetch account from the server
    Accounts.get(session, username).then(response => {

      // convert response data into
      // immutable account record
      const account = new Account({
        id: response.id,
        username: response.username,
        dateCreated: response.date_created
      });

      // dispatch set action
      dispatch({
        type: ACCOUNT_SET,
        payload: account
      });

    });

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
