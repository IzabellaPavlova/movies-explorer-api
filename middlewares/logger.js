const winston = require('winston');
const expressWinston = require('express-winston');

// requests
const requestsLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: 'request.log' }),
  ],
  format: winston.format.json(),
});

// errors
const errorsLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({ filename: 'error.log' }),
  ],
  format: winston.format.json(),
});
module.exports = {
  requestsLogger,
  errorsLogger,
};
