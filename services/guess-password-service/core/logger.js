const bole = require('bole');
const appConfig = require('../core/appConfig');

const log = bole('server');

if (appConfig.service.environment === 'development') bole.output({ level: 'debug', stream: process.stdout });

module.exports.log = log;
