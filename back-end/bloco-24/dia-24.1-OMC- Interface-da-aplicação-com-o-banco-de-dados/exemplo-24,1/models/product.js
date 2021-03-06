// 'use strict';
// const {
//   Model
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define('Product', {
    name:DataTypes.STRING,
    description:DataTypes.STRING,
    price:DataTypes.DECIMAL,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.User, { as: 'user', foreingKey: 'userId'})
  };
  return Product;
};