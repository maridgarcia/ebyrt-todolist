const express = require('express');

const { createNewUser } = require('../controllers/userController');

const router = express.Router();

router.post('/', createNewUser);

module.exports = router;
