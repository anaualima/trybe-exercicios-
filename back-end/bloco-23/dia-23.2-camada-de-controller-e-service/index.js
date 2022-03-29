const express = require('express');


const PORT = 3000;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.json());

const cep = require('./router/cep');
const error = require('./middlewares/error');

app.use('/cep', cep);
app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong!' });
});

app.use(error);
  
app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});