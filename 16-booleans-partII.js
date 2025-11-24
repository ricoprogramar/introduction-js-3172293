// Los booleanos tienen dos valores falso y verdadero

let age = 12;
// Mayor que
let isOlderThan  = age >= 18;

console.log(isOlderThan);

// ==================================
let userName = "Edwar";

let haveName = userName !== "";

console.log(haveName);
// ==================================
// En JS 0 es falsy, pero cualquier número distinto de cero es truthy.
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(10));
console.log(Boolean(-5));
console.log(typeof Boolean(-5));

// ==================================
// En JS null or undefined siempre se convierten en false.
let nullValue = null;
let undefinedValue;

console.log(Boolean(nullValue));
console.log(Boolean(undefinedValue));
// ==================================
// Los booleanos son la base de las decisiones en los programas.
let haveAccess = false;

if (haveAccess) {
    console.log('Welcome to system');    
}else{
    console.log('Denied access');
}