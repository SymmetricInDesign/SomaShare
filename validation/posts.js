const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.description = validText(data.description) ? data.description : '';
  data.title = validText(data.title) ? data.title : '';

  if (!Validator.isLength(data.description, { min: 0, max: 1000 })) {
    errors.description = 'Post description must be between 0 and 1000 characters';
  }
  if (!Validator.isLength(data.title, { min: 5, max: 100 })) {
    errors.title = 'Post title must be between 5 and 100 characters';
  }


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};