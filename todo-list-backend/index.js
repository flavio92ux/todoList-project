const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rescue = require('express-rescue');
require('dotenv').config();

const todoListController = require('./controllers/todoListController');
const checkParams = require('./middlewares/checkParams');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get('/', todoListController.getTasks);
app.post('/', todoListController.createTask);
app.delete('/:id', checkParams, rescue(todoListController.deleteTask));

app.use((error, _req, res, _next) => {
  console.log(error);
  res.status(error.status).json({ message: error.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});