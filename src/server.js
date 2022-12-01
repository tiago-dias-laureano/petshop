const express = require('express');
const route = require('./routes/routes')

const app = express()

app.use(route);

app.listen(3001, () => {
  console.log('Server is running!')
})