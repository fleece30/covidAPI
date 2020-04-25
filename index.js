const express = require('express');
const app = express();

const data = require('./api');
app.use('/api', data);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server started on port "+port));