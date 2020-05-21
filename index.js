const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('./startup/routes')(app, express)
require('./startup/db')()
app.listen(port, () => console.log(`Listening on port: ${port}`))
    