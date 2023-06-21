import { Subaru } from "./Subaru";
import { BMW } from "./BMW";


let car1 = new Subaru("Subaru BRZ", "dizel", 0, 40000);
try {
    car1.getMaxSpeed()
    car1.showInfo()
} catch (error: any){
    console.log(error.message)
}


const car2 = new BMW("BMW X5", "petrol", 220, 50000)

try {
    car2.updateName = "";
    console.log(car2.carName);
} catch(error: any) {
    console.log(error.message)
}