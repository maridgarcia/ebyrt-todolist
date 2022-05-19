const {
  createTask,
  getAllTasks,
  updateTask,
  removeTask,
  showTasksByDate,
  showTasksByAlphabeticOrder,
  showTasksByStatus,
  updateStatus,
} = require('../models/tasks');

const NOT_FOUND = new Error();
NOT_FOUND.code = 'NotFound';
NOT_FOUND.message = 'No tasks found';

const createTaskService = async (newTask) => {
  const taskCreated = await createTask(newTask);

  return taskCreated;
};

const getAllTasksService = async (user) => {
  const allTasks = await getAllTasks(user);

  if (allTasks.length === 0) throw NOT_FOUND;

  return allTasks;
};

const updateTaskService = async (taskToUpdate) => {
  const updatedTask = await updateTask(taskToUpdate);

  return updatedTask;
};

const taskByDateService = async (user) => {
  const tasks = await showTasksByDate(user);

  if (tasks.length === 0) throw NOT_FOUND;

  return tasks;
};

const taskByAlphabeticOrderService = async (user) => {
  const tasks = await showTasksByAlphabeticOrder(user);

  if (tasks.length === 0) throw NOT_FOUND;

  return tasks;
};

const tasksByStatusService = async (user) => {
  const tasks = await showTasksByStatus(user);

  if (tasks.length === 0) throw NOT_FOUND;

  return tasks;
};

const updateStatusService = async (status) => {
  const task = await updateStatus(status);

  if (!task) throw NOT_FOUND;

  return task;
};

const removeTaskService = async (id) => {
  const task = await removeTask(id);

  if (!task) throw NOT_FOUND;

  return task;
};

module.exports = {
  createTaskService,
  getAllTasksService,
  updateTaskService,
  taskByDateService,
  taskByAlphabeticOrderService,
  updateStatusService,
  tasksByStatusService,
  removeTaskService,
};
