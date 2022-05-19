const Joi = require('joi');
const { BAD_REQUEST } = require('../statusCode');

module.exports = (err, _req, res, next) => {
  if (!Joi.isError(err)) return next(err);

  const error = {
    code: 'UnprocessableEntity',
    message: err.message,
  };

  return res.status(BAD_REQUEST).json({ message: error.message });
};
