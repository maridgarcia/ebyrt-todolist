const md5 = require('md5');
const { createUser, findUser } = require('../models/user');
const { sign } = require('../utils/authorization/jwt');

const ALREADY_EXISTS = new Error();
ALREADY_EXISTS.code = 'AlreadyExists';
ALREADY_EXISTS.message = 'User already registered';

const userAlreadyExists = async (email) => {
  const foundUser = await findUser(email);

  if (foundUser) throw ALREADY_EXISTS;
};

const create = async (user) => {
  const { username, email, password } = user;

  const encryptPassword = md5(password);

  await userAlreadyExists(email);
  await createUser({ username, email, password: encryptPassword });
  const token = sign({ username, email });

  return token;
};

module.exports = {
  create,
};
