const express = require('express');

const app = express();
const port = process.env.PORT || 3000

app.get('/message', (req, res) => {
  res.send('Message list')
})

app.post('/message', (req, res) => {
  res.send('Message added')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
