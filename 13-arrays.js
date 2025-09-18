// Arrays en JS

const numbers = [10, 20, 30, 80, 100, 7, 8];

console.log(numbers);

// Otra forma de visualización en tabla
console.table(numbers);

// Crear un arreglo con el constructor
const months = new Array('May', 'January', 'July', 'June');

console.table(months);

const myArray = ['Hello', 42, true, false, null, {myName: "Edwar", myJob: "Teacher"}, [3172293, 3147206, 3036193]];

console.log(myArray);

// Consultar un elemento de un arreglo
console.log(typeof numbers[2]);
console.log(myArray[5]);

// Método para conocer la longitud de un arreglo
console.log("Edwar tu arreglo tiene: " + numbers.length + " elementos" );

// Un iterador con forEach

const numbers2 = [10, 20, 30, 80, 100, 7, 8];
numbers2.forEach(function(number){
    console.log(number);
})

months.forEach(function(month){
    console.log(month);
})

myArray.forEach(function(element){
    console.log(element);
})

