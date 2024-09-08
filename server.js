require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello World!');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App on port ${port}`)
});

module.exports = app;
