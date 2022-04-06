'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    type: DataTypes.STRING,
  }, {})
  return Tag;
};