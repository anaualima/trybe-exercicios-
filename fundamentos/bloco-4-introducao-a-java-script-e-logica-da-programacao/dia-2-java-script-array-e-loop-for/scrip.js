//questao 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
};

let soma =0;

//questao 2

for (let i= 0; i <numbers.length; i++){
   soma  = (soma+numbers[i]);
}
console.log (soma);

//questao 3

let mediAritimetica = (soma/numbers.length);

console.log(mediAritimetica)

//questao 4

if (mediAritimetica > 20){
    console.log("valor maior que 20");
} else {
   console.log("valor menor ou igual a 20") 
}

//questao 5

let maior = numbers[0]

for (let i=1; i< numbers.length; i++){
    if ( numbers[i] > maior){
        maior =numbers[i]
    }
}

console.log (maior)

//questao 6

let qtdImpares = 0;

for (let i=0; i< numbers.length; i++){
    if( numbers[i]% 2 !== 0){
        qtdImpares += 1
    }
}
   if (qtdImpares == 0){
       console.log("nenhum valor ímpar encontrado")
   }

console.log(qtdImpares)

//questao 7

let menor = numbers[0];

for (let i= 1; i< numbers.length; i++){
  if (numbers[i] < menor){
      menor = numbers[i]
  }
}

console.log (menor)

//questao 8

let questao8 = [];

for (let i = 0; i <= 25; i ++){
    questao8.push(i)
}

console.log (questao8)

//questao 9

for (let i =0; i < questao8.length; i++){
    console.log(questao8[i]/2)
}

//for of

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names){
    console.log(name)
}

//Bonus 


