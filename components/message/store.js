const MessageModel = require('./model')

const addMessage = (message) => {
  const newMessage = new MessageModel(message)
  return newMessage.save()
}

const deleteMessage = (id) => {
  return MessageModel.deleteOne({ _id: id })
}

const listMessages = (filterUser) => {
  return new Promise((resolve, reject) => {
    let filter = {}

    if (filterUser) {
      filter = { user: filterUser }
    }

    MessageModel.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error)
        } else {
          resolve(populated)
        }
      })
  })
}

const updateMessage = async (id, message) => {
  const foundMessage = await MessageModel.findById(id)
  foundMessage.message = message

  return foundMessage.save()
}

module.exports = {
  add: addMessage,
  delete: deleteMessage,
  list: listMessages,
  update: updateMessage
}
