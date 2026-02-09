// Arrow function
// En JS es una forma más corta de escribir funciones usando la sintaxis () =>

// Sintaxis más breve, ideal para funciones pequeñas
// NO tiene su propio this, hereda el this del contexto donde se define.

// Función sin parámetros
const add = function(){
    console.log(16 + 3);
}

add();

// Función con parámetros
const add2 = function(num1, num2){
    console.log(num1 + num2);
}

add2(4, 8);

// Las llaves son opcionales cuando después de la flecha solo tengo una senstencia
const add3 = (num3, num4) => console.log(num3 + num4);
add3(6, 9);

//======= Conmigo se Siente Rico Programar 🤣 =======

// Otro ejemplo
// const learn = (technology) => {
//     console.log(`Aprendiendo ${technology}`);
// }

// learn('JavaScript');
const learn = technology => console.log(`Aprendiendo ${technology}`);


learn('JavaScript');

//==================================================

const months = ['May', 'January', 'July', 'June', 'December', 'November', 'February'];

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

// months.forEach( function(month){
//     if(month == 'November' || month == 'December'){
//         console.log('Se verificó en el arreglo y el mes Si existe');
//     }else{
//         console.log('El mes No existe');
//     }   
// })

months.forEach( month => {
    if(month == 'November' || month == 'December'){
        console.log('Se verificó en el arreglo y el mes Si existe');
    }else{
        console.log('El mes No existe');
    }   
})

//======= With Me Feels Rich Programming ✅ =======

// const result = shoppingCart.some(function(product){
//     return product.price === 800;
// })

// console.log(result);

const result = shoppingCart.some(product => product.price === 800);

console.log(result);

//=======🚀 What did ES6 bring? 🚀=======
//let and const: new ways of declaring variables.
//Arrow functions: () => {}.

// const result3 = shoppingCart.reduce(function( total, product){
//     return total + product.price;
// }, 0)
const result3 = shoppingCart.reduce(( total, product) => total + product.price, 0)

console.log(result3);

//======= ¿Qué hace una variable en una fiesta? =======
// Declararse ... 🤣🤣🤣

const result6 = shoppingCart.filter(function(product){
    return product.price < 600;
})

console.log(result6);

//==================================================

// Convertir a arrow funtion
// function greet(userName){
//     console.log(`Hello ${userName}`);
// }


const greet2 = userName => `Hello ${userName}`
console.log(greet2("Edwar Velásquez"));
//==================================================

// const boost = num => num * num;

const boost2 = num => Math.pow(num, 2);
console.log(boost2(100));

//==================================================
//======= ¿Qué hace un bucle for en terapia? =======
// 🤣🤣🤣 Trata de cerrar ciclos. ...

// Arrow function con retorno explícito

// Se usa cuando el cuerpo de una función tiene llaves{}

const add10 = (num4, num5) => {
    const result7 = num4 + num5;
    return result7;
}

console.log(add10(15, 7));

//==================================================

// Retorno implícito, cuando la función NO tiene llaves realiza el retorno implicitamente.
// const add11 = (num6, num7) => num6 + num7;
const add11 = (num6, num7) => {console.log(num6 + num7); num6 + num7};

console.log(add11(4, 6));
