const number = [
    [1,2,3],//0
    [5,6,7,[10,11,15]],
    [8,9,10]
]
// const newArray = []
// for (let i = 0; i < number.length; i++) {
//     const array = number[i];
//     for (let j = 0; j < array.length; j++) {
//         const element = number[i][j];
//         newArray.push(element)
//         for (let k = 0; k < element.length; k++) {
//             const rest = number[j][k];
//             newArray.push(rest)
//         }
       
//     }
// }
// console.log(newArray);

const flatten = (arr) => 
arr.reduce((acc, el) => 
acc.concat(el), []);

console.log(flatten(number));

const withFlat = number.flat(3)
console.log(withFlat);

const flater = number.reduce((acc,el) => acc.concat(el), [])
console.log(flater);

const number1 = [1,2,3,4,56,7]
const res = number1.
reduce((acc,el)=> acc.concat(el), [] )
console.log(res);

const numbe = [1,2,3,4,5,6,7,8,9]
const res1 = numbe.map(num => {
    
    
})
console.log(res1);
// for (let i = 0; i <= numbe.length; i++) {
//     let res = numbe[i];
//     console.log("Tabla del "+ res);
//     for (let j = 0; j <= numbe.length; j++) {
//        console.log( [i+1] +"*"+ [j] + "=" + [i+1] * [j]);
//     }
// } 

