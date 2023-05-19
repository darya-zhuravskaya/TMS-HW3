function calculateInterest (loan: number, rate : number, age: number): number{
    return loan  * rate/100 * age
}
console.log(calculateInterest(5000, 17, 5))

function calculateFixed (loan: number): number{
    return calculateInterest(loan, 17, 5)
}
console.log(calculateFixed(5000))