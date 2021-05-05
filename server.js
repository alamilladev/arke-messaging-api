// Required node modules
const express = require('express')
const app = express()
const server = require('http').Server(app)

const bodyParser = require('body-parser')

// Local imports and configs
const { config } = require('./config/global')
const socket = require('./socket')
const dbConnection = require('./config/dbConnection')
const router = require('./network/routes')

dbConnection() // connection to MongoDB
socket.connect(server) // conection to socket.io

// Configure bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
router(app)

app.use('/app', express.static('public'))

server.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`)
})
