const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

// Create new chat
router.post('/', (req, res) => {
  controller.addChat(req.body.users)
    .then((newChat) => {
      response.success(req, res, 201, newChat)
    })
    .catch((error) => {
      response.error(req, res, 500, 'Internal Server Error', error)
    })
})

// List user chats
router.get('/:userId', (req, res) => {
  controller.listUserChats(req.params.userId)
    .then((userChats) => {
      response.success(req, res, 200, userChats)
    })
    .catch((error) => {
      response.error(req, res, 500, 'Internal Server Error', error)
    })
})

module.exports = router
