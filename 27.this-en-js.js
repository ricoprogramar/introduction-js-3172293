// This es una palabra reservada del sistema, o sea que No se puede crear ni funciones ni variables con este nombre.

const reservation = {
    userName: "Edwar",
    lastName: "Velásquez",
    userAge: 43,
    total: 100000,
    isPaid: false,

// Los objetos puede contener funciones
    information: function () {
        console.log(`El cliente ${this.userName} reservó y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es ${this.isPaid}`);
    }
};
const reservation2 = {
    userName: "Pedro",
    lastName: "Cardona",
    userAge: 24,
    total: 150000,
    isPaid: true,

// Los objetos puede contener funciones
    information: function () {
        console.log(`El cliente ${this.userName} reservó y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es ${this.isPaid}`);
    }
};

const reservation3 = {
    userName: "Juan",
    lastName: "Ramirez",
    userAge: 34,
    total: 50000,
    isPaid: true,

// Los objetos puede contener funciones
    information: () => {
        console.log(`El cliente ${this.userName} reservó y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es ${this.isPaid}`);
    }
};

// This en este contexto hace referencia al objeto sobre el cual se está mandando a llamar.
// Es obligatorio usar la fucnión de esta manera, por esta hacer referencia al objeto que se está usando.
reservation.information();
reservation2.information();

// Si se usa arrow function no es capaz de leer los datos del contexto, dando como resultado undefined
reservation3.information();