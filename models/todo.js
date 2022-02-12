const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const todoSchema = new mongoose.Schema({
    todo: { type: String, required: true },
    detail: { type: String, required: false },
    frozen: { type: Boolean, required: false },
    creatDate: { type: String, required: true },
});

todoSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Todo', todoSchema);