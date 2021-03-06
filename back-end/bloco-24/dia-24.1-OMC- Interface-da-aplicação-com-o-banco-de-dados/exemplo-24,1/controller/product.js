const express = require('express');
const { Product, User } = require('../models');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { name, description, userId } = req.body;

    const create = await Product.create({ name, description, userId });

    return res.status(201).send(create);
  } catch (e) {
    console.log(e.message);
    return res.status(500).end();
  }
});

router.get('/', async (_req, res, _next) => {
  try {
    const products = await Product.findAll({ include:[{ model: User, as: 'user' }]});
    console.log('CHEGUEI');
    return res.status(200).send(products);
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id, {
      include: { model: User, as: 'user', attributes:{
        exclude: ['password']
      }}
    });

    if (!product) {
      return res.status(404).end();
    }
    return res.status(200).send(product);
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).end();
    }

    const { name, description, price, userId } = req.body;
    await Product.update(
      { name, description }, 
      { where: {
        id: id,
      }
    });
    return res.status(200).send({...product.dataValues, name, description, price, userId });
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.destroy({where: {id}});

    if (!product) {
      return res.status().end();
    }
    return res.status(204).end();
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
});

module.exports = router;