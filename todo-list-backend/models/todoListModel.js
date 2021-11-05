const { ObjectId } = require('bson');
const connection = require('./connection');

const getTasks = () => connection().then(
  (db) => db.collection('tasks').find({}).toArray(),
);

const sortTasks = (sortBy, sortOrder) => connection().then(
  (db) => db.collection('tasks').find({}).sort({ [sortBy]: sortOrder }).toArray(),
);

const getTaskById = (id) => connection().then(
  (db) => db.collection('tasks').findOne({ _id: ObjectId(id) }),
);

const createTask = (task, status = 'Pending') => connection().then(
  (db) => db.collection('tasks').insertOne({ task, status, createdAt: new Date() }),
);

const updateTask = (id, task, status) => connection().then(
  (db) => db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: { task, status } }),
);

const deleteTask = (id) => connection().then(
  (db) => db.collection('tasks').deleteOne({ _id: ObjectId(id) }),
);

module.exports = {
  getTasks,
  sortTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};