//Parte 1.1
const testingScope = (escopo) =>{
    if (escopo === true) {
      var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
    console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  //Parte1.2

  let numbers = [4, 2, 5, 1, 3];
  numbers.sort((a, b) => a - b);
  console.log(numbers);

  const sortOddAndEvens = (num) => {
    return num.sort((a,b) => a - b);
  }

  console.log(sortOddAndEvens([13, 3, 4, 10, 7, 2])); // será necessário alterar essa linha 😉
  