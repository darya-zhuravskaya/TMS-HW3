class Animal{
    name: string;
    static animalType: string = "tiger";

    constructor(name:string){
        this.name = name;
    }
    showAnimal(){
        return `This is a ${Animal.animalType}. It's name is ${this.name}`
    }
}
const animal = new Animal("Tima");
console.log(animal.showAnimal())