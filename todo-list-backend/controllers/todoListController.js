const todoListModel = require('../models/todoListModel');

const getTasks = async (_req, res) => {
  const tasks = await todoListModel.getTasks();
  res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const { task, status } = req.body;
  await todoListModel.createTask(task, status);
  res.status(201).json({ message: 'Task created' });
};

module.exports = {
  getTasks,
  createTask,
};