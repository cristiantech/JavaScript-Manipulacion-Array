const products = [
    {title:"Hog-dog", price: 2.50, id: 1},
    {title:"Hamburger", price: 2.50, id: 2},
    {title:"Pizza", price: 2.50, id: 3},
];
const myProoducts = []
console.log(`Products`,  products);
console.log(`my products`,myProoducts);
console.log(`--`.repeat(10));
const productIndex = products.findIndex(id => id.id === 1);
if(productIndex !== -1){
    myProoducts.push(products[productIndex]);
    products.splice(productIndex,1)
}
console.log(`Products`,  products);
console.log(`my products`,myProoducts);
console.log(`--`.repeat(10));

const productsV2 = [
    {title:"Hog-dog", price: 2.50, id: 1},
    {title:"Hamburger", price: 2.50, id: 2},
    {title:"Pizza", price: 2.50, id: 3},
];

const update = {
    id: 1,
    changes: {
        price : 300,
        description: "a product delicius"
    }
}

const productIndexV2 = productsV2.findIndex(item=> item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2] ,
    ... update.changes
}

console.log(productsV2);