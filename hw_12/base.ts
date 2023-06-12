export class Car {
    carName: string;
    engineType: string;
    constructor(carName: string, engineType: string){
        this.carName = carName;
        this.engineType = engineType;
    }
    
    set updateName(carName: string){
        if( carName == ""){
            throw new Error (`Name is empty`)
        }
        this.carName = carName
    }
}



   
