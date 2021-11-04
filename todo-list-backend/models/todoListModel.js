const { ObjectId } = require('bson');
const connection = require('./connection');

const getTasks = () => connection().then(
  (db) => db.collection('tasks').find({}).toArray(),
);

const createTask = (task, status = 'pendente') => connection().then(
  (db) => db.collection('tasks').insertOne({ task, status }),
);

const updateTask = (id, task) => connection().then(
  (db) => db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: { task } }),
);

const updateStatus = (id, status) => connection().then(
  (db) => db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: { status } }),
);

const deleteTask = (id) => connection().then(
  (db) => db.collection('tasks').deleteOne({ _id: ObjectId(id) }),
);

module.exports = {
  getTasks,
  createTask,
  updateTask,
  updateStatus,
  deleteTask,
};