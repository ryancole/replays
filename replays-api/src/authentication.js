exports.validate = function validate (token, callback) {
    return callback(null, true, {
      id: 1,
      email: 'ryan@rycole.com'
    });
};
