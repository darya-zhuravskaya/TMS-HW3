const arr = [2, 8];
console.log( arr.every((number:number)=>{
    let digits = Math.pow(number,2).toString().split("").map((value)=> Number(value));
    let sum = digits.reduce((prevValue, curValue)=> prevValue + curValue);
    return sum %2 === 0
}))
