import thunk from "redux-thunk";
import { routerStateReducer } from "redux-react-router";
import { createStore as createReduxStore } from "redux";
import { applyMiddleware, combineReducers } from "redux";

// individual reducers
import Replays from "./ReplaysReducer";
import Session from "./SessionReducer";
import Accounts from "./AccountsReducer";

// combined redux reducer
export const reducer = combineReducers({
  router: routerStateReducer,
  replays: Replays,
  session: Session,
  accounts: Accounts
});

// middleware-enabled store creator function
export const createStore = applyMiddleware(thunk)(createReduxStore);
