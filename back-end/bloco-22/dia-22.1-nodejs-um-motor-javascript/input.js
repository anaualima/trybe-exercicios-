const readline = require('readline-sync');

const askName = () => {
    return readline.question('Qual é o seu nome?\n');
};

const askHeight = () => {
    return readline.questionFloat('Qual é a sua altura?\n');
};

const askWeight = () => {
    return readline.questionFloat('Qual é o seu peso?\n');
};

module.exports = {
    askName,
    askHeight,
    askWeight,
}
