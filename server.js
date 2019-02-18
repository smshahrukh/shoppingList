const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// BodyParser middleware
app.use(bodyParser.json());

const db = require('./config/keys').mongoUrl;

mongoose
  .connect(db)
  .then(() => console.log("Mongo DB is connected"))
  .catch(err => console.log(err));

app.use('/api/items', items);

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);