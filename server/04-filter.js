const words1 = ["spray", "limit", "elite", "exuberant", "Soledad"];

const newArray= [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6 ) {
        newArray.push(item)
    }
}

const res1 = words.filter(item => item.length >= 6 )

console.log(`Original ${words}`);
console.log(`con for ${newArray}`);
console.log(`con filter ${res1}`);

const order = [
    {
        customerName: "david", 
        total: 60, 
        delivered: true
    },
    {
        customerName: "Jazmin", 
        total: 60, delivered: true
    },
    {
        customerName: "JC", 
        total: 60, 
        delivered: true
    }
];


const search = (query) =>{
    return order.filter(item => {
        return item.customerName.includes(query);
    })
}
console.log(search("dav"));

function solution(array) {
    return array.filter(item => item.length >= 4)
}
const words = ["amor", "sol", "piedra", "dia"];

console.log(solution(words))

//Salida

//[ 'amor', 'piedra