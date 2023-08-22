// sucsess codes
const CREATED = 201;
const OK = 200;

//  errors codes and default messages
const BAD_REQUEST = 400;
const BAD_REQUEST_MESSAGE = 'Переданы некорректные данные';

const NOT_FOUND = 404;
const NOT_FOUND_MESSGAE = 'Объкт с заданными параметрами не существует';

const INTERNAL_SERVER_ERROR = 500;
const INTERNAL_SERVER_ERROR_MESSAGE = 'Что-то пошло не так :(';

const UNAUTHORIZED = 401;
const UNAUTHORIZED_MESSAGE = 'Для получения доступа к ресурсу необходимо авторизоваться';
const UNAUTHORIZED_BAD_CREDENTIALS_MESSAGE = 'Неправильная почта или пароль';

const FORBIDDEN = 403;
const FORBIDDEN_MESSAGE = 'У вас нет прав на это действие';

const CONFLICT = 409;
const CONFLICT_MESSAGE = 'Объект с данными параметрами уже существует';

module.exports = {
  CREATED,
  OK,
  BAD_REQUEST,
  BAD_REQUEST_MESSAGE,
  NOT_FOUND,
  NOT_FOUND_MESSGAE,
  INTERNAL_SERVER_ERROR,
  INTERNAL_SERVER_ERROR_MESSAGE,
  UNAUTHORIZED,
  UNAUTHORIZED_MESSAGE,
  UNAUTHORIZED_BAD_CREDENTIALS_MESSAGE,
  FORBIDDEN,
  FORBIDDEN_MESSAGE,
  CONFLICT,
  CONFLICT_MESSAGE,
};
