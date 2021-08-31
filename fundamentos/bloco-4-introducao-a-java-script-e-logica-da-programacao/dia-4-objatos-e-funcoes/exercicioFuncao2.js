//crie um função que receba um array de numeros inteiros e retorne o maior valor

function descobreMaiorIndice (arry = []){

let iMaior = numeros[0];
let indice = 0;

for (let i =1; i < numeros.length; i+=1){

    if (numeros[i] > iMaior){
        iMaior = i;
    } 

}
console.log(iMaior);
}

descobreMaiorIndice (numeros = [2, 3, 6, 7, 10, 1]);