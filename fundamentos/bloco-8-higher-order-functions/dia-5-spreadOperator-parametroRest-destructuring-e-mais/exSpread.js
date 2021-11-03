// Faça uma lista com as suas frutas favoritas
const specialFruit = ['melancia', 'manga', 'uva roxa'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['suco de maracujá', 'granola', 'mel'];

const fruitSalad = (fruit, additional) => {
   return [...specialFruit, ...additionalItens]
};

console.log(fruitSalad(specialFruit, additionalItens));