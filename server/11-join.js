const words = ["she", "he", "tomoorow"];
let rtaFinal = "";
for (let index = 0; index < words.length ; index++) {
    const element = words[index];
    rtaFinal += element + "--"
}
console.log(rtaFinal);

const rta1 = words.join("--")
console.log(rta1);

let title = "Este es el titulo de un articulo"
const rta4 = title.split(" ")
const rta3 = title.split(" ").join("--").toLowerCase()

console.log( rta3);
console.log( rta4);



function solution(title) {
    // Tu código aquí 👈 
    return title.split(" ").join("-").toLowerCase()
}; 
title = "La forma de correr Python";
title1 ="La API para nunca parar de aprender";
title2 = "Curso de arrays";

console.log(solution(title))