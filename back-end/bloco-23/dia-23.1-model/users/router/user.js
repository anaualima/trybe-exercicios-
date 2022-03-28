const express = require('express');
const rescue = require('express-rescue');
const validUser = require('../middlewares/validUser');

const User = require('../models/UsersFunctions');

const router = express.Router();

router.post('/', validUser,async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  
  const create = await User.createUser(firstName, lastName, email, password);
  return res.status(201).json(create);
});

router.get('/', async (req, res) => {
 const show = await User.getUser();
 return res.status(200).json(show);
});

router.get('/:id', rescue( async (req, res) => {
  const { id } = req.params;
  const find = await User.findUserById(id);
  if (!find.length) return res.status(404).json({ message: 'Not Found' })

  return res.status(200).json(find)
}));

router.put('/:id', validUser,async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const edit = User.editUser(id, firstName, lastName, email, password);
  res.status(200).json(edit)
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await User.deleteById(id);
  return res.status(200).end();
});

module.exports = router;