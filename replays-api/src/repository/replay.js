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
 * fetch all replays
 */

exports.getAll = function getAll (skip, callback) {

  let params = {
    skip: skip,
    limit: 20,
    descending: true
  };

  db.view('replays', 'byId', params, function (err, body) {

    if (err) {
      return callback(err);
    }

    // extract the replays
    let replays = body.rows.map(replay => replay.value);

    // provide the replay collection
    return callback(null, replays);

  });

};