const db = require('mongoose')
const { config } = require('./global')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const HOST = encodeURIComponent(config.dbHost)
const DB_NAME = encodeURIComponent(config.dbName)

const DB_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}?retryWrites=true&w=majority`

db.Promise = global.Promise

const connection = () => {
  db.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('[MongoDB] Successful connection'))
    .catch((error) => console.error(`[MongoDB] ${error}`))
}

module.exports = connection
