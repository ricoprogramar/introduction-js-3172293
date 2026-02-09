// Ejerccio con la clase carro vamos a heredar dos tipos de carros distintos

class FullCar {
    constructor(brand, color, model, id, airConditioned = '', sunroof = ''){
        this.brand = brand;
        this.color = color;
        this.model = model;
        this.id = id;
        this.airConditioned = airConditioned;
        this.sunroof = sunroof;
    }

    run(){
        return`El vehículo ${this.brand} está arrancando y ¿Este carro tiene aire aconcionado?: ${this.airConditioned}`
    }
};

const car1 = new FullCar("Kia", "Gray", "EV9", 1232456, true, true )
console.log(car1.run());
 
class BasicCar extends FullCar{
    constructor(brand, color, model, id, electric){
        super(brand, color, model, id, '', '')
        this.electric = electric;
    };

    run(){
        return`${super.run()}`
    }
};

const car2 = new BasicCar("Ford", "Pink", "Fiesta", 1000009, true);

console.log(car2.run());

class MiddleCar extends FullCar{
    constructor(brand, color, model, id, airConditioned){
        super(brand, color, model, id, airConditioned, '')        
    };

    runMiddleCar(){
        return`El carro de gama media es muy veloz gracias `
    }
};

const car5 = new MiddleCar("Hyundai", "White", "I10", 4567, true);
const car6 = new MiddleCar("Hyundai", "White", "I10", 4567, true);
const car7 = new MiddleCar("Hyundai", "White", "I10", 4567, true);
const car8 = new MiddleCar("Hyundai", "White", "I10", 4567, true);
const car9 = new MiddleCar("Hyundai", "White", "I10", 4567, true);
const car10 = new MiddleCar("Hyundai", "White", "I10", 4567, true);
const car11 = new MiddleCar("Hyundai", "White", "I10", 4567, true);
const car12 = new MiddleCar("Hyundai", "White", "I10", 4567, true);
const car13 = new MiddleCar("Hyundai", "White", "I10", 4567, true);
const car14 = new MiddleCar("Hyundai", "White", "I10", 4567, true);
const car15 = new MiddleCar("Hyundai", "White", "I10", 4567, true);
const car17= new MiddleCar("Hyundai", "White", "I10", 4567, true);
const car18 = new MiddleCar("Hyundai", "White", "I10", 4567, true);
const car19 = new MiddleCar("Hyundai", "White", "I10", 4567, true);
const car20 = new MiddleCar("Hyundai", "White", "I10", 4567, true);
const car21 = new MiddleCar("Hyundai", "White", "I10", 4567, true);

console.log(car5.runMiddleCar());
console.log(car6.runMiddleCar());
console.log(car7.runMiddleCar());
console.log(car8.runMiddleCar());