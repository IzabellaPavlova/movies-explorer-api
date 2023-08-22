const { INTERNAL_SERVER_ERROR, INTERNAL_SERVER_ERROR_MESSAGE } = require('../utils/status_codes');

module.exports = (err, req, res, next) => {
  const { statusCode = INTERNAL_SERVER_ERROR, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? INTERNAL_SERVER_ERROR_MESSAGE : message,
  });
  next();
};
