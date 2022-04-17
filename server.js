const express = require('express');
const app = express(); //create an instance of express library
const mongoose = require('mongoose');
const keys = require('./config/key');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');



//DB config
const db = keys.mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

//create first route
app.get('/',(req, res) => res.send('Hello World!'));

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = 5000;
app.listen(port, () => console.log(`Server is running on ${port}`));
