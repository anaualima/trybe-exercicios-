const numbers = [19, 21, 3, 45, 22, 15];

const findDivisibleBy3And5 = (numbers) => {
 return numbers.find((numbers) => numbers % 3 === 0 && numbers % 5 === 0)
}
console.log(findDivisibleBy3And5(numbers));

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((names) => names.length === 5)
}

console.log(findNameWithFiveLetters(names));