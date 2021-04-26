const express = require('express')
const multer = require('multer')

const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()
const upload = multer({ dest: 'public/files' })

// List all messages or by user filter
router.get('/', (req, res) => {
  const chatFilter = req.query.chat || null

  controller.listMessages(chatFilter)
    .then((messageList) => {
      response.success(req, res, 200, messageList)
    })
    .catch((error) => {
      response.error(req, res, 500, 'Internal Server Error', error)
    })
})

// Add new message
router.post('/', upload.array('files', 12), (req, res) => {
  controller.addMessage(req.body.chat, req.body.user, req.body.message, req.files)
    .then((fullMessage) => {
      response.success(req, res, 201, fullMessage)
    })
    .catch((error) => {
      response.error(req, res, 500, 'Internal Server Error', error)
    })
})

// Update a message
router.patch('/:id', (req, res) => {
  controller.updateMessage(req.params.id, req.body.message)
    .then((updatedMessage) => {
      response.success(req, res, 200, updatedMessage)
    })
    .catch((error) => {
      response.error(req, res, 500, 'Internal Server Error', error)
    })
})

// Delete a message
router.delete('/:id', (req, res) => {
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, 200, 'Message deleted successfully')
    })
    .catch((error) => {
      response.error(req, res, 500, 'Internal Server Error', error)
    })
})

module.exports = router
