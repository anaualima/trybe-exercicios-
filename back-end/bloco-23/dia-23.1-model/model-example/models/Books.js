const connection = require('./connection');

const serialize = (booksData) => {
   return {
    id: booksData.id,
    title: booksData.title,
    authorId: booksData.author_id,
  }
       
};

const getAllBooks = async () => {
  const [books] = await connection.execute('SELECT * FROM books');
  return books.map(serialize);
};

const getByIdAuthorBooks = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
  const [books] = await connection.execute(query, [authorId])
  return books.map(serialize);
};

const getBooksById = async (id) => {
 const query = 'SELECT * FROM books WHERE id=?'
 const [books] = await connection.execute(query, [id]);
 return books.map(serialize);
};

module.exports = {
    getAllBooks,
    getByIdAuthorBooks,
    getBooksById,
}