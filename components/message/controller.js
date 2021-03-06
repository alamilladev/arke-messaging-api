const store = require('./store')
const { socket } = require('../../socket')
const { config } = require('../../config/global')

const addMessage = (chat, user, message, files) => {
  return new Promise((resolve, reject) => {
    if (chat && user && (message || files)) {
      const filesUrls = []

      if (files) {
        files.forEach((file) => {
          filesUrls.push(`${config.host}:${config.port}/app/files/${file.filename}`)
        })
      }

      const fullMessage = {
        chat: chat,
        user: user,
        message: message,
        files: filesUrls,
        date: new Date()
      }

      store.add(fullMessage)
      socket.io.emit('message', fullMessage)

      resolve(fullMessage)
    } else {
      console.error('[messageController] There is no user or message')
      reject(new Error('Data is missing or invalid'))
    }
  })
}

const listMessages = (chatFilter) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(chatFilter))
  })
}

const updateMessage = (id, message) => {
  return new Promise((resolve, reject) => {
    if (id && message) {
      resolve(store.update(id, message))
    } else {
      console.error('[messageController] There is no id or message')
      reject(new Error('Data is missing or invalid'))
    }
  })
}

const deleteMessage = (id) => {
  return new Promise((resolve, reject) => {
    if (id) {
      resolve(store.delete(id))
    } else {
      console.error('[messageController] There is no id')
      reject(new Error('Data is missing or invalid'))
    }
  })
}

module.exports = {
  addMessage,
  listMessages,
  updateMessage,
  deleteMessage
}
