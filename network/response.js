exports.success = (req, res, statusCode, message) => {
  res.status(statusCode || 200).send({
    error: null,
    body: message
  })
}

exports.error = (req, res, statusCode, message, details) => {
  console.error(`[Response Error] ${details}`)
  res.status(statusCode || 500).send({
    error: message,
    body: null
  })
}
