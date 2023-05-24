function triangle (a: number, b: number, c: number): boolean {
   return (a + b > c) && (a + c > b) && (c + b > a)
}
console.log(triangle(10,2,2))