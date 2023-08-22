const { BAD_REQUEST, BAD_REQUEST_MESSAGE } = require('../utils/status_codes');

class BadRequestError extends Error {
  constructor(message = BAD_REQUEST_MESSAGE) {
    super(message);
    this.statusCode = BAD_REQUEST;
  }
}

module.exports = BadRequestError;
