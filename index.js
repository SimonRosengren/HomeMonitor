const express = require('express');
const app = express();
const port = process.env.PORT || 4200;

require('dotenv').config()
require('./startup/routes')(app, express)
require('./startup/db')()
app.listen(port, () => console.log(`Listening on port: ${port}`))
    