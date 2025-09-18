// Desestructuración de objetos

const product = {
    productName : "Sensor de humedad",
    price : 300,
    available : true,
}

// Aquí un ejemplo de desestructuración de objetos
const productPrice  = product.price;
// const productName  = product.productName;


console.log(productPrice);
console.log(product.productName);


// Para que sirve el Destructuring? Sirve para extraer los valores de un objeto.



const {price, available, productName} = product;

console.log(price, available, productName);

