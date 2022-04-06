const express = require('express');
const { User } = require('../models');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { name, username, email, password } = req.body;

    const create = await User.create({ name, username, email, password });

    return res.status(201).send(create);
  } catch (e) {
    console.log(e.message);
    return res.status(500).end();
  }
});

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();

    return res.status(200).send(users);
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    
    if (!user) {
      return res.status(404).end();
    }
    if (!req.query.includeProducts) {
        return res.status(200).send(user);
    }

    const products = await user.get();

    return res.status(200).send({ ...user.dataValues, products });
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).end();
    }

    const { name, username, email, password } = req.body;
    await Product.update(
      { name, username, email, password }, 
      { where: {
        id: id,
      }
    });
    return res.status(200).send({...user.dataValues, name, username, email });
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.destroy({where: {id}});

    if (!user) {
      return res.status().end();
    }
    return res.status(204).end();
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
});

module.exports = router;