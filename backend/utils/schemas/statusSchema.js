const Joi = require('joi');

module.exports = Joi.object({
  status: Joi.string().required().messages({
    'string.empty': '"status" is not allowed to be empty',
  }),
});
