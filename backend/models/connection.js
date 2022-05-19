const mongodb = require('mongodb').MongoClient;

const { ATLAS_URI } = process.env;

const dbName = 'todo_list';

const connect = () => mongodb.connect(ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((connection) => connection.db(dbName))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

module.exports = connect;
