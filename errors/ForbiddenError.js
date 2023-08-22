const { FORBIDDEN, FORBIDDEN_MESSAGE } = require('../utils/status_codes');

class ForbiddenError extends Error {
  constructor(message = FORBIDDEN_MESSAGE) {
    super(message);
    this.statusCode = FORBIDDEN;
  }
}

module.exports = ForbiddenError;
