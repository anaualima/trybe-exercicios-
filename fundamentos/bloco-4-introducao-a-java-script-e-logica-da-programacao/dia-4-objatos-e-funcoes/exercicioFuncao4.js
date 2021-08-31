//Crie uma função que receba um array de nomes e 
//retorne o nome com a maior quantidade de caracteres.

function descobreMaiorNome (array =[]){
let maiorNome = names[0];

for (let i =1; i < names.length; i +=1){
    
    if (names[i].length > maiorNome.length){
        maiorNome = names[i]
    }

}

console.log(maiorNome)
}

descobreMaiorNome (names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
