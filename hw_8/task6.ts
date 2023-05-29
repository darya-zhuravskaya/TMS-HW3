const numbers = [15, 5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
console.log(numbers.some((value: number)=> value % 3 === 0 && value %5 ===0))

const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
console.log(numbers2.some((value: number)=> value % 3 === 0 && value %5 ===0))
