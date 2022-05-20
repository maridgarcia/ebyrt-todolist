const Joi = require('joi');

module.exports = (err, _req, res, next) => {
  if (!Joi.isError(err)) return next(err);

  const error = {
    code: 'UnprocessableEntity',
    message: err.message,
  };

  return res.status(400).json({ message: error.message });
};
