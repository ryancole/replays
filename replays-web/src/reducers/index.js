import thunk from "redux-thunk";
import { routerStateReducer } from "redux-react-router";
import { createStore as createReduxStore } from "redux";
import { applyMiddleware, combineReducers } from "redux";

// individual reducers
import Replays from "./ReplaysReducer";
import Account from "./AccountReducer";
import Session from "./SessionReducer";

// single redux reducer
export const reducer = combineReducers({
  router: routerStateReducer,
  replays: Replays,
  account: Account,
  session: Session
});

// middleware-enabled store creator
export const createStore = applyMiddleware(thunk)(createReduxStore);
