const express = require('express');

const app = express();
const port = process.env.PORT || 3000

app.use('/', function (req, res) {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
