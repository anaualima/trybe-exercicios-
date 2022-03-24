const readline = require('readline-sync');
const calcVelocidade = require('./calcVelocidade');

 const distancia = readline.questionInt('Distância percorrida (m): ');
const tempo = readline.questionInt('Tempo (s): ');

const velocidadeMedia = calcVelocidade(distancia,tempo);

console.log(`Velocidade média é: ${velocidadeMedia} m/s`);