const rateLimit = require('express-rate-limit');

const ddos = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300, // 300 request from the same IP within 15 mins
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = ddos;
