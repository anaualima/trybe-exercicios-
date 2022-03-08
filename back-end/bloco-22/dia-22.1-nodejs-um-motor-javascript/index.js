const input = require('./input');
const imc = require('./imc');

const name = input.askName();

const height = input.askHeight();

const weight = input.askWeight();

const computedImc = imc(height, weight);

console.log(`O imc de ${name} é ${computedImc.toFixed(2)}`);