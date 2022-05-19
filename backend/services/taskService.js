const { createTask } = require('../models/tasks');

const createTaskService = async (newTask) => {
  const taskCreated = await createTask(newTask);

  return taskCreated;
};

module.exports = {
  createTaskService,
};
