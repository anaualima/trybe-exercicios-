// loginValidation.js

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
};
  
module.exports = {sum, myRemove, myFizzBuzz, hydrate};

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
};

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
};

function hydrate(numeroBebida) {
  const separaNumeroBebida = numeroBebida.split('');
  let coposDeAgua = 0;
  let singularOuPlural = 'copo';
  for (let i=0; i < separaNumeroBebida.length; i+=1){
    const parseBebidas = parseInt(separaNumeroBebida[i]);
    if(parseBebidas){
      coposDeAgua += parseBebidas
    }
    if (coposDeAgua > 1){
      singularOuPlural = 'copos'
    }
  }
  return `${coposDeAgua} ${singularOuPlural} de água`
}