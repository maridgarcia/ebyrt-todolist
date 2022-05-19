const md5 = require('md5');
const { createUser, findUserByEmail, findUserByName } = require('../models/user');
const { sign } = require('../utils/authorization/jwt');

const ALREADY_EXISTS = new Error();
ALREADY_EXISTS.code = 'AlreadyExists';
ALREADY_EXISTS.message = 'User already registered';

const findUserEmail = async (email) => {
  const foundUser = await findUserByEmail(email);

  if (foundUser) throw ALREADY_EXISTS;
};

const findUserName = async (name) => {
  const foundUser = await findUserByName(name);

  if (foundUser) throw ALREADY_EXISTS;
};

const create = async (user) => {
  const { username, email, password } = user;

  const encryptPassword = md5(password);

  await findUserEmail(email);
  await findUserName(username);
  await createUser({ username, email, password: encryptPassword });
  const token = sign({ username, email });

  return token;
};

module.exports = {
  create,
};
