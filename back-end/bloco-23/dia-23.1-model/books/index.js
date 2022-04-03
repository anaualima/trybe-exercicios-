const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const Books = require('./models/Books');

app.get('/books', async (req, res) => {
 const books = await Books.getAllBooks;
 return res.status(200).json(books);
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});