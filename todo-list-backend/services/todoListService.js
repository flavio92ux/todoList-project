const todoListModel = require('../models/todoListModel');

const replaceId = (tasks) => {
  const newTasks = tasks.map((task) => {
    const newTask = { ...task };
    newTask.id = task._id;
    delete newTask._id;
    return newTask;
  });
  return newTasks;
};

const checkSortOrder = (sortOrder) => {
  const validValues = ['asc', 'desc', -1, 1];

  if (!validValues.includes(sortOrder)) {
    const errorMessage = {
      status: 400,
      message: 'Sort order must be "asc" or "desc"',
    };
    throw errorMessage;
  }
};

const getTasks = async () => {
  const tasks = await todoListModel.getTasks();
  const newTasks = replaceId(tasks);
  return newTasks;
};

const sortTasks = async (sortBy, sortOrder) => {
  checkSortOrder(sortOrder);
  const tasks = await todoListModel.sortTasks(sortBy, sortOrder);
  const newTasks = replaceId(tasks);
  return newTasks;
};

const createTask = async (task, status) => {
  await todoListModel.createTask(task, status);
};

const deleteTask = async (id) => {
  const task = await todoListModel.getTaskById(id);

  const errorMessage = {
    status: 404,
    message: 'Task not found',
  };

  if (!task) throw errorMessage;
  await todoListModel.deleteTask(id);
};

const updateTask = async (id, task, status) => {
  const currentTask = await todoListModel.getTaskById(id);

  const { task: currentTaskName, status: currentTaskStatus } = currentTask;

  const newTask = task || currentTaskName;
  const newStatus = status || currentTaskStatus;

  await todoListModel.updateTask(id, newTask, newStatus);

  const errorMessage = {
    status: 404,
    message: 'Task not found',
  };

  if (!currentTask) throw errorMessage;
};

module.exports = {
  getTasks,
  sortTasks,
  createTask,
  deleteTask,
  updateTask,
};