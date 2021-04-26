const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
  chat: {
    type: Schema.ObjectId,
    ref: 'Chat',
    required: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  message: { type: String },
  files: { type: Array },
  date: { type: Date, required: true }
})

const model = mongoose.model('Message', messageSchema)

module.exports = model
