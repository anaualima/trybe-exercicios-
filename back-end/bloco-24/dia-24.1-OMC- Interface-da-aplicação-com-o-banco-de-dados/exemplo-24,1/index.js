const express = require('express');
const productRouter = require('./controller/product');
const userRouter = require('./controller/user');
const tagRouter = require('./models/tag');

const app = express();

app.use(express.json());

app.use('/product', productRouter);
app.use('/user', userRouter);
app.use('/tag', tagRouter);

app.listen(3000, () => {
  console.log('Online 3000');
});