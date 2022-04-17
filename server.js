const express = require('express');
const app = express(); //create an instance of express library
const mongoose = require('mongoose');
const keys = require('./config/key')

//DB config
const db = keys.mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

//create first route
app.get('/',(req, res) => res.send('Hello World!'))

const port = 5000;
app.listen(port, () => console.log(`Server is running on ${port}`));
