const express = require('express');
const app = express();
const port = process.env.PORT || 4200;
const path = require('path');

app.use(express.static(path.join(__dirname, 'client/build')));

require('dotenv').config()
require('./startup/routes')(app, express)
require('./startup/db')()
app.listen(port, () => console.log(`Listening on port: ${port}`))
    