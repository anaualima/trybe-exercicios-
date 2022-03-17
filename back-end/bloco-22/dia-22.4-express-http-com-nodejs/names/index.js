const express = require('express');
const fs = require('fs/promises');
const rescue = require('express-rescue');

const app = express();
const PORT = 3000;
const FILENAME = 'name.txt';

app.get('/hello', (req, res, next) => {
  return res.status(200).send({ message: 'hello world' });
});

app.get('/names', async (req, res, next) => {
  try{
    const data = await fs.readFile(FILENAME);
    const names = data.toString().split('\n');

    return res.status(200).send({ names: names })
  } catch(e) {
    next(e)
  }
});

app.use((err, req, res, next) => {
   return res.status(500).send({ message: 'erro na logica do servidor'})
});

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));