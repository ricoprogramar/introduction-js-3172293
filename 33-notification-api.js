// Notificacion API
//  La notifications api es una interfaz del navegador que permite a las aplicaciones web mostrar notificaciones nativas del sistema operativo, incluso cuando la pestaña No está activa.

const button = document.querySelector(".button");

button.addEventListener('click', () => {
    console.log("You made click");
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            new Notification("Esta es una notificación de Edwar", {
                body : "Aprenidendo JS en el SENA"
            });        
        }else{
            console.log("Permiso denegado");
        }
    });
});