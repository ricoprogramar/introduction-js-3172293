
"use strict"
const numbers = [0, 12, 8, 9, 5, 8, 71, 120, 500];

// Agregar elementos a mi arreglo, pero con este método se requiere conocer la longitud del arreglo
// let numbersLenght = numbers.length
// console.log(numbersLenght);

// numbers [numbersLenght] = 100;

// console.log(numbers);

// Con el método push se agregan elementos al final del arreglo
// numbers.push(700, 800);

// console.log(numbers);

// Método unshift para agregar elementos al inicio de un arreglo
numbers.unshift(-3, -2, -1);

// Método pop para eliminar el último elemento de mi arreglo
// numbers.pop();

// Método shift para eliminar el primer elemento de mi arreglo
// numbers.shift();

// Método splice elimina todos los elementos a apatir del indice asignado.
// numbers.splice(5);
console.table(numbers);


