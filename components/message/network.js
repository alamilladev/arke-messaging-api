const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

// List all messages or by user filter
router.get('/', (req, res) => {
  const filterUser = req.query.user || null

  controller.listMessages(filterUser)
    .then((messageList) => {
      response.success(req, res, 200, messageList)
    })
    .catch((error) => {
      response.error(req, res, 500, 'Unexpected error', error)
    })
})

// Create new message
router.post('/', (req, res) => {
  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, 201, fullMessage)
    })
    .catch((error) => {
      response.error(req, res, 400, 'Missing or invalid data', error)
    })
})

// Update a message
router.patch('/:id', (req, res) => {
  controller.updateMessage(req.params.id, req.body.message)
    .then((updatedMessage) => {
      response.success(req, res, 200, updatedMessage)
    })
    .catch((error) => {
      response.error(req, res, 500, 'Missing or invalid data', error)
    })
})

module.exports = router
