const numbers = [1,2,3,4,5];
// let sum = 0;
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     sum +=element; 
// }
// console.log(sum);

let res = numbers.reduce((sum, item) => sum +=item , 0)
console.log(res);