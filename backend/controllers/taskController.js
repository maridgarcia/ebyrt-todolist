const rescue = require('express-rescue');
const {
  createTaskService, getAllTasksService, updateTaskService, removeTaskService,
} = require('../services/taskService');
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

const update = rescue(async (req, res) => {
  const { user } = req;
  const { id } = req.params;
  const task = await updateTaskService({ ...req.body, user: user.username, id });

  return res.status(200).json(task);
});

const remove = rescue(async (req, res) => {
  const { id } = req.params;
  await removeTaskService(id);

  return res.status(200).end();
});

module.exports = {
  create,
  getAll,
  update,
  remove,
};
