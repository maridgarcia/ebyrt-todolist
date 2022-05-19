const { ObjectId } = require('mongodb');
const connect = require('./connection');

const dbColletion = 'tasks';

const createTask = async (newTask) => {
  const createdAt = new Date();
  const {
    task, dueDate, user,
  } = newTask;
  const db = await connect();

  const { insertedId } = await db.collection(dbColletion).insertOne({
    user, task, createdAt, dueDate, status: 'Pending',
  });

  return insertedId;
};

const getAllTasks = async (user) => {
  const db = await connect();

  const tasks = await db.collection(dbColletion).find({ user }).toArray();

  return tasks;
};

const findTaskById = async (id) => {
  const db = await connect();

  const taskById = await db.collection(dbColletion).findOne({ _id: ObjectId(id) });

  return taskById;
};

const updateTask = async (taskToUpdate) => {
  const {
    user, task, dueDate, id,
  } = taskToUpdate;
  const db = await connect();
  await db.collection(dbColletion)
    .updateOne(
      {
        _id: ObjectId(id),
      },
      { $set: { task, dueDate, user } },
    );
  const updatedTask = await findTaskById(id);

  return updatedTask;
};

const showTasksByDate = async (user) => {
  const db = await connect();

  const tasks = await db.collection(dbColletion).find({ user }).sort({ createdAt: -1 }).toArray();

  return tasks;
};

const showTasksByAlphabeticOrder = async (user) => {
  const db = await connect();

  const tasks = await db.collection(dbColletion).find({ user }).sort({ task: 1 }).toArray();

  return tasks;
};

const showTasksByStatus = async (user) => {
  const db = await connect();
  const tasks = await db.collection(dbColletion)
    .find({ user })
    .sort({ status: -1 })
    .toArray();
  return tasks;
};

const updateStatus = async (statusToUpdate) => {
  const { id, status } = statusToUpdate;
  const db = await connect();

  await db.collection(dbColletion)
    .updateOne({
      _id: ObjectId(id),
    }, { $set: { status } });

  const task = findTaskById(id);
  return task;
};

const removeTask = async (id) => {
  const db = await connect();

  const taskById = await findTaskById(id);

  await db.collection(dbColletion).deleteOne({ _id: ObjectId(id) }, {});

  return taskById;
};

module.exports = {
  createTask,
  getAllTasks,
  findTaskById,
  updateTask,
  showTasksByDate,
  showTasksByAlphabeticOrder,
  showTasksByStatus,
  updateStatus,
  removeTask,
};
