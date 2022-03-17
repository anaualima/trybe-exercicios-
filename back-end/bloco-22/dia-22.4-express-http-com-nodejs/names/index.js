const express = require('express');

const rescue = require('express-rescue');
const hello = require('./Controller/hello');
const names = require('./Controller/names');
const error = require('./Middleware/error');
const auth = require('./Middleware/auth');
const logger = require('./Middleware/logger');

const PORT = 3000;
const app = express();

app.use(express.json())

app.use(logger)

app.get('/secure/hello', auth, hello)
app.get('/hello', hello);
app.get('/names', names.read);
app.post('/names', names.create);

app.use(error);

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));