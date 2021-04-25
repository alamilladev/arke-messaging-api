const store = require('./store')

const addChat = (users) => {
  return new Promise((resolve, reject) => {
    if (users && Array.isArray(users)) {
      const chat = { users: users }

      resolve(store.add(chat))
    } else {
      reject(new Error('Data is missing or invalid'))
    }
  })
}

const listUserChats = (userId) => {
  return new Promise((resolve, reject) => {
    if (userId) {
      resolve(store.list(userId))
    } else {
      reject(new Error('Data is missing or invalid'))
    }
  })
}

module.exports = {
  addChat,
  listUserChats
}
