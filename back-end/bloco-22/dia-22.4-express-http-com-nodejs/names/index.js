const express = require('express');

const hello = require('./Controller/hello');
const names = require('./Controller/names');
const error = require('./Middleware/error');
const auth = require('./Middleware/auth');
const logger = require('./Middleware/logger');

const PORT = 3000;
const app = express();

app.use(express.json())//parse do body
app.use(logger)//logar 

app.get('/hello', hello);//insegura
app.use('/names', auth, names)//segura com router

app.use(error);//erros

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));