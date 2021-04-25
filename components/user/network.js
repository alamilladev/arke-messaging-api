const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

// Create new user
router.post('/', (req, res) => {
  controller.addUser(req.body.name)
    .then((newUser) => {
      response.success(req, res, 201, newUser)
    })
    .catch((error) => {
      response.error(req, res, 500, 'Internal Server Error', error)
    })
})

// List all users
router.get('/', (req, res) => {
  controller.listUsers()
    .then((usersList) => {
      response.success(req, res, 200, usersList)
    })
    .catch((error) => {
      response.error(req, res, 500, 'Internal Server Error', error)
    })
})

module.exports = router
