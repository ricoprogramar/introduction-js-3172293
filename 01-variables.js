// alert("Estoy en hello world");
// Convenciones para nombrar variables

// CamelCase
// UpperCamelCase   => Se usa para nombrar las clases en JS
// lowerCamelCase   => Se usa para nombrar las variables en JS
// SCREAMING_SNAKE_CASE => Se usa para nombra las variables constantes
// caja-kebab   => Se usa para nombrar archivos multimedia en Js

// snake_case   => Generalmente usado para nombrar variables en el lenguaje Phyton

// Caja-De-Tren => Variante del kebab-case

// Ya NO se usa var para declarar las variables, actualmente se usa let
// En JS No es obligatorio indicar el tipo de variable
// JS se puede o NO usar el punto y coma al final de una sentencia.

var product = 'sensor-1';
var product2 = "sensor-2";



// No se puede iniciar una variable con un guión medio
// var -sensor = "sensor-3";

// No se puede iniciar una variable con número
// var 1sensor = "sensor-4";

var _sensor = "sensor-5";

// Si está permitido iniciar una variable con guión al piso


// Crear una variable de las tre formas distintas

// var sensor10 = "Sensor de lluvia";
// const sensor10 = "Sensor de lluvia";
let sensor10 = "Sensor de lluvia";



// Ejemplo con var 
// No me indica error por duplicida de variables
// var sensor11 = "Sensor de humedad";
// var sensor11 = "Sensor de calor";

// console.log(sensor11);

// Let No permite duplicida al declarar variables
// let sensor12 = "Sensor de velocidad";
// let sensor12 = "Sensor de luz";

// No muestra error por falta de inicialización
// console.log(userName);
// var userName = "Edwar";

// console.log(userName);
// let userName = "Edwar";

//  Usando la declaración const No se puede cambiar su valor 
const maxSize = 1024;
maxSize = 2048;

console.log(maxSize);



