import { SESSION_SET, SESSION_CLEAR } from '../constants/ActionTypes';

// might have an existing session in
// user's local storage
const initialState = checkLocalStorage();

export default function session (state = initialState, action) {

  switch (action.type) {

    case SESSION_SET:
      const session = {
        token: action.token,
        details: action.details
      };
      localStorage.setItem("dank", JSON.stringify(session));
      return session;

    case SESSION_CLEAR:
    localStorage.removeItem("dank");
      return null;

    default:
      return state;

  }

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
