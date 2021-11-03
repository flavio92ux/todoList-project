const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const todoListController = require('./controllers/todoListController');

const app = express();

app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get('/', todoListController.getTasks);
app.post('/', todoListController.createTask);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});