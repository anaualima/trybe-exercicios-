const numbers = [1, 2, 3, 4, 5, 8]

const sum = (...numbers) => numbers.reduce((acc, numbers) => acc+ numbers)

console.log(sum(...numbers));