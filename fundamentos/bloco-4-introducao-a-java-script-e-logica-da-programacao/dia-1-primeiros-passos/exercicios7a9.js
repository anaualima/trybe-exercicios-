//exercicio 7 nota dada em porcentagem que retorne os conceitos de A a F.

let nota = 101;

if (nota == 0 || nota > 100){
    console.log ("erro");
}else if(nota >=90){
    console.log("A");
} else if (nota >=80){
    console.log("B");
} else if (nota >=70){
    console.log("C");
} else if (nota >=60){
    console.log("D");
} else if (nota >=50){
    console.log("E");
} else {
    console.log("F");
}

//exercicio 8 ver se o valor é par

let primeiro = 3;
let segundo = 7;
let terceiro = 3;

if (primeiro % 2 ==0 || segundo % 2 == 0 || terceiro % 2 == 0){
    console.log ("true");
} else {
    console.log("false");
}

//exercicio 9 ver se o valor é impar

let primeiroB = 3;
let segundoB = 7;
let terceiroB = 3;

if (primeiroB % 1 ==0 || segundoB % 1 == 0 || terceiroB % 1 == 0){
    console.log ("true");
} else {
    console.log("false");
}
