const md5 = require('md5');
const { sign } = require('../utils/authorization/jwt');
const { findUserByEmail } = require('../models/user');

const AUTHORIZATION_ERROR = new Error();
AUTHORIZATION_ERROR.code = 'Unauthorized';
AUTHORIZATION_ERROR.message = 'Wrong email or password';

const USER_NOT_FOUND_ERROR = new Error();
USER_NOT_FOUND_ERROR.code = 'NotFound';
USER_NOT_FOUND_ERROR.message = 'User does not exist';

const loginService = async (email, password) => {
  const userFoundByEmail = await findUserByEmail(email);

  if (!userFoundByEmail) throw USER_NOT_FOUND_ERROR;

  const encryptPassword = md5(password);

  if (encryptPassword !== userFoundByEmail.password) throw AUTHORIZATION_ERROR;
  const token = sign({ email });

  const { _id } = userFoundByEmail;

  return {
    id: _id,
    username: userFoundByEmail.username,
    email: userFoundByEmail.email,
    token,
  };
};

module.exports = { loginService };
