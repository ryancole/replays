"use strict";

// application settings
var settings = require('../../settings');

var db = require('nano')(settings.COUCHDB_ADDR);


/**
 * save a replay to the database
 */

exports.insert = function insert (replay, callback) {

  // replay is specified by the `replay` type
  replay.type = "replay";

  // document creation date
  replay.dateCreated = Date.now();

  // insert the account into couchdb
  db.insert(replay, function (err, body) {

    if (err) {
      return callback(err);
    } else if (body.ok != true) {
      return callback(Error('ok not true'));
    }

    // attach the new id
    replay._id = body._id;

    // provide the new replay
    return callback(null, replay);

  });

};


/**
 * fetch single replay by id
 */

exports.get = function get (id, callback) {

  let params = {
    keys: [ id ]
  };

  db.view('replays', 'byId', params, function (err, body) {

    if (err) {
      return callback(err);
    } else if (body.rows.length != 1) {
      return callback(Error("error finding replay"));
    }

    // extract the replays
    let replay = body.rows[0].value;

    // provide the replay collection
    return callback(null, replay);

  });

};


/**
 * fetch all replays keyed by id
 */

exports.getAll = function getAllById (callback) {

  let params = {
    descending: true,
    include_docs: true
  };

  db.view('replays', 'byIdWithAccount', params, function (err, body) {

    if (err) {
      return callback(err);
    }

    let replays = body.rows.filter(row => {

      // we only want rows with doc
      return row.doc != null;

    }).map(row => {

      // extract replay values
      let replay = row.value.replay;

      // set account username value
      replay.accountUsername = row.doc.username;

      return replay;

    });

    // provide the replay collection
    return callback(null, replays);

  });

};


/**
 * fetch all replays with an account id
 */

exports.getAllByAccountId = function getAllByAccountId (id, callback) {

  let params = {
    keys: [ id ],
    descending: true
  };

  db.view('replays', 'byAccountId', params, function (err, body) {

    if (err) {
      return callback(err);
    }

    // extract the replays
    let replays = body.rows.map(replay => replay.value);

    // provide the replay collection
    return callback(null, replays);

  });

}
