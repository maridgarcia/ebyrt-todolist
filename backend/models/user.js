const connect = require('./connection');

const dbColletion = 'users';

const createUser = async (user) => {
  const { username, email, password } = user;
  const db = await connect();

  const newUser = await db.collection(dbColletion).insertOne({ username, email, password });

  return {
    username: newUser.username,
    email: newUser.email,
    id: newUser.insertedId,
  };
};

// const findUser = async () => {};

module.exports = {
  createUser,
//   findUser,
};
