const store = require('./store')

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (user && message) {
      const fullMessage = {
        user: user,
        message: message,
        date: new Date()
      }

      store.add(fullMessage)
      resolve(fullMessage)
    } else {
      console.error('[messageController] There is no user or message')
      reject(new Error('Data is missing or invalid'))
    }
  })
}

const getMessages = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list())
  })
}

module.exports = {
  addMessage,
  getMessages
}
