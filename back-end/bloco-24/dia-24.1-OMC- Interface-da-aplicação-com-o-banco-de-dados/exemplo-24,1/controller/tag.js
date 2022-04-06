const express = require('express');
const { Tag, Product } = require('../models');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { name } = req.body;

    const create = await Tag.create({ name  });

    return res.status(201).send(create);
  } catch (e) {
    console.log(e.message);
    return res.status(500).end();
  }
});

router.get('/', async (req, res, next) => {
  try {
    const tags = await Tag.findAll({
      include: {
        model: Product, 
        as: 'Products'
      }
    });

    return res.status(200).send(tags);
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const tag = await Tag.findByPk(id);
    
    if (!tag) {
      return res.status(404).end();
    }
    
    return res.status(200).send(tag);
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const tag = await User.findByPk(id);

    if (!tag) {
      return res.status(404).end();
    }

    const { name } = req.body;
    await Tag.update(
      { name }, 
      { where: {
        id: id,
      }
    });
    return res.status(200).send({...tag.dataValues, name});
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const tag = await Tag.destroy({where: {id}});

    if (!tag) {
      return res.status().end();
    }
    return res.status(204).end();
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
});

router.post('/:id/products', async (req, res, next) => {
  try {
    const { id } = req.params;
    const tag = await User.findByPk(id);

    if (!tag) {
      return res.status(404).end();
    }

    const productsIds = req.body;
    const products = await Product.findAll({
      where:{
        id: productsIds,
      }
    });

    await tag.addProducts(products);

    return res.status(200).send({ message: `Produtos vinculados a ${tag.name} com sucesso!`});
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
});

module.exports = router;