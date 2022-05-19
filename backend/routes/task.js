const router = require('express').Router();
const taskController = require('../controllers/taskController');

router.post('/', taskController.create);
router.get('/alpha', taskController.taskByAlphaOrder);
router.get('/date', taskController.taskByDate);
router.get('/', taskController.getAll);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.remove);

module.exports = router;
