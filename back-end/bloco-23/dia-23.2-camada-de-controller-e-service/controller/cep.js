const rescue = require('express-rescue');
const Cep = require('../service/cep');

const findAddress = rescue(async (req, res) => {
  const { cep } = req.params;

  const address = await Cep.findAddress(cep);

  if (address.error) {
    return next(address.error);
  }

  res.status(200).json(address);
});

const createAddress = rescue( async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const addressOk = await Cep.createAddress({ cep, logradouro, bairro, localidade, uf });
  if (newAddress.error) {
    return next(newAddress.error);
  }

  return res.status(200).json(newAddress);
});

module.exports = { 
    findAddress,
    createAddress 
};