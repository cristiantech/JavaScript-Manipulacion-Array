const letter = ["a","b","c","d","e"];

for (let index = 0; index < letter.length; index++) {
    const element = letter[index];
    console.log(`for ${element}`);
}

letter.forEach(letra => console.log(`for-each ${letra}`))