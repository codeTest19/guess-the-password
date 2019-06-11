const route = require('express').Router();
const generateNewPassword = require('./generateNewPassword');


route.get('/new-password', generateNewPassword);

module.exports = route;
