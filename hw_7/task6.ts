const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

let i = 0;
while(i < oddNumbers.length){
    evenNumbers.push(oddNumbers[i]);
    i++
}
console.log(evenNumbers);
console.log(evenNumbers.indexOf(8))