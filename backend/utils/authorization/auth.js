require('dotenv').config();
const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../../models/user');

const { JWT_SECRET } = process.env;

const NOT_FOUND_ERROR = new Error();
NOT_FOUND_ERROR.code = 'AlreadyExists';
NOT_FOUND_ERROR.message = 'User already registered';

const jwtConfig = { algorithms: ['HS256'] };

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) throw NOT_FOUND_ERROR;

  try {
    const { email } = jwt.verify(token, JWT_SECRET, jwtConfig);
    const user = await findUserByEmail(email);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};
