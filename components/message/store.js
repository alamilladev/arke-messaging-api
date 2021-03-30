const db = require('mongoose')
const { config } = require('../../config/index')
const Model = require('./model')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const HOST = encodeURIComponent(config.dbHost)
const DB_NAME = encodeURIComponent(config.dbName)

const DB_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}?retryWrites=true&w=majority`

db.Promise = global.Promise
db.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('[MongoDB]: Successful connection'))
  .catch((error) => console.error(`[MongoDB]: ${error}`))

const addMessage = (message) => {
  const newMessage = new Model(message)
  newMessage.save()
}

const getMessages = async () => {
  const messages = await Model.find()
  return messages
}

module.exports = {
  add: addMessage,
  list: getMessages
}
