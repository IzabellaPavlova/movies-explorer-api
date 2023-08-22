const { NODE_ENV } = process.env;
const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { JWT_SECRET } = require('../utils/config');

module.exports = (req, res, next) => {
  let token = '';
  if (req.cookies.jwt !== undefined) {
    token = req.cookies.jwt;
  } else {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith('Bearer ')) {
      return next(new UnauthorizedError());
    }
    token = authorization.replace('Bearer ', '');
  }

  let payload;
  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
    );
  } catch (err) {
    return next(new UnauthorizedError());
  }
  req.user = payload;

  return next();
};
