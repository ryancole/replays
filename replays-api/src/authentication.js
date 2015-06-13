"use strict";

let accounts = require('./repository/account');


/**
 * validate a given token payload
 */

exports.validate = function validate (payload, callback) {

  // fetch the account with the
  // given primary identifier
  accounts.getById(payload.id, function (err, account) {

    if (err) {
      return callback(err, false);
    } else if (account == undefined) {
      return callback(Error("failed to fetch account"), false);
    }

    // validation succeeded
    callback(null, true, account);

  });

};
