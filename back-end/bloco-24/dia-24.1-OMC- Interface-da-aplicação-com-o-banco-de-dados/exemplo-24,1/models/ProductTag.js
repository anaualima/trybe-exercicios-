'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  const ProductTag = sequelize.define(
  'ProductTag',
  {},
  { timestamps: false }
  );
  
  ProductTag.associate = (models) => {
      models.Product.belongsToMany(
          models.Tag,
          {
              as: 'tags',
              through: ProductTag,
              foreingKey: 'productId',
              otherKey: 'tagId'
          }
      )

      models.Tag.belongsToMany(
          models.Product,
          {
              as: 'products',
              through: ProductTag,
              foreingKey: 'tagId',
              otherKey: 'productId'
          }
      )
  };
  return ProductTag;
};