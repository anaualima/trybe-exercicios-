const PaymentOption = require('../model/paymentOption');

const create = async (paymentOption) => {
 return PaymentOption.create(paymentOption);
};

module.exports = {
    create,
}