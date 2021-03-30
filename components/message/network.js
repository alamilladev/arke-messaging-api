const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

// List messages
router.get('/', (req, res) => {
  controller.getMessages()
    .then((messageList) => {
      response.success(req, res, 200, messageList)
    })
    .catch((error) => {
      response.error(req, res, 500, 'Unexpected error', error)
    })
})

// create new message
router.post('/', (req, res) => {
  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, 201, fullMessage)
    })
    .catch((error) => {
      response.error(req, res, 400, 'Invalid data', error)
    })
})

module.exports = router
