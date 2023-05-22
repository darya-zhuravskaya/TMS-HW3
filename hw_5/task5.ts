function getSum1(a: number, b: number): number {
    if (a == b){
        return a;
    }

    let sum = 0;
    if(a <= b){
         while (a <= b) {
            sum = sum + a;
            a = a + 1;
        } 
    } else {
      while (a >= b) {
            sum = sum + a;
            a = a - 1;
         } 
    }
    return sum; 
}
console.log(getSum1(-1, 2));
console.log(getSum1(5, 2));
