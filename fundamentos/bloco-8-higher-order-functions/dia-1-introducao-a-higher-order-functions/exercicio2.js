const raffle = () => {
    return Math.round(Math.random() * 5);    
}

const awarded = (number1, callback) => {
    return (number1 === callback())?`Parabéns você ganhou`:`Tente novamente`
}

console.log(awarded(4, raffle));