const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
const negative: number[] = [];
const positive: number[] = [];

for (let number of mixedNumbers){
    if (number <=0){
        negative.push(number);
    } else{
        positive.push(number)
    }
}
console.log(positive);
console.log(negative);