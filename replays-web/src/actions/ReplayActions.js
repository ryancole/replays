import 'whatwg-fetch';
import Settings from '../../dank.config';
import { REPLAY_MERGE } from '../constants/ActionTypes';


export function fetchAllReplays () {
  return (dispatch, getState) => {
    const { session } = getState();
    if (session.token != null) {
      fetch(`${Settings.API_ADDR}/replay`, {
        headers: {
          "Authorization": `Bearer ${session.token}`
        }
      })
      .then(response => response.json())
      .then(response => dispatch({
        type: REPLAY_MERGE,
        replays: response.replays
      }));
    }
  };
};

export function fetchReplayById (id) {
  return (dispatch, getState) => {
    const { session } = getState();
    if (session.token != null) {
      fetch(`${Settings.API_ADDR}/replay/${id}`, {
        headers: {
          "Authorization": `Bearer ${session.token}`
        }
      })
      .then(response => response.json())
      .then(response => dispatch({
        type: REPLAY_MERGE,
        replays: [response]
      }));
    }
  };
};

export function deleteReplay (id) {
  return (dispatch, getState) => {
    const { session } = getState();
    if (session.token != null) {
      fetch(`${Settings.API_ADDR}/replay/${id}`, {
        method: 'delete',
        headers: {
          "Authorization": `Bearer ${session.token}`
        }
      })
      .then(response => response.json())
      .then(response => {
        if (response.success == true) {
          dispatch({
            type: REPLAY_DELETE,
            id: response.id
          });
        }
      });
    }
  };
};

export function makeReplayPublic (id) {
  return (dispatch, getState) => {
    const { session } = getState();
    if (session.token != null) {
      fetch(`${Settings.API_ADDR}/replay/${id}`, {
        method: 'patch',
        headers: {
          "Authorization": `Bearer ${session.token}`
        },
        body: {
          public: true
        }
      })
      .then(response => response.json())
      .then(response => {
        if (response.success == true) {
          dispatch({
            type: REPLAY_UPDATE,
            id: response.id,
            public: true
          });
        }
      });
    }
  };
};

export function makeReplayPrivate (id) {
  return (dispatch, getState) => {
    const { session } = getState();
    if (session.token != null) {
      fetch(`${Settings.API_ADDR}/replay/${id}`, {
        method: 'patch',
        headers: {
          "Authorization": `Bearer ${session.token}`
        },
        body: {
          public: false
        }
      })
      .then(response => response.json())
      .then(response => {
        if (response.success == true) {
          dispatch({
            type: REPLAY_UPDATE,
            id: response.id,
            public: false
          });
        }
      });
    }
  };
};
