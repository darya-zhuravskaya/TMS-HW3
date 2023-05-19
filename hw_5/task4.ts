function getSumNumbers(number:number):number{
    let sum = 0;
    let digit: number;
    while (number > 0) {
        digit = number % 10;
        sum = sum + digit;
        number = Math.trunc(number / 10);
    }
    return sum;
}

console.log(getSumNumbers(2021))