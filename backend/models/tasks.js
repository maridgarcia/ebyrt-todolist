require('dotenv').config();
const { ObjectId } = require('mongodb');
const connect = require('./connection');

const dbColletion = 'tasks';

// Criar task
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

// Listar todas as tasks
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

// Atualizar uma task
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

// Deletar uma task
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
  removeTask,
};
