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
console.log(order);
const res = order.map(item => item.customerName); 
console.log(`el array nuevo es ${res}`);

// const res1 = order.map(item => {
//     item.tax = .19;
//     return item
// }); 
// console.log(res1);
// console.log(order);

const res2 = order.map(item => {
    return{
        ...item,
        tax: .19
    }
}); 
console.log(res2);
console.log(order);