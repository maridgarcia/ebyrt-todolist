const Joi = require('joi');

module.exports = Joi.object({
  username: Joi.string().required().min(3).messages({
    'any.required': '"name" is required',
    'string.min': '"username" must have at least 3 characters',
  }),
  email: Joi.string().email().required().messages({
    'any.required': '"email" is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be 6 characters long',
    'any.required': '"password" is required',
  }),
  role: Joi.string(),
});
