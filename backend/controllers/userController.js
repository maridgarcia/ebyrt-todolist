const { create } = require('../services/userService');
const { validateSchema } = require('../utils/schemas/validateSchema');
const { userSchema } = require('../utils/schemas/userSchema');

const createNewUser = async (req, res) => {
  try {
    validateSchema(userSchema, req.body);
    const newUser = await create(req.body);

    return res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = { createNewUser };
