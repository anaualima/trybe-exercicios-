//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo,"negative" se for negativo e "zero" caso contrário.

let number = 5;

if (number > 0){
    console.log ("positive");
} else if ( number < 0){
    console.log ("negative")
} else {
    console.log("zero")
}

//exercicio 5 angulos de um triangulo

let angA = 5;
let angB = 45;
let angC =  90;

if (angA < 0 || angB < 0 || angC < 0){
    console.log("erro");
} else if (angA+angB+angC == 180){
  console.log("true");
} else {
  console.log("false");
}

//exercicio 6 

let peca = "oi";

switch (peca){
    case "rei":
        console.log("Todas as direções, mas apenas uma casa");
        break;
    case "rainha":
        console.log("Todas as colunas e fileiras, e diagonal de outra cor");
        break;
    case "bispo":
        console.log("diagonal");
        break;
    case "torre":
        console.log("direção reta de colunas e fileiras");
        break;
    case "cavalo":
        console.log("movimento em L");
        break;
    case "peao":
        console.log("para frente uma casa por vez");
        break;
    default:
            console.log("não se aplica");

}