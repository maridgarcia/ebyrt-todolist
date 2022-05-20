const rescue = require('express-rescue');
const { create } = require('../services/userService');
const validateSchema = require('../utils/schemas/validateSchema');
const userSchema = require('../utils/schemas/userSchema');

const createNewUser = rescue(async (req, res) => {
  validateSchema(userSchema, req.body);
  const token = await create(req.body);

  return res.status(201).json(token);
});

module.exports = { createNewUser };
