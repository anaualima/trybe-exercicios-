const express = require("express");
const app = express();
const port = 3000;

const Author = require('./model/Author');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  return res.status(200).send(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) {
    return res.status(404).send({ message: 'Not found'});
  }
  return res.status(200).json(author);
});

app.listen(port, () => console.log('online'));