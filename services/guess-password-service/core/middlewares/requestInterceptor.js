const { log } = require('../logger');

function requestInterceptor(req, res, next) {
  log.info(req);
  next();
}

module.exports = requestInterceptor;
