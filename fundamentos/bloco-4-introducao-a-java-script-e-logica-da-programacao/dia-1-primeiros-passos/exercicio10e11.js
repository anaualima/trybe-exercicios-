//exercicio 10 calcular valor de lucro

let custoDoProduto = 10;
let valorDeVenda =  80;

let imposto = custoDoProduto - 0.20;
let custoTotal = custoDoProduto + imposto;
let lucro = valorDeVenda - custoTotal

let somaAoVenderMil = lucro * 1000

console.log(somaAoVenderMil)

//exercicio 11 descontos do salario bruto INSS e IR

let salarioBruto = 3000;
let INSS = 0;
let IR = 0;
let salarioBase = 0; 
let parcelaDoIR = 0;
let salarioFinal = 0;

if (salarioBruto < 1556.94){
    INSS = 0.08;
}else if (salarioBruto < 2594.92){
    INSS = 0.09;
}else if (salarioBruto < 5189.82){
    INSS = 0.11;
}else {
    INSS = 570.88
}

if (INSS == 570.88){
  salarioBase = salarioBruto - INSS;
} else{
  salarioBase = salarioBruto - (salarioBruto*INSS);
}

// console.log(salarioBase);

if (salarioBase < 1903.98){
    console.log("isento do imposto de renda");
} else if (salarioBase < 2826.65){
    IR = 0.075;
    parcelaDoIR = 142.80;
} else if (salarioBase < 3751.05){
    IR = 0.15;
    parcelaDoIR = 354.80;
} else if (salarioBase < 4664.68){
    IR = 0.225;
    parcelaDoIR = 636.13;
} else {
    IR = 0.275;
    parcelaDoIR = 869.36;
}

salarioFinal = salarioBase - ((salarioBase * IR) - parcelaDoIR);

console.log(salarioFinal);