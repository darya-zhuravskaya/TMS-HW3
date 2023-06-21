import {Car} from "./base"
export class Subaru extends Car{
    maxSpeed: number;
    carCost: number;
    constructor(carName: string, engineType: string, maxSpeed:number, carCost:number){
        super (carName, engineType)
        this.maxSpeed = maxSpeed;
        this.carCost = carCost;
    }

    getMaxSpeed(){
        if (this.maxSpeed <= 0){
            throw new Error ( `Max speed can't be ${this.maxSpeed} `)
        }
        else {
            console.log( `Max speed equal to ${this.maxSpeed}`)
        }
    }

    showInfo(){
        console.log(`This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}.`)
    }
}


