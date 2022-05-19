const connect = require('./connection');

const dbColletion = 'users';

const createUser = async (newUser) => {
  const { username, email, password } = newUser;
  const db = await connect();

  const user = await db.collection(dbColletion).insertOne({ username, email, password });

  return user.insertedId;
};

const findUserByEmail = async (email) => {
  const db = await connect();
  const foundUser = await db.collection(dbColletion).findOne({ email });

  return foundUser;
};

const findUserByUsername = async (username) => {
  const db = await connect();
  const foundUser = await db.collection(dbColletion).findOne({ username });

  return foundUser;
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserByUsername,
};
