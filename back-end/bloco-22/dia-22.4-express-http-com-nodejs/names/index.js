const express = require('express');
const fs = require('fs/promises');
const rescue = require('express-rescue');

const app = express();
const PORT = 3000;
const FILENAME = 'name.txt';

app.get('/hello', (req, res, next) => {
  res.status(200).send({ message: 'hello world' });
});

app.get('/names', rescue(async (req, res, next) => {
    const data = await fs.readFile(FILENAME);
    const names = data.toString().split('\n');

    res.status(200).send({ names: names })
}));

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));