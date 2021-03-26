const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.get('/message', (req, res) => {
  console.log(req.headers)
  console.log(req.query)

  res.header({
    "custom-header": "Custom value"
  })
  res.send('Message list')
})

app.post('/message', (req, res) => {
  console.log(req.body)
  res.send('Message added')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
