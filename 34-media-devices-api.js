// Solicitar permisos para uso de cámara y micrófono

const button = document.querySelector(".button");

button.addEventListener('click', async() => {

    try {

        await navigator.mediaDevices.getUserMedia({video: true, audio: true});

    const permission = await Notification.requestPermission();

    console.log(`Estado del permiso ${permission}`);

        if (permission === 'granted'){
            new Notification("Permisos concedidos",{
                body: "¡Cámara y micrófono activados",
                icon: "/assets/icons/img1.png"    
            });
        }else{
            console.log(`Permiso denegado`);
        }
        }catch(error){
            console.log(`Error al solicitar el permisos`, error);
            alert(`No se consedieron los permisos solicitados`)
        }
});


