const { CONFLICT, CONFLICT_MESSAGE } = require('../utils/status_codes');

class ConflictError extends Error {
  constructor(message = CONFLICT_MESSAGE) {
    super(message);
    this.statusCode = CONFLICT;
  }
}

module.exports = ConflictError;
