// Rest operator o spread operator
// Lo que se busca es NO NO NO modificar el arreglo original.

const months = ['December', 'November', 'March'];
console.table(months);

// Se crea un nuevo arreglo y lo unimos con otro.
const newArray = [...months, 'January'];

// El nuevo arreglo se puede agregar al final o al inicio
const newArray2 = ['January', ...months];

console.table(newArray);
console.table(newArray2);