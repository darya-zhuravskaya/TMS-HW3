let size = 5 + Math.floor(Math.random() * 100);
let arr: number[] = [];
let i = 0;
let arr2: number[] =[];
while( i < size){
    arr.push(Math.floor(Math.random() * 50));
    i++
}
console.log(arr);
for (let el of arr){
    arr2.push(Math.pow(el,3))
}
console.log(arr2)