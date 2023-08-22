const { PORT = 3030 } = process.env;
const { MONGO_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;
const { JWT_SECRET = 'jwtsecret' } = process.env;

module.exports = {
  PORT,
  MONGO_URL,
  JWT_SECRET,
};
