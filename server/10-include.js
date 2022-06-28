const pets = ["cat", "dog", "bat"]

let incluedeArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === "dog") {
        incluedeArray = true;
        break
    }
}

const rta1 = pets.includes("dog1");

console.log(incluedeArray);
console.log(rta1);