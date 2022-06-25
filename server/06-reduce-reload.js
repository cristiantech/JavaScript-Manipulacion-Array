const items = [1,2,3,3];

const res = items.reduce((obj,item) => {
    if(!obj[item]){
        obj[item] = 1;
    }else{
        obj[item] ++;
    }
    return obj;
}, {});
console.log(res);


const data = [
    {
        name: "Cristian",
        level: "low"
    },
    {
        name: "Jazmin",
        level: "mediun"
    },
    {
        name: "Carlos",
        level: "low"
    },
    {
        name: "Cristian",
        level: "mediun"
    },
    {
        name: "Cristian",
        level: "low"
    },
    {
        name: "Cristian",
        level: "higth"
    },
];

const res1 = data
.map((item) => item.level)
.reduce((obj1,lev) =>{
    if(!obj1[lev]){
        obj1[lev] = 1;
    }else{
        obj1[lev] ++;
    }
    return obj1;
},{})

console.log(res1);


const group = [1,2,3,4,5,6,7,8,9,10]
const ver = (item,min,max) => item >= min && item <= max;

const data1 = group
.reduce((obj, item) =>{
    if(ver(item, 1, 5)) obj["1-5"] +=1;
    if(ver(item, 6, 8)) obj["6-8"] +=1;
    if(ver(item, 9, 10)) obj["9-10"] +=1;
    return obj
},{"1-5": 0, "6-8":0, "9-10": 0})
console.log(data1);