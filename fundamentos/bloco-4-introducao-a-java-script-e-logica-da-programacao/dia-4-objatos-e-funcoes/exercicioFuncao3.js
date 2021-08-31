//decrobre menor valor de um array

function descobreMenorIndice (array = []){
let iMenor = numeros[0];

for (let i =1; i < numeros.length; i+=1){

    if (numeros[i] < iMenor){
        iMenor = i;
    }

}
console.log(iMenor);
}

descobreMenorIndice(numeros = [-1, 2, 4, 6, 7, 10, 0, -3])