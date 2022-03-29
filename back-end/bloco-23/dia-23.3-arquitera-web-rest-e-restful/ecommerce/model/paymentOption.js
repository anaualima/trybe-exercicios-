const connection = require('./connection');

const { v4: uuidv4 } = require('uuid');

const create = async (paymentOption) => {
  const id = uuidv4();
  console.log(paymentOption);
  const [result] = connection.execute(
    `INSERT INTO 
    Ecommerce.payment_option(id, user_ide, credit_card, secutiry_code, expiration_date)
    VALUES(?, ?, ?, ?, ?)
    `,
    [id, paymentOption.user_ide, paymentOption.credit_card, paymentOption.secutiry_code, paymentOption.expiration_date]
  )
  return {
    id,
    ...paymentOption,
  }
};

module.exports = {
  create,
}