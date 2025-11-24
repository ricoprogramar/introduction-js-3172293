// Objetos en JS

// Aquí tenemos tres variables
const productName = "Sensor de humedad";
const price = 300;
const available = true;

// Este es un objeto llamado product almacena las tres variables en una sola
const product = {
    productName : "Sensor de humedad",
    price : 300,
    available : true,
}

console.log(product);
console.log(typeof product);

console.log(typeof productName);
console.log(typeof price);
console.log(typeof available);

// Para acceder a las diferentes propiedades de un objeto lo hacemos de la siguiente manera:

console.log("El nombre del producto es: " + product.productName);
console.log("El precio del producto es: " + product.price);
console.log("El producto está disponible?: " + product.available);

// Otra forma de acceder a las propiedades de un objeto
console.log(product['price']);

// Agregar propiedades al objeto
product.image = 'Miguel.jpg';

// Eliminar propiedades de un objeto
delete product.price;

console.log(product);