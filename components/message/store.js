const MessageModel = require('./model')

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
