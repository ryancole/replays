"use strict";

let accounts = require('./repository/account');


/**
 * validate a given token payload
 */

exports.validate = function validate (payload, callback) {

  // fetch the account with the
  // given primary identifier
  accounts.getById(payload._id, function (err, account) {

    if (err) {
      return callback(err, false);
    } else if (account == undefined) {
      return callback(Error("failed to fetch account"), false);
    }

    // we want to be explicit about which
    // account details we choose to pass
    // around the application
    let explicitAccountDetails = {
      _id: account._id,
      username: account.username,
      dateCreated: account.dateCreated
    };

    // validation succeeded
    callback(null, true, explicitAccountDetails);

  });

};
