const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
  let errors = {};
  data.password = validText(data.password) ? data.password : '';


  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required.';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
