// @ts-nocheck
const Todo = require('../models/todo');

//créer un todo
exports.newtodo = (req, res, next) => {
  const todo = new Todo({
    todo: req.body.todo, 
    detail: req.body.detail, 
    frozen: false,
    creatDate: new Date(), }); 
  todo.save()
    .then(() => { res.status(201).json({ message: 'todo céer' }); })
    .catch((error) => { res.status(401).json({ error: 'Invalid requete!' }); });
};

//liste de tous les todo
exports.getAllTodo = (req, res, next) => {
  Todo.find()
  .then((todos) => { res.status(200).json({ todos }); })
  .catch((error) => { 
    console.log(error)
    res.status(401).json({ error: 'Invalid request!' }); 
  }); 
};
//pour un todo
exports.getOneTodo = (req, res, next) => {
  Todo.findById({ _id: req.params.id })
  .then((todo) => { res.status(200).json({ data: todo }); })
  .catch((error) => { res.status(401).json({ error: 'Invalid request!' }); }); 
};

exports.updateTodo = (req, res, next) => {
  const todo = { ...req.body }; 
  Todo.updateOne({ _id: req.params.id }, { ...todo, _id: req.params.id })
  .then(() => { res.status(200).json({ message: 'mise à jour' }); })
  .catch((error) => { res.status(401).json({ error: 'Invalid request!' }); }); 
};
exports.deleteTodo = (req, res, next) => {
  Todo.findOne({ _id: req.params.id })
  .then(todo => { 
    Todo.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'todo supprimé' }))
    .catch(error => res.status(401).json({ error: 'Invalid request!' })); 
  })
  .catch(error => res.status(401).json({ error: 'Invalid request!' })); 
};