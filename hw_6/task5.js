let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    alexey: 664,
    alexandra: 199
}

let i = 0;
let sum = 0;

for (let salariesKey in salaries){
    sum = sum + salaries[salariesKey];
    i = i + 1
}

console.log(sum)

let midSalaries = sum/i;
console.log(midSalaries)
