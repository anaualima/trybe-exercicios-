'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define('Product', {
    name:DataTypes.STRING,
    description:DataTypes.STRING,
    price:DataTypes.DECIMAL,
  });

  return Product;
};