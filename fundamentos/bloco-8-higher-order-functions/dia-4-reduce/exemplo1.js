const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getSum = (arrNum, number) => (number % 2 === 0)?arrNum + number: arrNum;
const sumNumbers = numbers.reduce(getSum, 0)
console.log(sumNumbers);