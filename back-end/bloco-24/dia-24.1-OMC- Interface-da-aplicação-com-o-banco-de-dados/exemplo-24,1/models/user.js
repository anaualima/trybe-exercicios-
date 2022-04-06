'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});

  User.associete = (models) => {
    User.hasMany(models.Product, { as: 'products', foreingKey: 'userId'})
  }

  return User;
};