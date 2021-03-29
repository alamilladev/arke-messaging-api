// import required modules
const express = require('express')
const bodyParser = require('body-parser')

const router = require('./network/routes')

const app = express()
const port = process.env.PORT || 3000

// Configure bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
router(app)

// serve a static file
app.use('/app', express.static('public'))

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
