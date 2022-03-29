const connection = require('./connection');

const regexCep = /\d{5}-\d{3}/;

const formaterCEP = (cep) => {
  if(regexCep.test(cep)) return cep;
  return cep.replace(/\d{5}-\d{3}/, '$1-$2');
};

const serialize = (UserData) => {
  return {
  cep: formaterCEP(UserData.cep),
  logradouro: UserData.logradouro,
  bairro: UserData.bairro,
  localidade: UserData.localidade,
  uf: UserData.uf,
  }
};

const findAddressByCep = async (cepToSearch) => {
  const treatedCep = cepToSearch.replace('-', ''); //remove traços;

  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';

  const result = await connection.execute(query, [treatedCep])
    .then(([results]) => (results.length ? results[0] : null));

  if (!result) return null;

 
  return serialize(result);
};

const createAddress = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query = `INSERT INTO cep_lookup .ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)`
  const [ result ] = await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
  
  return { id: result.insertId, cep, logradouro, bairro, localidade, uf };
}

module.exports = {
  findAddressByCep,
  createAddress,
};