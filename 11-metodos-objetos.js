// Metodos para los objetos
// Con esta línea de código garantizo buenas prácticas
"use strict";

const product = {
    productName : "Sensor de humedad",
    price : 300,
    available : true
}

const speedMax = 80;
// speedMax = 70;
console.log(speedMax);

// Aunque el objeto product este declarado como constante permite agregar propiedades.
product.quantity = 10;
console.log(product);

// Con el método o función freeze bloqueamos el objeto para que no se puedan agregar mas propiedades o eliminarlas o modificarlas (editarlas).
// Object.freeze(product);

// Si usamos el método seal no podemos agregar ni eliminar pero si sepuede editar o modificar una propiedad.
Object.seal(product);

// Vamos a agregar una nueva propiedad color
// product.color = "red";

// Forma de saber si un objeto está bloqueado
// console.log("El objeto está bloqueado?: " + Object.isFrozen(product));


// let response;
// if (Object.isFrozen(product)) {
//     response = "Si";
// }else{
//     response = "No"
// }

// console.log("¿El objeto está bloqueado?: " + response);


// Cada vez que se usa delete, el motor de JavaScript debe reconfigurar internamente la estructura oculta del objeto (hidden classes en V8), lo cual degrada el rendimiento. En aplicaciones de alto desempeño, se recomienda asignar null o undefined en lugar de eliminar propiedades para evitar esa penalización.
// Eliminar una propiedad de un objeto
// delete product.price;
// console.log(product);

// Modificar o editar las propiedades de un objeto
product.productName = "Sensor de PH";
console.log(product);

// Saber si un objeto está sellado 
console.log("El objeto está sellado?: " + Object.isSealed(product));