const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const sign = (payload, duration = '1d') => jwt.sign(payload, JWT_SECRET, {
  algorithm: 'HS256',
  expiresIn: duration,
});

const verify = (token) => jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });

module.exports = {
  sign,
  verify,
};
