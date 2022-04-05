const express = require('express');
const productRouter = require('./controller/product');

const app = express();

app.use(express.json());

app.use('/product', productRouter);

app.listen(3000, () => {
  console.log('Online 3000');
});