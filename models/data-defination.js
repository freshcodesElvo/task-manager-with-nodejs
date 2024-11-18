const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task_name:{
        type: String,
        required: [true, "Must name your task..."],
        trim: true,
        maxlength: [20, "Task characters can not exeed 20 characters...."]
    },
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema)