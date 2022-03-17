const express = require('express');
const fs = require('fs/promises');
const rescue = require('express-rescue');
const hello = require('./Controller/hello');
const getNames = require('./Controller/getNames');
const error = require('./Middleware/error');
const auth = require('./Middleware/auth');
const logger = require('./Middleware/logger');

const PORT = 3000;
const FILENAME = 'names.txt';

const app = express();

app.use(logger)

app.get('/secure/hello', auth, hello)
app.get('/hello', hello);
app.get('/names', getNames);

app.use(error);

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));