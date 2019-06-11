const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(require('./core/middlewares/requestInterceptor'));
app.use('/api', require('./api/new-password/route'));
app.use('/api', require('./api/validate-password/route'));
app.use(require('./core/error/not-found'));

module.exports = app;
