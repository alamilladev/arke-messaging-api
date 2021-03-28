// import required modules
const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')

const app = express()
const port = process.env.PORT || 3000

// Configure bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// List messages
app.get('/message', (req, res) => {
  console.log(req.headers)
  console.log(req.query)

  res.header({
    'custom-header': 'Custom value'
  })

  response.success(req, res, 200, 'Mesage list')
})

// create new message
app.post('/message', (req, res) => {
  if (req.query.error === 'true') {
    response.error(
      req, res, 400,
      'Unexpected error', 'It\'s just a simulated error'
    )
  } else {
    response.success(req, res, 201, 'Message created successfully')
  }
})

// serve a static file
app.use('/app', express.static('public'))

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
