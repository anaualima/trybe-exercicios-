const express = require("express");
const app = express();
const port = 3000;

const Author = require('./model/Author');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  return res.status(200).send(authors);
});

app.listen(port, () => console.log('online'));