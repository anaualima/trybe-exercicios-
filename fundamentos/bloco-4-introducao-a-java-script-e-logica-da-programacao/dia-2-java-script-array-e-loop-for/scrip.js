let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
};

let soma =0;

for (let i= 0; i <numbers.length; i++){
   soma  = (soma+numbers[i])
}
console.log (soma)

console.log (soma/numbers.length)