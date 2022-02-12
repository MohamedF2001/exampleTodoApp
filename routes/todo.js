const express = require('express');
const router = express.Router();
const todo = require('../controllers/todo');
const auth = require('../middleware/auth');

router.get('/', todo.getAllTodo);
router.get('/:id', todo.getOneTodo);
router.post('/', todo.newtodo);
router.put('/:id', todo.updateTodo);
router.delete('/:id', todo.deleteTodo);

module.exports = router;