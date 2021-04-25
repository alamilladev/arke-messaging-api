const ChatModel = require('./model')

const addChat = (chat) => {
  const newChat = new ChatModel(chat)
  return newChat.save()
}

const listUserChats = (userId) => {
  return new Promise((resolve, reject) => {
    const filter = { users: userId }

    ChatModel.find(filter)
      .populate('users')
      .exec((error, populated) => {
        if (error) {
          reject(error)
        } else {
          resolve(populated)
        }
      })
  })
}

module.exports = {
  add: addChat,
  list: listUserChats
}
