function getSum(a:number):number {
    let sum = 0;
    let b = 0;
    
    while(b < a){
        b = b + 1
        sum = sum + b
    } 
    return sum;
}

console.log(getSum(100))