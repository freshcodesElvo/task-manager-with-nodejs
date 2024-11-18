const express = require('express');
const router = express.Router();

const { get_all_tasks, create_a_task, get_specific_task, update_a_task, delete_a_task } = require('../controllers/tasks')

router.route('/').get(get_all_tasks).post(create_a_task);
router.route('/:id').get(get_specific_task).patch(update_a_task).delete(delete_a_task);

module.exports = router;