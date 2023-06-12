const car1 = {
    doorsNumber: 2,
    localSteeringWheel: "left-hand"
}

const car2 = {
    doorsNumber: 4,
    localSteeringWheel: "right-hand"
}


function getInfo(): string {
    return `This car has ${this.doorsNumber} doors and this is ${this.localSteeringWheel} drive car`
}

console.log(getInfo.call(car1));

const newGetInfo = getInfo.bind(car2)
console.log(newGetInfo())