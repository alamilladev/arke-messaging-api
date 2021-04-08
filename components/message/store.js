const db = require('mongoose')
const { config } = require('../../config/index')
const MessageModel = require('./model')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const HOST = encodeURIComponent(config.dbHost)
const DB_NAME = encodeURIComponent(config.dbName)

const DB_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}?retryWrites=true&w=majority`

db.Promise = global.Promise
db.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('[MongoDB] Successful connection'))
  .catch((error) => console.error(`[MongoDB] ${error}`))

const addMessage = (message) => {
  const newMessage = new MessageModel(message)
  newMessage.save()
}

const deleteMessage = async (id) => {
  return await MessageModel.deleteOne({ _id: id })
}

const listMessages = async (filterUser) => {
  let filter = {}

  if (filterUser) {
    filter = { user: filterUser }
  }
  const messages = await MessageModel.find(filter)
  return messages
}

const updateMessage = async (id, message) => {
  const foundMessage = await MessageModel.findById(id)
  foundMessage.message = message

  const updatedMessage = await foundMessage.save()
  return updatedMessage
}

module.exports = {
  add: addMessage,
  delete: deleteMessage,
  list: listMessages,
  update: updateMessage
}
