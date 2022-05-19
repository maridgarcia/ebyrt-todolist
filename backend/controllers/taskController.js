const rescue = require('express-rescue');
const { createTaskService } = require('../services/taskService');
const { getAllTasksService } = require('../services/taskService');
const validateSchema = require('../utils/schemas/validateSchema');
const taskSchema = require('../utils/schemas/taskSchema');

const create = rescue(async (req, res) => {
  const { user } = req;
  validateSchema(taskSchema, req.body);

  const newTask = {
    user: user.username,
    ...req.body,
  };

  const id = await createTaskService(newTask);

  return res.status(201).json({ _id: id, ...newTask });
});

const getAll = rescue(async (req, res) => {
  const { user } = req;
  const tasks = await getAllTasksService(user.username);
  return res.status(200).json(tasks);
});

module.exports = {
  create,
  getAll,
};
