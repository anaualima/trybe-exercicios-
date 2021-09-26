// numero fatorial

const fatorial = (number) => {
    let resultado = 1;
    for (let i = 2; i <= number; i+=1){
        resultado *= i
    }
    return resultado
}

console.log(fatorial(5));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

//const frase ="Antônio foi no banheiro e não sabemos o que aconteceu";


const logestWord = (frase) => {
    let palavrasSeparadas = frase.split(' ');
    let maiorPalavra = 0;
    let resultado ='';
    for(const palavra of palavrasSeparadas){
        if(palavra.lentgh > maiorPalavra){
            maiorPalavra = palavra.lentgh;
            resultado = palavra;
        }
    }
    return resultado
}

console.log(logestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));