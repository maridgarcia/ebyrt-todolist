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
app.use('/login', routes.loginRouter);
app.use('/create-task', auth, routes.taskRouter);
app.use('/tasks', auth, routes.taskRouter);

app.use(domainError);
app.use(errorHandler);

module.exports = app;
