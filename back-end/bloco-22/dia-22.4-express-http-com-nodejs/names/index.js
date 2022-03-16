const express = require('express');
const fs = require('fs/promises');

const app = express();
const PORT = 3000;
const FILENAME = 'name.txt';

app.get('/hello', (req, res, next) => {
  res.status(200).send({ message: 'hello world' });
});

app.get('/names', async (req, res, next) => {
  try {
    const data = await fs.readFile(FILENAME);
    const names = data.toString().split('\n');

    res.status(200).send({ names: names })

  } catch (e) {

    res.status(500).send({ message: 'erro na leitura do arquivo' })
  }
});

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));