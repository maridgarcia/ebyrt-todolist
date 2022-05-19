const router = require('express').Router();
const taskController = require('../controllers/taskController');

router.post('/', taskController.create);
router.get('/', taskController.getAll);

module.exports = router;
