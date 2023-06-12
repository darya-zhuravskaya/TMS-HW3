import {Car} from "./base"
 export class BMW extends Car{
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
