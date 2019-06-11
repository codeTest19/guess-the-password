const route = require('express').Router();
const validatePassword = require('./validatePassword');


route.post('/validate-password', validatePassword);

module.exports = route;
