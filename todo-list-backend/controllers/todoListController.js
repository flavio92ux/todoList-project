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

const deleteTask = async (req, res) => {
  await todoListService.deleteTask(req.params.id);
  res.status(410).json({ message: 'Task deleted' });
};

const updateTask = async (req, res) => {
  const { task, status } = req.body;
  await todoListService.updateTask(req.params.id, task, status);
  res.status(200).json({ message: 'Task updated' });
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
};