const {
  createTask, getAllTasks, updateTask,
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

module.exports = {
  createTaskService,
  getAllTasksService,
  updateTaskService,
};
