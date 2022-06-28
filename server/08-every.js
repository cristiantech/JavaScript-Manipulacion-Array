const number = [1,7,3,9,39]

let rta = true
for (let index = 0; index < number.length; index++) {
    const element = number[index];
    if(element >= 40) rta = false
}

console.log(`rta ${rta}`);
const rta1 = number.every(num => num <= 40)
console.log(`rta ${rta1}`);


//Ejercicios
// de un grupo de estudiantes evalue si el grupo cumple con
// la edad establecidad por la federacion que es 15


1
const team = [
    {
    name: "cristina",
    age: 12,
    },
    {
    name: "Andrea",
    age: 8,
    },
    {
    name: "Zulema",
    age: 2,
    },
    {
    name: "Santiago",
    age: 15,
    }
]
const isValidaTeam = team.every(te => te.age <= 15)
console.log(`El team es valido: ${isValidaTeam}`);
