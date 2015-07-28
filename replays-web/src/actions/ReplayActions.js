import "whatwg-fetch";
import Immutable from "immutable";
import Replay from "../entities/Replay";
import Settings from "../../dank.config";
import * as Replays from "../repositories/ReplayRepository";
import { REPLAY_CLEAR, REPLAY_MERGE, REPLAY_DELETE, REPLAY_UPDATE } from "../constants/ActionTypes";


// clear the existing cache of
// replay data
export function clearReplays () {
  return {
    type: REPLAY_CLEAR
  };
}

// query for all replays, possibly including
// the current active user's private replays
export function fetchAllReplays (username) {
  return (dispatch, getState) => {

    // get possible active session
    const { session } = getState();

    // fetch replays from the server
    Replays.getAll(session, username).then(response => {

      // convert response into immutable
      // data records
      const replays = response.replays.reduce((prev, curr) => {
        const replay = new Replay({
          id: curr.id,
          awsKey: curr.aws_key,
          public: curr.public,
          filename: curr.filename,
          filesize: curr.size,
          accountId: curr.account_id,
          dateCreated: curr.date_created
        });
        return prev.set(replay.id, replay);
      }, Immutable.OrderedMap());

      // dispatch merge action
      dispatch({
        type: REPLAY_MERGE,
        payload: replays
      });

    });

  };
}

// query for a single replay that pertains
// to the current active user
export function fetchReplayById (id) {
  return (dispatch, getState) => {

    const { session } = getState();

    // this action requires a valid
    // existing session
    if (session.token.length === 0) {
      return;
    }

    fetch(`${Settings.API_ADDR}/replay/${id}`, {
      headers: {
        "Authorization": `Bearer ${session.token}`
      }
    })
    .then(response => response.json())
    .then(response => {

      // convert response data into
      // immutable replay record
      const replay = new Replay({
        id: response.id,
        size: response.size,
        awsKey: response.aws_key,
        public: response.public,
        filename: response.filename,
        accountId: response.account_id,
        dateCreated: response.date_created
      });

      dispatch({
        type: REPLAY_MERGE,
        payload: Immutable.OrderedMap([[replay.id, replay]])
      });

    });

  };
}

// query to delete a single replay pertaining
// to the current active user
export function deleteReplay (id) {
  return (dispatch, getState) => {

    const { session } = getState();

    // this action requires a valid
    // existing session
    if (session.token.length === 0) {
      return;
    }

    fetch(`${Settings.API_ADDR}/replay/${id}`, {
      method: "delete",
      headers: {
        "Authorization": `Bearer ${session.token}`
      }
    })
    .then(response => response.json())
    .then(response => {
      if (response.success === true) {
        dispatch({
          type: REPLAY_DELETE,
          payload: response.id
        });
      }
    });

  };
}

// query to set a replay as public pertaining
// to the current active user
export function makeReplayPublic (id) {
  return (dispatch, getState) => {

    const { session } = getState();

    // this action requires a valid
    // existing session
    if (session.token.length === 0) {
      return;
    }

    fetch(`${Settings.API_ADDR}/replay/${id}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${session.token}`
      },
      body: JSON.stringify({
        public: true
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response.success === true) {
        dispatch({
          type: REPLAY_UPDATE,
          payload: {
            id: response.id,
            public: true
          }
        });
      }
    });

  };
}

// query to set a replay as private pertaining
// to the current active user
export function makeReplayPrivate (id) {
  return (dispatch, getState) => {

    const { session } = getState();

    // this action requires a valid
    // existing session
    if (session.token.length === 0) {
      return;
    }

    fetch(`${Settings.API_ADDR}/replay/${id}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${session.token}`
      },
      body: JSON.stringify({
        public: false
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response.success === true) {
        dispatch({
          type: REPLAY_UPDATE,
          payload: {
            id: response.id,
            public: false
          }
        });
      }
    });

  };
}
