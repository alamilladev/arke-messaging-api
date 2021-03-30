const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
  user: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, required: true }
})

const model = mongoose.model('Messages', messageSchema)

module.exports = model
