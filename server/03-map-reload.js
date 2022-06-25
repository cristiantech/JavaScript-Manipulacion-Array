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



function solution(array) {
	let res = array.map(item => {
		return {
			...item,
			taxes: Math.trunc( item.price * .19)
		}
	})
	return res;
}; 
const productos = [
	{
		name: "Producto 1",
		price: 1000,
		stop: 10
	},
	{
		name: "Producto 1",
		price: 2011,
		stop: 10
	}
];
console.log(solution(productos));