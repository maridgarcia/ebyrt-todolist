require('dotenv').config();
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
// const getAllTasks = async () => {};

// Atualizar uma task
// const updateTask = async () => {};

// Deletar uma task
// const removeTask = async () => {};

module.exports = {
  createTask,
};
