# JavaScript-Manipulacion-Array
    Manipulación de arreglos con los diferentes métodos.

### Mutable e Inmutable
[Charla en ingles sobre las diferencias](https://www.youtube.com/watch?v=Wo0qiGPSV-s&ab_channel=JSConf)
##### ForEach
    ForEach método útil para recorrer un array y realizar alguna operación sobre cada elemento del mismo
```javascript
const letter = ["a","b","c","d","e"];

for (let index = 0; index < letter.length; index++) {
    const element = letter[index];
    console.log(`for ${element}`);
}

letter.forEach(letra => console.log(`for-each ${letra}`))
```
