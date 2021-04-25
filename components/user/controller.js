const store = require('./store')

const addUser = (name) => {
  const user = { name }

  return new Promise((resolve, reject) => {
    if (user) {
      resolve(store.add(user))
    } else {
      console.error('[UserController] There is no user name')
      reject(new Error('Data is missing or invalid'))
    }
  })
}

const listUsers = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list())
  })
}

module.exports = {
  addUser,
  listUsers
}
