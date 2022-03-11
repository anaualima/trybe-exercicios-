const input = require('./input');
const imc = require('./imc');

const name = input.askName();

const height = input.askHeight();

const weight = input.askWeight();

const computedImc = imc(height, weight);

if(computedImc < 18.5) {
    console.log(`O imc de ${name} é ${computedImc}, e está abaixo do peso (magreza)`);
} else if(computedImc < 24.9) {
    console.log(`O imc de ${name} é ${computedImc} e está com o peso normal`);
} else if(computedImc < 29.9) {
   console.log(`O imc de ${name} é ${computedImc} e está acima do peso (sobrepeso)`); 
} else if(computedImc < 34.9) {
    console.log(`O imc de ${name} é ${computedImc} e está classificado em obesidade grau I`);
} else if(computedImc < 39.9) {
    console.log(`O imc de ${name} é ${computedImc} e está classificado em obesidade grau II`);
} else {
    console.log(`O imc de ${name} é ${computedImc} e está classificado em obesidade graus III e IV`);
}
