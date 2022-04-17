const express = require('express');
const app = express(); //create an instance of express library

//create first route
app.get('/',(req, res) => res.send('Hello World!'))

const port = 5000;
app.listen(port, () => console.log(`Server is running on ${port}`));
