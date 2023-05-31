const person = { 
name: "Петр",
surname: "Петров",
age: "20 лет"};
let {name = "Аноним", surname = "Анонимович", age = "? лет"} = person;
console.log(name);
console.log(surname);
console.log(age)

const person2 = { 
    name1: "Петр",
    surname1: undefined,
    age1: "20 лет"};
 let {name1 = "Аноним", surname1 = "Анонимович", age1 = "? лет"} = person2;
    
console.log(name1);
console.log(surname1);
console.log(age1)