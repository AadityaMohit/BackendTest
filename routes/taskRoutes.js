const express = require('express');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getDashboard
} = require('../controllers/taskController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.use(auth);

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/dashboard/data', getDashboard);

module.exports = router;
