// numero fatorial

function fatorial(number) {
    let resultado = 1;
    for (let i = 2; i <= number; i+=1){
        resultado *= i
    }
    return resultado
}

console.log(fatorial(5));