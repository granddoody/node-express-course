const { NotBeforeError } = require("jsonwebtoken")

class CustomAPIError extends Error {
  constructor(message) {
    super(message)
    console.log(err)
  }
}

module.exports = CustomAPIError
