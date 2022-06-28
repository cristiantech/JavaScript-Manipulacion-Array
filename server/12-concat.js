const elemnts = [1,2,3,4,21,23]
const elemnts1 = [1,2,3,4,21,23,323]
const newArray = [...elemnts];

for (let index = 0; index < elemnts.length; index++) {
    const element = elemnts[index];
    newArray.push(element)
}

const rta1 = newArray.concat(elemnts1)

console.log(newArray);
console.log(rta1);