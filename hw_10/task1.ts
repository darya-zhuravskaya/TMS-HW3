class Car {
    protected carName: string;
    protected engineType: string;
    constructor(carName: string, engineType: string){
        this.carName = carName;
        this.engineType = engineType;
    }
}

class SportCar extends Car{
    maxSpeed: number;
    carCost: number;
    constructor(carName: string, engineType: string, maxSpeed:number, carCost:number){
        super (carName, engineType)
        this.maxSpeed = maxSpeed;
        this.carCost = carCost;
    }

    showInfo(){
        console.log(`This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}.`)
    }
}

class LuxuryCar extends Car{
    maxSpeed: number;
    carCost: number;
    constructor(carName: string, engineType: string, maxSpeed:number, carCost:number){
        super (carName, engineType)
        this.maxSpeed = maxSpeed;
        this.carCost = carCost;
    }

    showInfo(){
        console.log(`This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}.`)
    }
}

const car1 = new SportCar("Subaru BRZ", "dizel", 240, 40000);
car1.showInfo()

const car2 = new LuxuryCar("Jaguar XJ", "petrol", 220, 50000);
car2.showInfo()


