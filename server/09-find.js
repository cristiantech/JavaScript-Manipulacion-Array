const number = [1,3,5,3,4,8,0,23]
let rta = undefined
for (let index = 0; index < number.length; index++) {
    const element = number[index];
    if(element === 3){
        rta = element
    }
}

const rta1 = number.find(sc => sc === 3)

console.log(`rta ${rta}`);
console.log(`rta ${rta1}`);




const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];
const rat3 = products.find(id => id.id === '🌭')
console.log(rat3);


