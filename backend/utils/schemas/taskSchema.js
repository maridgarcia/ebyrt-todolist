const Joi = require('joi');
const JoiDate = require('joi').extend(require('@joi/date'));

module.exports = Joi.object({
  task: Joi.string().required().min(5).messages({
    'any.required': '"task" field is required',
  }),
  dueDate: JoiDate.date().format('YYYY-MM-DD'),
});
