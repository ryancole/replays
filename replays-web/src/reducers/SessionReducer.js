import { SESSION_SET, SESSION_CLEAR } from "../constants/ActionTypes";


function checkLocalStorage () {

  // fetch previous active session
  let existingSession = localStorage.getItem("dank");

  if (existingSession != null) {
    try {

      // attempt to parse session body
      existingSession = JSON.parse(existingSession);

      // check for expired session
      if (existingSession.details.exp < Math.floor(Date.now() / 1000)) {

        // we need to return null
        existingSession = null;

        // clear whatever was in storage
        localStorage.removeItem("dank");

      }

    } catch (err) {

      // we need to return null
      existingSession = null;

      // clear whatever was in storage
      localStorage.removeItem("dank");

    }
  }

  // null if not available
  return existingSession;

}

// might have an existing session in
// user's local storage
const initialState = checkLocalStorage();

export default function session (state = initialState, action) {

  switch (action.type) {

    case SESSION_SET:
      const newSession = {
        token: action.token,
        details: action.details
      };
      localStorage.setItem("dank", JSON.stringify(newSession));
      return newSession;

    case SESSION_CLEAR:
      localStorage.removeItem("dank");
      return null;

    default:
      return state;

  }

}
