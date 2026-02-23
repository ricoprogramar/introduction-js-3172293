//=======👩‍💻 What did ES6 bring? 👩‍💻=======
//Classes: clearer syntax for objects.
//Promises: management of asynchronicity.
//Modules: import and export.

/**
 * Fetch API: Es una función JS que permite hace peticiones HTTP, incluyendo GET, POST, PUT, DELETE, etc. Es una API moderna.
 * 
 */

function getEmployees(){
    // fetch('Aquí se copia la URL,  https://ricoprogramar.com/');
    // Aunque para este caso estamos ahciendo una petición a un archivo local
    // fetch("/data/employees.json");

    const file = "/data/employees.json";

    fetch(file)
    // Obtenemos los datos
    .then(result => {
        return result.json();
    })

    // Este then es para acceder a los datos
    .then( data => {

        const { employees} = data;
        
        employees.forEach( employe => {

            console.log(employe.id);
            console.log(employe.user);
            console.log(employe.job
            );

            document.querySelector('.content').textContent += employe.user;

        })
        console.log(employees);
    });


}

getEmployees();
