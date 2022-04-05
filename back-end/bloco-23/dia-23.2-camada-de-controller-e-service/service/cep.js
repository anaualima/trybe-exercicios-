const Cep = require('../model/cep');

const regexCep = /\d{5}-\d{3}/;

const findAddress = async (cep) => {
  const address = await Cel.findAddressByCEP(cep);
  if (!address) {
    return {
      error: {
        code: "notFound", 
        message: "CEP não encontrado"
      }
    }
  }

  if (!regexCep.test(cep)) {
    return {
      error: {
        code: "invalidData",
        message: "CEP inválido" }
    }
  }
  return address;
}

const createAddress = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const adressOK = await Cep.createAddress({ cep, logradouro, bairro, localidade, uf })

  if(!adressOK) {
    return {
      error: {
        code: 'notFound',
        message: 'Cadastro não realizado'
      }
    }
  }
  return adressOK;
}

module.exports = {
 findAddress,
 createAddress
};