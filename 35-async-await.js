/**
 * Async await
 * Son características  de JS que facilitan trabajar con funciones asíncronas, permitiendo escribir código que se perece más al síncrono y más fácil de leer
 * 
 * Antes del 2015 se usaba .then() y catch(), pero ahora se usa async y await, que internamente siguen usando promesas.
 * 
 * async: Declara una función asincrónica, que siempre devuelve una promesa
 * await: Pausa la ejecución de la función async hasta que una promesa se resuelve o rechaza, devolviendo como resultado una promesa.
 * 
 */

//==================================================

// Ejemplo con una función que se cumple

function downloadNewClients(){

    return new Promise(resolve => {
        console.log("Descargando clientes... espere por favor.");
        
        
        setTimeout(() => {
            resolve("Los clientes fueron descargados...")
        }, 6000);
    })
};

// Función para descargar últimos pedidos
function downloadLastOrders(){

    return new Promise(resolve => {
        console.log("Descargando últimas ordenes... espere por favor.");
        
        
        setTimeout(() => {
            resolve("Las últimas ordenes fueron descargadas...")
        }, 8000);
    })
};

// async function app() {
//     try {
//         const result = await downloadNewClients();

//         // Código bloqueadeo hasta que se resuelva la promesa
//         console.log("Código que SI se bloquea");
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// app();
// console.log("Código que No se bloquea");


async function app() {
    try {
        // const clients = await downloadNewClients();
        // const lastOrders = await downloadLastOrders();

        // Código bloqueadeo hasta que se resuelva la promesa
        // console.log("Código que SI se bloquea");
        // console.log(clients);
        // console.log(lastOrders);

        // Ahora se va a intentar una forma más eficiente sin que dependa una de la otra

        const result = await Promise.all([downloadNewClients(), downloadLastOrders()])

        // console.log("Código que SI se bloquea");
        console.log(result[0]);
        console.log(result[1]);

    } catch (error) {
        console.log(error);
    }
}

app();
console.log("Código que No se bloquea");