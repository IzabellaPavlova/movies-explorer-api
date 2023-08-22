const { UNAUTHORIZED, UNAUTHORIZED_MESSAGE } = require('../utils/status_codes');

class UnauthorizedError extends Error {
  constructor(message = UNAUTHORIZED_MESSAGE) {
    super(message);
    this.statusCode = UNAUTHORIZED;
  }
}

module.exports = UnauthorizedError;
