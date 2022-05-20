const rescue = require('express-rescue');
const { loginService } = require('../services/loginService');
const validateSchemas = require('../utils/schemas/validateSchema');
const loginSchema = require('../utils/schemas/loginSchema');

const loginController = rescue(async (req, res) => {
  validateSchemas(loginSchema, req.body);
  const { email, password } = req.body;
  const logged = await loginService(email, password);

  return res.status(200).json(logged);
});

module.exports = { loginController };
