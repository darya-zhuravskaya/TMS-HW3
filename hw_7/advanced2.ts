const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

let i = 0;
let sum = 0;
for (let numbers of matrix){
    for (let el of numbers){
        sum += el;
        i++
    }
}
let average = sum/i;
console.log(average)