const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const Authors = require('./controllers/Authors');

app.get('/authors', Authors.getAll);

app.get('/authors/:id', Authors.findById);

app.post('/authors', Authors.create);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});