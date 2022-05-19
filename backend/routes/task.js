const router = require('express').Router();
const taskController = require('../controllers/taskController');

router.post('/', taskController.create);
router.get('/', taskController.getAll);
router.put('/:id', taskController.update);

module.exports = router;
