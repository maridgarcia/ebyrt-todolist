const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string().email().required().messages({
    'any.empty': '"email" is not allowed to be empty',
    'any.required': '"email" is required',
  }),
  password: Joi.string().required().messages({
    'any.empty': '"password" is not allowed to be empty',
    'any.required': '"password" is required',
  }),
});
