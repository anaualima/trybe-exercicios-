module.exports = (number) => {

  if (typeof number !== 'number') {
    return 'o parâmetro deve ser um número';
  }
  if (number > 0) {
    return 'positivo';
  } else if (number < 0) {
    return 'negativo';
  } else {
    return 'neutro';
  }

}

