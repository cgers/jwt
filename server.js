const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/api/user');

//Body Parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('<h1>It works! :)</h1> </br>Use postman to create a POST request on  localhost:5000/api/user/login with an email and password of bob@gmail.com and 123465'));

const port = process.env.PORT || 5000;

//Route files
app.use('/api/user', user);

app.listen(port, () => console.log(`Server running on port: ${port}.`));