// import required modules
const express = require('express')
const bodyParser = require('body-parser')

const { config } = require('./config/index')
const router = require('./network/routes')

const app = express()

// Configure bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
router(app)

app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`)
})
