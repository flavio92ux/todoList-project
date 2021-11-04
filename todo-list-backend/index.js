const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const todoListController = require('./controllers/todoListController');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get('/', todoListController.getTasks);
app.post('/', todoListController.createTask);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});