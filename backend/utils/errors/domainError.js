const errorMap = {
  AlreadyExists: 409,
  Unauthorized: 400,
  NotFound: 404,
  UnauthorizedUser: 401,
  BadRequest: 401,
};

module.exports = (err, _req, res, next) => {
  if (!err.code || !errorMap[err.code]) return next(err);

  return res.status(errorMap[err.code]).json({
    message: err.message,
  });
};
