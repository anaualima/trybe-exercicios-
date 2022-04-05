const express = require('express');
const paymentOptionController = require('./paymentOption');

const paymentOptionRouter = express.Router();

paymentOptionRouter.post('/', paymentOptionController.create);

module.exports = {
  paymentOptionRouter,
}