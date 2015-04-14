var nano = require('nano')('https://ryancole.iriscouch.com:6984');

exports.insert = function insert (account, callback) {
  var accounts = nano.use('accounts');
  accounts.insert({
    email: 'ryan@rycole.com'
  }, callback);
};
