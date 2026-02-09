// Prototype
// El prototipo es como un molde o modelo base
// Para este ejemplo, voy a guardar las funciones comunes en un lugar llamado prototype, así los objetos del mismo tipo pueden heredaralas.

function Car(brand, model, color){
    this.brand = brand;
    this.model = model;
    this.color = color;
}

const car1 = new Car("Suzuki", "Frons", "Yellow")
const car2 = new Car("Honda", "Mars", "Gray")


console.log(car1);
console.log(car2);

// Se define la fucnión comun para todos los vehículos
Car.prototype.stop = function(){
    console.log(`El carro ${this.brand} está parando`);
};

car1.stop(); 
car2.stop(); 