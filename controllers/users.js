const { NODE_ENV } = process.env;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');
const Users = require('../models/user');
const BadRequestError = require('../errors/BadRequestError');
const ConflictError = require('../errors/ConflictError');
const NotFoundError = require('../errors/NotFoundError');
const {
  CREATED,
  OK,
} = require('../utils/status_codes');

const login = (req, res, next) => {
  const { email, password } = req.body;
  return Users.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 * 24 * 7, sameSite: true });
      res.status(OK).send({ token });
    })
    .catch(next);
};

const getCurrentUser = (req, res, next) => {
  const userId = req.user._id;
  Users.findById(userId)
    .orFail(new NotFoundError(`Пользователь с указанным _id = ${userId} не найден`))
    .then((user) => res.status(OK).send(user))
    .catch((err) => next(err));
};

const createUser = (req, res, next) => {
  const {
    email, password, name,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => Users.create({
      email, password: hash, name,
    }))
    .then((user) => res.status(CREATED).send({
      name: user.name,
      email: user.email,
    }))
    .catch((err) => {
      if (err.code === 11000) {
        return next(new ConflictError(`Пользователь с email ${email} уже зарегистрирован`));
      }
      if (err instanceof mongoose.Error.ValidationError) {
        return next(new BadRequestError());
      }
      return next(err);
    });
};

const updateUser = (req, res, next) => {
  const { email, name } = req.body;
  Users.findByIdAndUpdate(
    req.user._id,
    { email, name },
    { new: true, runValidators: true },
  )
    .orFail()
    .then((user) => res.status(OK).send(user))
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        return next(new BadRequestError('Профиль не обновлен. Данные не прошли валидацию.'));
      }
      if (err instanceof mongoose.Error.DocumentNotFoundError) {
        return next(new NotFoundError(`Пользователь с указанным _id = ${req.user._id} не найден.`));
      }
      if (err.code === 11000) {
        return next(new ConflictError(`Пользователь с email ${email} уже зарегистрирован`));
      }
      return next(err);
    });
};

module.exports = {
  login,
  getCurrentUser,
  createUser,
  updateUser,
};
