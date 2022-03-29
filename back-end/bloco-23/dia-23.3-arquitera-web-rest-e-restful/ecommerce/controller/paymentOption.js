const { StatusCodes } = require('http-status-codes');
const paymentOptionService = require('../service/paymentOption');

const create = async (req, res, next) => {
  try {
    const {
         user_ide,
         credit_card,
         secutiry_code,
         expiration_date 
        } = req.body;

    const create = await paymentOptionService.create({
        user_ide, 
        credit_card, 
        secutiry_code, 
        expiration_date
    });

  return res.status(StatusCodes.CREATED).json(create);
  } catch (e) {
     next(e);
  }
};

module.exports = {
  create,
}