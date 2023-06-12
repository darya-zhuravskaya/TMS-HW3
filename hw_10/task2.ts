type Persons = {
    personName: string
}

const person1: Persons = {
    personName: "Ivan"
}

const person2: Persons = {
    personName: "Petr"
}

function getName(): string{
    return `My name is ${this.personName}`
}

console.log(getName.call(person1));
console.log(getName.apply(person2))

