const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,    // can't save a task without a title
      trim: true,        // removes extra spaces
    },
    completed: {
      type: Boolean,
      default: false,    // new tasks start as not completed
    },
  },
  {
    timestamps: true,    // adds createdAt and updatedAt automatically
  }
);

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;