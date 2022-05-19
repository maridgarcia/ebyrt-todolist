const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const domainError = require('./utils/errors/domainError');
const errorHandler = require('./utils/errors/errorHandler');
const auth = require('./utils/authorization/auth');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/register', routes.userRouter);
app.use('/login', auth, routes.loginRouter);

app.use(domainError);
app.use(errorHandler);

module.exports = app;
