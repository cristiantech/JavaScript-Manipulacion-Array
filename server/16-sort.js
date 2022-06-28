const months = ["Jan", "feb", "March", "May", "Jane"];
const numbers = [1,20,4, 100, 1000];
const words = ["reserve", "premier", "communique", "cafe", "adieu"];
const orders = [
    {custorName: "cristian",total:600, delivered:true},
    {custorName: "Eduardo",total:600, delivered:true},
    {custorName: "Viviana",total:600, delivered:true},
    {custorName: "Soledad",total:600, delivered:true},
    {custorName: "Melanie",total:600, delivered:true},
]



const array = [11,1,13,99,8]; 
console.log( array.sort((a,b) => a - b));

const array1 = ['a', 'bb', 'ccc']; 
const rta = array1.map(item => item.length);
console.log(rta);


const array2 = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta1 = array2.flat();

console.log(rta1);



const array3 = [1,1,1,1,1]; 
const rta3 = array3.reduce((total, item) => total += item, 0)
console.log(rta3);