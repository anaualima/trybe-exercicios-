const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const ProductModel = require("../models/product");

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

describe('O model de Product', () => {
  const Product = ProductModel(sequelize, dataTypes);
  const product = new Product();

  describe('possui o nome "Product"', () => {
    checkModelName(Product)('Product');
  });

  describe('possui as propriedades "fullName" e "email"', () => {
    ['title', 'author', 'pageQuantity'].forEach(checkPropertyExists(book));
  });
});