const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const user = require('./routes/api/user');

//Body Parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('<h1>It works! :)</h1>'));

const port = process.env.PORT || 5000;

//Route files
app.use('/api/user', user);

app.listen(port, () => console.log(`Server running on port: ${port}.`));