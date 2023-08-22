const { NOT_FOUND, NOT_FOUND_MESSGAE } = require('../utils/status_codes');

class NotFoundError extends Error {
  constructor(message = NOT_FOUND_MESSGAE) {
    super(message);
    this.statusCode = NOT_FOUND;
  }
}

module.exports = NotFoundError;
