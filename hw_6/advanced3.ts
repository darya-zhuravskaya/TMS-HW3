type CAT = {
    name: string,
    age: number
}

const cat: CAT = {
    name: 'Енчик',
    age: 3,
 }

 const cat2 = JSON.parse(JSON.stringify(cat));
 const cat3 = Object.assign({}, cat);

 cat.age = 5;

 console.log(cat);
 console.log(cat2);
 console.log(cat3);