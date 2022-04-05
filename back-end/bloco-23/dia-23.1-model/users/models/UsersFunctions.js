const res = require('express/lib/response');
const connection = require('./connection');

const serialize = (UserData) => {
  return {
    id: UserData.id,
    firstName: UserData.first_name,
    lastName: UserData.last_name,
    email: UserData.email,
  }
}

const createUser = async (firstName, lastName, email, password) => {
  console.log(firstName, lastName, email, password);
  const [result] = await connection.execute(
    'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password],
  )
  return { id: result.insertId, firstName, lastName, email };
};


const getUser = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM users_crud.users'
  )
  return result.map(serialize);
};

const findUserById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM users_crud.users WHERE id = ?', [id]
  )
  return result;
};

const editUser = async (id, first_name, last_name, email) => {
  await connection.execute(
    `UPDATE
      users_crud.users
    SET 
      first_name = ?,
      last_name = ?,
      email = ?,
      password = ?
    WHERE
      id = ?`,
    [first_name, last_name, email, password, id],
  )
  return { id, first_name, last_name, email, password };
};

const deleteById = async (id) => {
  const result = await connection.execute(
    'DELETE FROM users_crud.users WHERE id = ?',
    [id],
  )
  return result;
}

module.exports = { 
  createUser,
  getUser,
  findUserById,
  editUser,
  deleteById
}