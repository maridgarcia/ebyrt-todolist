const Joi = require('joi');

module.exports = Joi.object({
  task: Joi.string().required().min(5).messages({
    'any.required': '"task" field is required',
  }),
  duoDate: Joi.date.format('DD-MM-YYYY'),
});
