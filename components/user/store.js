const UserModel = require('./model')

const addUser = (user) => {
  const newUser = new UserModel(user)
  return newUser.save()
}

const listUsers = () => {
  return UserModel.find()
}

module.exports = {
  add: addUser,
  list: listUsers
}
