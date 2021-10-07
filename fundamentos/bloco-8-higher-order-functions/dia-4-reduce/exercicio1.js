// Dada uma matriz, transforme em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
const flatten = (arrays) => {
 return arrays.reduce((acc, value) => acc.concat(value))
}
console.log(flatten(arrays));