const todoListModel = require('../models/todoListModel');

const replaceId = (tasks) => {
  const newTasks = tasks.map((task) => {
    const newTask = { ...task };
    newTask.id = task._id;
    return newTask;
  });
  return newTasks;
};

const getTasks = async () => {
  const tasks = await todoListModel.getTasks();
  const newTasks = replaceId(tasks);
  return newTasks;
};

const createTask = async (task, status) => {
  await todoListModel.createTask(task, status);
};

module.exports = {
  getTasks,
  createTask,
};