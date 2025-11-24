// More methodes for arrays
// Este arreglo se creo usando el contructor
const months = new Array('May', 'January', 'July', 'June');

// Este No tiene constructor
const shoppingCart = [
    {productName: 'Smart TV 60"', price: 900},
    {productName: 'Smart TV 50"', price: 700},
    {productName: 'Tablet', price: 500},
    {productName: 'Sound-bar', price: 900},
    {productName: 'Google assistand', price: 600},
    {productName: 'Sound-bar', price: 400},
    {productName: 'Play station', price: 800},
    {productName: 'Wii', price: 450},
    {productName: 'Mouse', price: 50},
]

// Recorrer el arreglo con un forEach para que muestre todos los elementos
// En este caso months es un parámetro
months.forEach(function(month){
    console.log(month);
});

// Verificar si un mes existe con forEach
months.forEach(function(month1){
    if (month1 == 'May') {
        console.log('The month of may exist in the array');
    }else{
        console.log("Doesn't exist");
    }
});

// Buscar en un arreglo si algo existe, si existe devuelve true si no un false.
const result = months.includes('June');
console.log(result);

// ===========================================================

// En JS includes No funciona bien con los objetos
const result2 = shoppingCart.includes('Tablet');
console.log(result2);

const num = 5 == 5;
console.log('Igualación doble', num); 

// Con igualación doble solo compara el valor por eso en la consola tenemos un true.
const num2 = 5 == '5';
console.log('Igualación doble', num2); 

// Con igualación triple verifica si es del mismo valor y tipo.
const num3 = 5 === '5';
console.log('Igualación triple', num3); 

// ===============================================
// En conclusión para un arreglo plano se usa includes y para un arreglo de objetos se usa some.
// const result5 = shoppingCart.some(function(product){
    //     return product.productName === 'Mouse'
    //  })
    
    //  console.log(result5);
    
    // Hace lo mismo que el código anterior pero más corto con Arrow Function
    let result5 = shoppingCart.some(product => product.productName === "Play station")
    console.log(result5);
    
// ===============================================

// Método reduce
// Sumar todos los precios del carrito de compras
result5 = shoppingCart.reduce(function(total, product){
    return total + product.price
}, 0)

console.log(result5);

// Lo mismo pero con función flecha
result5 = shoppingCart.reduce((total, product) => total + product.price, 0)
console.log(result5);

// ===============================================
// Filtrar los valores menores que 700
result5 = shoppingCart.filter(function(product){
    return product.price < 700
});

console.log(result5);


// Flitrar los del mismo producto
result5 = shoppingCart.filter(function(product){
    return product.productName === 'Sound-bar'
});

console.log(result5);

// Lo mismo pero con Arrow Function
result5 = shoppingCart.filter(product => product.productName === 'Sound-bar')

console.log(result5);

// Todos excepto un tipo
result5 = shoppingCart.filter(function(product){
    return product.productName !== 'Sound-bar'
});

console.log(result5);