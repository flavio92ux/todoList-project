const todoListService = require('../services/todoListService');

const getTasks = async (_req, res) => {
  const tasks = await todoListService.getTasks();
  res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const { task, status } = req.body;
  await todoListService.createTask(task, status);
  res.status(201).json({ message: 'Task created' });
};

module.exports = {
  getTasks,
  createTask,
};