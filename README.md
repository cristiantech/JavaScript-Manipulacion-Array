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


#### Filter
    filter() lo que hace es filtrar el array original en base a una condición, los que la cumplan estaran en el nuevo array creado.

    Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener:
+ cero coincidencias
+ todas coincidencias
+ algunas coincidencias
  
Pero nunca más coincidencias que el tamaño del array original.
```javascript
const words = ["spray", "limit", "elite", "exuberant"];

// con for
const newArray = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length >= 6) {
    newArray.push(element);
  }
}

// VS

// con filter
const rta = words.filter((element) => element.length >= 6);

// en ambos casos, el resultado:
> [ 'exuberant' ]
```
#### Reduce
  El metodo reduce un aaray a un solo elemento
#### Some
  Devuelve un valor verdadero o falso

#### Every
  Devuelve true o false de un grupo de datos

#### Find
  Devuelve el primer valor encontrado

#### findIndex
  Devuelve la posición del item que se enecuntre bscando

#### includes
  El método includes() determina si una array incluye un determinado elemento, devuelve true o false según corresponda.

#### JOIN
  para unir los arrays con algun string

#### splice
  Permite generar un array por algun espacio o carcter especial

#### flat y FlatMap
  Permite arreglar un arary dentro de un array

#### Sort


