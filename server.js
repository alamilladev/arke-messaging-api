// Required node modules
const express = require('express')
const bodyParser = require('body-parser')

// Local imports and configs
const { config } = require('./config/global')
const dbConnection = require('./config/dbConnection')
const router = require('./network/routes')

dbConnection() // connection to MongoDB
const app = express()

// Configure bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
router(app)

app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`)
})
