const connection = require('./connection');

const getAllBooks = async () => {
  const result = await connection.execute('SELECT title FROM model_example.books');
  return result;
};

module.exports = {
    getAllBooks,
}